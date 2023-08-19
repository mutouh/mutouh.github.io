---
title: ingress-nginx
date: 2023-04-23
tags: [Kubernetes]
categories: []
---
# ingress-nginx
## rewrite demo
```shell
# 创建deployment
kubectl create deployment web-demo --image=nginx --port=80

# 创建svc
kubectl expose deployment web-demo

# 创建ingress
echo '
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/use-regex: "true"
    nginx.ingress.kubernetes.io/rewrite-target: /$2
  name: rewrite
  namespace: default
spec:
  ingressClassName: nginx
  rules:
  - host: rewrite.bar.com
    http:
      paths:
      - path: /something(/|$)(.*)
        pathType: Prefix
        backend:
          service:
            name: web-demo
            port: 
              number: 80
' | kubectl create -f -

# 测试
curl --resolve "rewrite.bar.com:80:127.0.0.1" http://rewrite.bar.com:80
```
https://kubernetes.github.io/ingress-nginx/examples/rewrite/
(真一文搞定 ingress-nginx 的使用)[https://cloud.tencent.com/developer/article/1761376]