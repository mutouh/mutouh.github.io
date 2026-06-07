---
title: Spring Boot
date: 2023-07-11
tags: [Spring Boot]
---
# Spring Boot
```plantuml
@startmindmap
* SpringBoot
  * 一、SpringApplication
    * new SpringApplication()
      *_ 推断web应用类型
      *_ 从spring.factories中获取应用上下文初始化器，设置初始化器
      *_ 从spring.factories中获取应用监听器，设置监听器
      *_ 从线程调用栈判断main函数所在类，设置主类
    * SpringApplication.run()
      *_ 获取springboot运行监听器，发布starting事件
      *_ 准备Environment，发布environmentPrepared事件
      *_ 打印Banner
      *_ 创建应用上下文（对于web应用最常用的就是ServletWebServerApplicationContext）
      *_ 准备应用上下文，执行应用上下文初始化器，发布contextPrepared事件，装载配置类到上下文，发布contentLoaded事件
      *_ 刷新应用上下文（注意这一步会创建web容器并启动，比如Tomcat）
      *_ 发布started事件
      *_ 运行上下文启动后的任务（ApplicationRunner、CommandLineRunner）
      *_ 发布ready事件
  * 二、外部化配置
    * （从低）代码里的默认配置 SpringApplication.setDefaultProperties
    * 额外配置源 @PropertySource
    * 应用配置
      * classpath:application.yaml/yml/xml/properties
      * classpath:config/application.yaml/yml/xml/properties
      * jar包外
    * 操作系统环境变量
    * Java系统属性
    * （到高）命令行参数
  * 三、自动配置
  * 四、嵌入式web容器
  * 五、Actuator监控
@endmindmap
```

```plantuml
@startmindmap
* @SpringBootApplication
  * @SpringBootConfiguration
    * @Configuration
  * @EnableAutoConfiguration
    * @Import(AutoConfigurationImportSelector.class)
      *_ SpringFactoriesLoader#loadSpringFactories()
      *_ ImportCandidates#load()
  * @ComponentScan
@endmindmap
```

## 一、SpringApplication
## 二、外部化配置
### 配置优先级
简单的理解为每种来源的配置是一个map，将map按顺序组合成list，list前面的优先级就更高。
```java
public class MutablePropertySources implements PropertySources {

	private final List<PropertySource<?>> propertySourceList = new CopyOnWriteArrayList<>();
}
```

## 三、自动配置

### SPI
@EnableAutoConfiguration注解上的@Import(AutoConfigurationImportSelector.class)自动配置入口。通过SPI机制加载自动配置类。
SpringFactoriesLoader#loadSpringFactories()
```properties META-INF/spring.factories
...
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration,\
org.springframework.boot.autoconfigure.aop.AopAutoConfiguration,\
...
```
从v2.7.x开始调整为META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports，向后兼容

ImportCandidates.load()
```plaintext META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration
org.springframework.boot.autoconfigure.aop.AopAutoConfiguration
...
```

### 自定义Starter

### 常用条件注解

| 注解 | 含义 | 实现 | 备注 |
|---|---|---|---|
| @ConditionalOnClass | 判断类是否存在 | @Conditional(OnClassCondition.class) 通过ClassLoader去加载类 | 反义词 @ConditionalOnMissingClass |
| @ConditionalOnBean | 判断Bean是否存在 | @Conditional(OnBeanCondition.class) 通过BeanFactory查询Bean | 反义词 @ConditionalOnMissingBean |
| @ConditionalOnSingleCandidate | 判断某个类型的Bean是否只有一个，或者有多个并且有一个是Primary | @Conditional(OnBeanCondition.class) |
| @ConditionalOnProperty | 判断属性配置 | @Conditional(OnPropertyCondition.class) 通过Environment查询属性 |
| @ConditionalOnWebApplication | 判断是不是web应用 | @Conditional(OnWebApplicationCondition.class) | 反义词 @ConditionalOnNotWebApplication |

### 属性绑定
@ConfigurationPropertiesScan
@EnableConfigurationProperties
@ConfigurationProperties

## 四、嵌入式web容器
## 五、Actuator监控
