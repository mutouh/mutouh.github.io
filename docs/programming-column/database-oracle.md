---
title: Oracle数据库
date: 2023-04-13
tags: [Oracle]
categories: [技术向]
---
# Oracle数据库
## Number类型
Oracle 的 Number 类型语义丰富，业务上可能存在需要细分的场景。

| Oracle type | 右对齐 |
| :---- | :---- |
| NUMBER(p, s <= 0), p - s < 3 | TINYINT |
| NUMBER(p, s <= 0), p - s < 5 | SMALLINT |
| NUMBER(p, s <= 0), p - s < 10 | INT |
| NUMBER(p, s <= 0), p - s < 19 | BIGINT |
| NUMBER(p, s <= 0), 19 <= p - s <= 38 | DECIMAL(p - s, 0) |
| NUMBER(p, s > 0) | DECIMAL(p, s) |
| NUMBER(p, s <= 0), p - s > 38 | STRING |
| NUMBER(*), p = 0, s = -127 | STRING |

参考：

- [flink-oracle-connecotr](https://ververica.github.io/flink-cdc-connectors/master/content/connectors/oracle-cdc.html#data-type-mapping)
- [NUMBER(p,s)中s<0的含义](https://www.imooc.com/qadetail/306371)