---
title: markdown 语法
date: 2023-02-16
tags: [模板]
---
# markdown 语法
## 代码块

```ts [nuxt.config.ts] {2-4}
    export default defineNuxtConfig({
      typescript: {
        shim: false
      }
    })
```

## 标签组

::TabGroup
::::TabItem{name="标签组1"}
这是第一个标签组
::::

::::TabItem{name="标签组2"}
这是第二个标签组
::::

::::TabItem{name="标签组3"}
这是第三个标签组
::::
::
