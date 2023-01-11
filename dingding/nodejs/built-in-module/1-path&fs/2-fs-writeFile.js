const fs = require('fs')
const path = require('path')
let filePath = path.join(__dirname, '2-test.txt')

fs.writeFile(filePath, '我是一条记录', 'utf-8', (error) => {
  if (error) {
    console.log(error)
    return
  }
  console.log('写入成功')
})
