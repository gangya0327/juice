const db = require('../database/2-orm')
async function handleDB(res, tableName, methodName, errorMsg, n1, n2) {
  let Students = db.model(tableName)
  let result
  try {
    result = await new Promise((resolve, reject) => {
      // 没有参数
      if (!n1) {
        Students[methodName]((err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
        return
      }
      // 只传一个参数
      if (!n2) {
        Students[methodName](n1, (err, data) => {
          if (err) {
            reject(err)
            return
          }
          resolve(data)
        })
        return
      }
      // 传了两个参数
      Students[methodName](n1, n2, (err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data)
      })
    })
  } catch (error) {
    res.send({ message: `${errorMsg} ${error.sqlMessage}`, code: 501 })
    return
  }
  return result
}

module.exports = handleDB
