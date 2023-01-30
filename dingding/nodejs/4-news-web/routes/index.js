const express = require('express')
const router = express.Router()

router.get('/set_cookie', (req, res) => {
  res.cookie('name', 'news_admin')
  req.session['age'] = 29
  res.send('设置cookie和session成功')
})

router.get('/get_cookie', (req, res) => {
  const name = req.cookies['name']
  const age = req.session['age']
  res.send(`获取cookie值为${name}，session值为${age}`)
})

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
