---
title: 抖音逆向
description: 抖音逆向
---
## 环境
## 依赖
```bash
cd ~/Desktop && mkdir Aweme && cd $_
```
## 砸壳
## 重签名
## 目标:

1. 自动进入某个房间
2. 自动点赞 关注 评论
3. 直播自动发言与送礼物
4. 自动刷抖音并下载视频
1. 屏蔽抖音的越狱检测
2. 修改返回给抖音的设备参数
3. 修改设备网络类型为移动数据，而不是
4. 给抖音加上自带vpn，vpn根据登录账号进行绑定，实现每个账号固定ip。
5. 屏蔽抖音登录切换，防止被降权。

## 2. 砸壳

```bash
# 查看是否加密了
otool -l app/Payload/Aweme.app/Aweme | grep crypt
# 使用frida-ios-dump砸壳
# 需要在设备上先安装指定应用
python3 ~/Modules/frida-ios-dump/dump.py 抖音
```

## 3. 修复签名



## 4. 运行时分析

```bash
# 先使用class-dump导出头文件备用
class-dump --arch arm64 -a -A -H decripted-app/Payload/Aweme.app/Aweme -o ./Headers
# Cycript注入Aweme 获取进程id 然后注入
ps -e | grep Aweme
cycript -p 6006 # 或者 cycript -p Aweme
# 常用脚本
UIApp.keyWindow._autolayoutTrace()
UIApp.keyWindow.recursiveDescription() # 打印所有视图
UIApp.keyWindow.rootViewController.selectedViewController.topViewController #当前的viewController
# 使用VSCode打开
code ./Headers
```

通过Reveal和Frida分析，得到播放页面结构如下：

AWEFeedTableViewController

​	AWEFeedTableView

​		AWEFeedViewCell

​			AWEFeedCellViewController

​				// 播放控制器

​				AWEAwemePlayVideoViewController

​					// 实际播放页面

​					TTPlayerView

​				// 交互控制器

​				AWEPlayInteractionViewController

​					// 实际负责交互的图层

​					AWEVideoInteractiveView

## 5. 运行时调试

```javascript
// #后面需要获取到地址,一般使用choose或者响应者链条.函数可以使用偏移量加基地址。

// 打开评论区
[#AWEPlayInteractionViewController onCommentButtonClicked:nil / performCommentAction]
// 关注
[#AWEPlayInteractionUserAvatarElement onFollowViewClicked:nil]
// 点击头像
[#AWEPlayInteractionUserAvatarElement onUserAvatarViewClicked:nil]
// 点击搜索
[#AWEFeedContainerViewController onDiscoverButtonClicked:]
// 点赞 / 取消关注
[#AWEPlayInteractionLikeElement buttonClicked]
// 发送评论 这里通过UIButton的actionsForTarget找到实际函数
#AWEGrowingTextView.text = "求关注"
[#AWECommentListInputView sendButtonClicked:nil]
// 下滑
[#AWEFeedTableViewController scrollToNextVideo]
// 暂停
[#AWEFeedTableViewController pauseWithAnimation]
// 播放
[#AWEFeedTableViewController playWithAnimation]
 
// 查找用户

 
// 直播间

 
// 搜索页面
// 搜索框输入内容
#UISearchBarTextField.text = @"搜索内容"
// 回车搜索
[#UISearchBarTextField sendActionsForControlEvents:UIControlEventEditingDidEndOnExit]

```
```bash
name=抖音
# ipa_path=~/Downloads/i4ToolsDownloads/App/抖音_14.7.0.ipa
ipa_name=抖音_14.7.0.ipa
app_name=Aweme.app
binary_name=Aweme
dump_path=~/Modules/frida-ios-dump/dump.py
bundle_id=com.ss.iphone.ugc.Aweme

cd ~/Desktop && mkdir $binary_name && cd $_
cp $ipa_path ./
unzip $ipa_name -d app
# 查看是否加密了
otool -l app/Payload/$app_name/$binary_name | grep crypt
# 使用frida-ios-dump砸壳
# 需要在设备上先安装指定应用
python3 $dump_path $name
# 此时的ipa安装到客户端会无法启动
# 可以使用MonkeyDev新建项目的方式安装上去，但是我们这里使用手动进行重签名。
unzip $name.ipa -d decripted-app
# 导出ent.xml
codesign -d --entitlements - decripted-app/Payload/$app_name > ent.xml
# 对通用二进制文件重签名
codesign -s - --entitlements ent.xml -f decripted-app/Payload/$app_name/$binary_name
# 这里需要给二进制文件加上执行权限
chmod 755 decripted-app/Payload/$app_name/$binary_name
# 重新打包为ipa 这里必须cd进入才行。否则生成的ipa包会提示不存在bundle，因为这样的根目录没有Payload，必须保证Payload在第一层。
cd decripted-app
zip -r decripted-app.ipa Payload
mv decripted-app.ipa ../
cd ../
# 卸载之前的应用，安装砸壳后的
ideviceinstaller -U $bundle_id
ideviceinstaller -i decripted-app.ipa
```