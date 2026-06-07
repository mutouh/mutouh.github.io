---
title: kubernetes 问题记录
date: 2023-08-15
tags: [Kubernetes]
---
# kubernetes 问题记录
## 删除命名空间卡住
```Shell
# 可以查看空间下还有什么资源，查看资源无法删除的原因并手动删除
kubectl api-resources --verbs=list --namespaced -o name | xargs -n 1 kubectl get --show-kind --ignore-not-found -n <namespace>
# 查看是namespace 卡Terminating的原因
kubectl get namespace <namespace> -o yaml
# 将删除不掉的namespace的终结器设置为空，需要注意这种方式强制删除会可能导致资源遗留
kubectl patch ns flink -p '{"metadata":{"finalizers":[]}}' --type=merge
```
参考：
[删除namespace为什么会Terminating？](https://cloud.tencent.com/developer/article/1802531)