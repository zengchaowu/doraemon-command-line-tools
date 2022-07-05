'use strict'

exports.description = function() {
    'Mac软件'
    'iPhone的ipa管理工具，类似于adb'
    '依赖libmobiledevice，实现截图，查看udid等功能。'
}

exports.install = function () {
    'brew install ideviceinstaller'
}

exports.uninstall = function () {
    'brew uninstall ideviceinstaller'
}

exports.list = function () {
    'ideviceinstaller -l -o list_all'
}

exports.add = function () {
    'ideviceinstaller -i ***.ipa'
}

exports.remove = function () {
    'ideviceinstaller -U [bundleid]'
}

// 下面的命令属于libmobiledevice
exports.udid = function () {
    'idevice_id --list'
}

exports.screenshot = function () {
    'idevicescreenshot screenshot.png'
}

exports.deviceInfo = function () {
    'ideviceinfo'
}

exports.deviceLog = function () {
    'idevicesyslog'
}