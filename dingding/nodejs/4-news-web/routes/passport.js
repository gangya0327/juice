const express = require('express')
const router = express.Router()
// 引入验证码工具
const Captcha = require('../utils/captcha')

router.get('/passport/image_code/:randomCode', (req, res) => {
  const captchaObj = new Captcha()
  const captcha = captchaObj.getCode()
  console.log('captcha :>> ', captcha.text)
  res.setHeader('content-type', 'image/svg+xml')
  // 返回验证码图片base64码
  res.send(captcha.data)
})

module.exports = router
