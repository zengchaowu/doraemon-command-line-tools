'use strict'

exports.description = function() {
    'Mac软件'
    'frida-ios-dump是一个静态砸壳工具。'
    '通过执行git包下的py脚本，进行砸壳。'
    '砸壳时，必须保持应用在前台。'
}

exports.log = function () {
    '2021.01.27 iPhone 6s iOS13.6 抖音极速版13.4.0 砸壳成功。'
    '砸壳后需要重签名'
}

exports.install = function () {
    'git clone https://github.com/AloneMonkey/frida-ios-dump'
    'cd frida-ios-dump'
    'sudo pip install -r requirements.txt --upgrade'
    // 在手机上Cydia中添加build.frida.re源，然后安装Frida
    // 修改dump.py中的用户名和密码，以及ssh地址。
    'python3 dump.py 抖音极速版'
}

exports.uninstall = function () {
}

exports.run = function () {
    'cd ***.app'
    'flexdecrypt ***'
    'scp -r tmp/*** zengchaowu@192.168.2.246:/Users/zengchaowu/Desktop'
}