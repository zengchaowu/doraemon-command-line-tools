'use strict'

exports.description = function() {
    'otool是一个查看包是否砸壳过的工具'
    '用于二进制可执行文件'
}

exports.install = function () {
    'mac下自带'
}

exports.uninstall = function () {
}

exports.run = function () {
    'otool -l ***/Payload/App |grep crypt'
}