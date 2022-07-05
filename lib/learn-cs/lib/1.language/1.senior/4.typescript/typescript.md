---
title: TypeScript
---
# 简介

ts是一种新的语言，最终会编译成js代码。

ts的主要特性是为js加入了静态类型定义。

引入类型是为了更好的文档，并且能更早发现错误。

提供了类型自动推断。

# 特点

ts编译失败，也会生成js代码。

支持js项目部分ts化。

ts不断加入新特性，一旦新特性到达stage 3，就会发布到下一个版本。

# @types

为js文件加上类型声明。

# 创建一个ts包

npx tsdx create @doraemon/mac-tools

# TSConfig

# 根目录

```bash
extends // 继承自另外一个配置文件，使用nodejs样式解析路径。（默认空）
files		// 用于少部分文件，一般使用include代替。（默认空）
include // 定义哪些文件会被包含进项目中，路径相对于tsconfig.json父文件夹。（默认全部文件或者使用了files则为空）
exclude // 用于配合include，忽略掉include中的部分文件。（默认["node_modules", "bower_components", "jspm_packages"]）	
references	//
```
