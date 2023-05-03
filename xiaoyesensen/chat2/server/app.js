const express = require('express');
const app = express();

const { Server } = require('socket.io');
// socket 服务端口开在 3001
const io = new Server(3001, {
  cors: {
    origin: 'http://localhost:8080',
  },
});

const userList = [];

io.on('connection', (socket) => {
  const username = socket.handshake.query.username;
  if (!username) return;
  const userInfo = userList.find((user) => user.username === username);
  if (userInfo) {
    userInfo.id = socket.id;
  } else {
    userList.push({ id: socket.id, username });
  }

  io.emit('online', {
    userList,
  });

  socket.on('send', ({ from, targetId, msg }) => {
    const targetSocket = io.sockets.sockets.get(targetId);
    const toUser = userList.find((user) => user.id === targetId);
    targetSocket?.emit('receive', {
      from: from,
      to: toUser.username,
      msg,
      dateTime: new Date().getTime(),
    });
  });
});

// 后端服务开在 8001
app.listen(8001, () => {
  console.log('server is open on 8001');
});
