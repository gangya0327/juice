const express = require('express')
const handleDB = require('../database/handleDB')
require('../utils/filters')

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
  ;(async function () {
    const userId = req.session['USER_ID']
    // 获取数据库中id的用户信息
    let result = []
    if (userId) {
      result = await handleDB(res, 'info_user', 'find', 'info_user查询出错', `id="${userId}"`)
    }
    // 首页头部分类
    const category = await handleDB(res, 'info_category', 'find', 'info_category查询出错', ['name'])
    // 右侧点击排行
    const clickRanking = await handleDB(
      res,
      'info_news',
      'sql',
      'info_news查询出错',
      'select title from info_news order by clicks desc limit 6'
    )
    const data = {
      user_info: result[0]
        ? {
            nick_name: result[0].nick_name,
            avatar_url: result[0].avatar_url
          }
        : false,
      category,
      clickRanking
    }
    res.render('index', data)
  })()
})

module.exports = router
