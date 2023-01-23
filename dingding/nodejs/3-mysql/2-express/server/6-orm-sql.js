const express = require('express')
const db = require('../database/2-orm')

const app = express()

app.get('/get_data', (req, res) => {
  let Students = db.model('students')
  Students.sql('select gender from students group by gender', (err, data) => {
    res.send(data)
  })
})

app.listen(3001, () => {
  console.log('服务器启动成功')
})
