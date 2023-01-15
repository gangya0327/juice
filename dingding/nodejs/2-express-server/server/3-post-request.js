const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

// extended: false表示接收值为字符串或数组，true表示为任意类型
app.use(bodyParser.urlencoded({ extended: false }))
// 设置解析格式为json
app.use(bodyParser.json())

app.get('/register.html', (req, res) => {
  // 获取文件路径
  let filePath = path.join(__dirname, '..', 'pages', 'register.html')
  // 读取文件内容
  let content = fs.readFileSync(filePath, 'utf-8')
  res.send(content)
})

app.post('/register.html', (req, res) => {
  const { username, email, password } = req.body
  console.log(username, email, password)

  res.send('提交成功')
})

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
