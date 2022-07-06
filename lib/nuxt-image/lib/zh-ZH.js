module.exports = {
  nav: {
    links: [
      {
        name: '首页',
        icon: '#icon-Home',
        slug: '/home'
      },
      {
        name: '学习',
        icon: '#icon-xuexi',
        slug: '/code'
      },
      {
        name: '工具',
        icon: '#icon-gongjuxiang',
        slug: '/tool'
      },

      {
        name: '博客',
        icon: '#icon-bokeshangse',
        slug: '/dock'
      },
      {
        name: '视频课程',
        icon: '#icon-duomeiti9',
        slug: '/learn'
      }
    ]
  },
  scaffold: {
    version: '版本',
    modify: '更改',
    all: '全部',
    pause: '暂停',
    paused: '已暂停',
    completed: '已完成',
    uploaded: '已上传',
    downloaded: '已下载',
    delete: '删除',
    start: '开始',
    delay: '延时',
    hour: '小时',
    cancel: '取消',
    confirm: '确定',
    next_step: '下一步',
    previous: '返回上一步',
    belong_to: '属于',
    photo: '图片',
    video: '视频',
    raw: 'RAW',
    file_type: '文件类型',
    uploader: '上传者',
    sub_album: '子相册',
    raw_image: '原图',
    retouched_image: '已修图',
    status: '状态',
    type: '类型',
    album: '相册',
    folder: '文件夹',
    more: '更多',
    is_existed: '已存在',
    by_sub_folder: '按子文件夹',
    by_photographer: '按上传者',
    click_pick: '点击选择',
    pick_error: '此文件夹与其他上传任务文件夹属于包含关系，请选择其他路径。',
    eight_hour: '八小时',
    seven_hour: '七小时',
    six_hour: '六小时',
    aside: {
      links: [
        {
          name: '首页',
          icon: '#icon-home',
          slug: '/home'
        },
        {
          name: '修图',
          icon: '#icon-ai',
          slug: '/ai'
        },
        {
          name: '云相册',
          icon: '#icon-album',
          slug: '/album'
        },
        {
          name: '图库',
          icon: '#icon-gallery',
          slug: '/gallery'
        },
        {
          name: '传输',
          icon: '#icon-transfer',
          slug: '/transfer'
        }
      ]
    }
  },
  account: {
    login: {
      success: '登陆成功',
      phone_placeholder: '请输入手机号码',
      code_placeholder: '请输入验证码',
      password_placeholder: '请输入密码',
      get_code: '获取验证码',
      submit: '登陆/注册',
      license_html:
        '我已阅读并同意<a class="external-link" target=”_blank” href="https://www.xxpie.com/h5/newUserAgreement.html">《用户协议》</a>、<a class="external-link" target=”_blank” href="https://www.xxpie.com/h5/privacyAgreement.html">《隐私协议》</a>，并授权享像派使用该账号信息（如昵称、头像、电话号码）进行统一管理。'
    }
  },
  transfer: {
    ready_to_handle: '待处理',
    total_handled: '已处理',
    about_to_time_out: '即将超时',
    filter_rule_empty: '未设置过滤规则',
    aside: {
      links: [
        {
          name: '正在上传',
          icon: '#icon-upload',
          slug: '/transfer/upload'
        },
        {
          name: '正在下载',
          icon: '#icon-download',
          slug: '/transfer/download'
        },
        {
          name: '传输完成',
          icon: '#icon-emoji',
          slug: '/transfer/complete'
        }
      ]
    },
    download: {
      readying: '待下载',
      create_titles: [
        '新建自动下载任务',
        '设定规则，自动传输，用了都说好～',
        '自动下载搭配自动上传，传输服务一条龙～',
        '最多同时只能有四个自动下载任务哦～',
        '快去新建吧～'
      ],
      step_one: {
        title: '选择云相册及设置传输时长',
        source: '选择云相册',
        duration: '任务传输时长'
      },
      step_two: {
        title: '设置自动下载规则',
        description: '符合规则的文件会自动加入到下载队列中～',
        link: '了解详情',
        rule: '当前规则预览',
        rule_patch: '（规则取交集）',
        file_type: '选择文件类型',
        image_type: '选择图片版本',
        sub_album: '选择子相册',
        upload_time: '选择上传时间',
        uploader: '选择上传者',
        create_upload: '设定完毕，我还要创建自动上传任务'
      }
    },
    upload: {
      readying: '待上传',
      create_titles: [
        '新建自动上传任务',
        '设定规则，自动传输，用了都说好～',
        '自动上传搭配自动下载，传输服务一条龙～',
        '最多同时只能有四个自动上传任务哦～',
        '快去新建吧～'
      ],
      step_one: {
        title: '设置自动上传规则',
        description: '符合规则的文件会自动加入到上传队列中～',
        link: '了解详情',
        folder: '选择本地文件夹',
        album: '选择云相册',
        sub_album_create_rule: '子相册创建规则',
        file_type: '选择上传类型',
        duration: '任务传输时长',
        cover: '新上传的文件覆盖同名文件',
        retouch: '(作为已修图发布)',
        create_download: '设定完毕，我还要创建自动下载任务'
      }
    }
  }
}
