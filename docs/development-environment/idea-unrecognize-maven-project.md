---
title: idea打开项目不识别maven目录结构
date: 2019-09-29
catagories: [开发环境]
tags: [IntelliJ IDEA, maven]
---
# idea打开项目不识别maven目录结构

1. 关闭idea。
2. 文件管理器打开项目文件夹，删除[.idea、demo.iml]文件夹。
3. 重新使用idea打开项目，识别maven结构后下次打开不会再丢失目录结构。

#### extra：

确保勾选了maven项目自动导入。

![自动导入maven项目](./idea-unrecognize-maven-project/import-maven-projects-automatically.png)
