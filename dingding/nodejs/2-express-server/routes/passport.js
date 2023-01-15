const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

// 创建路由对象
const routerPort = express.Router()

// extended: false表示接收值为字符串或数组，true表示为任意类型
routerPort.use(bodyParser.urlencoded({ extended: false }))
// 设置解析格式为json
routerPort.use(bodyParser.json())

routerPort.get('/register.html', (req, res) => {
  // 获取文件路径
  let filePath = path.join(__dirname, '..', 'pages', 'register.html')
  // 读取文件内容
  let content = fs.readFileSync(filePath, 'utf-8')
  res.send(content)
})

routerPort.get('/login.html', (req, res) => {
  // 获取文件路径
  let filePath = path.join(__dirname, '..', 'pages', 'login.html')
  // 读取文件内容
  let content = fs.readFileSync(filePath, 'utf-8')
  res.send(content)
})

routerPort.post('/register.html', (req, res) => {
  const { username, email, password } = req.body
  console.log(username, email, password)

  res.send('提交成功')
})

routerPort.get('/index.html', (req, res) => {
  // 获取请求参数
  console.log(req.query)

  // 获取文件路径
  let filePath = path.join(__dirname, '..', 'pages', 'index.html')
  // 读取文件内容
  let content = fs.readFileSync(filePath, 'utf-8')
  res.send(content)
})

routerPort.get('/', (req, res) => {
  res.send('hello express')
})

module.exports = routerPort
