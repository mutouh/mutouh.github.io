---
title: k8s 部署
date: 2023-07-29
tags: [Kubernetes]
categories: [技术向]
---
# k8s 部署
## 前提
### 版本规划
- centos7.9
- docker-ce 20.10.x
- k8s 1.23.x

### 机器规划
10.10.1.83 master01
10.10.1.84 worker01
10.10.1.85 worker02

## 部署k8s集群
通过以下脚本对机器进行初始化操作，并安装docker及k8s相关软件。

```shell
#!/usr/bin/env bash
# usage: initial kubernetes nodes environments.
set -ev


# ---------------- this block may need to modified ----------------
# define soft version
DOCKER_VERSION=20.10.24
# https://kubernetes.io/zh-cn/releases/patch-releases/
K8S_VERSION=1.23.17
HOSTNAME=master1

# domaininfo lookup
cat <<-EOF >> /etc/hosts
10.10.1.83 master1
10.10.1.84 node1
10.10.1.85 node2
EOF
hostnamectl set-hostname ${HOSTNAME}

# ssh
# ssh-copy-id root@node1
# ssh-copy-id root@node2
# ---------------- this block may need to modified ----------------

# machines's firewalld NetWorkManager offline.
systemctl disable --now firewalld NetworkManager
sed -ri "s/^SELINUX=enforcing/SELINUX=disabled/" /etc/selinux/config

# machines's swap partment offline.
swapoff -a && sysctl -w vm.swappiness=0
sed -ri '/^[^#]*swap/s@^@#@' /etc/fstab

# initial source
cat <<-EOF >>/etc/security/limits.conf
* soft nofile 655360
* hard nofile 131072
* soft nproc 655350
* hard nproc 655350
* soft memlock unlimited
* hard memlock unlimited
EOF

cat <<-EOF >>/etc/modules-load.d/ipvs.conf
ip_vs
ip_vs_lc
ip_vs_wlc
ip_vs_rr
ip_vs_wrr
ip_vs_lblc
ip_vs_lblcr
ip_vs_dh
ip_vs_sh
ip_vs_fo
ip_vs_nq
ip_vs_sed
ip_vs_ftp
ip_vs_sh
nf_conntrack
ip_tables
ip_set
xt_set
ipt_set
ipt_rpfilter
ipt_REJECT
ipip
EOF

cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
br_netfilter
EOF

cat <<-EOF >>/etc/sysctl.d/k8s.conf
net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-ip6tables = 1
fs.may_detach_mounts = 1
vm.overcommit_memory = 1
vm.panic_on_oom = 0
fs.inotify.max_user_watches = 89100
fs.file-max = 52706963
fs.nr_open = 52706963
net.netfilter.nf_conntrack_max = 2310720
net.ipv4.tcp_keepalive_time = 600
net.ipv4.tcp_keepalive_probes = 3
net.ipv4.tcp_keepalive_intvl = 15
net.ipv4.tcp_max_tw_buckets = 36000
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_max_orphans = 327680
net.ipv4.tcp_orphan_retries = 3
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 16384
net.ipv4.ip_conntrack_max = 65536
net.ipv4.tcp_timestamps = 0
net.core.somaxconn = 16384
EOF
sudo sysctl --system

# configure yumrepo
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://mirror.centos.org/centos|baseurl=https://mirrors.ustc.edu.cn/centos|g' \
    -i.bak \
    /etc/yum.repos.d/CentOS-Base.repo

curl -o /etc/yum.repos.d/docker-ce.repo https://mirrors.ustc.edu.cn/docker-ce/linux/centos/docker-ce.repo
sed -i 's#download.docker.com#mirrors.ustc.edu.cn/docker-ce#' /etc/yum.repos.d/docker-ce.repo

cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-\$basearch/
enabled=1
gpgcheck=1
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

yum clean all && yum -y install epel-release

sed -e 's|^metalink=|#metalink=|g' \
    -e 's|^#baseurl=https\?://download.fedoraproject.org/pub/epel/|baseurl=https://mirrors.ustc.edu.cn/epel/|g' \
    -e 's|^#baseurl=https\?://download.example/pub/epel/|baseurl=https://mirrors.ustc.edu.cn/epel/|g' \
    -i.bak \
    /etc/yum.repos.d/epel.repo

yum makecache fast

# install require software
yum -y install bash-completion wget psmisc net-tools telnet yum-utils \
               device-mapper-persistent-data lvm2 ntpdate \
               ipvsadm ipset sysstat conntrack libseccomp

# sync timezone
echo "*/5 * * * *        /usr/sbin/ntpdate -b ntp.aliyun.com" >>/var/spool/cron/root

# install docker
yum install -y docker-ce-${DOCKER_VERSION}
mkdir -p /etc/docker && cat <<-EOF >/etc/docker/daemon.json
{
  "registry-mirrors": ["https://dockerproxy.com"],
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF
systemctl enable --now docker.service

# install k8s
yum -y install kubeadm-${K8S_VERSION} kubelet-${K8S_VERSION} kubectl-${K8S_VERSION}
systemctl enable --now kubelet

# kubeadm reset
# iptables -F && iptables -t nat -F && iptables -t mangle -F && iptables -X
# ipvsadm -C
# rm -rf /root/.kube/*
# rm -rf /etc/kubernetes/*
# rm -rf /opt/cni/bin/*
# rm -rf /etc/cni/net.d/*
# rm -rf /var/lib/etcd/*
```

