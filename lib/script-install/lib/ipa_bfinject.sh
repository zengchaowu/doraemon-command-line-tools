#!/bin/bash

function install()
{
    if [ ! -f "/var/root/bfinject" ];then
    source='https://github.com/zengchaowu-com/bfinject'
    git clone $source ~/Desktop/bfinject
    cd ~/Desktop/bfinject

    # 复制到设备的/var/root/bfinject目录下
    remote_ip=192.168.2.210
    scp ./bfinject.tar root@$remote_ip:/var/root/bfinject

    # 在设备上执行
    tar xvf bfinject.tar 

    fi
}

function crack()
{
    # 脱壳进入沙盒的Documents文件夹


    # 插入动态库
    DYLD_INSERT_LIBRARIES=/usr/lib/dumpdecrypted.dylib ./WeRead.app/WeRead
}

install