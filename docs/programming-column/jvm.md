---
title: JVM 相关
date: 2023-03-12
tags: [JVM]
categories: [技术向]
---
# JVM 相关
## jvm 动态添加OOM参数
给运行中的Java程序的JVM添加OOM相关参数
```shell
jinfo -flag +HeapDumpOnOutOfMemoryError pid
jinfo -flag HeapDumpPath=/tmp/xxx.hprof pid
```

## 手动触发gc
```shell
jcmd <pid | mian class> GC.run
```

## 查看元空间中class对象
```shell
jcmd <pid | mian class> GC.class_histogram
```

## 导出heap
```shell
jcmd <pid | mian class> GC.heap_dump /tmp/heap_dump.hprof
jmap -dump:live,file=/tmp/head_dump.hprof <pid>
```
