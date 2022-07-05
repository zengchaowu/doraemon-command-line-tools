'use strict';

function run() {

}

// 扫描设备(局域网/USB/蓝牙)
const ConnectType = Object.freeze({
    USB: Symbol('USB'),
    WIFI: Symbol('WIFI'),
    BLUETEETH: Symbol('BLUETEETH')
})
const scan = function(type) {
    switch (type) {
        case ConnectType.USB:
            scan_usb()
            break;
        case ConnectType.WIFI:
            scan_wifi()
            break;
        case ConnectType.BLUETEETH:
            scan_blueteeth()
            break;
        default:
            break;
    }
}
function scan_usb() {
    // 查看所有通过USB连接的设备
    'idevice_id --list'
    // 跳过设置向导
    '利用i4助手跳过'
    // 越狱设备
    jailbreak()
    // 配置代理服务器，用电脑做代理服务器。
    'chls.pro/ssl 安装证书'
    '关于本机中信任此证书'
    // 安装cydia
    cydia()
    // 安装openssh
    openSSH()
    // ssh到ios设备，修改root密码
    passwd()
    // 将当前所有app全部集中到一个文件夹中
    '手动操作'
    // 安装ssl kill switch 2 从而禁用app的https验证。
    '这里我们安装多米诺骨源'
    // 安装frida用于砸壳
    '可以参考cli-plugin-ios中相关'
}
function scan_wifi() {
}
function scan_blueteeth() {
}

// 初始化设备
exports.init = function() {

}

// 越狱设备
exports.jailbreak = function() {
    '使用CheckRa1n越狱'
}

// 安装Cydia
exports.cydia = function() {
    '安装Cydia'
}

// 安装openSSH
exports.cydia = function() {
    '安装openSSH'
    'cydia中搜索安装'
}

// 修改root密码