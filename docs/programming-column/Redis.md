---
title: Redis
date: 2022-08-29
tags: [Redis]
---
# Redis
## 数据结构
### SDS 简单动态字符串

没有直接使用C语言的字符串，而是对其进行了封装。
``` C
struct sdshdr {
    // buf数组已使用长度，即字符串长度
    int len;
    // buf数组未使用长度
    int free;
    char buf[];
}
```

- 避免C字符串缓存区溢出
- 保留了C字符串以空字符串结尾的惯例，便于复用C字符串函数库函数
- 使用len、free可以避免遍历字符串计算长度，复杂度从O(N)降低到O(1)
- 实现空间预分配和惰性空间释放
    - 空间预分配：若修改字符串后，len小于1M，则预分配与len同等大小的free空间；若修改字符串后，len大于等于1M，则预分配1M free空间
    - 惰性空间释放：缩短字符串时，并不立刻执行内存重分配来回收多出来的字节，而是记录到free属性。什么时候真正释放？
- 二进制安全

#### 总结对比
C字符串|SDS
:---|:---
获取字符串长度复杂度O(N)|获取字符串长度O(1)
API不安全，可能造成缓冲区溢出|API安全，不会造成缓冲区溢出
修改字符串长度N次需要N次内存重分配|修改字符串长度N次最多需要N次内存重分配
只能保持文本数据|文本数据或者二进制数据
无|可以复用一部分C字符串库函数

### 链表

``` C
typedef struct listNode {
    struct listNode *prev;
    struct listNode *next;
    void *value;
}

typedef struct list {
    listNode *head;
    listNode *tail;
    unsigned long len;
    // 节点值复制函数
    void *(*dup) (void *ptr);
    // 节点值释放函数
    void (*free) (void *ptr);
    // 节点值对比函数
    int (*match) (void *ptr, void *key);
}
```

[图]

- 双端：链表节点的prev和next指针获取前后置节点的时间复杂度是O(1)
- 无环：表头节点的prev和表尾节点的next都指向null
- 多态：链表节点使用void*指针保存节点值，并且可以通过dup、free、match为节点值设置类型特定函数，所以链表可以保存各种类型的值
- 链表持有表头/尾节点指针，查询复杂度为O(1)
- 链表持有len属性，查询链表长度时间复杂度为O(1)

### 字典
``` C
[字典]
[哈希表]
[哈希节点]
```

[图]

#### 存入
1. 根据字典的哈希函数计算键的哈希值
2. 根据哈希值和sizemask计算索引值

#### 哈希冲突
使用链地址法解决冲突，与Java#HashMap一样

#### rehash
为了维持负载因子（load factor）在一个合理范围内，当键值对过多或过少时，会对哈希表进行扩展或收缩。

过程：
1. 为ht[1]分配空间
2. 将ht[0]所有键值对rehash到ht[1]
3. 释放ht[0]，将ht[1]设置为ht[0]，并为ht[1]创建新的空白哈希表为下一次rehash准备

自动扩展：
- 服务器没有执行BGSAVE或者BGREWRITEAOF，且负载因子大于等于1
- 服务器正在执行BGSAVE或BGREWRITEAOF，且负载因子大于等于5

自动收缩：
- 负载因子小于0.1

渐进式rehash：当键值对比较多时，不可能一次性完成rehash操作，采用分治思想将rehash均摊到每个键值对的删除、查询和更新操作上，避免集中式rehash带来的大计算量。

### 跳跃表
``` C
typedef struct zskiplist {
    struct zskiplistNode *header, *tail;
    // 节点数量
    unsigned long length;
    // 层数最大的节点的层数
    int level;
} zskiplist;

typedef struct zskiplistNode {
    struct zskiplistlevel {
        // 前进指针
        struct zskiplistNode *forward;
        // 跨度
        unsigned int span;
    } level[];

    // 后退指针
    struct zskiplistNode *backward;
    // 分数
    score;
    // 成员对象
    robj *obj;
} zskiplistNode;
```

[图]

- 每次创建新的跳跃表节点，都会根据幂次定律随机生成一个介于1-32之间的值作为level数组大小
- 所有节点按分值从小到大排列
- 分值可以相同，但成员对象必须唯一。当分值相同时，按成员对象在字典序中的大小排序

### 整数集合
``` C
typedef struct intset {
    // 编码方式
    uint32_t encoding;
    // 集合包含的元素数量
    uint32_t length;
    // 保存元素的集合
    int8_t contents[];
} intset;
```

- 支持16位、32位、64位整数
- 升级特性增加灵活性，节约内存；同时不支持降级

**升级：** 
1. 根据新元素的类型，扩展整数集合底层数组大小，并为新元素分配空间
2. 底层数组所有元素转换为新元素的类型，转换后放置到正确位上，保持有序性
3. 将新元素添加到数组

