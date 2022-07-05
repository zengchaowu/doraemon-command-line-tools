# 服务器https安装工具


function nginx_install()
{
    # 为nginx服务器安装https
    ssh_ip=111.231.238.51
    # 先检查能不能使用ssh密钥登陆

    # 再使用密码登陆
    ssh_name=root
    ssh_password=password

    # 下载ssh密钥

    # 部署ssh密钥要nginx目录下/etc/nginx/conf.d
    scp Nginx/* ubuntu@111.231.238.51:/etc/nginx/conf.d

    # 修改nginx.conf启用
    添加如下代码到443
    ssl_certificate conf.d/1_zengchaowu.com_bundle.crt;
    ssl_certificate_key conf.d/2_zengchaowu.com.key;
    ssl_session_timeout 5m;
    #请按照以下协议配置
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
    #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
    ssl_prefer_server_ciphers on;

    # 重启服务器生效
}