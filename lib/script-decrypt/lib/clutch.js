'use strict'

exports.description = function() {
    'clutch砸壳工具'
    '这个是在ios设备上运行的'
    '很久没更新了'
    '在ios12无法运行，出现Segmentation fault: 11'
}

exports.dependencies = function () {
    'xcode'
    'xcode command line tools'
}

exports.install = function () {
    'cd Modules'
    'git clone https://github.com/KJCracks/Clutch.git'
    'cd Clutch'
    // TODO 这里是关掉SDK codesign验证。
    'killall Xcode'
    'cp /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/SDKSettings.plist ~/'
    'sudo /usr/libexec/PlistBuddy -c "Set :DefaultProperties:CODE_SIGNING_REQUIRED NO" /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/SDKSettings.plist'
    'sudo /usr/libexec/PlistBuddy -c "Set :DefaultProperties:AD_HOC_CODE_SIGNING_ALLOWED YES" /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/SDKSettings.plist'
    // 开始编译
    'rm -fr build'
    'xcodebuild clean build'
    'mkdir build'
    'cd build'
    'cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=../cmake/iphoneos.toolchain.cmake ..'
    'make -j$(sysctl -n hw.logicalcpu)'
    // 上传到手机端
    'scp ./build/Clutch root@192.168.2.119:/usr/bin/Clutch'
}

exports.uninstall = function () {
}

exports.run = function () {
    'otool -l ***/Payload/App |grep crypt'
}