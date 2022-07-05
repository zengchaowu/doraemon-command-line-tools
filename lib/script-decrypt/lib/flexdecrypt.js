'use strict'

exports.description = function() {
    'flexdecrypt是一个静态砸壳工具。'
}

exports.install = function () {
    'ssh root@192.168.2.119'
    'wget https://github.com/JohnCoates/flexdecrypt/releases/download/1.1/flexdecrypt.deb'
    'dpkg -i flexdecrypt.deb'
}

exports.uninstall = function () {
}


exports.run = function () {
    'cd ***.app'
    'flexdecrypt ***'
    'scp -r tmp/*** zengchaowu@192.168.2.246:/Users/zengchaowu/Desktop'
}