const express = require('express')
// const db = require('../database/2-orm')
const handleDB = require('../database/3-handleDB')

const app = express()

app.get('/get_data', (req, res) => {
  ;(async function () {
    // let result = await handleDB(res, 'students', 'find', '数据库查询出错', 'id=4')
    let result = await handleDB(res, 'students', 'update', '数据库修改出错', 'id=4', { gender: '女' })
    res.send(result)
  })()
})

app.listen(3001, () => {
  console.log('服务器启动成功')
})
