// 创建自己的npm私有仓库

// Ubuntu 18.04.1 64 LTS

// 先添加源
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

// 安装node
sudo apt-get install -y nodejs

// 安装verdaccio
npx nrm use taobao

sudo npm install verdaccio -g

npx nrm use npm

// 启动一次verdaccio生成配置文件
verdaccio

// 修改config文件


// 修改配置