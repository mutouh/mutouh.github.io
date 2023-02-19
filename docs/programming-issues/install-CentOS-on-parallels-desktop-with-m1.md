---
title: 在m1上使用Parallels Desktop安装CentOS
date: 2022-07-06
tags: [m1, Parallels Desktop, CentOS]
---
# 在m1上使用Parallels Desktop安装CentOS
## 无法安装

在m1上用PD安装CentOS7或者8会一直卡在引导安装的界面，无法进行下去，参考这两篇文章《[在m1芯片的MacBook上安装centos8][1]》、《[在m1芯片的MacBook上安装centos7][2]》。
所以这里有两种解决办法：

- 使用大佬修改完的ISO镜像安装
- 安装CentOS9。搜索问题的过程中了解到已经发布的CentOS9可以正常安装，但我没试过。

然而这两种方案我都没选，感觉9太新了，7又被百度云速度劝退了。

## 第三种方案

第三种方案就是选择其他Linux发行版，这里选择了[Anolis OS 8][3]。考虑到Anolis OS是包含CentOS内核的，官方描述100% 兼容 CentOS 软件生态，那么我可以把他当作是一个CentOS，况且还经过阿里云落地验证。

## 安装小问题

下载完镜像用PD安装很顺利，除了一个小问题，上面文章里也提到了就是没有图形界面进行安装设置。大佬给的结论是PD的问题，第二篇文章里也讲解了怎么进行文字安装，也就是命令行交互方式进行安装设置。实在接受不了，大佬也介绍了如何进行图形安装。我这里直接文字安装了，照着做就行不难。

[1]: https://blog.csdn.net/zphj1987/article/details/119173539
[2]: https://blog.csdn.net/zphj1987/article/details/119808155
[3]: https://developer.aliyun.com/mirror/anolis?spm=a2c6h.13651102.0.0.7f771b11NG7I2r
