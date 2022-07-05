#!/usr/bin/env python3
# coding: utf-8

import os
import system.gem_sources
import system.hosts

def dependencies():
    gem_sources.ruby_china()
    hosts.raw_githubusercontent_com()
    hosts.api_github_com()
    pass

def is_installed():
    path = os.popen("which brew")
    return len(path.readlines()) > 0

def install():
    dependencies()
    if not is_installed():
        os.system("""
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
        """)

def uninstall():
    if is_installed():
        os.system("""
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)"
        """)

check()
install()
uninstall()