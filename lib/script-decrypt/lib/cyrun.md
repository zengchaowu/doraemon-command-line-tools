'use strict'

exports.description = function () {
    'ios端软件'
    'cycript不兼容最新的ios系统，所以有了这个.'
}

exports.install = function () {
    'ssh root@192.168.2.119'
    'wget http://apt.saurik.com/debs/cycript_0.9.594_iphoneos-arm.deb'
    'wget http://www.tateu.net/repo/files/net.tateu.cycriptlistenertweak_1.0.0_iphoneos-arm.deb'
    'wget http://www.tateu.net/repo/files/net.tateu.cyrun_1.0.5_iphoneos-arm.deb'
    'apt install adv-cmds'
    'dpkg -i cycript_0.9.594_iphoneos-arm.deb'
    'dpkg -i net.tateu.cycriptlistenertweak_1.0.0_iphoneos-arm.deb net.tateu.cyrun_1.0.5_iphoneos-arm.deb'
    'cyrun -b com.tencent.weread -e'
}

exports.uninstall = function () {
    'brew uninstall ideviceinstaller'
}