const express = require('express')
const handleDB = require('../database/handleDB')
require('../utils/filters')
const common = require('../utils/common')

const router = express.Router()

router.get('/profile', async (req, res) => {
  let result = await common.getUserLogin(req, res)
  if (!result[0]) {
    res.redirect('/')
  }
  const data = {
    user_info: result[0]
      ? {
          nick_name: result[0].nick_name,
          avatar_url: result[0].avatar_url
        }
      : false
  }
  res.render('user', data)
})

router.all('/user/baseInfo', (req, res) => {})

module.exports = router
