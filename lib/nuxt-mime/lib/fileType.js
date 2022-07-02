import mime from 'mime'

export default (ext) => {
  const type = mime.getType(ext)
  try {
    const result = require(`~/assets/images/mime-types/${type}.svg`)
    return result
  } catch (error) {
    return require('~/assets/images/mime-types/unknow.svg')
  }
}
