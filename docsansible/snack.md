---
title: Ansible 最佳实践
date: 2023-09-02
tags: [Ansible]
---
# Ansible 最佳实践
## 任务联动
### 基于 handlers 联动
handler是一种特殊形式的task，其存在就是为了任务回调存在的，所以天生就可以实现联动。

### 基于任务返回值联动
将A任务返回值注册为一个变量，然后在B任务中当作条件来实现联动。

```yaml
- name: mkdir software home
    ansible.builtin.file:
    path: "/path/to/home/"
    state: directory
    register: result
- name: decompress software packages
    ansible.builtin.unarchive:
    src: "/path/to/software.tar.gz"
    dest: "/path/to/home/"
    copy: yes
    # 只有第一次运行需要解压，避免反复执行时重复解压
    when: result is changed
```

## 关闭交换分区
绝大多数软件都需要关闭交换分区，比如Kubernetes。
```yaml
- name: Disable SWAP (1/2)
    ansible.builtin.shell:
    cmd: swapoff -a
- name: Disable SWAP (2/2)
    ansible.builtin.replace:
    path: /etc/fstab
    regexp: '^([^#].*?\sswap\s+swap\s+.*)$'
    replace: '# \1'
```

## 启动后台进程
```yaml
- name: Start hdfs datanode
    ansible.builtin.shell:
    cmd: "nohup {{ hdfs_home }}./bin/hdfs --daemon start datanode &"

```
