const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(
  cookieSession({
    name: 'my-session',
    keys: ['abcde'],
    maxAge: 1000 * 60 * 60 * 24
  })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('html', require('express-art-template'))
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'web-a'))
app.set('view engine', 'html')

app.get('/transfer', (req, res) => {
  const username = req.session['username']
  if (!username) res.redirect('/')
  const csrf_token = getRandomString(48)
  res.cookie('csrf_token', csrf_token)
  res.render('transfer')
})

app.post('/transfer', (req, res) => {
  if (req.cookies['csrf_token'] !== req.headers['x-csrftoken']) {
    res.send('校验不通过')
    return
  }
  const { to_account, money } = req.body
  res.send({
    code: 200,
    message: '转账成功',
    data: { to_account: to_account, money: money }
  })
})

app.all('/', (req, res) => {
  if (req.method === 'GET') {
    res.render('login')
  } else if (req.method === 'POST') {
    const { username, password } = req.body
    if (username === 'admin' && password === '123456') {
      req.session['username'] = username
      res.redirect('/transfer')
    } else {
      res.send('用户名或密码错误')
    }
  }
})

app.listen(3003, (err) => {
  console.log('服务器启动成功\n')
})

function getRandomString(n) {
  var str = ''
  while (str.length < n) {
    str += Math.random().toString(36).substring(2)
  }
  return str.substring(str.length - n)
}
