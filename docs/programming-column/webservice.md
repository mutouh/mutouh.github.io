---
title: Web Service
date: 2023-09-02
tags: [WebService]
---
# Web Service

```plantuml
@startmindmap
* WS
    * 名词
        * SOAP: Simple Object Access Protocol
            *_ 基于xml格式（重度），交互协议，跨系统，支持多种通信协议（HTTP、SMTP）
        * WSDL: Web Service Definition Language
            *_ 基于xml格式，定义消息规格和如何调用webservice
        * JAX-WS: Java API for XML Web Services
            *_ Java框架，提供工具和基础设施更好的支持ws的开发
    * JAX-WS
        * 工具
            * wsimport、wsgen
            * maven插件jaxws-maven-plugin、maven-jaxb2-plugin
        * 框架实现
            * Apache CXF
            * Apache Axis2
            * Spring WS
    * 方法论
        * Top-Down
            *_ 自顶向下，先定义wsdl后生成java class
        * Down-Top
            *_ 自底向上，先写java代码后生成wsdl
@endmindmap
```

## WSDL 概念

Definitions

Types

Messages

PortTypes & Operations

Bindings

Services & Ports


[JAX-WS](https://eclipse-ee4j.github.io/metro-jax-ws/)
[JAX-WS baeldung介绍](https://www.baeldung.com/jax-ws)
