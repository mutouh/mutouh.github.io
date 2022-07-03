---
title: nginx 对请求进行URL编码
tag: nginx
disableNunjucks: true
---
<!-- # nginx 对请求进行URL编码 -->
## 需求

- 客户端请求URI参数中包含特殊字符，且客户端未对其编码
- 服务端为springboot应用，拒绝未经过URL编码带有特殊字符的请求

由于服务端有前置nginx，在无法改变客户端和服务端的情况下，通过nginx对请求进行URL编码
请求样式：http://localhost:8080/services/api/v1/test?a=1&b=2&search=[{"name":"zhangsan"}]

<!-- more -->

## nginx配置

nginx刚好有lua模块，所以使用lua实现。另外也可使用[set-misc模块](https://www.nginx.com/resources/wiki/modules/set_misc/)

``` nginx
location = /services/api/v1/test {
    if ($args ~ ".*search=\[\{.*") {
        set_by_lua $args '
            -- 这里需要注意ngx.req.get_uri_args()会导致+号变成空格，可以使用ngx.var.arg_search获取原始search参数 https://groups.google.com/g/openresty/c/uGlKv6Y_SIU?pli=1
            local args = ngx.req.get_uri_args()
            return ngx.encode_args(args);
        '
    }

    rewrite /services/api/v1/test /echo break;
}

location /echo {
    content_by_lua_block {
        ngx.say(ngx.var.args)
    }
}
```

## 验证

``` bash
$ curl 'http://localhost:8080/services/api/v1/test?a=1&b=2&search=\[\{"name":"zhangsan"\}\]'
b=2&a=1&search=%5B%7B%22name%22%3A%22zhangsan%22%7D%5D
```

## 参考

- lua模块 https://www.nginx.com/resources/wiki/modules/lua/##ngx-var-variable
- https://blog.csdn.net/chunyuan314/article/details/55292661

## 题外坑

如果使用postman进行接口测试，会发现发出的请求参数是这样的 a=1&b=2&search=[{%22name%22:%22zhangsan%22}]，因为postman的设置中默认开启了URL编码，而且只编码了双引号。
