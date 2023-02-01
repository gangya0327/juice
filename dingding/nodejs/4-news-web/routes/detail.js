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
    // 判断用户是否收藏该新闻
    let isCollected = false
    const collectResult = await handleDB(
      res,
      'info_user_collection',
      'find',
      'info_user_collection查询出错',
      `user_id=${result[0].id} and news_id=${news_id}`
    )
    if (collectResult[0]) {
      isCollected = true
    }
    const data = {
      user_info: result[0]
        ? {
            nick_name: result[0].nick_name,
            avatar_url: result[0].avatar_url
          }
        : false,
      clickRanking,
      newsDetail: newsDetail[0],
      isCollected: isCollected
    }
    res.render('detail', data)
  })()
})

router.post('/news_detail/news_collect', async (req, res) => {
  // 判断用户登录状态
  const result = await common.getUserLogin(req, res)
  if (!result[0]) {
    res.send({ errno: '4101', errmsg: '用户未登录' })
    return
  }
  // 获取参数，判空
  const { news_id, action } = req.body
  if (!news_id || !action) {
    res.send({ errmsg: '缺少参数' })
    return
  }
  const newsDetail = await handleDB(res, 'info_news', 'find', 'info_news查询出错', `id=${news_id}`)
  if (!newsDetail[0]) {
    res.send({ errmsg: '新闻内容不存在' })
    return
  }
  // 收藏
  if (action === 'collect') {
    await handleDB(res, 'info_user_collection', 'insert', 'info_user_collection新增失败', {
      news_id: news_id,
      user_id: result[0].id
    })
  } else {
    // 取消收藏
    await handleDB(
      res,
      'info_user_collection',
      'delete',
      'info_user_collection删除失败',
      `user_id=${result[0].id} and news_id=${news_id}`
    )
  }
  res.send({ errno: '0', errmsg: '操作成功' })
})

module.exports = router
