const { desktopCapturer } = require('electron')

module.exports = async function (_payload) {
  // const { size } = payload
  const result = await desktopCapturer.getSources({
    types: ['screen'],
  })
  return result
}
