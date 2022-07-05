'use strict'

exports.description = function() {
    'dumpdecrypted砸壳工具'
    '不够自动化，操作繁琐，2014年就不更新了。'
    '这个是在ios设备上运行的'
    '很久没更新了,ios12出现下面错误。'
    `dyld: Symbol not found: ___chkstk_darwin
    Referenced from: dumpdecrypted.dylib (which was built for iOS 14.3)
    Expected in: /usr/lib/libSystem.B.dylib
    in dumpdecrypted.dylib
    Abort trap: 6`
}

exports.dependencies = function () {
    'xcode'
    'xcode command line tools'
}

exports.install = function () {
    'cd Modules'
    'git clone https://github.com/stefanesser/dumpdecrypted'
    'cd dumpdecrypted'
    'make'
    // 上传到手机端
    'scp ./dumpdecrypted.dylib root@192.168.2.210:/var/root'
    'ssh root@192.168.2.210'
    'cd /var/root'
    'ldid -S dumpdecrypted.dylib'
    'DYLD_INSERT_LIBRARIES=dumpdecrypted.dylib /var/containers/Bundle/Application/3394DA0C-6426-4CBA-BEA3-B096CF1E0860/AwemeLite.app/AwemeLite'
}

exports.uninstall = function () {
}

exports.run = function () {
    'otool -l ***/Payload/App |grep crypt'
}