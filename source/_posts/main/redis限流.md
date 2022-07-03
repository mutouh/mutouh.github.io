---
title: 用redis进行接口限流
tag: redis
---
## 需求

某个api限定10秒内只允许20个请求

## 基于Redis的setnx

setnx = set if not exist

```bash
redis> SETNX mykey "Hello"
(integer) 1
redis> SETNX mykey "World"
(integer) 0
redis> GET mykey
"Hello"
redis> 
```

方案：请求到来时，通过setnx设置一个类似limit-key-xxx的key，并设置过期时间为10秒。下次请求到来时，先查询指定前缀的key的数量，若已存在20个则请求不放行。
优点：key数量不会无限制增加
缺点：

## 基于Redis的zset结构

```bash
redis> zadd limit-key timestamp uuid
(integer) 1
redis>
```

方案：每一次请求到来时，都往指定的sorted set数据结构的key里添加一条记录，score为时间戳，value为uuid。下一个请求到来时，先通过zrangeByScore查询开始时间（当前时间-20s）-结束时间（当前时间）范围内的数据记录数量，如果超过20条则请求不放行。
优点：以滑动窗口的形式，可以统计任意N秒内的M个请求；value为uuid可以作为其他统计表的id实现统计效果；
缺点：因为没有锁的机制，高并发的时候不是真正意义上的N秒M个请求；zset数据量会越来越大，需要采取一定措施，比如转存或删除；

## 基于Redis的令牌桶算法

思想：令牌桶算法，预设M个令牌，以N秒的输入速率往桶里增加令牌，桶里的令牌取完则超出限制。

```bash
redis> LPUSH limit-key "1" "2" ... "20"
(integer) 20
redis> 
```

方案：通过定时任务N秒往list数据结构的key中增加元素，使得元素数量保持M个，每一个请求到来时都先从此list中取一个元素，取不到则请求不放行。
优点：list数据量不会无限制增加；能够控制N秒内必定只有M个请求；
缺点：没有滑动窗口的机制；
