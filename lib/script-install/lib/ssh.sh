

function create_secrets()
{
    ssh-keygen -t rsa -C "admin@zengchaowu.com"
    # 复制ssh到远程服务器
    ssh-copy-id username@remote-server
}