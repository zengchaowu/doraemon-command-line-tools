'use strict'

exports.description = function() {
    'mach-o是ios和macos下的应用程序格式。'
    'iOS下，多个架构的mach-o文件会组成一个通用胖二进制包，它将多架构的指令分开存储，在文件起始位置fat_header中说明各个架构的偏移量，通过偏移量，来指定某个架构下运行哪些指令集。'
    '我们在Payload中看到的二进制文件，一般来说是由多个mach-o程序组成。'
    'https://opensource.apple.com/source/xnu/xnu-344/EXTERNAL_HEADERS/mach-o/fat.h'
    
    `
    通用二进制程序结构:
        Fat Header (一个fat_header结构体,包含魔数，架构数量，多个fat_arch结构体，在fat_header结构体后线性存储。)
        Mach-O
        Mach-O
        Mach-O
    `

    `
    Mach-O结构:
        Mach-O Header (一个mach_header_64结构体,包含魔数（用于标识大小端，ios为小端序），cpu架构，文件类型，加载命令数量等。)
        Load Commands (告诉加载器如何处理二进制数据，例如加载动态库就是在这里。使用结构体load_command，包含cmd（命令类型）和size。)
                Segment分类：每个段顶一个一个虚拟爱内存区域，也就是一块虚拟的空间。每个段会包含多个节Section
                    __PAGEZERO段：第一个段，用于处理Null，不可读写，不可执行。
                    __TEXT段：包含可执行代码和一些只读数据，这个段的权限为可读，可执行，不可写。
                    __DATA段：包含可被更改的数据，可读写。
                    __LINKEDIT段：包含动态链接库的原始数据，如符号，字符串和重定位表条目等。

                Section分类： 节也是代表的一块虚拟的空间，相当于Segment进一步细分。
                    __TEXT段下的Section分类：
                        __text节：程序代码区
                        __stubs __syub_helper: 帮助动态链接器绑定符号
                        __const: const修饰的常量
                        __objc_methname: oc方法名
                        __cstring: 只读的c字符串
                        __objc_classname: oc类名
                        __objc_methtype: oc方法签名
                        __gcc_except_tab __ustring __unwind_info: GCC编译器自动生成，用于确定异常发生时栈对应的信息（栈指针，返回地址和寄存器信息）
                    __DATA段:
                        __got: 全局非懒绑定符号指针表
                        __la_symbol_ptr: 懒绑定符号指针表 // 懒绑定也就是在方法被调用时才去寻找对应的调用地址。（非懒，在动态链接器加载程序时就会绑定真实地址）
                        __mod_init_func: c++类的构造函数
                        __const: 未初始化的常量
                        __cfstring: CoreFoundation字符串
                        __objc_classlist: OC类列表
                        __objc_nlclslist: 实现了+load方法的oc类列表
                        __objc_catlist: OC分类列表
                        __objc_protolist: OC协议列表
                        __objc_imageinfo: 用于区分oc1.0和oc2.0
                        __objc_const: oc初始化过的常量
                        __objc_selrefs: oc选择器SEL引用列表
                        __objc_protorefs: OC协议引用列表
                        __objc_classrefs: oc类引用列表
                        __objc_superrefs: oc超类（即父类）引用列表
                        __objc_ivar: OC实例变量
                        __objc_data: oc初始化过的变量
                        __data: 实际初始化数据段
                        __common: 未初始化过的符号声明
                        __bss: 未初始化的全局变量
        Data
    `

}

exports.log = function () {
}

exports.install = function () {
    'brew install jtool2 --cask'
}

exports.uninstall = function () {
}

exports.run = function () {
}