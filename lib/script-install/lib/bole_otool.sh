#!/bin/bash

# 如果没有砸壳，那么无法导出。
function check()
{
    # 使用otool检测是否加壳
    otool -l $1 | grep cryptid

    # class-dump -S -s -H $1 -o $2
    # class-dump --arch armv7 -H $1 -o $2
}

app_path=/Users/zengchaowu/Desktop/七猫小说/Payload/YYReader.app

check $app_path/YYReader