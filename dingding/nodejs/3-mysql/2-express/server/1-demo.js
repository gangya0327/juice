const express = require('express')
const db = require('../database/1-db')

console.log('db :>> ', db)

const app = express()

app.get('/get_data', (req, res) => {
  db.query('select * from students where id=1', (err, data) => {
    if (err) {
      console.log('err :>> ', err)
      return
    }
    console.log('data :>> ', data)
  })
  res.send('data')
})

app.listen(3001, () => {
  console.log('服务器启动成功')
})
