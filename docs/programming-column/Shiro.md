---
title: Shiro
date: 2022-11-06
tags: [Shiro]
---
# Shiro
## 导论
RBAC（Role-Based Access Control ）基于角色的访问控制。RBAC认为权限的过程可以抽象概括为：判断【Who是否可以对What进行How的访问操作（Operator）】这个逻辑表达式的值是否为True的求解过程。
即将权限问题转换为Who、What、How的问题。who、what、how构成了访问权限三元组。

## 核心组件
### Subject
> A Subject is just a security-specific "view" of an application User. Also, in the security world, the term Subject is actually the recognized nomenclature. 

指代用户

### Role
角色

### Permission
权限

### Realm
领域