#!/usr/bin/env python3
# coding: utf-8

import os,shutil,zipfile,py7zr

def compress_zip(file_path, target_path):
    file_zip = zipfile.ZipFile(file_path, 'r')
    for file in file_zip.namelist():
        file_zip.extract(file, target_path)
    file_zip.close()
    pass

def compress_7z(file_path, target_path):
    try:
        file_7z = py7zr.SevenZipFile(file_path, 'r')
        file_7z.extractall(target_path)
        file_7z.close()
    except:
        print('解压7z文件出错')
    finally:
        pass

def compress(file_path, target_path):
    """解压文件

    Args:
        file_path ([str]): [压缩文件所在路径]
        target_path ([str]): [目标路径]
    """
    
    # 根据文件压缩类型解压
    file_name = os.path.basename(file_path)
    file_type = file_name.split('.')[-1]
    
    if file_type == 'zip' or file_type == 'ipa':
        compress_zip(file_path, target_path)
        
    if file_type == '7z':
        compress_7z(file_path, target_path)