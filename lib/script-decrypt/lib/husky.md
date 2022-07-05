> 主要用于lint commit message  
> 详细介绍请访问 [官方文档](https://typicode.github.io/husky/#/)
## 用例
```bash
# 初始化
yarn add husky --dev && yarn husky init
# 如果package会被其他package使用，用于在npm install后自动执行脚本。
yarn add pinst --dev

# 增加hook，使用commitlint校验
yarn husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

# 跳过hook
git commit -m "yolo!" --no-verify
```
## 重点
```bash
# 工作原理
git本身提供了hook方法，在.git/hooks下存在样例
yarn husky init 会生成.husky文件夹
yarn husky add 会在.husky目录下生成bash脚本
生成的脚本会与在.git/hooks下有相同行为.

# 每次rm .git后需要执行yarn husky install
install是将当前git与husky进行关联。
实际上修改的是.git/config文件。
```