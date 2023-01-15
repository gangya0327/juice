const fs = require('fs')
const path = require('path')

// 重命名文件
// fs.renameSync(path.join(__dirname, 'text.txt'), path.join(__dirname, 'text2.txt'))
// fs.renameSync(path.join('built-in-module', 'text3.txt'), path.join('built-in-module', 'text4.txt'))
// fs.renameSync('text3.txt', 'text4.txt')

// 获取当前路径下所有文件和文件夹
// let dir = fs.readdirSync(__dirname)
// console.log(dir)

let paths = fs.readdirSync(__dirname)
paths.forEach(item=>{
  if(item.endsWith('.js')) {
    fs.renameSync(item, 'node-'+item)
  }
})
