---
title: Docker 问题记录
date: 2023-06-28
tags: [Docker]
---
# Docker 问题记录
## docker compose 挂载文件，宿主机修改后容器内不同步，需要重启容器同步
当宿主机上的文件只有只读权限，通过vi修改文件是写时复制机制，所以产生的是新文件而不是原来的文件了，才会不同步。挂载目录是没有这个问题的，或者给宿主机的文件写权限也行。
参考：https://blog.csdn.net/weixin_49415186/article/details/123115832