---
title: kubectl 命令补全
date: 2022-11-20
tags: [k8s, kubectl, 补全]
---
# kubectl 命令补全
```bash
# 安装
$ yum install bash-completion
# 验证
$ type _init_completion
# 启动 kubectl 自动补全
# 当前用户：echo 'source <(kubectl completion bash)' >>~/.bashrc
$ kubectl completion bash | sudo tee /etc/bash_completion.d/kubectl > /dev/null
```

出处：https://kubernetes.io/zh-cn/docs/tasks/tools/included/optional-kubectl-configs-bash-linux/