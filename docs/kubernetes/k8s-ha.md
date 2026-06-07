---
title: k8s 高可用
date: 2023-07-29
tags: [Kubernetes]
categories: [技术向]
---
# k8s高可用
keepalived提供VIP，haproxy提供负载均衡。

## keepalived
```shell
# 安装
yum install keepalived

# 配置
cat > /etc/keepalived/keepalived.conf <<EOF
global_defs {
  router_id LVS_DEVEL
  vrrp_skip_check_adv_addr
  vrrp_garp_interval 0
  vrrp_gna_interval 0
}

vrrp_script chk_haproxy {
  # haproxy 检测，通过端口检测更通用
  # script "killall -0 haproxy" # 虚机可以使用这个，如果haproxy是容器部署无法使用
  script "/bin/bash -c 'if [[ $(ss -nlp | grep 16443) ]]; then exit 0; else exit 1; fi'"
  # script执行周期
  interval 2
  # 权重，script检测成功则priority+11
  weight 11
  # script成功2次则视为成功
  rise 2
  # script失败2次则视为失败
  fall 2
}

vrrp_instance haproxy-vip {
  # 正常一个MASTER其他BACKUP。特别的，MASTER上线后总是抢占。这里全部BACKUP通过priority竞争
  state BACKUP
  # 优先级，竞争MASTER的唯一条件，注意不要一样
  priority 100
  interface eth0
  virtual_router_id 51
  advert_int 1
  authentication {
    auth_type PASS
    # Only the first eight (8) characters are used.
    auth_pass Admin123
  }

  virtual_ipaddress {
    # The VIP address
    10.10.1.108
  }

  track_script {
    chk_haproxy
  }
}
EOF

# 启动
systemctl enable --now keepalived
```

## haproxy配置

```shell
# 安装
yum install haproxy

# 配置
cat > /etc/haproxy/haproxy.cfg <<EOF
#---------------------------------------------------------------------
# Global settings
#---------------------------------------------------------------------
global
    log /dev/log local0
    log /dev/log local1 notice
    daemon

#---------------------------------------------------------------------
# common defaults that all the 'listen' and 'backend' sections will
# use if not designated in their block
#---------------------------------------------------------------------
defaults
    mode                    http
    log                     global
    option                  httplog
    option                  dontlognull
    option http-server-close
    option forwardfor       except 127.0.0.0/8
    option                  redispatch
    retries                 1
    timeout http-request    10s
    timeout queue           20s
    timeout connect         5s
    timeout client          20s
    timeout server          20s
    timeout http-keep-alive 10s
    timeout check           10s

#---------------------------------------------------------------------
# apiserver frontend which proxys to the masters
#---------------------------------------------------------------------
frontend apiserver
    bind *:16443
    mode tcp
    option tcplog
    default_backend apiserver

#---------------------------------------------------------------------
# round robin balancing for apiserver
#---------------------------------------------------------------------
backend apiserver
    option httpchk GET /healthz
    http-check expect status 200
    mode tcp
    option ssl-hello-chk
    balance     roundrobin
        server master1 10.10.1.83:6443 check
        server master2 10.10.1.84:6443 check
        server master3 10.10.1.85:6443 check
EOF

# 启动
systemctl enable --now keepalived
```

## 遗留问题
- 为什么需要keepalived+haproxy实现高可用？只用keepalived能否实现？keepalived自带的LVS支持虚拟服务器
- haproxy负载均衡到k8s的三个master，k8s是如何处理请求的

## 参考链接
(基于ARM的k8s高可用安装)[https://blog.51cto.com/u_13950323/3336370]
Kubernetes核心架构与高可用集群详解（含100%部署成功的方案）https://zhuanlan.zhihu.com/p/444114515
Kubernetes 高可用集群落地二三事 https://developer.aliyun.com/article/853054#slide-8
一次 Keepalived 高可用的事故，让我重学了一遍它！https://z.itpub.net/article/detail/6D761E6F9B599D9155F2B75552815523

##
```shell
# 清除arp缓存
arp -n|awk '/^[1-9]/{system("arp -d "$1)}'

# 查看IP
hostname -I
ip a|grep eth0

# 查看keepalived集群广播，默认广播地址vrrp_mcast_group4 224.0.0.18
tcpdump -i eth0 -nn host 224.0.0.18
```