const express = require('express');
const { Server } = require('socket.io');

const app = express();
app.listen(8000, () => {
  console.log('server is opening...');
});

const io = new Server(3000, {
  cors: {
    origin: ['http://localhost:7070'],
  },
});

io.on('connection', (socket) => {
  console.log('connected');
});
