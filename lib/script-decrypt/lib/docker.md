# Docker
```
yum install -y docker
systemctl enable docker
systemctl start docker
```

# Gogs
```
docker pull docker.io/gogs/gogs
mkdir /var/gogs_home
chmod -R 777 /var/gogs_home
docker run --name gogs -d -p 10022:22 -p 80:3000 -v /var/gogs_home/:/data docker.io/gogs/gogs
```

# Jenkins
```
docker pull docker.io/jenkins/jenkins
mkdir /var/jenkins_home
chmod -R 777 /var/jenkins_home
docker run --name jenkins -d -p 8080:8080 -p 6080:6080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home docker.io/jenkins/jenkins
```


# Laravel
```
rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
yum install php72w-common php72w-fpm php72w-opcache php72w-gd php72w-mysqlnd php72w-mbstring php72w-pecl-redis php72w-pecl-memcached php72w-devel
```
```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
mv composer.phar /usr/local/bin/composer
composer config -g repo.packagist composer https://packagist.phpcomposer.com --user
```
```
composer global require laravel/installer --user
```
