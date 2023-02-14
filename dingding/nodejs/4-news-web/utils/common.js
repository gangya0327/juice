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
    if (req.headers['x-csrftoken'] === req.cookies['csrf_token']) {
      next()
    } else {
      res.send({ errmsg: 'csrf验证不通过' })
      return
    }
  }
}

const handleDB = require('../database/handleDB')
async function getUserLogin(req, res) {
  const userId = req.session['USER_ID']
  // 获取数据库中id的用户信息
  let result = []
  if (userId) {
    result = await handleDB(res, 'info_user', 'find', 'info_user查询出错', `id="${userId}"`)
  }
  return result
}

async function getUserInfo(req, res) {
  let result = await getUserLogin(req, res)
  if (!result[0]) res.redirect('/')
  return result
}

async function abort404(req, res) {
  const result = await getUserLogin(req, res)
  res.render('404', {
    user_info: result[0]
      ? {
          nick_name: result[0].nick_name,
          avatar_url: result[0].avatar_url
        }
      : false
  })
}

module.exports = {
  csrfProtect,
  getUserLogin,
  getUserInfo,
  abort404
}
