#!/usr/bin/env python3
# coding: utf-8

import sys,os,zipfile,shutil
from bole_filetool import compress

def extract_ipa(ipa_path, target_path):
    """ipa资源提取

    Args:
        ipa_path ([str]): [ipa文件路径]
        target_path ([str]): [目标文件夹路径]
    """
    
    # ipa解压到指定文件夹
    ipa_short_name = os.path.basename(ipa_path).split(' ')[0]
    assign_path = os.path.join(target_path, ipa_short_name)
    if not os.path.exists(assign_path):
        os.makedirs(assign_path)
    compress(ipa_path, assign_path)
    
    # app文件夹的路径
    payload_path = os.path.join(assign_path, 'Payload')
    for item in os.listdir(payload_path) :
        if '.app' in item :
            app_path = os.path.join(payload_path, item)
            break
        
    # 解压Assets.car文件
    car_path = os.path.join(app_path, 'Assets.car')
    extract_car(car_path, app_path)
    os.remove(car_path)
    
    # 解压其他zip或者7z文件
    for item in os.listdir(app_path):
        if ".zip" in item or ".7z" in item:
            file_path = os.path.join(app_path, item)
            compress(file_path, app_path)
            os.remove(file_path)
    
    # 对app下文件进行分类
    classification(app_path)  

def extract_car(car_path, target_path):
    cmd = 'cartool' + ' ' + car_path + ' ' + target_path
    os.system(cmd)
    pass

def classification(dir_path):
    # bundle文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Bundles")
        if item.endswith(".bundle"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # 二进制bin文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Bins")
        if item.endswith(".bin"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
    
    # Shell脚本文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Shell")
        if item.endswith(".sh"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # 图片文件(png jpg gif svg webp)
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Images")
        if item.endswith(".jpg") | item.endswith(".png") | item.endswith(".gif") | item.endswith(".svg") | item.endswith(".webp"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # 网页文件(html css js pdf)
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Web")
        if item.endswith(".html") | item.endswith(".css") | item.endswith(".js") | item.endswith(".pdf"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # 音视频文件(m4a m4v mp3 wav mp4 caf aac)
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Medias")
        if item.endswith(".m4a") | item.endswith(".m4v") | item.endswith(".mp3") | item.endswith(".wav") | item.endswith(".mp4") | item.endswith(".caf") | item.endswith(".aac"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # 国际化文件夹
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "I18n")
        if item.endswith(".lproj") | item.endswith(".strings"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # json、xml、txt、ini和plist文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Configs")
        if item.endswith(".json") | item.endswith(".xml") | item.endswith(".txt") | item.endswith(".plist") | item.endswith(".ini") | item.endswith(".config"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # ttf或者otf文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Fonts")
        if item.endswith(".ttf") | item.endswith(".otf"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # storyboardc和xib文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Xib")
        if item.endswith(".storyboardc") | item.endswith(".nib"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # ReactNative的jsbundle文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "ReactNative")
        if item.endswith(".jsbundle"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
    
    # ProtoBuffer相关文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "ProtoBuffer")
        if item.endswith(".proto"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # 签名文件和证书
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Security")
        if item.endswith(".signature") | item.endswith(".der") | item.endswith(".cer") | item.endswith(".pem"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
    
    # Metal相关文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Metal")
        if item.endswith(".metallib"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # Licence文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Licence")
        if item.endswith(".licence") | item.endswith(".lic") | item.endswith(".license"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
          
    # 定位相关
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Location")
        if item.endswith(".geojson") | item.endswith(".gpx"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
    
    # OpenGL
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "OpenGL")
        if item.endswith(".glsl"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)
    
    # Entitlements文件
    for item in os.listdir(dir_path):
        bundle_path = os.path.join(dir_path, "Entitlements")
        if item.endswith(".entitlements"):
          item_path = os.path.join(dir_path, item)
          if not os.path.exists(bundle_path):
              os.makedirs(bundle_path)
          shutil.move(item_path, bundle_path)

def print_info(ipa_path):
    pass


root_path = '/Users/zengchaowu/Downloads/i4ToolsDownloads/App'
target_path = '/Users/zengchaowu/Desktop'
for file in os.listdir(root_path):
    if '.ipa' in file:
        extract_ipa(os.path.join(root_path, file), target_path)