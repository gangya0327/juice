const http = require('http')

const port = 8080

const server = http.createServer((request, response) => {
  request.on('data', (postData) => {
    console.log('postData :>> ', postData.toString())
  })

  response.end('hello node http')
})

server.listen(port, (error) => {
  if (error) {
    console.log(error)
    return
  }
  console.log('服务器运行中...')
})
