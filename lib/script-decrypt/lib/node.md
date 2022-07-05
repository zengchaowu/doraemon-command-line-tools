# Node 模块

node中，每个js文件就是一个模块。

多个js文件可以组成一个package，也就是包。

npm是基于package的管理工具。

# CommonJS规范

js本身没有包管理规范，js文件最外层的代码是全局的。多个js文件，不需要互相导入，就可以互相访问变量。

规范由两部分构成

## 1. 包结构

commonjs 规定了，一个符合规范的包应该为如下的结构。

> package.json 描述文件
>
> bin/ 二进制可执行程序
>
> lib/ js代码
>
> doc/ 相关文档
>
> test/ 单元测试

## 2. 描述文件

> 也就是package.json
>
> name 包名
>
> description 包简介
>
> version 版本
>
> keywords 关键字，用于npm分类搜索
>
> maintainers 维护者列表
>
> contributors 贡献者列表
>
> bugs 反馈网页
>
> licenses 许可证
>
> respositories 源码位置
>
> dependencies 依赖



> 可选字段:
>
> homepage 网站地址
>
> os 支持的操作系统
>
> cpu 支持的cpu架构
>
> engine 支持的js引擎
>
> builtin 是否是内建库
>
> directories 包目录说明
>
> implements 实现了哪些commonjs规范
>
> scripts 包管理器可操作的脚本对象

# Node的实现

node是基于commonjs标准的一种实现，npm是commonjs包管理器标准的一种实现。



> Node与规范的区别
>
> author 作者
>
> bin 此目录下文件在install -g后被添加到系统可执行路径中
>
> main requiere的入口模块，require会执行这个js文件。如果不存在main，则默认查找index.js
>
> devdependencies 开发时依赖包，只在开发时才会安装。



## Npm使用

npm install 会下载包，并解压到node_modules文件夹下。

安装好之后，使用require导入包。

npm全局包，会放在同一个目录下，Mac下为~/.config/yarn/global/node_modules，然后其中的bin目录下的文件会被软链接到/usr/local/bin





也可以安装本地包，只需要指明package.json文件的路径即可。



> npm link
>
> 在本地开发多个包时，可能需要互相引用。
>
> 首先： 我们需要在package2中执行npm link，将其在全局node_modules下建立一个软链接，然后在会被link找到。
>
> 此时在package1 中 npm link package2 就可以将package2软链到package1的node_modules下。
>
> link与add是类似的，但是add只会查找npm源，link只查找本地全局包环境。

