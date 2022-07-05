#!/usr/bin/env python3
# coding: utf-8

import os

def ruby_china():
    sources=os.popen("gem sources -l | grep gems.ruby-china.com")
    if len(sources.readlines()) == 0 :
        os.system("gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/")

ruby_china()