### 创建集群
使用kubeadm命令初始化第一个master节点后，根据提示操作，继续将其他节点加入集群。

```shell
# 非HA集群，单个master节点
kubeadm init \
--apiserver-advertise-address=10.10.1.83 \
--image-repository registry.aliyuncs.com/google_containers \
--kubernetes-version v1.23.17 \
--service-cidr=10.254.0.0/12 \
--pod-network-cidr=10.244.0.0/16

# 增加其他worker节点
kubeadm join <control-plane-host>:<control-plane-port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>
```

```shell
# HA集群，多个master节点
# --upload-certs 将证书上传到集群（configmap），方便其他master节点加入集群。否则其他master加入集群前需要手动复制证书
kubeadm init \
--control-plane-endpoint=k8svip:16443 \
--upload-certs \
--image-repository registry.aliyuncs.com/google_containers \
--kubernetes-version v1.23.17 \
--service-cidr=10.254.0.0/12 \
--pod-network-cidr=10.244.0.0/16

# 增加其他master节点
# 增加其他worker节点
```

### 部署CNI插件
你必须部署一个基于 Pod 网络插件的容器网络接口 (CNI)，以便你的 Pod 可以相互通信。这里部署calico，并且基于helm方式。

```shell
# 添加helm仓库
helm repo add projectcalico https://docs.tigera.io/calico/charts

# 自定义chart配置
cat > custom-values.yaml <<EOF
installation:
  cni:
    type: Calico
  calicoNetwork:
    nodeAddressAutodetectionV4:
      interface: eth.*
    bgp: Disabled
    ipPools:
    - blockSize: 26
      cidr: 10.244.0.0/16
      encapsulation: VXLANCrossSubnet
      natOutgoing: Enabled
      nodeSelector: all()
EOF

# 安装。因为需要从github下载chart，所以可能安装失败，则手动下载
helm install calico projectcalico/tigera-operator  -f ./custom-values.yaml \
  --version v3.26.1 \
  --namespace tigera-operator --create-namespace
```

## 常用命令
```shell
# 进行k8s集群重装，kubeadm reset后清理上一个集群的内容
iptables -F && iptables -t nat -F && iptables -t mangle -F && iptables -X
ipvsadm -C
rm -rf /root/.kube/*
rm -rf /etc/kubernetes/*
rm -rf /opt/cni/bin/*
rm -rf /etc/cni/net.d/*
rm -rf /var/lib/etcd/*
```

## 附录
centos安装docker https://docs.docker.com/engine/install/centos/
