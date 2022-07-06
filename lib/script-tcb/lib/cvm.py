# -*- coding: utf8 -*-
from QcloudApi.qcloudapi import QcloudApi
import json

config = {
    # 密钥对(zengchaowu.com)
    # 'secretId': 'AKID470iHi03yjJiy2KudP3WpxwRlushfn5D',
    # 'secretKey': '64vcGl5IKDwWv9NWVO7h8RZYM9uZAh9U',
    'secretId': 'AKIDUotkHX9EhU0GG1ou2doskOrJYbN1tUnp',
    'secretKey': 'teKslOkobGBqB6Tb3AhAPdbO3pHURIEx',
    # 预检
    'DryRun': True
}

def cvms():
    module = 'cvm'
    action = 'DescribeInstances'

    action_params = {
        # 基础信息
        'Version': '2017-03-12',
        # 广州区域
        # 'Region': 'ap-guangzhou',
        'Region': 'ap-singapore',
    }

    try:
        service = QcloudApi(module, config)

        # 打印生成的请求URL，不发起请求
        # print(service.generateUrl(action, action_params))
        # 调用接口，发起请求，并打印返回结果
        response = json.loads(service.call(action, action_params))['Response']
        set = response['InstanceSet']
        for instance in set:
            print(instance['PublicIpAddresses'])
    except Exception as e:
        import traceback
        print('traceback.format_exc():\n%s' % traceback.format_exc())

# 创建一个新的cvm，并使用指定的镜像初始化。
def create():
    module = 'cvm'
    action = 'RunInstances'

    action_params = {
        # 基础信息
        'Version': '2017-03-12',
        # 广州区域
        # 'Region': 'ap-guangzhou',
        'Region': 'ap-singapore',
        
        # 机型
        # 'InstanceType': 'SA2.SMALL1',
        'InstanceType': 'S3.SMALL1',
        'Placement': {
            # 广州三区
            # 'Zone': 'ap-guangzhou-3'
            'Zone': 'ap-singapore-1'
        },
        # 网络 
        'InternetAccessible': {
            # 按流量计费
            'InternetChargeType': 'TRAFFIC_POSTPAID_BY_HOUR',
            # 最大带宽
            'InternetMaxBandwidthOut': 100,
            # 分配公网IP
            'PublicIpAssigned': True
        },
        # 竞价付费
        'InstanceChargeType': 'SPOTPAID',
        'InstanceMarketOptions': {
            'SpotOptions': {
                'MaxPrice': '0.1'
            }
        },
        # 镜像
        # 'ImageId': 'img-lhb0zqz0',
        'ImageId': 'img-4laysydo',
        # 登陆方式
        'LoginSettings': {
            # 保持镜像密钥
            'KeepImageLogin': True
        }
    }

    try:
        service = QcloudApi(module, config)

        # 打印生成的请求URL，不发起请求
        print(service.generateUrl(action, action_params))
        # 调用接口，发起请求，并打印返回结果
        print(service.call(action, action_params))
    except Exception as e:
        import traceback
        print('traceback.format_exc():\n%s' % traceback.format_exc())

cvms()
# create()