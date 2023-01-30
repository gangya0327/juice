const express = require('express')
const handleDB = require('../database/handleDB')

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

// 测试数据库连接
router.get('/get_data', (req, res) => {
  ;(async function () {
    const result = await handleDB(res, 'info_category', 'find', 'info_category查询出错')
    res.send(result)
  })()
})

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
