const fs = require('fs')
const path = require('path')

let filePath = path.join(__dirname, '2-test.txt')
console.log('filePath :>> ', filePath)

let content = fs.readFileSync(filePath)
console.log('content :>> ', content.toString())

let content1 = fs.readFileSync(filePath, 'utf-8')
console.log('content1 :>> ', content1)

console.log('这是file system同步操作');