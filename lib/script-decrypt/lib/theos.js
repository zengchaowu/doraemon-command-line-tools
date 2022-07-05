'use strict'

exports.description = function() {
    'theos逆向开发工具'
}

exports.install = function () {
    'sudo git clone --recursive https://github.com/theos/theos.git /opt/theos'
    'cd /opt/theos'
    'brew install ldid'
}

exports.uninstall = function () {
}

exports.run = function () {
    'otool -l ***/Payload/App |grep crypt'
}