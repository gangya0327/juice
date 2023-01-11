// 当前执行文件所在的绝对路径，不含文件名
console.log(__dirname)

// 当前执行文件所在的绝对路径，包含文件名
console.log(__filename)

const path = require('path')

// 获取指定文件的后缀名
let extname = path.extname(__filename)
console.log('extname :>> ', extname)

// 获取指定文件的全名
let basename = path.basename(__filename)
console.log('basename :>> ', basename)

// 获取指定文件的绝对路径，不含文件名
let dirname = path.dirname(__filename)
console.log('dirname :>> ', dirname)

// 获取指定文件的路径信息对象
let parse = path.parse(__filename)
console.log('parse :>> ', parse)

// 拼接路径
let fullPath = path.join(__dirname, 'pages', 'index.html')
console.log('fullPath :>> ', fullPath)
