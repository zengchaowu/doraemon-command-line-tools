#!/bin/bash

# 安装Command Line Tools
function install_command_line_tools()
{
    git
}

# 替换Gem源
function replace_gem_source()
{
    gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
}

# 修改raw.githubusercontent.com的DNS
function modify_githubusercontent_dns()
{
    sudo chmod 777 /etc/hosts
    sudo echo 151.101.108.133 raw.githubusercontent.com >> /etc/hosts
    sudo chmod 755 /etc/hosts
}

# 修改api.github.com的DNS
function modify_githubusercontent_dns()
{
    sudo chmod 777 /etc/hosts
    sudo echo 13.250.94.254 api.github.com >> /etc/hosts
    sudo chmod 755 /etc/hosts
}

# 安装Homebrew
function install_homebrew()
{
    # 由于DNS污染问题，需先修改raw.githubusercontent.com的DNS
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
}

# 安装常用软件
brew install tree wget fastlane cocoapods
brew cask install google-chrome lantern appcode visual-studio-code

# Ruby Gems
sudo gem install solargraph cocoapods fastlane

# 安装Flutter
function install_flutter()
{
    cd ~
    mkdir Develop
    cd Develop
    wget https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_1.20.2-stable.zip
    unzip flutter_macos_1.20.2-stable.zip
    rm flutter_macos_1.20.2-stable.zip
    # 修改环境
    echo export PUB_HOSTED_URL=https://pub.flutter-io.cn >> ~/.zshrc
    echo export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn >> ~/.zshrc
    echo export PATH=~/Develop/flutter/bin:$PATH >> ~/.zshrc
}

# 安装Node
function install_node()
{
    brew install node
    # 使用taobao源
    # npx nrm use taobao
    npm install yarn -g
}