const mysql = require('mysql')

// 数据库连接
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'testdb'
})

// function connect() {
//   console.log('pool :>> ', pool);
//   pool.connect((err) => {
//     console.log('连接失败 :>> ', err)
//   })
// }

// 数据库操作
function query(sql, callback) {
  // pool 连接池
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows)
      connection.release()
    })
  })
}

module.exports = {
  // connect,
  query
}
