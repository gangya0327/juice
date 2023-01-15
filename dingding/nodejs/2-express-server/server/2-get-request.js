const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/index.html', (req, res) => {
  // 获取请求参数
  console.log(req.query)

  // 获取文件路径
  let filePath = path.join(__dirname, '..', 'pages', 'index.html')
  // 读取文件内容
  let content = fs.readFileSync(filePath, 'utf-8')
  res.send(content)
})

app.get('/', (req, res) => {
  res.send('hello express')
})

app.listen(3000, () => {
  console.log('express server 启动成功...')
})
