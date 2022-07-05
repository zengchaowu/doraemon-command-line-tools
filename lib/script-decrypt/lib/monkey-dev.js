'use strict'

exports.description = function() {
    'Mac软件'
    '使用logos语法'
    '最常用的逆向工具，2018年不再更新，聚合了很多逆向软件。'
}

exports.issue = function () {
    // 错误一
    'Failed to download https://raw.githubusercontent.com/AloneMonkey/frida-ios-dump/3.x/dump.py to /opt/MonkeyDev/bin/dump.py'
    //      由于挂代理的问题，下载脚本，然后修改，给downloadFile方法加上代理。
    // 错误二
    `File /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/Library/Xcode/Specifications/MacOSX Package Types.xcspec not found`
    //      新版Xcode没有Specifications了，从xcode11复制一份.
}

exports.log = function () {
    '2021.01.27 iPhone 6s iOS13.6 抖音极速版13.4.0 砸壳成功。'
}

exports.install = function () {
    'wget https://raw.githubusercontent.com/AloneMonkey/MonkeyDev/master/bin/md-install'
    // 修改downloadFile方法
    // "$curlPath" --output "$targetPath" "$sourceUrl" || \
    // 修改为
    // curl -x http://127.0.0.1:1087 --output "$targetPath" "$sourceUrl" || \
    'sudo /bin/sh ./md-install'
}

exports.uninstall = function () {
}

exports.run = function () {
    'cd ***.app'
    'flexdecrypt ***'
    'scp -r tmp/*** zengchaowu@192.168.2.246:/Users/zengchaowu/Desktop'
}