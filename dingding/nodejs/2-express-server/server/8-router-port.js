const express = require('express')
const routerPort = require('../routes/passport')

const app = express()

// 将路由添加到app中
app.use(routerPort)

app.listen(3000, () => {
  console.log('express server 启动成功...')
})
