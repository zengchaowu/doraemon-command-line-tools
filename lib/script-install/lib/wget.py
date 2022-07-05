#!/usr/bin/env python3
# coding: utf-8

import os
import homebrew

def dependencies():
    homebrew.install()
    pass

def check():
    path = os.popen("which wget")
    return len(path.readlines()) > 0

def install():
    if not check():
        os.system("brew install wget")

def uninstall():
    if check():
        os.system("brew uninstall wget && rm -fr /usr/local/etc/wgetrc")

check()
install()
uninstall()