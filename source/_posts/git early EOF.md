---
title: git clone报错 early EOF + index-pack failed
date: 2019-06-04 14:09
tags: [Git]
categories: 踩到了
comments: true
---

> ## 问题描述

最近研究swagger的时候，想要克隆GitHub上的swagger-ui和swagger-editor项目。但是clone失败，出现fatal: early EOF；fatal: index-pack failed错误信息。
<!-- more -->
``` bash
$ git clone https://github.com/swagger-api/swagger-ui.git
Cloning into 'swagger-ui'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (6/6), done.
error: RPC failed; curl 18 transfer closed with outstanding read data remaining
fatal: the remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed
```

clone当前仓库失败，当前仓库一共有6个分支。一开始以为是网络原因导致的，试了几遍还是不行，于是baidu了一下，发现文章博客还挺多的。

> ## 解决方案

* 指定clone深度

    默认会clone整个仓库所有分支，但是整个仓库太大，导致一直失败，于是指定clone深度

    ``` bash
    $ git clone --depth 1 https://github.com/swagger-api/swagger-ui.git
    Cloning into 'swagger-ui'...
    remote: Enumerating objects: 528, done.
    remote: Counting objects: 100% (528/528), done.
    remote: Compressing objects: 100% (470/470), done.
    remote: Total 528 (delta 30), reused 517 (delta 29), pack-reused 0
    Receiving objects: 100% (528/528), 2.85 MiB | 5.00 KiB/s, done.
    Resolving deltas: 100% (30/30), done.

    $ cd swagger-ui/

    $ git branch -a && git log
    * master
    remotes/origin/HEAD -> origin/master
    remotes/origin/master
    commit 54c045fd472a740e7ae3d26148708455fa6358b4 (grafted, HEAD -> master, tag: v3.22.2, origin/master, origin/HEAD)
    Author: swaggerhub-bot <sh-devops@smartbear.com>
    Date:   Wed May 22 01:36:53 2019 +0000

        release: v3.22.2
    ```

    顺利clone仓库，但是会发现这次clone只clone了最新的一次提交历史，故这种clone方式会丢失历史记录。但是可以配合`git fetch --unshallow`找回。

* 如果目标源分支过多，可以指定clone的分支

    ``` bash
    $ git clone -b master https://example.com/example/example.git
    ```

* 为Git添加配置项

    在/Users/username/.gitconfig文件中添加配置

    ``` bash
    # git config --add core.compression -1 // git目录下可使用命令
    # git config --help // 查看手册了解参数意义
    [core]
        compression = -1    // 压缩，value = [-1，9]
    ```

    这种做法具体我没有试，因为我发现即使还没有配置这个参数，从第一次clone失败的的输出信息中第4行也可以发现，针对swagger-ui项目，默认远端就会进行压缩。

> ## 总结

针对当前问题，第一种解决办法最为行之有效，因为我不需要clone整个仓库，也不需要知道提交历史。

> ## 后话

后来又踩了一个自己挖的坑！

``` bash
# 在上述过程中随手使用了下面这条命令，本想试试能不能看到文档，结果没有输出，当时并没在意。
swagger-ui $ git config core.compression --help
swagger-ui $ 

# 后来使用npm install后报错
swagger-ui $ npm install
...
npm ERR! Error while executing:
npm ERR! /usr/local/bin/git ls-remote -h -t git://github.com/ev1stensberg/generator.git
npm ERR! 
npm ERR! fatal: bad numeric config value '--help' for 'core.compression': invalid unit
npm ERR! 
npm ERR! exited with error code: 128
...

# 然后意识到自己成功的把core.compression的value设置成了'--help'
# 使用find命令查找所有gitconfig文件
swagger-ui $ find / -iname "*gitconfig*"
find: /usr/sbin/authserver: Permission denied
/usr/local/git/etc/gitconfig
...
/Users/${your.username}/.gitconfig
...

# 查阅了这两处以后，并没有发现core.compression
# 使用git config -l查看git配置
swagger-ui $ git config -l
...
core.ignorecase=true
core.precomposeunicode=true
core.compression=--help
remote.origin.url=https://github.com/swagger-api/swagger-ui.git
remote.origin.fetch=+refs/heads/master:refs/remotes/origin/master
...

# 有点想不明白。。。
# 后来猜测git config -l看到的是所有的配置，又重新查看了上面找到的两处gitconfig的内容，发现正好是使用命令后输出内容的前2/3部分
# 于是猜测git config -l是按层级关系从大到小输出了所有git配置信息，那么最后这部分内容应该是来自于项目本身，因此在swagger-ui目录下查找，发现.git目录下有个config文件
swagger-ui $ cat .git/config
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
        compression = --help
[remote "origin"]
        url = https://github.com/swagger-api/swagger-ui.git
        fetch = +refs/heads/master:refs/remotes/origin/master
[branch "master"]
        remote = origin
        merge = refs/heads/master

# 终于找到了
```

后来又测试了一下这两条命令：

* 命令1：git config core.compression -1
* 命令2：git config --add core.compression -1

命令1是对已经存在的值做修改，命令2是添加配置属性。并且执行命令2必定成功，也就是添加的属性不管是否已经存在，也会再次添加，然后再使用命令1会报错，提示同一个key有多个value。然而，在属性不存在的情况下执行命令1并不会报错，而是直接添加属性，所以没必要使用命令2。
