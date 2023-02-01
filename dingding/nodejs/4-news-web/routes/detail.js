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
    if (result[0]) {
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
    }
    // 查询评论及回复
    const commentResult = await handleDB(
      res,
      'info_comment',
      'find',
      'info_comment查询出错',
      `news_id=${news_id} order by create_time desc`
    )
    // 给每一条评论添加评论者信息
    for (let i = 0; i < commentResult.length; i++) {
      const commenterResult = await handleDB(res, 'info_user', 'find', '用户查询出错', `id=${commentResult[i].user_id}`)
      commentResult[i].commenter = {
        avatar_url: commenterResult[0].avatar_url ? commenterResult[0].avatar_url : '../images/worm.jpg',
        nick_name: commenterResult[0].nick_name
      }
      if (commentResult[i].parent_id) {
        // 若有父级评论，查询父级评论的评论者和内容
        var parentResult = await handleDB(
          res,
          'info_comment',
          'find',
          'info_comment添加失败',
          `id=${commentResult[i].parent_id}`
        )
        var parentCommenterResult = await handleDB(
          res,
          'info_user',
          'find',
          'info_user添加失败',
          `id=${parentResult[0].user_id}`
        )
        commentResult[i].parent = {
          user: { nick_name: parentCommenterResult[0].nick_name },
          content: parentResult[0].content
        }
      }
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
      isCollected: isCollected,
      commentResult: commentResult
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
  // 查询新闻内容
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

router.post('/news_detail/news_comment', async (req, res) => {
  // 判断用户登录状态
  const result = await common.getUserLogin(req, res)
  if (!result[0]) {
    res.send({ errno: '4101', errmsg: '用户未登录' })
    return
  }
  // 获取参数，判空
  const { news_id, comment, parent_id } = req.body
  if (!news_id || !comment) {
    res.send({ errmsg: '缺少参数' })
    return
  }
  // 查询新闻内容
  const newsDetail = await handleDB(res, 'info_news', 'find', 'info_news查询出错', `id=${news_id}`)
  if (!newsDetail[0]) {
    res.send({ errmsg: '新闻内容不存在' })
    return
  }
  // 添加评论
  const insertObj = {
    user_id: result[0].id,
    news_id: news_id,
    content: comment
  }
  if (parent_id) {
    insertObj.parent_id = parent_id
    // 若有父级评论，查询父级评论的评论者和内容
    var parentResult = await handleDB(res, 'info_comment', 'find', 'info_comment添加失败', `id=${parent_id}`)
    var parentCommenterResult = await handleDB(
      res,
      'info_user',
      'find',
      'info_user添加失败',
      `id=${parentResult[0].user_id}`
    )
  }
  const insertResult = await handleDB(res, 'info_comment', 'insert', 'info_comment添加失败', insertObj)
  const data = {
    user: {
      avatar_url: result[0].avatar_url ? result[0].avatar_url : '../images/worm.jpg',
      nick_name: result[0].nick_name
    },
    content: comment,
    create_time: new Date(),
    id: insertResult.insertId,
    news_id: news_id,
    parent: parent_id
      ? {
          user: { nick_name: parentCommenterResult[0].nick_name },
          content: parentResult[0].content
        }
      : null
  }
  res.send({ errno: '0', errmsg: '操作成功', data })
})

module.exports = router
