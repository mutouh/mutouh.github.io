---
title: 限流算法
date: 2022-10-28
tags: [限流, 算法]
---
# 限流算法
## 导读

Sentinel Go-毫秒级统计数据结构揭秘
https://mp.weixin.qq.com/s/W23xOOIFYhqpEwHLbUyn5Q

通过导读文章分享内容，顺势总结一下常用限流算法。

## 固定时间窗口
通过原子操作将请求在统计周期内进行累加，然后当请求数大于阈值时进行限流。

优点：实现简单

缺点：流量“突刺现象”和最典型的“边界”问题
## 滑动时间窗口
将一个统计周期划分为多个时间窗口，窗口越小精度越高，随之并发性能越低。

优点：解决了固定时间窗口带来的“边界”问题

缺点：复杂度上升

## 令牌桶算法
以恒定速率往桶里增加令牌，请求需要先获取令牌才能放行。

## 漏桶算法
请求以恒定速率放行，请求量过大会溢出。

缺点：无法应对瞬时合理流量，所有流量都需要排队