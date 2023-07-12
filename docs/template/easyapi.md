---
title: IDEA 插件 EasyApi
date: 2023-03-12
tags: [模板]
---
# IDEA 插件 EasyApi

项目根路径添加配置文件 `.easy.api.config`

```properties .easy.api.config
# swagger
param.doc=@io.swagger.annotations.ApiParam#value
param.default.value=@io.swagger.annotations.ApiParam#defaultValue
param.required=@io.swagger.annotations.ApiParam#required
param.ignore=@io.swagger.annotations.ApiParam#hidden
class.doc=@io.swagger.annotations.Api#value
method.doc=@io.swagger.annotations.ApiOperation#value
field.doc=@io.swagger.annotations.ApiModelProperty#value
field.required=@io.swagger.annotations.ApiModelProperty#required
api.tag=@io.swagger.annotations.ApiOperation#tags
```
