---
title: CentOS集群安装Chrony时间同步
date: 2023-07-29
tags: [NTP, 时间同步]
categories: []
---
# CentOS集群安装Chrony时间同步
Centos7开始都预装了Chrony（ntpd被淘汰），尤其现在使用的都是 CentOS 7.9 及以后的版本了，如果没有则手动安装`yum install -y chrony`。

## 前提
### 机器规划
192.168.1.10 master
192.168.1.11 node1
192.168.1.12 node2

### 所有机器都就绪
- 已经安装了Chrony
- 时区已经正确设置，可以参考的命令`timedatectl set-timezone Asia/Shanghai`

## master节点配置
修改chrony配置文件/etc/chrony.conf，以下只列出需要修改的地方。
```plaintext /etc/chrony.conf
# 从阿里云ntp服务同步
server ntp1.aliyun.com iburst

# 允许其他node机器从master同步
allow 192.168.1.0/24
```
修改完配置重启服务`systemctl restart chronyd.service`

## node节点配置
同样只列出配置文件需要修改的地方。
```plaintext /etc/chrony.conf
# 从阿里云ntp服务同步
server 192.168.1.10 iburst
```
同样修改完重启服务。

## Chrony命令行客户端chronyc
```shell
# 强制同步下系统时钟
chronyc -a makestep

# 查看时间同步源状态
chronyc sourcestats

# 查看时间同步源
chronyc sources -v
```

## 问题记录
### PD虚拟机里安装的Linux在宿主机待机后，恢复时时间停留在待机前且很久也不会同步新时间
默认配置中只有chronyd启动后的前3次会跃进式同步时间，用于时间偏差比较大时快速修正。这里的做法就是取消3次的限制。
[官方文档][1]说仅在启动时且3次的限制是为了避免对某些依赖于时间单调前进的应用产生影响，不清楚是什么样的应用，一般来说时间不准对大部分应用的影响更大。不过正常情况下服务器是一直运行的且很稳定，很难出现时间偏差过大的场景，所以默认设置也是合理考虑。
https://blog.51cto.com/lajifeiwomoshu/5434581

[1]: https://chrony-project.org/doc/4.1/chrony.conf.html#makestep