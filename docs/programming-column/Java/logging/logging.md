---
title: Logback 详解
date: 2024-05-01
tags: [Logging, Logback]
categories: []
---
# Logback 详解

## 组成模块

- logback-core
  logback实现核心代码
- logback-classic
  实现了SLF4J API
- logback-access
  与 Servlet 容器（如 Tomcat 和 Jetty）集成，以提供 HTTP 访问日志功能。比如内置的 TeeFilter 可以打印 HTTP 请求报文内容，开箱即用。

## 工作原理

### 核心概念

#### logger 记录器

这其实是来自于 SLF4J 里的概念，也是我们开发者用的最多的 API 。

- root
  - com.foo
    - com.foo.Bar
    - com.foo.X

基于命名的继承关系，除特殊的 root 是所有 logger 的根记录器。实战中也经常用 Java 类的完全限定名称作为记录器的名称。

常见 API：

```java
Logger rootLogger = LoggerFactory.getLogger(org.slf4j.Logger.ROOT_LOGGER_NAME);
rootLogger.debug("level debug...");
```

#### appenders 附加器，日志输出目标

Logback 允许将日志记录请求打印到多个目标。在 logback 中，输出目标称为 appender。已经支持的输出目标比如控制台、文件、数据库等。

由于 logger 具有继承关系，那么父 logger 配置的 appender 是否会继承给子 logger 呢？这是由属性 additivity flag 控制的，同时默认为开启状态。

#### layouts 布局，日志格式化

将事件转换为字符串，从而达到格式化目的。

#### encoders 编码器

编码器将事件转换成字节数组，在输出二进制流的场景下替代 layouts。

### 日志打印步骤

当执行 `logger.info()` 会发生什么：

1. 如果 `TurboFilter` 链存在，将会被调用，对日志请求进行过滤。a）拒绝，忽略日志请求；b）待定，进入第2步；c）接受，跳过第2步，进入第3步；
2. 应用基本选择规则，确认当前日志级别是否满足；
3. 创建日志事件，包含所有相关对象，比如记录器、日志级别、消息内容、异常、时间、线程等；
4. 执行附加器的 `doAppend()` 方法；
5. 附加器通过委托布局等方式将日志事件格式化；
6. 发送日志到目的地。

### 配置初始化过程

配置可以基于代码方式，也可以基于 XML 等格式。配置的尝试过程如下：

1. 首先，基于 SPI 机制寻找用户自定义的配置器，其优先于 logback 内置的配置器比如 `DefaultJoranConfigurator`；
2. 其次，（从1.3.9/1.4.9开始）初始化一个 `SerializedModelConfigurator`；
   - 尝试寻找系统属性 `logback.scmoFile` 指定的配置文件
   - 尝试从 classpath 寻找 `logback-test.scmo`
   - 尝试从 classpath 寻找 `logback.scmo`
3. 其次，初始化一个 `DefaultJoranConfigurator`；
   - 尝试寻找系统属性 `logback.configurationFile` 指定的配置文件
   - 尝试从 classpath 寻找 `logback-test.xml`
   - 尝试从 classpath 寻找 `logback.xml`
4. 最后，使用 `BasicConfigurator` 初始化配置。

这个过程的日志：

```java
LoggerContext loggerContext = (LoggerContext) LoggerFactory.getILoggerFactory();
StatusPrinter2 statusPrinter2 = new StatusPrinter2();
statusPrinter2.print(loggerContext);
```

### 配置语法

## 功能特性

### 配置热加载

设置配置热加载，将会启动一个单独的线程任务监视配置变化。如果修改配置导致语法错误，会回退到上一个无语法错误的配置。

```xml
<!-- scan：指示 logback 扫描配置是否发生变化 -->
<!-- scanPeriod：扫描周期，缺省为60s。需要注意如果没有指定时间单位，会假定单位是毫秒 -->
<configuration scan="true" scanPeriod="30 seconds" >
  ...
</configuration>
```

### MDC

Mapped Diagnostic Context 映射诊断上下文。由于 Java 应用大多都是 client-server 设计的，日志为了知道当前服务的客户端的信息，需要一个容器将客户端信息临时保存起来，以备在整个服务过程中给日志使用，这就是 MDC。MDC 基于线程管理上下文，所以也是线程安全的。但是需要注意 logback 实现的 MDC 子线程不会自动继承父线程的 MDC。

对于 web 应用程序，记录 HTTP 请求中的请求方法、请求路径等是很常见的，为此官方实现 `MDCInsertingServletFilter` 将请求保存下来。

## 最佳实践

1. 使用占位符而不是拼接
   ```java
   logger.debug("Entry number: " + i + " is " + String.valueOf(entry[i]));

   # 构造日志需要消耗性能。这里变量需要转字符串类型，同时要拼接字符串，但是如果最后打印日志时发现日志级别未达到 debug，将不会打印
   if(logger.isDebugEnabled()) { 
     logger.debug("Entry number: " + i + " is " + String.valueOf(entry[i]));
   }

   # 最佳实践是使用占位符替代
   logger.debug("Entry number: {} is {}", i, entry[i]);
   ```

## 引用

- [logback版本策略](https://logback.qos.ch/dependencies.html)
- [捕获传入的 HTTP 请求和传出响应](https://logback.qos.ch/recipes/captureHttp.html)
- [将 log4j.properties 转换为 logback.xml](https://logback.qos.ch/translator/)
