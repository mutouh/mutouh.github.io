---
title: MySQL实用手册
date: 2023-09-07
tags: [MySQL]
---
# MySQL实用手册
## 从文件加载数据
[MySQL 8.0 文档](https://dev.mysql.com/doc/refman/8.0/en/load-data.html)

```shell
mysql -h127.0.0.1 -P3306 -uroot -p<password> -e "
LOAD DATA
INFILE '/var/lib/mysql-files/dbgen_version_1_10.dat'
INTO TABLE tpcds.dbgen_version
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\n'
(dv_version, dv_create_date, @dv_create_time, dv_cmdline_args)
SET
`dv_create_time` = nullif(@dv_create_time, '')
;
"
```

将csv格式文件dbgen_version_1_10.dat数据导入tpcds.dbgen_version表中，其中：
csv数据列分隔符：|
csv数据行分隔符：\n
csv数据列与表列映射关系：(dv_version, dv_create_date, @dv_create_time, dv_cmdline_args)
由于第三列可能为空，先使用变量接收，通过nullif（）函数处理为null插入表中。

> PS：对于mysql数据中空值也可以用“\N”代替，见官方文档
