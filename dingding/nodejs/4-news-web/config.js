const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const passportRouter = require('./routes/passport')
const indexRouter = require('./routes/index')
const detailRouter = require('./routes/detail')
const profileRouter = require('./routes/profile')

const common = require('./utils/common')
const keys = require('./keys')

class AppConfig {
  constructor(app) {
    this.app = app
    // 使用静态资源
    this.app.use(express.static(path.join(__dirname, 'public')))

    // 模板引擎
    this.app.engine('html', require('express-art-template'))
    this.app.set('view options', {
      debug: process.env.NODE_ENV !== 'production'
    })
    this.app.set('views', path.join(__dirname, 'views'))
    this.app.set('view engine', 'html')

    // 对post请求参数进行配置
    // 默认application/x-www-form-urlencoded，针对页面提交
    this.app.use(bodyParser.urlencoded({ extended: false }))
    // 默认application/json，针对ajax
    this.app.use(bodyParser.json())

    // 设置cookie
    this.app.use(cookieParser())
    this.app.use(
      cookieSession({
        name: 'news-session',
        // keys: ['ub13fa5^&41n1)kma1'],
        keys: [keys.session_keys],
        maxAge: 1000 * 60 * 60 * 6 // 设置超期时间
      })
    )

    // 设置路由
    this.app.use(common.csrfProtect, passportRouter)
    this.app.use(common.csrfProtect, indexRouter)
    this.app.use(common.csrfProtect, detailRouter)
    this.app.use(common.csrfProtect, profileRouter)
    this.app.use(async (req, res) => {
      common.abort404(req, res)
    })
  }
}

module.exports = AppConfig
