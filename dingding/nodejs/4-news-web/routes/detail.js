const express = require('express')
const handleDB = require('../database/handleDB')
require('../utils/filters')

const router = express.Router()

router.get('/news_detail/:id', (req, res) => {
  ;(async function () {
    const userId = req.session['USER_ID']
    // 获取数据库中id的用户信息
    let result = []
    if (userId) {
      result = await handleDB(res, 'info_user', 'find', 'info_user查询出错', `id="${userId}"`)
    }
    // 右侧点击排行
    const clickRanking = await handleDB(
      res,
      'info_news',
      'sql',
      'info_news查询出错',
      'select title,id from info_news order by clicks desc limit 6'
    )
    const data = {
      user_info: result[0]
        ? {
            nick_name: result[0].nick_name,
            avatar_url: result[0].avatar_url
          }
        : false,
      clickRanking
    }
    res.render('detail', data)
  })()
})

module.exports = router
