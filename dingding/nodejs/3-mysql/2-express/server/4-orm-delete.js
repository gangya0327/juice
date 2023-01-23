const express = require('express')
const db = require('../database/2-orm')

const app = express()

app.get('/get_data', (req, res) => {
  let Students = db.model('students')
  Students.delete('id=15', (err, data) => {
    res.send('删除成功')
  })
})

app.listen(3001, () => {
  console.log('服务器启动成功')
})
