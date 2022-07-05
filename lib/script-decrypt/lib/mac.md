
## 设备管理

> adv-cmds

```bash
# 类似ps命令，手机没有自带，都在这个包里。
```

> apple-file-conduit

```bash
# 用于助手类应用访问iOS设备所有文件
```

> appsync-unified

```bash
# 绕过系统对应用的签名验证，可以随意安装和运行ipa.
```

> ideviceinstaller

```bash
# iPhone的ipa管理工具，类似于adb
brew install ideviceinstaller
ideviceinstaller -l -o list_all
ideviceinstaller -i ***.ipa
ideviceinstaller -U [bundleid]
idevice_id --list
idevicescreenshot screenshot.png
ideviceinfo
idevicesyslog
```

> usbmuxd

```bash
# 使用usb替代网络连接，因为ssh网络连接容易断开。
brew install usbmuxd
# 在mac设备上开启另外一个连接到本机ssh，就可以通过usb连接手机的ssh了。
# 使用时，需要保持两个同时开启，因为前者作为后者的代理。
iproxy 2222 22 设备udid
ssh -p 2222 root@127.0.0.1
```

> charles

```bash
# 首先用iphone 连接到charles，然后charles设置external proxy就可以科学上网啦。
```

> sip

```bash
# 系统sip，禁止软件以root身份运行。
# 可能需要关闭，进入恢复模式，终端输入csrutil disable，再重启即可
```

## 砸壳

> frida-ios-dump

```bash
# 砸壳时，必须保持应用在前台。
git clone https://github.com/AloneMonkey/frida-ios-dump
cd frida-ios-dump
sudo pip install -r requirements.txt --upgrade
# 在手机上Cydia中添加build.frida.re源，然后安装Frida
# 修改dump.py中的用户名和密码，以及ssh地址。
python3 dump.py 抖音极速版
```

> clutch

```bash
# 在ios12无法运行，出现Segmentation fault: 11
cd Modules
git clone https://github.com/KJCracks/Clutch.git
cd Clutch
# TODO 这里是关掉SDK codesign验证。
killall Xcode
cp /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/SDKSettings.plist ~/
sudo /usr/libexec/PlistBuddy -c "Set :DefaultProperties:CODE_SIGNING_REQUIRED NO" /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/SDKSettings.plist
sudo /usr/libexec/PlistBuddy -c "Set :DefaultProperties:AD_HOC_CODE_SIGNING_ALLOWED YES" /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/SDKSettings.plist
# 开始编译
rm -fr build
xcodebuild clean build
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=../cmake/iphoneos.toolchain.cmake ..
make -j$(sysctl -n hw.logicalcpu)
# 上传到手机端
scp ./build/Clutch root@192.168.2.119:/usr/bin/Clutch
```

> dumpdecrypted

```bash
# 这个是在ios设备上运行的,很久没更新了,ios12出现下面错误
cd Modules
git clone https://github.com/stefanesser/dumpdecrypted
cd dumpdecrypted
make
# 上传到手机端
scp ./dumpdecrypted.dylib root@192.168.2.210:/var/root
ssh root@192.168.2.210
cd /var/root
ldid -S dumpdecrypted.dylib
DYLD_INSERT_LIBRARIES=dumpdecrypted.dylib /var/containers/Bundle/Application/3394DA0C-6426-4CBA-BEA3-B096CF1E0860/AwemeLite.app/AwemeLite
```

> 


```bash
'use strict'

const http = require('http')
const progress = require('child_process')

exports.description = function() {
    'Mac软件'
}

exports.issue = function () {
}

exports.log = function () {
}

exports.install = function () {
    let src = 'https://download.revealapp.com/Reveal.app.zip'
    src = 'http://m6.pc6.com/xuh6/revealapp24.zip'
    const file = src.split('/').pop()
    const name = file.split('.').slice(0, -1).join('.')
    const app = '/Applications/Reveal.app'
    progress.exec('rm -fr ~/Downloads/' + file, function(error, stdout, stderr) {
        console.log(error,stdout,stderr)
        progress.exec('wget -P ~/Downloads ' + src, function(error, stdout, stderr) {
            console.log(error,stdout,stderr)
            progress.exec('unzip -d ~/Downloads ~/Downloads/' + file, function(error, stdout, stderr) {
                console.log(error,stdout,stderr)
                progress.exec('mv ~/Downloads/' + name + '/Reveal.app' + ' /Applications', function(error, stdout, stderr) {
                    console.log(error,stdout,stderr)
                })
            })
        })
    })
    const ip = '192.168.2.119'
    const framework = '~/Library/Application\\ Support/Reveal/RevealServer/iOS/RevealServer.framework'
    const path = '/Library/Frameworks'
    progress.exec(`scp -r ${framework} root@${ip}:${path}`, function(error, stdout, stderr) {
        console.log(error,stdout,stderr)
    })
}

exports.uninstall = function () {
}

exports.run = function () {
}
```