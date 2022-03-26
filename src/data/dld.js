
var request = require('request')
var fs = require('fs')
const path = require('path')
const dest = path.join(__dirname, '/music')
function downAsync({ url, name }) {
  // 根据url获取文件
  const filename = name + '.mp3'
  return new Promise((resolve, reject) => {
    // 判断文件是否存在
    const filepath = dest + filename
    if (fs.existsSync(filepath)) {
      console.log(filename.concat('文件存在不下载'))
      resolve(filename)
      return
    }

    const stream = request(url).on('error', (error) => {
      console.log('获取文件失败', filename)
      fs.unlinkSync(filepath)
      reject(error)
    }).pipe(
      fs.createWriteStream(filepath)
    )

    stream.on('finish', () => {
      console.log(filename.concat('文件不存在下载成功'))
      resolve(filename)
    })
    stream.on('error', (error) => {
      fs.unlinkSync(filepath)
      console.log('写入文件失败', filepath)
      reject(error)
    })
  })
}
