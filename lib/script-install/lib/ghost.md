# Ghost
## CentOS上安装
```
# 先安装nodejs
curl -sL https://rpm.nodesource.com/setup_10.x | bash -
yum install -y nodejs

# node完成后
sudo npm install ghost-cli -g
sudo apt-get install nginx
sudo apt-get install mysql-server
sudo mysql_secure_installation
ghost install
```

# 修改npm源

npm config set registry https://registry.npm.taobao.org

# adduser

adduser xuser
su xuser
mkdir xghost && cd xghost
ghost install local

## 使用Docker安装
```
yum install -y docker
systemctl enable docker
systemctl start docker
docker pull docker.io/ghost
docker run --name ighost -p 80:2368 -d docker.io/ghost
```
