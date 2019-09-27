---
title: 在服务器上安装Docker
date: 2019-04-20 09:33:03
tags: [Docker]
categories: 学到了
comments: true
---

> ## 故事背景

老大丢了一台服务器给我，并留下了一句话：今天把Docker给我装上！否则别下班了。

<!-- more -->

> ## 怎么办？

* 桌面版

docker提供了Mac和Windows的桌面版，我个人把他理解成一个应用，安装即可使用。需要注意的是Docker Desktop for Windows有一些系统限制，可以参考官方说明: [*docker-for-windows安装*](https://docs.docker.com/docker-for-windows/install/)。在此页面的右侧导航栏你同时可以找到Mac的安装途径。

* Linux上安装

在Linux服务器上安装docker，同样可以参考官网的说明文档 [*linux安装*](https://docs.docker.com/install/linux/docker-ce/centos/)。在此文档中提供了诸如CentOS，Debian，Ubuntu等主流发行版的安装方法，官方虽然分开讲述但流程大同小异。
就安装的方式而言，官方介绍了三种，并说明了它们的应用场景，分别是:

0. --卸载旧版本的docker

1. 选择一种安装方式

    1. 1 使用仓库镜像安装（好我就选这种方式了）
    - 更新包管理工具，并安装相关工具包;
    - 添加提供docker镜像的仓库源;
    - 安装docker;
    - 启动docker;
    - 使用docker拉取并运行hello-world镜像，通过此demo入门docker。

    1. 2 下载压缩包手动安装（全都是手动的，太麻烦了）
    - 通过官网提供地址手动下载docker的RPM包;
    - 使用RPM工具解压安装;
    - 启动docker;
    - 使用docker拉取并运行hello-world镜像，通过此demo入门docker。

    1. 3 自动化脚本安装（自动化的，好厉害！可是我不会啊，而且我只装一台机器）
    - 获取脚本;
    - 使用脚本。

2. --关于卸载的相关说明