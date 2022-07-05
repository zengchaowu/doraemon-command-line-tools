'use strict'

exports.description = function() {
    'i4助手可以用来下载未砸壳的app'
}

exports.install = function () {
}

exports.uninstall = function () {
}

exports.run = function () {
    'otool -l ***/Payload/App |grep crypt'
}