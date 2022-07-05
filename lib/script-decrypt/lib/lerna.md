## 起因

大型node项目开发过程中，一般需要进行模块化的拆分，每个模块之间可能会相互依赖。
大型项目依赖的第三方库太多，很多模块之间可以共享node_modules中的大部分第三方库。
各个模块的版本管理也很麻烦，特别是每个模块的版本都不同时。

## 介绍

npm社区，也发现了这个问题，lerna是其中的一种解决方法，另外yarn也提出了workspace的概念。但是lerna使用的较为广泛，vue和react等知名组件库，都是使用其作为解决方案。

## 优势

1. 依赖自动管理
2. node_modules共享
3. 自动发布和生成CHANGELOG

## 用法

| api             |             作用              |
| --------------- | :---------------------------: |
| lerna init      |      初始化一个空文件夹       |
| lerna list      |       显示所有的package       |
| lerna bootstrap |  遍历所有包安装依赖，并链接   |
| lerna link      |          链接package          |
| lerna change    |        显示有修改的包         |
| lerna run       | 执行package.json中的脚本命令  |
| lerna add       |  为某个包或者所有包安装依赖   |
| lerna import    |  导入某个git仓库作为package   |
| lerna create    |        创建新的package        |
| lerna clean     |    清空所有的node_modules     |
| lerna diff      |      显示所有修改过的包       |
| lerna exec      | 执行某个脚本在所有的package中 |
| lerna publish   |             发布              |

## 与yarn  workspace合作

yarn workspace提供了类似的功能，帮助管理多个子project，自动安装和管理相互之间的依赖关系。yarn能够保证左右project公用的依赖只会被下载和安装一次。

workspace附带在yarn包中，只需要修改package.json文件就可以配置好，

| api          |                             作用                             |
| ------------ | :----------------------------------------------------------: |
| yarn install | 子package中的包可能会被提升到根目录从而实现共享，子package中只存在引用。 |
