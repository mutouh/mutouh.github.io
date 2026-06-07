---
title: DATETIME与TIMESTAMP的一些区别与问题
date: 2019-09-26
tags: [Mysql]
categories: [杂项]
---
# DATETIME与TIMESTAMP的一些区别与问题

原文地址：
[*DATETIME与TIMESTAMP的一些区别与问题*](https://mp.weixin.qq.com/s/n-3NzRVwfjxv8gU7Q9Lhug)

今天遇到一个问题，明明数据有更新，update_time字段却还停留在创建数据的时候。
按常理来说这个字段应该是自动更新的才对。
<!-- more -->
查了一下表结构，

```
`update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
```

发现update_time字段的类型是datetime

由此牵扯出两个问题，（1）timestamp与datetime的区别；（2）CURRENT_TIMESTAMP为什么能用于datetime类型

timestamp与datetime的区别

a）DATETIME的默认值为null；TIMESTAMP的字段默认不为空（not null）,默认值为当前时间（CURRENT_TIMESTAMP），如果不做特殊处理，并且update语句中没有指定该列的更新值，则默认更新为当前时间。
这个区别就解释了为什么平时我们都不用可以管这个字段就能自动更新了，因为多数时候用的是timestamp；而此处用的是datetime，不会有自动更新当前时间的机制，所以需要在上层手动更新该字段

b）DATETIME使用8字节的存储空间，TIMESTAMP的存储空间为4字节。因此，TIMESTAMP比DATETIME的空间利用率更高。
这个区别解释了为啥timestamp类型用的多

c）两者的存储方式不一样 ，对于TIMESTAMP，它把客户端插入的时间从当前时区转化为UTC（世界标准时间）进行存储。查询时，将其又转化为客户端当前时区进行返回。而对于DATETIME，不做任何改变，基本上是原样输入和输出。

d）两者所能存储的时间范围不一样 

timestamp所能存储的时间范围为：’1970-01-01 00:00:01.000000’ 到 ‘2038-01-19 03:14:07.999999’；

datetime所能存储的时间范围为：’1000-01-01 00:00:00.000000’ 到 ‘9999-12-31 23:59:59.999999’。

CURRENT_TIMESTAMP为什么能用于datetime类型
在mysql 5.6之前的版本，CURRENT_TIMESTAMP只能用于timestamp类型，
5.6版本之后，CURRENT_TIMESTAMP也能用于datetime类型了