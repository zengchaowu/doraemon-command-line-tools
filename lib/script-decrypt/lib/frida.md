'use strict'

exports.description = function() {
}

exports.install = function () {
    'pip3 install frida-tools'
}

exports.uninstall = function () {
}

exports.run = function () {
    // 查看usb设备正在运行的软件
    'frida-ps -U -a'
    // 注入某个进程
    'frida -U -p 3785'
    // 追踪函数调用
    'frida-trace -U -i compress -i "*playWithAnimation*" 抖音'
    // 追踪OC方法
    'frida-trace -U -m "-[AWEFeedTableViewController play*]" 抖音'
    // 跟踪模块
    'frida-trace -U -I Aweme 抖音'
    // 根据偏移地址跟踪函数
    'frida-trace -U -f com.ss.iphone.ugc.Aweme -a Aweme\!2A65CCC'
    // 跟踪调用栈 js中添加
    `log('\tBacktrace:\n\t') + Thread.backtrace(this.context,Backtrace.ACCURATE).map(DebugSymbol.fromAddress).join('\n\t')`

    // 进入交互模式
    `frida -U 抖音`

    // 拦截某个函数，可以用来获取参数和返回值
} 

exports.example = function() {

    // 注入js脚本文件

    `
    // aweme.js
    if(ObjC.available) {
        for(var className in ObjC.classes) {
            if(className.toLowerCase().indexOf('jail') != -1) {
                console.log("[#]className---->"+className)
                var methods = eval('ObjC.classes.' + className + '.$methods')
                for (var index = 0; index < methods.length; index++) {
                    try {
                        if(methods[index].toLowerCase().indexOf('jail') != -1) {
                            console.log("[-] " + methods[index])
                        }
                    } catch (error) {
                        console.log("[!] Exception: " + error.message)
                    }
                }
            }
        }
    }
    `

    // 执行
    `frida -U -l ~/Desktop/Aweme/aweme.js 抖音`




    // hook实例
    `
    if(ObjC.available) {
        try {
            var className = 'AWEPlayInteractionLikeElement'
            var methodNames = ['- buttonClicked']
    
            for (var index in methodNames) {
                var methodName = methodNames[index]
                var hook = eval('ObjC.classes.' + className + '["' + methodName + '"]')
                Interceptor.attach(hook.implementation, {
                    onEnter: function(args) {
                        console.log("ARGS:" + args)
                    },
                    onLeave: function(retval) {
                        console.log("RETVAL:" + retval)
                        retval.replace(ptr(0x0))
                    }
                })
            }
        } catch (error) {
            console.log("[!] Exception:" + error.message)
        }
    }
    `
}