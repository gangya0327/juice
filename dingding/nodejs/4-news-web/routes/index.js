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

// 首页新闻列表数据
router.get('/news_list', (req, res) => {
  ;(async function () {
    // 获取参数，分类cid，当前页码page，每页条数per_page
    const { cid, page, per_page } = req.query
    // 查询数据库
    const where = `${cid === '1' ? 1 : 'category_id=' + cid} order by create_time desc`
    const result = await handleDB(res, 'info_news', 'limit', 'info_news查询出错', {
      // where: `category_id=${cid} order by create_time desc`,
      // where=1表示查询全部
      where: where,
      number: page,
      count: per_page
    })
    const total = await handleDB(
      res,
      'info_news',
      'sql',
      'info_news查询出错',
      'select count(*) from info_news where ' + where
    )
    const totalPage = Math.ceil(total[0]['count(*)'] / per_page)
    res.send({
      newsList: result,
      totalPage: totalPage,
      currentPage: parseInt(page)
    })
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
      'select title,id from info_news order by clicks desc limit 6'
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
