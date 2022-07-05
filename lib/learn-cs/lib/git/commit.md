---
title: commit规范
description: git commit规范
---
## 用例
```bash
# bug fix

```
## 简介
目的:
* 减少message混乱
* 代码review
* commit分类与查找
* 生成changelog
## 格式
```bash
# fix指明issue
git commit -m "<type>(<scope>): <subject> [<ISSUE_ID>]"
```
### type
```java
enum type{
  feat, // 新功能
  fix/to, // fix: bug只需要一次提交。 to: 多次提交的前几次，最后一次使用fix。
  docs, // 相关文档修改
  style, // 修改代码格式
  refactor, // 代码重构
  perf, // 性能优化
  test, // 测试用例相关
  chore, // 构建过程或辅助工具变动
  revert, // 代码回滚
  merge, // 代码合并
  ci, // 持续集成相关
  sync, // 分支同步
}
```
### scope
与项目类型有关，以app开发为例。
```java
enum scope{
  account,
  db,
  im,
  feed,
  i18n
}
```
### subject
规范:
* 建议使用中文
* 字符不能超过50个
* 结尾不加任何符号
```java
fix()
```