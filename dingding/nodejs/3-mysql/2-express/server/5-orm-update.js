const express = require('express')
const db = require('../database/2-orm')

const app = express()

app.get('/get_data', (req, res) => {
  let Students = db.model('students')
  Students.update('id=1', { gender: '保密' }, (err, data) => {
    res.send('修改成功')
  })
})

app.listen(3001, () => {
  console.log('服务器启动成功')
})
