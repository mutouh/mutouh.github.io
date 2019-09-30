---
title: idea打开项目不识别maven目录结构
date: 2019-09-29 10:58:15
tags: IntelliJ IDEA
---

1. 关闭idea。
3. 打开项目文件夹，删除[.idea、demo.iml]文件夹。
4. 重新使用idea打开项目，识别maven结构后下次打开不会再丢失目录结构。

#### extra：

确保勾选了maven项目自动导入。

![](idea打开项目不识别maven目录结构/idea设置自动导入maven.png)
