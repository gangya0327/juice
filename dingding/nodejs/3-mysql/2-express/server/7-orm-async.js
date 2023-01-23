const express = require('express')
const db = require('../database/2-orm')

const app = express()

app.get('/get_data', (req, res) => {
  ;(async function () {
    let result
    try {
      result = await new Promise((resolve, reject) => {
        let Students = db.model('students1')
        Students.sql('select gender from students1 group by gender', (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
      })
    } catch (error) {
      res.send({ message: '数据库查询出错 ' + error.sqlMessage, code: 501 })
      return
    }
    res.send(result)
  })()
})

app.listen(3001, () => {
  console.log('服务器启动成功')
})
