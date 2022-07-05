

## 场景
我长期维护一个node包，代码量不断增加，出现以下问题：
1. 代码无法被单独共享
2. 包过于庞大
3. 代码维护困难，模块过多
4. 编译运行变慢
对于上面的问题，主要的解决方案是使用模块化重构项目。
1. 将项目按照模块拆分到多个node包中
2. 各个包互相依赖。
首先考虑多git仓库，带来的问题：
1. 过多的package会产生大量的node_modules
2. package修改很麻烦，如果分为多个git仓库，需要一直切换
3. 过多拆分又导致同一项目下模块的相关性降低，其他人无法了解整个项目所有代码变更
4. 包互相依赖，需要频繁执行npm link
5. 依赖管理也变得麻烦，可能需要编写bash才能解决
## Lerna + yarn workspace
vue和babel等项目使用的解决方案。优势如下：
1. node_modules只存在一份
2. 不需要手动npm link
3. 自动依赖管理和版本管理
4. 自动发布
## 使用
创建一个新项目
```bash
git init doraemon && cd $_
yarn init -y
git add .
git commit -m "chore: yarn init -y"
git branch -M dev
```
创建一个子工程
```bash
lerna create @doraemon/account -y
```


```bash
git init doraemon && cd $_
yarn init -y
lerna init

yarn add lint-staged -D
yarn add @commitlint/cli @commitlint/config-conventional --dev
echo "node_modules" > .gitignore
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

yarn add husky --dev
yarn husky install
yarn husky add .husky/commit-msg "yarn commitlint --edit $1"

yarn add -D commitizen
yarn commitizen init cz-conventional-changelog --yarn --dev --exact

yarn add conventional-changelog-cli -D
```