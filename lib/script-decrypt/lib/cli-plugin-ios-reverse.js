'use strict'

exports.ssh = function () {
    // 配置ssh免密登录
    `ssh-keygen -t rsa -P ''
    ssh-copy-id -i ~/.ssh/id_rsa root@192.168.2.210`
}

exports.vpn = function () {
    // 给ios配置上科学上网工具
    // 首先用iphone 连接到charles，然后charles设置external proxy就可以科学上网啦。
}

exports.sip = function () {
    // 系统sip，禁止软件以root身份运行。
    // 可能需要关闭，进入恢复模式，终端输入csrutil disable，再重启即可
}

exports.usb = function () {
    // 使用usb替代网络连接，因为ssh网络连接容易断开。
    'brew install usbmuxd'
    'iproxy 2222 22 设备udid'
    // 在mac设备上开启另外一个连接到本机ssh，就可以通过usb连接手机的ssh了。
    // 使用时，需要保持两个同时开启，因为前者作为后者的代理。
    'ssh -p 2222 root@127.0.0.1'
}

exports.download = function () {

}