---
title: 集群Session共享
date: 2018-12-17
tags: [Session]
categories: [技术向]
---
# 集群Session共享
## 前情提要

对于一个web应用，我们常常把用户的简单信息存入session来跟踪同一个用户，以方便后续进行的操作。

1. 用户通过浏览器请求服务器（tomcat）
2. 服务器为本次会话创建session对象，并将JsessionID通过Cookie回写给浏览器
<!-- more -->
3. 浏览器将cookie存储在本地
4. 用户后续访问服务器，浏览器将cookie信息放入请求中
5. 服务器解析cookie获得JsessionID，保证会话一致性

### Session的生命周期

* session由tomcat容器创建并管理
* session被存储在tomcat的本地缓存中，使用ConcurrentHashMap维护
* session的ID作为map的key，session对象本身作为map的value
* session销毁：
    1.session自动过期
    2.通过代码手动销毁Session.invalidate()
    3.tomcat非正常关闭，丢失session

## 问题背景

应用的用户访问量剧增，单一服务器无法承受高并发情况。解决方案之一就是增加服务器数量，搭建tomcat集群，并使用nginx进行反向代理，通过负载均衡相关策略削弱并发量。

问题：用户A首次请求时，由服务器a处理了请求，并创建了session会话，后续用户的请求被分发到了服务器b、服务器c...服务器n，能保证会话唯一性吗？

答案：显然是不能的！因为每台服务器在处理用户A的请求时都会为其创建session对象，而这些session并不是同一个，所以造成了session丢失。

> 那么如何保证创建的session被所有服务器共享呢？？？

## 集群Session共享解决方案

* 方式一：服务器间同步session，让所有服务器都拥有全部session。

* 方式二：使用nginx的负载均衡策略之一ip_hash。因为正常的用户不会疯狂更换IP。

* 方式三：进行统一缓存，所有服务器从缓存中取。缓存途径有很多，比如使用redis进行缓存。

### 打开方式和优缺点:

> 方式一：
    
    打开方式：
        1.修改tomcat配置文件server.xml中的Cluster节点；
        2.修改应用web.xml,增加<distributable/>节点

优点：

1. 对应用无倾略性
2. 适应各种负载均衡策略
3. 服务器重启或宕机不会丢失session
4. 安全性高

缺点：

1. session同步存在延迟
2. 占用宽带资源，序列化反序列化耗费CPU资源

> 方式二：
    
    打开方式：修改nginx.conf文件，使用ip_hash策略。

优点：

1. 配置简单，对应用没有侵入性
2. 水平扩展方便
3. 安全性高

缺点：

1. 重启服务器会丢失session
2. 水平扩展过程中丢失部分session

> 方式三：
    
    打开方式：
        1.增加对应的依赖jar包；
        2.修改web.xml增加filter；
        3.修改spring配置文件，注入spring session和redis相关的bean。

优点：

1. 适应各种负载均衡策略
2. 服务器重启或宕机不会丢失session，安全性高
3. 适合大型集群，扩展能力强

缺点：

1. 对应用具有侵入性，需要增加配置
2. 增加了网络开销
3. 序列化和反序列化消耗CPU资源