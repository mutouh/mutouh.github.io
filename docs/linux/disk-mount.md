---
title: 磁盘挂载
date: 2023-08-19
tags: [Linux]
categories: []
---
# 磁盘挂载
挂载一块独立磁盘作为数据盘，避免使用系统磁盘空间。比如docker修改存储位置（data-root），给其挂载一块独立磁盘。网上清一色的步骤，都会给磁盘分区，其实这种情况没必要分区。
```shell
# 列出块设备信息，假如新挂载的磁盘为/dev/sdb
lsblk

# 格式化（xfs格式）
mkfs.xfs /dev/sdb

# 挂载
mkdir /data && mount /dev/sdb /data

# 查看
df -Th

# 查看块设备ID，并开机自动挂载
blkid /dev/sdb
echo 'UUID=171768eb-0e8e-4344-a856-4bbec038550a /data xfs defaults 0 0' >> /etc/fstab
```