import { createServer as _createServer } from 'vite'
import { readFileSync, writeFileSync } from 'fs'
import { EOL } from 'os'
import { spawn } from 'child_process'
import { buildSync } from 'esbuild'
import { createRequire } from 'module'
import { join } from 'path'
import { root } from '../../location.config.js'
const { default: env } = await import(join(root, 'env', 'dev.js'))
const require = createRequire(import.meta.url)
const dev = {
  server: null,
  async createServer() {
    const options = {
      configFile: env.VITE_CONFIG_PATH,
      root: process.cwd(),
      server: {
        port: env.WEB_PORT
      }
    }
    this.server = await _createServer(options)
    await this.server.listen()
    this.server.printUrls()
  },
  async start() {
    await this.createServer()
    await this.buildMain()
    await this.createElectronProcess()
  },
  async getEnvScript() {
    let script = ''
    for (const v in env) {
      script += `process.env.${v}="${env[v]}";`
    }
    return script
  },
  async buildMain() {
    //! 编译主进程的代码
    const outfile = env.MAIN_BUNDLED_PATH
    buildSync({
      entryPoints: [env.MAIN_SRC_PATH],
      outfile,
      minify: false,
      bundle: true,
      platform: 'node',
      sourcemap: true,
      external: ['electron'] //! 忽略编译
    })
    const envScript = await this.getEnvScript()
    //! 将环境变量写入生成的entryjs中
    const js = `${envScript}${EOL}${readFileSync(outfile)}`
    writeFileSync(outfile, js)
  },
  async createElectronProcess() {
    this.electronProcess = spawn(
      require('electron').toString(),
      [env.MAIN_BUNDLED_PATH],
      {
        cwd: process.cwd()
      }
    )
    this.electronProcess.on('close', () => {
      this.server.close()
      process.exit()
    })
    this.electronProcess.stdout.on('data', data => {
      data = data.toString()
      console.log(data)
    })
  }
}
dev.start()
