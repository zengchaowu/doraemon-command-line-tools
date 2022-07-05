# lerna
lerna是一个工具，用来将一个大的node项目进一步拆分为多个小的项目。

## 有两种工作模式
1. 默认模式
默认会在publish时，自动增加一个版本号，这个版本号由所有的模块共享。
2. 独立模式
每个模块存在独立的版本号。

## 初始化项目
```zsh
mkdir doraemon-cli && cd $_
npx lerna init # 使用默认的工作模式
```
```[此时目录结构为]
doraemon-cli
├── lerna.json
├── package.json
└── packages
```
