// 公共工具函数

// 获取指定长度的随机字符串
function getRandomString(length) {
  let str = ''
  while (str.length < length) {
    str += Math.random().toString(36).substring(2)
  }
  return str.substring(0, length)
}

function csrfProtect(req, res, next) {
  if (req.method === 'GET') {
    const csrf_token = getRandomString(32)
    res.cookie('csrf_token', csrf_token)
    next()
  } else if (req.method === 'POST') {
    // console.log(req.headers['x-csrftoken'])
    // console.log(req.cookies['csrf_token'])
    if (req.headers['x-csrftoken'] === req.cookies['csrf_token']) {
      console.log('csrf验证通过')
      next()
    } else {
      res.send({ errmsg: 'csrf验证不通过' })
      return
    }
  }
}

module.exports = {
  csrfProtect
}
