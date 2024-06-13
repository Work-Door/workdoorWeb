const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: 'http://localhost:3000' } }); // Atualize a origem do CORS conforme necessário

const PORT = process.env.PORT || 3001; // Altere a porta conforme necessário

// Armazenar informações dos usuários conectados
const users = {};

io.on('connection', socket => {
  console.log('Usuário conectado!', socket.id);

  socket.on('disconnect', () => {
    console.log('Usuário desconectado!', socket.id);
    delete users[socket.id];
    io.emit('userDisconnected', socket.id);
  });

  socket.on('message', ({ text, senderId, senderName }) => {
    const messageData = {
      text,
      authorId: senderId,
      author: senderName,
    };
    io.emit('receive_message', messageData);
  });

  socket.on('set_user', (userId, userName) => {
    users[socket.id] = { id: userId, name: userName };
    io.emit('userConnected', { id: userId, name: userName });
  });

  socket.on('get_active_users', () => {
    io.emit('active_users', Object.values(users));
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
