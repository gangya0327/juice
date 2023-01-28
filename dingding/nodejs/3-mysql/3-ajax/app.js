const express = require('express')
const path = require('path')

const app = express()

app.engine('html', require('express-art-template'))

app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.get('/index', (req, res) => {
  res.render('index')
})
app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login_post', (req, res) => {
  req.on('data', (postData) => {
    res.send(JSON.parse(postData.toString()))
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
