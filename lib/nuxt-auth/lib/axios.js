import { startsWith } from 'lodash'
import env from '~/env/index.js'
import genSign from '~/functions/genSign.js'

export default function (app) {
  app.$axios.onRequest((config) => {
    if (startsWith(config.url, env.oa.path)) {
      // const params =
      //   config.method === 'get' ? config.params ?? {} : config.data ?? {}
      const params = config.method === 'get' ? config.params ?? {} : {}
      params.appid = env.oa.appid
      params.time = Math.round(new Date().getTime() / 1000)
      const sign = genSign(
        config.url.slice(env.oa.path.length),
        params,
        env.oa.appkey
      )
      params.sign = sign
      // config.method === 'get'
      //   ? (config.params = params)
      //   : (config.data = params)
      config.params = params
    }
  })
  // app.$axios.onError(error => {
  //   return Promise.reject(error);
  // })
}
