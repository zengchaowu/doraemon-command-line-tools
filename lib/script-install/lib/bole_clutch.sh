#!/bin/bash

# clutch砸壳工具

function install()
{
    # 需要安装在越狱的移动设备上。

    source='https://github.com/zengchaowu-com/Clutch'
    git clone $source ~/Desktop/Clutch
    cd ~/Desktop/Clutch

    # 关闭codesign错误
    killall Xcode
    cp /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/SDKSettings.plist ~/
    sudo /usr/libexec/PlistBuddy -c "Set :DefaultProperties:CODE_SIGNING_REQUIRED NO" /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/SDKSettings.plist
    sudo /usr/libexec/PlistBuddy -c "Set :DefaultProperties:AD_HOC_CODE_SIGNING_ALLOWED YES" /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/SDKSettings.plist

    # xcode先用账号登陆，并自动管理证书。
    # 使用xcode生成
    xcodebuild clean build

    # 或者使用cmake
    # mkdir build
    # cd build
    # cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=../cmake/iphoneos.toolchain.cmake ..
    # make -j$(sysctl -n hw.logicalcpu)

    # 将生成的二进制程序，拷贝到越狱设备的/usr/bin/Clutch
    cd build
    remote_ip=192.168.2.210
    scp ./Clutch root@$remote_ip:/usr/bin/Clutch
}

function info()
{
    # 需要ssh到设备上
    Clutch -i
}


function break()
{
    # 需要保持app启动
    Clutch -d com.tencent.weread

    # 导出的ipa为设备架构的Thin版本，如果需要Fat版本，需要多个设备生成再libpo。

    # 很多时候无法脱壳，会生成不了ipa。
}

app_path=/Users/zengchaowu/Desktop/七猫小说/Payload/YYReader.app

break $app_path/YYReader