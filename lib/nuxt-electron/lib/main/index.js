const path = require('path')
const fs = require('fs')
const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '..', 'preload', 'index.js'),
    },
  })
  win.loadURL('http://localhost:3000')
}

function handlePipeline(_, data) {
  return new Promise((resolve, reject) => {
    try {
      const { name, payload } = data
      const filePath = path.join(__dirname, 'lib', `${name}.js`)
      if (fs.statSync(filePath).isFile()) {
        require(filePath)(payload).then((result) => {
          resolve(result)
        })
      } else {
        reject(Error('应用版本过低'))
      }
    } catch (error) {
      reject(error)
    }
  })
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app
  .whenReady()
  .then(() => {
    ipcMain.handle('pipeline', handlePipeline)
    createWindow()
    app.on('activate', () => {
      // mac上点击托盘会触发这个
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
  .catch((error) => {
    console.error(error)
  })

// 没有窗口，但是应用还在运行，在托盘中。
// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
