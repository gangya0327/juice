const http = require('http')
const url = require('url')

const port = 8080

const server = http.createServer((request, response) => {
  let reqUrl = request.url
  console.log('reqUrl :>> ', reqUrl)

  let reqMethod = request.method
  console.log('reqMethod :>> ', reqMethod)

  // true表示解析成一个对象
  let parse = url.parse(reqUrl, true)
  console.log('parse :>> ', parse)

  response.end('hello node http')
})

server.listen(port, (error) => {
  if (error) {
    console.log(error)
    return
  }
  console.log('服务器运行中...')
})
