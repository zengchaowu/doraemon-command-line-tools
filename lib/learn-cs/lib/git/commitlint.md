> 对commit message进行规范  
> [官方文档](https://commitlint.js.org/#/)
## 用例
```bash
# @commitlint/config-conventional为规范之一
yarn add @commitlint/cli @commitlint/config-conventional --dev
echo "node_modules" > .gitignore
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# 测试能否使用
echo 'sss' | yarn commitlint

# lint指定的commit，例如最后一个commit
yarn commitlint --from=HEAD~1

# 配合husky
yarn add husky --dev
yarn husky install
yarn husky add .husky/commit-msg "yarn commitlint --edit $1"

# 替代git commit，yarn commit需要一步一步选择subject等
yarn add -D @commitlint/{cli,config-conventional,prompt-cli}
scripts 添加 "commit": "commit"
git add .
yarn commit

# 使用Commitizen替代上面的prompt，这个交互更好，注意修改husky等工具中的commit为cz
# 全局使用 项目只需要使用初始化方法初始化后，就可以直接使用git cz来hook commit
yarn global add commitizen cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
# 现在使用git cz替代git commit或者git cz -a 替代 git commit -am

# 局部使用 同理初始化
yarn add -D commitizen
yarn commitizen init cz-conventional-changelog --yarn --dev --exact
script 添加 "cz": "cz"
git add .
yarn cz
# hook git commit 与 husky共存
"husky": {
  "hooks": {
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
  }
}

# 使用Conventional Changelog生成changelog
yarn add conventional-changelog-cli -D
scripts 添加 "genlog": "conventional-changelog -p angular -i CHANGELOG.md -s"
# 首次执行
yarn conventional-changelog -p angular -i CHANGELOG.md -s -r 0
```