升级并不需要额外空间，而是直接在原底层数组上进行。
引发升级的新元素必定比现有所有元素小或者大，所以必定会添加到底层数组最前面或者最后面。
升级使得可以将不同类型整形放置到同一个数组，使得灵活性增加。
升级更节约内存，不必一开始就将底层数组声明为64位类型。

### 压缩列表
特殊编码的连续内存块，包含任意多个节点，每个节点可以保存一个字符数组或一个整数值。

**连锁更新 cascade update**
## 对象
redis的五种常见对象分别是字符串对象、哈希对象、列表对象、集合对象和有序集合对象，这些对象都至少使用了一种数据结构。

``` C
typedef struct redisObject {
    // 对象类型
    unsigned type:4;
    // 编码，底层数据结构类型
    unsigned encoding:4;
    // 指向底层实现数据结构的指针
    void *ptr;
    ...
} robj;
```

引用计数内存回收机制
多态

## 持久化
### RDB
两种方式触发，其一通过配置文件配置，其二客户端显示执行BGSAVE命令。
BGSAVE触发时，fork一个子进程进行处理，子进程结束退出后，父进程调用相关回调函数进行后续处理。

#### RDB文件结构

db_number字段使用的字节数为什么不是固定的？

### AOF
#### 原理
**写**
1. 追加：开启AOF时，执行完的命令会被追加到aof_buf缓冲区
2. 写入：redis服务器进程是一个事件循环，其中文件事件负责处理客户端命令请求，每个事件结束前调用flushAppendOnlyFile函数将缓冲区数据写入AOF文件
3. 同步：第二步的数据实际还在操作系统内存中，需要最终落地到磁盘上。可以通过redis配置文件的appendfsync决定落盘策略。

    - always：每条命令都调用fsync，性能消耗大，数据安全性最高
    - everysec：每秒执行fsync，折中方案，也最常用
    - no：不主动调用fsync，由操作系统控制。redis性能高，数据安全性最差

**读**
创建一个不带网络连接的伪客户端，读取AOF内容并执行

#### AOF重写
由于AOF文件会越来越大且存在大量冗余命令，redis通过BGREWRITEAOF命令重写AOF文件。AOF重写不需要分析旧文件而是直接分析数据库，开始重写时，会创建一个子进程，同时将命令写入AOF重写缓冲区。当子进程完成重写后，发送信号通知父进程，父进程阻塞并调用相应信号处理函数，将重写缓冲区内容写入新文件并覆盖旧文件，完成AOF文件重写。

##### 混合持久化
Redis重启时通过RDB快照恢复数据的速度远快于AOF文件，为了解决这个问题，Redis2.8引入混合持久化，在AOF重写的时候先写入RDB快照。

## 主从复制

### 同步
从服务器向主服务器发出`PSYNC <runid> <offset>`同步请求，主服务器判断进行完全同步还是部分重同步

- 完全同步

1. 主服务器执行BGSAVE生成RDB文件，并使用缓冲区记录此刻后的写命令
2. 主服务器传输RDB文件给从服务器，从服务器载入RDB文件
3. 主服务器以客户端身份发送缓冲区命令给从服务器

- 部分重同步

1. 主服务器根据复制偏移量向从服务器发送需要同步的命令

### 部分重同步原理

- 主从服务器都需要维护自己的复制偏移量
- 主服务器复制积压缓冲区。固定长度先进先出队列，默认大小1M。估算缓冲区大小可以根据公式 second * write_size_per_second 估算，其中 second 为从服务器平均断线重连消耗时间，write_size_per_second 为主服务平均每秒写命令数据量
- 服务器运行id

### 命令传播与心跳检测
主从复制完成数据同步后，主服务器以客户端的身份将后续的写命令传播给从服务器。

命令传播阶段默认会以每秒一次的频率向主服务器发送心跳，用于检测网络连接、复制偏移量，以及辅助实现min-slaves配置

## Sentinel
Redis高可用解决方案，自动完成故障转移和服务器降级。Sentinel是一个运行在特殊状态的Redis服务器

- 主观下线

Sentinel通过ping命令判断其他服务器或Sentinel是否下线，判断主观下线所需的时间由sentinel.conf#down-after-milliseconds决定，值得注意的是多个Sentinel可能设置的并不相同

- 客观下线

当Sentinel判断服务器主观下线后，会询问其他Sentinel是否同意此服务器主观下线，当收集到足够数量的下线判断后，会认为服务客观下线，并进行故障转移。

- 选举

所有Sentinel都有被选举为领头Sentinel的资格，且先到先得。当一个Sentinel判定主服务器客观下线后，便会发起选举，要求其他Sentinel将自己选举为领头Sentinel。

- 故障转移

领头Sentinel选举完成后，便由领头Sentinel开始故障转移操作。

1. 首先，会从所有从服务器中挑选出状态良好、数据完整的从服务器作为新的主服务器。
2. 其次，让其他从服务器成为新主服务器的从服务器。
3. 最后，让旧的主服务器成为新主服务器的从服务器，等旧主服务器重新上线后Sentinel会向其发送SLAVEOF命令。