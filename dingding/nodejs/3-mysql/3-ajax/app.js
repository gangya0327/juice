const express = require('express')
const path = require('path')

const app = express()

app.engine('html', require('express-art-template'))

app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

// ajax页面
app.get('/index', (req, res) => {
  res.render('index')
})
app.get('/login', (req, res) => {
  res.render('login')
})

// ajax请求
app.post('/login_post', (req, res) => {
  req.on('data', (postData) => {
    const { username, password } = JSON.parse(postData.toString())
    res.send({
      code: 200,
      message: '登录成功',
      data: {
        name: username,
        pwd: password
      }
    })
  })
})
app.get('/get_data', (req, res) => {
  let obj = {
    name: 'jack',
    age: 30
  }
  res.send(obj)
})

app.listen(3002, (err) => {
  console.log('服务器启动成功')
})
