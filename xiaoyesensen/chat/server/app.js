const { Server } = require('socket.io');

const io = new Server(3000, {
  cors: {
    origin: ['http://localhost:8080'],
  },
});

io.on('connection', (socket) => {
  console.log('connected', socket);
});

const express = require('express');
const app = express();
app.listen(8000, () => {
  console.log('server is opening on http://localhost:8000');
});