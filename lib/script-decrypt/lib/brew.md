# Homebrew安装
## 从github安装 下载会很慢 建议翻墙
### 安装
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
### 卸载
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```
# 更换为清华大学的源
## 能加速索引库也就是加速brew update
```
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

brew update
```
# 使用cask安装常用软件
## 大部分项目需要从github下载 速度极慢 建议翻墙
```
brew cask install
google-chrome visual-studio-code shadowsocksx-ng android-studio
```
