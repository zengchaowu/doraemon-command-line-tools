#!/bin/bash

function install()
{
    if [ ! -f "/usr/local/bin/ldid" ];then
    source='https://github.com/zengchaowu-com/ldid'
    git clone $source ~/Desktop/ldid
    cd ~/Desktop/ldid
    chmod 755 ldid
    mv ~/Desktop/ldid/ldid /usr/local/bin/ldid
    rm -fr ~/Desktop/ldid
    fi
}

install