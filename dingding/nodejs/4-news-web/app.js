const path = require('path')
const express = require('express')

const app = express()
const port = 3005

app.engine('html', require('express-art-template'))
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

// 使用静态资源
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`服务器启动成功，运行在${port}端口`)
})
