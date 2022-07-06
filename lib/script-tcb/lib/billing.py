# -*- coding: utf8 -*-
from QcloudApi.qcloudapi import QcloudApi

def billing():
    module = 'billing'
    action = 'DescribeAccountBalance'

    config = {
        # 密钥对(zengchaowu.com)
        'secretId': 'AKID470iHi03yjJiy2KudP3WpxwRlushfn5D',
        'secretKey': '64vcGl5IKDwWv9NWVO7h8RZYM9uZAh9U',
        # 预检
        'DryRun': True
    }

    action_params = {
        # 基础信息
        'Version': '2018-07-09'
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

billing()