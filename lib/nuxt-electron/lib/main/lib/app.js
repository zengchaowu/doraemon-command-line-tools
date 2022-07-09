const { app, BrowserWindow } = require('electron')

module.exports = {
  launch: () => {
    app
      .whenReady()
      .then(() => {
        const win = new BrowserWindow({
          width: 800,
          height: 600,
        })
        win.loadURL('http://localhost:3000')
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
