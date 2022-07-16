const { dialog } = require('electron')

module.exports = async function (_payload) {
  // const { size } = payload
  const { canceled, filePaths } = await dialog.showOpenDialog()
  if (canceled) {
    console.log(666)
  } else {
    return filePaths[0]
  }
}
