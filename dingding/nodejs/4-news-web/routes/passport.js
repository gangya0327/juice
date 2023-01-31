const express = require('express')
const router = express.Router()
// 引入验证码工具
const Captcha = require('../utils/captcha')
const handleDB = require('../database/handleDB')
const md5 = require('md5')
const keys = require('../keys')

// 验证码
router.get('/passport/image_code/:randomCode', (req, res) => {
  // 生成验证码
  const captchaObj = new Captcha()
  const captcha = captchaObj.getCode()

  // 将验证码的文本信息存入session
  req.session['IMG_CODE'] = captcha.text

  // 配合img标签的src属性，显示图片需要设置响应头
  res.setHeader('content-type', 'image/svg+xml')
  // 返回验证码图片base64码
  res.send(captcha.data)
})

// 注册
router.post('/passport/register', (req, res) => {
  ;(async function () {
    //  获取post请求参数，判空
    const { username, image_code, password } = req.body
    if (!username || !password || !image_code) {
      res.send({ errmsg: '缺少参数' })
      return
    }
    // 校验码图片验证码
    if (image_code.toLowerCase() !== req.session['IMG_CODE'].toLowerCase()) {
      res.send({ errmsg: '验证码错误' })
      return
    }
    // 查询数据库，判断用户是否存在
    const result = await handleDB(res, 'info_user', 'find', 'info_user查询出错', `username="${username}"`)
    if (result.length > 0) {
      res.send({ errmsg: '用户已存在' })
      return
    }
    // 用户不存在时，向数据库创建用户数据
    // 双重加盐加密
    const password_md5 = md5(md5(password) + keys.password_salt)
    const newUser = await handleDB(res, 'info_user', 'insert', '新增用户出错', {
      username,
      nick_name: username,
      password_hash: password_md5
    })
    // 注册完成，用户变为登录状态
    req.session['USER_ID'] = newUser.insertId
    res.send({
      errno: '0',
      errmsg: '注册成功'
    })
  })()
})

// 登录
router.post('/passport/login', (req, res) => {
  ;(async function () {
    const { username, password } = req.body
    if (!username || !password) {
      res.send({ errmsg: '缺少参数' })
      return
    }
    const result = await handleDB(res, 'info_user', 'find', 'info_user查询出错', `username="${username}"`)
    if (result.length === 0) {
      res.send({ errmsg: '用户未注册' })
      return
    }
    if (md5(md5(password) + keys.password_salt) !== result[0].password_hash) {
      res.send({ errmsg: '用户名或密码不正确' })
      return
    }
    req.session['USER_ID'] = result[0].id
    res.send({ errno: '0', errmsg: '登录成功' })
  })()
})

// 退出登录
router.post('/passport/logout', (req, res) => {
  delete req.session['USER_ID']
  res.send({ errno: '0', errmsg: '退出成功' })
})

module.exports = router
