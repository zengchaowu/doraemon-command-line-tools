'use strict'

exports.description = function () {
    '运行时分析工具，先用来找破绽。'
    'ios端，也有mac端'
    '运行后实际是一个js控制台。可以使用js的方法和函数操作进行。'
    `#pointer 获取对象`
    `choose(class) 获取所有类的实例对象`
    `可以写js函数，也可以写js的commonjs模块。`
    `可以写oc代码，例如category`
    `利用bfinject辅助注入，能够用mac的cycript注入ios的进程`
}

exports.install = function () {
    'wget https://cache.saurik.com/cycript/mac/cycript_0.9.594.zip -P ~/Downloads'
    'unzip ~/Downloads/cycript_0.9.594.zip -d ~/Downloads/cycript'
    'mv ~/Downloads/cycript ~/Modules/'
    // 将cycript目录加入环境变量就可以使用。
    `echo 'export PATH="/Users/zengchaowu/Modules/cycript:$PATH";' >> ~/.zshrc`
    // cycript依赖的是2.0的ruby，我们使用第三方工具修改mac-o中的依赖。
    'cd Modules/cycript'
    `install_name_tool -change /System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/libruby.2.0.0.dylib /System/Library/Frameworks/Ruby.framework/Versions/Current/usr/lib/libruby.dylib Cycript.lib/cycript-apl`
    `install_name_tool -change /System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/libruby.2.0.0.dylib /System/Library/Frameworks/Ruby.framework/Versions/Current/usr/lib/libruby.dylib Cycript.lib/libcycript.dylib`
    // ios 通过cydia直接安装cycript就可以直接ssh使用
}

exports.uninstall = function () {
    'brew uninstall ideviceinstaller'
}

exports.tips = function () {
    // 支持自定义函数
    `
    function findVC(view) {
        var cur_view = view;
        while ([cur_view isKindOfClass:NSClassFromString(@"UIViewController")] != true) {
            cur_view = [cur_view nextResponder];
        }
        return cur_view;
    }
    `
    // 可以将函数写入文件中。放入/usr/lib/cycript0.9/com，在下面新建目录并存放。
    // vi /usr/lib/cycript0.9/com/zengchaowu/tools.cy
    `
    (function(exports) {
        exports.pViews = function() {
            return [[UIApp keyWindow] recursiveDescription].toString();
        }
        exports.findVc = function(view) {
            var cur_view = view;
            while ([cur_view isKindOfClass:NSClassFromString(@"UIViewController")] != true) {
                cur_view = [cur_view nextResponder];
            }
            return cur_view;
        }
        exports.printIvars = function(obj) {
            var ivars = {};
            for (i in *obj) {
                try {
                    ivars[i] = (*obj)[i];
                } catch (e) {
                    
                }
            }
            return ivars;
        }
    })(exports);
    `
    '使用时 @import com.zengchaowu.tools'
    'tools.pViews()'

}