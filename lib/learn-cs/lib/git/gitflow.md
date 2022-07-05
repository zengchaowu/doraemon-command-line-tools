---
title: gitflow工作流
description: gitflow工作流
---
## 用例
### 1. 固定分支
```bash
# 主分支,用于发布版本和hotfix
git branch -M main
# 开发分支
git checkout -b develop main
```
### 2. 热修复/线上bug修复
```bash
# 从线上分支检出
git checkout -b hotfix/2.9.123 main
git add && git commit
# tag版本号中bug位+1
git tag 2.9.124
# 合并入develop
git merge hotfix/2.9.124 develop
# 合并入main
git merge hotfix/2.9.124 main
```
### 3. 开发新功能
```bash
# 从develop分支检出
git checkout -b feat/2.10.0 develop
git add && git commit
#  合并入develop
git merge feat/2.10.0 develop
```
### 4. 提测
```bash
git checkout -b release/2.10.0 develop # 从develop分支检出
git merge # 通过合并其他bugfix分支进行修改
git tag 2.10.0  # 测试完成 发布新版本
git merge release/2.10.0 main # 合并入主分支
```
### 5. 修复bug
```bash
git checkout -b bugfix/2.10.0 release/2.10.0 # 从提测版本检出
git add && git commit
git checkout develop && git merge bugfix/2.10.0 # 合并入develop
git checkout release/2.10.0 && git merge bugfix/2.10.0 # 合并入release
```
## 问答
开发新特性过程中修复当前bug需要新建bugfix分支吗？
> 不需要，bugfix分支只用来修复release分支bug。如果是开发中修复，在commit message中注明bugfix即可。
bug过多怎么处理分支？
> 可以一个bugfix分支处理全部bug，也可以按类型处理。
bugfix后还需要拉新release分支再测试吗？
> 不需要，此轮修复完成后，直接在此分支测试，新的bug仍然在此分支修复。
commit message与分支的关系？
> 本质上没有相关性，但有时子分支上commit过多，可以进行合并，然后根据分支名只提交一次commit到develop中。
在什么时候进行code review
> 一般在pr对分支合并的时候进行review最好，不过结对编程就不好说了。
主分支这么多commit，怎么保证每个commit都有tag呢
> 在提交给codereview之前，我们对自己新特性的分支commit要进行合并，通过rebase，将多个commit合并为类似分支名的单个commit。最后才会将这个commit，merge到主分支上。
## 流程
1. 开始2.5.0工作流程
2. 从develop新建feat/2.5.0
3. 大家根据任务新建本地分支（feat/i18n），然后合并到feat/2.5.0(先rebase)
4. 开发完成，进入测试阶段
5. 从develop新建release/2.5.0，提交测试
6. 开始2.6.0工作流程
7. 从develop新建feat/2.6.0
8. 2.5.0的测试报告来了
9. 从feat/2.5.0检出bugfix/2.5.0
10. 开发人员根据手上的bug列表，新建本地分支开发，完成后合并到bugfix/2.5.0
11. 测试通过，merge release/2.5.0到mian，然后持续集成进行发布。
12. 继续开发2.6.0
13. 线上2.5.0在灰度或者AB测试出现问题
14. 从main拉取hotfix/2.5.1
15. 修复完成后直接merge到main
16. merge后出现更大问题
17. 继续拉hotfix/2.5.2
18. 发现问题无法解决，并且影响很大
19. 代码回滚或者降级
20. 转行做人体模特