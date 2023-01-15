const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 8081

const server = http.createServer((request, response) => {
  let reqUrl = request.url
  if (reqUrl === '/' || reqUrl === '/index.html') {
    let filePath = path.join(__dirname, '6-http-web', 'html', 'index.html')
    let content = fs.readFileSync(filePath)
    response.end(content)
  } else if (reqUrl === '/cate.html') {
    let filePath = path.join(__dirname, '6-http-web', 'html', 'cate.html')
    let content = fs.readFileSync(filePath)
    response.end(content)
  } else if (reqUrl.endsWith('index.css')) {
    let filePath = path.join(__dirname, '6-http-web', 'css', 'index.css')
    let content = fs.readFileSync(filePath)
    response.end(content)
  } else {
    response.end('404，未找到页面')
  }
})

server.listen(port, (error) => {
  if (error) {
    console.log(error)
    return
  }
  console.log('服务器正在运行...')
})
