# 开发环境搭建

## oh-my-zsh
### 插件
- [语法高亮](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md#oh-my-zsh)
    作者建议将语法高亮插件放在最后

- [快速跳转](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/z)
- [自动建议](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh)

## wsl2
### 中文语言
```shell
sudo apt install language-pack-zh-hans
sudo dpkg-reconfigure locales
```

### [字体](https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#manual-font-installation)
```shell
# 刷新字体缓存
sudo fc-cache -f -v
# 查看字体是否安装成功
sudo fc-list |grep Meslo
```

复制微软雅黑字体，网上清一色的配置win字体库位置加载所有字体个人感觉没必要
```shell
sudo mkdir -p /usr/share/fonts/msyh
sudo cp /mnt/c/Windows/Fonts/msyh* /usr/share/fonts/msyh/
```

## 参考
https://szthanatos.github.io/topic/wsl2/




## wsl ubuntu2404
### 启动应用卡
https://github.com/viruscamp/wslg-links

[After Ubuntu 24.04 upgrade, GUI apps are extremely slow to open#1250](https://github.com/microsoft/wslg/issues/1250)
[Ubuntu 24.04 Wayland falling back to X11 #1244](https://github.com/microsoft/wslg/issues/1244)

