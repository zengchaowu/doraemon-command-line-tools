#!/usr/bin/env python3
# coding: utf-8

import os
import homebrew

def dependencies():
    homebrew.install()
    pass

def check():
    path = os.popen("which tree")
    return len(path.readlines()) > 0

def install():
    if not check():
        os.system("brew install tree")

def uninstall():
    if check():
        os.system("brew uninstall tree")

check()
install()
uninstall()