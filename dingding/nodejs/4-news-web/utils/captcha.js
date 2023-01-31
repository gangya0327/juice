const svgCaptcha = require('svg-captcha')

class Captcha {
  getCode() {
    const captcha = svgCaptcha.create({
      inverse: false, // 翻转颜色
      fontSize: 64,
      noise: 2, // 噪声线条数
      width: 140,
      height: 30,
      size: 4, // 验证码长度
      ignoreChars: '0o1i'
    })
    return captcha
  }
}

module.exports = Captcha
