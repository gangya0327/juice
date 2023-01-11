const fs = require('fs')
const path = require('path')

let filePath = path.join(__dirname, '2-test.txt')
console.log('filePath :>> ', filePath)

fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.log(error)
    return
  }
  console.log(data)
})
console.log('这是file system异步操作')
