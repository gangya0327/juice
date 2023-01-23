const express = require('express')
const db = require('../database/2-orm')

const app = express()

app.get('/get_data', (req, res) => {
  let Students = db.model('students')
  // 查询所有数据
  // Students.find((err, data) => {
  //   res.send(data)
  // })
  // 查询指定字段
  // Students.find(['name', 'age'], (err, data) => {
  //   res.send(data)
  // })
  // 按条件查询
  // Students.find('id=5', (err, data) => {
  //   res.send(data)
  // })
  // 分页查询
  Students.limit({ where: 'age>30', number: 1, count: 5 }, (err, data) => {
    res.send(data)
  })
})

app.listen(3001, () => {
  console.log('服务器启动成功')
})
