const express = require('express')
const handleDB = require('../database/handleDB')
require('../utils/filters')
const common = require('../utils/common')

const router = express.Router()

router.get('/news_detail/:news_id', (req, res) => {
  ;(async function () {
    const result = await common.getUserLogin(req, res)
    // 右侧点击排行
    const clickRanking = await handleDB(
      res,
      'info_news',
      'sql',
      'info_news查询出错',
      'select title,id from info_news order by clicks desc limit 6'
    )
    // 新闻详情
    const { news_id } = req.params
    const newsDetail = await handleDB(res, 'info_news', 'find', 'info_news查询出错', `id=${news_id}`)
    // 判断数据存在
    if (!newsDetail[0]) {
      await common.abort404(req, res)
      return
    }
    const newClicks = newsDetail[0].clicks + 1
    await handleDB(res, 'info_news', 'update', 'info_news修改出错', `id=${news_id}`, { clicks: newClicks })
    const data = {
      user_info: result[0]
        ? {
            nick_name: result[0].nick_name,
            avatar_url: result[0].avatar_url
          }
        : false,
      clickRanking,
      newsDetail: newsDetail[0]
    }
    res.render('detail', data)
  })()
})

module.exports = router
