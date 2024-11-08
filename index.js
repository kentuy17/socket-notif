const io = require('socket.io')(3000, {
  cors: {
    origin: ['http://127.0.0.1:8000', 'https://isp24.live']
  }
});

io.on('connection', (socket) => {
  socket.on('deposit', (user) => {
    io.emit('notify-deposit', user);
  })

  socket.on('deposit-processed', () => {
    io.emit('notify-deposit-processed');
  })
})