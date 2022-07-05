#!/bin/bash

function install()
{
    if [ ! -f "/usr/local/bin/cartool" ];then
    source='https://github.com/zengchaowu-com/cartool'
    git clone $source ~/Desktop/cartool
    cd ~/Desktop/cartool
    xcodebuild
    mv ~/Desktop/cartool/build/Release/cartool /usr/local/bin/cartool
    rm -fr ~/Desktop/cartool
    fi
}

install