'use strict'

exports.description = function () {
    '修改mach-o文件中的版本依赖，例如cycript依赖2.0的ruby'
}

exports.install = function () {
    'wget https://opensource.apple.com/source/cctools/cctools-795/misc/install_name_tool.c -P ~/Downloads'
}

exports.uninstall = function () {
    'brew uninstall ideviceinstaller'
}