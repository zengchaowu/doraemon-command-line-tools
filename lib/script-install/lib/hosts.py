#!/usr/bin/env python3
# coding: utf-8

import os

def raw_githubusercontent_com():
    records=os.popen("cat /etc/hosts | grep raw.githubusercontent.com")
    if len(records.readlines()) == 0 :
        os.system("""
        sudo chmod 777 /etc/hosts
        sudo echo 151.101.108.133 raw.githubusercontent.com >> /etc/hosts
        sudo chmod 755 /etc/hosts
        """)

def api_github_com():
    records=os.popen("cat /etc/hosts | grep api.github.com")
    if len(records.readlines()) == 0 :
        os.system("""
        sudo chmod 777 /etc/hosts
        sudo echo 13.250.94.254 api.github.com >> /etc/hosts
        sudo chmod 755 /etc/hosts
        """)

raw_githubusercontent_com()
api_github_com()