
function check()
{
    # 本脚本只支持在mac下执行
}

function install_reveal()
{
    # 下载Reveal for mac
    wget http://m6.pc6.com/xuh6/revealapp24.zip
    unzip revealapp24.zip
    mv revealapp24/Reveal.app /Applications
    rm -fr revealapp24
    rm -fr revealapp24.zip

    # 在手机端安装Reveal的framework(需要设备先安装OpenSSH和Reveal2loader)
    framework_path=~/Library/Application\ Support/Reveal/RevealServer/iOS/RevealServer.framework
    iphone_ip=192.168.2.100
    remote_path=/Library/Frameworks
    scp -r $framework_path root@$iphone_ip:$remote_path
}

check