#!/bin/bash

function install()
{
    # 安装在移动设备上
    if [ ! -f "/usr/lib/dumpdecrypted" ];then
    source='https://github.com/zengchaowu-com/dumpdecrypted'
    git clone $source ~/Desktop/dumpdecrypted
    cd ~/Desktop/dumpdecrypted

    # 编译
    make
    # 签名
    ldid -S dumpdecrypted.dylib
    # 或者
    # codesing -f -s
    # 查看可用的签名
    security find-identity -v -p codesigning
    codesign --force --verify --verbose --sign B5526743F855B2D0A6A315B829ACAD37BD25C4FD dumpdecrypted.dylib
    
    # 复制到设备的/usr/lib目录下
    remote_ip=192.168.2.210
    scp ./dumpdecrypted.dylib root@$remote_ip:/usr/lib/dumpdecrypted.dylib

    rm -fr ~/Desktop/dumpdecrypted
    fi
}

function crack()
{
    # 脱壳进入沙盒的Documents文件夹


    # 插入动态库
    DYLD_INSERT_LIBRARIES=/usr/lib/dumpdecrypted.dylib ./WeRead.app/WeRead
}

install