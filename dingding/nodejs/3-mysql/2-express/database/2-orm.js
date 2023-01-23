const mysql = require('mysql')

const orm_config = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '12345678',
  database: 'testdb'
}

let options = {}
let tableSQL = ''
// let isConnect = false
let isConnect = true

function Model(name, option) {
  this.name = name
  this.option = option
}

Model.prototype.find = function (options, callback) {
  if (!isConnect) {
    this.connect((err) => {
      isConnect = true
      let str = ''
      if (!callback) {
        str = `select * from ${this.name}`
        callback = options
      } else if (options.constructor === Array) {
        str = `select ${options.join()} from ${this.name}`
      } else {
        str = `select * from ${this.name} where ${options}`
      }
      connection.query(str, (err, results, fields) => {
        callback(err, results, fields)
      })
      return this
    })
  } else {
    let str = ''
    if (!callback) {
      str = `select * from ${this.name}`
      callback = options
    } else if (options.constructor === Array) {
      str = `select ${options.join()} from ${this.name}`
    } else {
      str = `select * from ${this.name} where ${options}`
    }
    connection.query(str, (err, results, fields) => {
      callback(err, results, fields)
    })
    return this
  }
}

Model.prototype.limit = function (options, callback) {
  let str = ''
  if (!options.where) {
    str = `select * from ${this.name} limit ${(options.number - 1) * options.count}, ${options.count}`
  } else {
    str = `select * from ${this.name} where ${options.where} limit ${(options.number - 1) * options.count}, ${
      options.count
    }`
  }
  connection.query(str, (err, results, fields) => {
    callback(err, results, fields)
  })
  return this
}

Model.prototype.insert = function (obj, callback) {
  if (!isConnect) {
    this.connect((err) => {
      if (err) throw err
      else {
        connection.query(tableSQL, (err, results, fields) => {
          if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
              this.insertObj(obj[i], callback)
            }
          } else {
            this.insertObj(obj, callback)
          }
        })
      }
    })
  } else {
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        this.insertObj(obj[i], callback)
      }
    } else {
      this.insertObj(obj, callback)
    }
  }
}

Model.prototype.insertObj = function (obj, callback) {
  let keys = []
  let values = ''
  for (var key in obj) {
    keys.push(key)
    values += `"${obj[key]}",`
  }
  values = values.replace(/,$/, '')
  let str = `insert into ${this.name} (${keys.join()}) values (${values})`
  connection.query(str, (err, results, fields) => {
    callback(err, results)
  })
}

Model.prototype.update = function (option, obj, callback) {
  let str = ''
  if (arguments.length === 2) {
    callback = obj
    obj = option
    str = `update ${this.name} set `
    for (var key in obj) {
      str += `${key}='${obj[key]}', `
    }
    str.replace(/(,)$/, '')
  } else {
    str = `update ${this.name} set `
    for (var key in obj) {
      str += `${key}='${obj[key]}', `
    }
    str = str.replace(/(, )$/, '')
    str += ` where ${option}`
  }
  console.log('str :>> ', str)
  connection.query(str, (err, results, fields) => {
    callback(err, results, fields)
  })
  return this
}

Model.prototype.delete = function (option, callback) {
  let str = ''
  if (!callback) {
    str = `delete from ${this.name}`
    callback = option
  } else {
    str = `delete from ${this.name} where ${option}`
  }
  connection.query(str, (err, results, fields) => {
    callback(err, results, fields)
  })
  return this
}

Model.prototype.sql = function (str, callback) {
  connection.query(str, (err, results, fields) => {
    callback(err, results, fields)
  })
  return this
}

Model.prototype.drop = function (callback) {
  connection.query(`drop table ${this.name}`, (err, results, fields) => {
    callback(err, results, fields)
  })
  return this
}

Model.prototype.connect = function (callback) {
  let p1 = new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) reject(err)
      else resolve()
    })
  })
  p1.then(
    () => {
      callback(null)
    },
    (err) => {
      if (err.sqlState === 42000) {
        createDatabase(callback)
      } else if (err.sqlState === 28000) {
        callback('数据库账号或密码错误')
      } else {
        callback(err)
      }
    }
  )
}

let createDatabase = function (callback) {
  let p2 = new Promise((resolve, reject) => {
    connection = mysql.createConnection({
      host: options.host,
      port: options.port,
      user: options.user,
      password: options.password
    })
    connection.connect((err) => {
      if (err) reject(err)
      else resolve()
    })
  })
  let p3 = new Promise((resolve, reject) => {
    connection.query(`create database ${options.database}`, (err, results, fields) => {
      if (err) reject(err)
      else resolve()
    })
  })
  let p4 = new Promise((resolve, reject) => {
    connection.query(`use ${options.database}`)
  })
  let pAll = Promise.all([p2, p3, p4])
  pAll
    .then(() => {
      callback(null)
    })
    .catch((err) => {
      callback(err)
    })
}

let orm = {
  connect: function ({ host = 'localhost', port = 3306, user = '', password = '', database = 'og' }) {
    // 全局存储当前数据库名称
    databaseName = database
    options = {
      host,
      port,
      user,
      password,
      database
    }
    connection = mysql.createConnection(options)
  },

  model: function (name, options) {
    let str = 'id int primary key auto_increment '
    for (var key in options) {
      if (options[key] === Number) {
        str += `${key} numeric,`
      } else if (options[key] === Date) {
        str += `${key} timestamp,`
      } else {
        str += `${key} varchar(255),`
      }
    }
    str = str.replace(/,$/, '')
    tableSQL = `create table ${name} (${str})`
    return new Model(name, options)
  }
}

orm.connect(orm_config)

module.exports = orm
