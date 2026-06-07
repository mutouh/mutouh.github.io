---
title: Linux命令备忘录
date: 2023-07-29
tags: [NTP, 时间同步]
categories: []
---
# Linux命令备忘录
## 机器信息
- 查看CPU信息
    lscpu
    cat /proc/cpuinfo

## rpm包管理器
```shell
# 安装
# -i：install
# -v：verbose
# -h：打印#（hash），即显示进度
rpm -ivh xxx.rpm

# 查询包内包含哪些文件
# -q：查询
# -l：列出所有文件
# -p：指定包名
rpm -qlp xxx.rpm
```
