const path = require('path')
const express = require('express')

const app = express()

app.engine('html', require('express-art-template'))
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'web-b'))
app.set('view engine', 'html')

app.get('/fake', (req, res) => {
  res.render('fake')
})

app.listen(3093, (err) => {
  console.log('服务器启动成功\n')
})

