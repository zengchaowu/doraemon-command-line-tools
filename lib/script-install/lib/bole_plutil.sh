#!/bin/bash


# plutil是xcode自带的一个plist查看工具

plutil -p Info.plist

plutil -p Info.plist | grep CFBundleExecutable