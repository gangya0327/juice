const express = require('express');
const app = express();

const { Server } = require('socket.io');
// socket 服务端口开在 3001
const io = new Server(3001, {});

io.on('connection', (socket) => {
  console.log('connected');
});

// 后端服务开在 8001
app.listen(8001, () => {
  console.log('server is open on 8001');
});
