const { contextBridge, ipcRenderer } = require('electron')

console.log('dafdsafdasf')
contextBridge.exposeInMainWorld('$hybrid', {
  pipeline: (payload) => ipcRenderer.invoke('pipeline', payload),
})
