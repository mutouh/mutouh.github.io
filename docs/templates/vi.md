---
title: Vi
date: 2023-04-05
tags: [模板]
---
# Vi
## 基本
```shell
# 显示行号
:set nu
```

## v模式列编辑
参考[vim 列编辑模式总结详解](https://commandnotfound.cn/linux/1/285/vim-%E5%88%97%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F%E6%80%BB%E7%BB%93)

注释：

1 Ctrl+v进入v模式
2 上下方向键选中要注释的行
3 shift+i（即大写的I）行首插入
4 输入注释符
5 按esc返回

反注释：

1 Ctrl+v进入v模式
2 上下方向键选中要注释的行，左右键选择要删除的字符
3 按d删除
