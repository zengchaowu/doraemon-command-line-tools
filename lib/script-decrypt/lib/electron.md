

## 介绍

使用前端技术来构建桌面应用，使用chromium进行渲染。

## 优势

1. vscode使用此技术开发。
2. 跨平台，可用于mac windows linux。
3. 前端技术栈也很容易和web端公用代码。

## 基本流程

#### 1. 不使用UI框架

```bash
# electron本质上是一个npm包
git init electron-demo && cd $_
yarn init -y
# 主脚本，制定了运行主进程的应用程序的入口。
touch index.js
touch index.html
yarn add electron --dev
```

```javascript
// index.js

// app负责整个应用程序的生命周期
const { app, BrowserWindow } = require('electron')
...
```

> 必须使用electron .来运行这个项目
>
> 例如在mac下，使用electron运行会替换内部一个Mac程序的内容。node_modules/electron下可以看到那个app文件。

#### 2. Electron Forge

简化项目的创建和发布

```bash
# 创建项目
yarn create electron-app my-app
# 启动 这里将start映射成electron，所有可以使用yarn start。
cd my-app && yarn start
# 生成安装包
yarn make
# 发布 例如发布到更新服务器
自建更新服务器
```

#### 3. Vue

结合Vue2进行开发

```bash

```

