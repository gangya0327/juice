const express = require('express')
const db = require('../database/2-orm')

const app = express()

app.get('/get_data', (req, res) => {
  let Students = db.model('students')
  // Students.insert({ name: '宋庭鹭', age: 36, height: 1.88, gender: '保密' }, (err, data) => {
  //   res.send('添加成功')
  // })
  Students.insert(
    [
      { name: '王生', age: 24, height: 1.76, gender: '女', class_id: 3 },
      { name: '余地龙', age: 15, height: 1.58, gender: '男', class_id: 3 },
      { name: '吕云长', age: 26, height: 1.8, gender: '保密', class_id: 4 }
    ],
    (err, data) => {
      res.send('添加成功')
    }
  )
})

app.listen(3001, () => {
  console.log('服务器启动成功')
})
