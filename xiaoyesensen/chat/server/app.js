const { Server } = require('socket.io');

const io = new Server(3000, {
  cors: {
    origin: ['http://localhost:8080'],
  },
});

const userList = [];

io.on('connection', (socket) => {
  console.log('\n connected');
  const { username } = socket.handshake.query;
  if (!username) return;
  const userInfo = userList.find((user) => user.username === username);
  if (userInfo) {
    userInfo.id = socket.id;
  } else {
    userList.push({
      id: socket.id,
      username,
    });
  }

  io.emit('online', {
    userList,
  });

  socket.on('send', ({ fromUsername, targetId, msg }) => {
    // console.log(fromUsername, targetId, msg);
    // console.log(io.sockets.sockets);
    const targetSocket = io.sockets.sockets.get(targetId);
    const toUsername = userList.find((user) => user.id === targetId);

    targetSocket?.emit('receive', {
      fromUsername: fromUsername,
      toUsername: toUsername.username,
      msg: msg,
      dateTime: new Date().getTime(),
    });
  });
});

const express = require('express');
const app = express();
app.listen(8000, () => {
  console.log('server is opening on http://localhost:8000');
});
