---
title: 从maven迁移到gradle
date: 2019-04-20
tags: [Maven, Gradle]
---
# 从maven迁移到gradle

由于想要用表格作为载体进行maven和gradle的对比，但是在本地markdown表格里写复杂的内容又很困难，因此，在语雀上完成本文内容，这里[放一个链接](https://www.yuque.com/mutouh/kb/rh4ct31ay0tdallc)。
迁移[示例项目](https://github.com/mutouh/gs-gradle-migration)。

## [构建的生命周期](https://docs.gradle.org/current/userguide/build_lifecycle.html)

1. initialization
   分析处理 `settings.gradle`配置
2. configuration
   分析处理 `build.gradle`配置，生成任务DAG
3. execution
   根据任务DAG分析任务顺序并执行

## [常用插件](https://docs.gradle.org/current/userguide/plugin_reference.html)

- java

  Java项目必备，管理Java目录结构（可以自定义但没必要），提供构建tasks
- [java-library](https://docs.gradle.org/current/userguide/java_library_plugin.html)

  打包成库
- application

  打包成可启动的应用
- maven-publish

    发布到maven仓库

## 遗留问题
- 使用 platform 导入 BOM 依赖会导致 annotationProcessor lombok 版本失效

```groovy
dependencies {
  implementation platform('org.springframework.boot:spring-boot-dependencies:3.0.9')

  compileOnly libs.lombok
  annotationProcessor libs.lombok
}
```

解决办法：

```groovy
dependencies {
  implementation platform('org.springframework.boot:spring-boot-dependencies:3.0.9')
  // https://github.com/gradle/gradle/issues/12519#issuecomment-824430551
  annotationProcessor platform('org.springframework.boot:spring-boot-dependencies:3.0.9')

  compileOnly libs.lombok
  annotationProcessor libs.lombok
}
```

- Gradle统一依赖管理后，IDEA无法下载类库源码，无法识别版本号 Could not get unknown property 'libs' for object of type org.gradle.api.internal.artifacts.dsl.dependencies.DefaultDependencyHandler.
