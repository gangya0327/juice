const express = require('express')
const handleDB = require('../database/handleDB')
require('../utils/filters')
const common = require('../utils/common')
const md5 = require('md5')
const keys = require('../keys')

const router = express.Router()

router.get('/profile', async (req, res) => {
  let result = await common.getUserLogin(req, res)
  if (!result[0]) res.redirect('/')
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

router.all('/user/base_info', async (req, res) => {
  let result = await common.getUserInfo(req, res)
  if (req.method === 'GET') {
    const data = {
      nick_name: result[0].nick_name,
      signature: result[0].signature,
      gender: result[0].gender || 'MAN'
    }
    res.render('user_base_info', data)
  } else if (req.method === 'POST') {
    const { gender, nick_name, signature } = req.body
    if (!gender || !nick_name || !signature) {
      res.send({ errmsg: '缺少参数' })
      return
    }
    await handleDB(res, 'info_user', 'update', 'info_user修改失败', `id=${result[0].id}`, {
      nick_name,
      signature,
      gender
    })
    res.send({ errno: '0', errmsg: '操作成功' })
  }
})

router.all('/user/pass_info', async (req, res) => {
  let result = await common.getUserInfo(req, res)
  if (req.method === 'GET') {
    const data = {
      nick_name: result[0].nick_name,
      signature: result[0].signature,
      gender: result[0].gender || 'MAN'
    }
    res.render('user_pass_info', data)
  } else if (req.method === 'POST') {
    const { old_password, new_password, new_password2 } = req.body
    if (!old_password || !new_password || !new_password2) {
      res.send({ errmsg: '缺少参数' })
      return
    }
    if (new_password !== new_password2) {
      res.send({ errmsg: '两次密码输入不一致' })
      return
    }
    const userResult = await handleDB(res, 'info_user', 'find', 'info_user查询失败', `id=${result[0].id}`)
    if (userResult[0].password_hash === md5(md5(old_password) + keys.password_salt)) {
      await handleDB(res, 'info_user', 'update', '修改密码失败', `id=${result[0].id}`, {
        password_hash: md5(md5(new_password) + keys.password_salt)
      })
      res.send({ errno: '0', errmsg: '操作成功' })
    }
  }
})

module.exports = router
