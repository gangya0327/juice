const express = require('express')
const AppConfig = require('./config')

const app = express()
const port = 3005

// 获取配置信息
new AppConfig(app)

app.listen(port, () => {
  console.log(`服务器启动成功，运行在${port}端口\n`)
})
