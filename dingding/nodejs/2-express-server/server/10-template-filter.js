const express = require('express')
const path = require('path')
const template = require('art-template')

const app = express()

// 对以html结尾的文件，使用模板引擎
app.engine('html', require('express-art-template'))
// 设置环境：production生产模式，development开发模式
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
})
// 设置文件查找路径，默认views路径
app.set('views', path.join(__dirname, '..', 'pages'))
// 设置模版的后缀名
app.set('view engine', 'html')

// 模板过滤器
template.defaults.imports.ageFilter = function (value) {
  if (value > 13) return value
}

app.get('/filter.html', (req, res) => {
  const data = { ages: [11, 12, 13, 14, 15] }
  res.render('filter', data)
})

app.listen(3000, () => {
  console.log('express server 启动成功...')
})
