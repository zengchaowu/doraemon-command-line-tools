#!/bin/bash

function install()
{
    brew install nmap
}

# 扫描
function scan_lan()
{
    # 拿到本机网关
    lan_ip=`cat /etc/resolv.conf | grep nameserver | cut -d " " -f 2`

    # 扫描局域网
    nmap -sP $lan_ip/24

    # 连接到ssh
    
}

scan_lan