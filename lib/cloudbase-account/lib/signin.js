import cloudbase from '@cloudbase/js-sdk'

const Types = {
  Password: 0,
  Code: 1,
  Guest: 2
}

export default async ({ name, password, code }) => {
  let type = Types.Guest
  if (name && password) {
    type = Types.Password
  }
  if (name && code) {
    type = Types.Code
  }

  if (type === Types.Guest) {
    const app = cloudbase.init({
      env: 'xxxx-yyy'
    })
    const auth = app.auth()
    await auth.anonymousAuthProvider().signIn()
    // 匿名登录成功检测登录状态isAnonymous字段为true
    const loginState = await auth.getLoginState()
    return loginState
  }
  return undefined
}
