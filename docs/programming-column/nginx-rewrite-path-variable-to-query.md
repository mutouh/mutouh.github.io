---
title: nginx重写路径参数为URL参数
date: 2022-05-30
tags: [nginx]
---
# nginx重写路径参数为URL参数

## 需求

移除请求路径中的token参数，并将其移动到URL参数中

有N个接口如下：
http://127.0.0.1:8080/services/RES_ONE/c_kjdksl-myl/getDataJson?name=test
http://127.0.0.1:8080/services/RES_ONE/c_kjdksl-myl/getDataXml?name=test
http://127.0.0.1:8080/services/RES_TWO/c_kjdksl-myl/getData?name=test
其中用户token=c_kjdksl-myl

## nginx配置

``` nginx
# 正则匹配目标URI
location ~ ^/services/RES_\w+/.+/(getDataJson|getDataXml)$ {
    # 重写URI中token位置
    rewrite ^/(services/RES_\w+)/(.+)/(getDataJson|getDataXml)$ /$1/$3?token=$2 break;

    proxy_pass http://127.0.0.1:9090;
}
```

## 验证

原始请求：http://127.0.0.1:8080/services/RES_THREE/c_kjdksl-myl/getDataJson?name=test
nginx重写：http://127.0.0.1:9090/services/RES_THREE/getDataJson?token=c_kjdksl-myl&name=test
