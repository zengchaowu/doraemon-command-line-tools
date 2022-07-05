#!/bin/bash

# 初始化一个npm包
package_name=$0

git init $package_name && cd $_
yarn init -y
