#!/bin/bash

function install()
{
    if [ ! -f "/usr/local/bin/class-dump" ];then
    source='https://github.com/zengchaowu-com/class-dump'
    git clone $source ~/Desktop/class-dump
    cd ~/Desktop/class-dump
    xcodebuild
    mv ~/Desktop/class-dump/build/Release/class-dump /usr/local/bin/class-dump
    rm -fr ~/Desktop/class-dump
    fi
}

# 如果没有砸壳，那么无法导出。
function dump()
{
    # 使用otool检测是否加壳
    otool -l $1 | grep crypt

    # class-dump -S -s -H $1 -o $2
    # class-dump --arch armv7 -H $1 -o $2
}
      
app_path=/Users/zengchaowu/Desktop/七猫小说/Payload/YYReader.app

dump $app_path/YYReader $app_path

# install