const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const rooms = require("./rooms");
const { dealCards } = require("./pokerEngine");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.emit("rooms", rooms);

  socket.on("joinRoom", ({ roomId, username }) => {
    const room = rooms.find((r) => r.id === roomId);

    if (!room) return;

    if (room.players.length >= room.maxPlayers) {
      socket.emit("roomFull");
      return;
    }

    const player = {
      id: socket.id,
      username,
      chips: 1000,
      seat: room.players.length + 1,
      cards: [],
    };

    room.players.push(player);

    socket.join(room.id);

    dealCards(room.players);

    io.to(room.id).emit("roomData", room);

    io.emit("rooms", rooms);
  });

  socket.on("disconnect", () => {
    rooms.forEach((room) => {
      room.players = room.players.filter(
        (player) => player.id !== socket.id
      );
    });

    io.emit("rooms", rooms);
  });
});

server.listen(5000, () => {
  console.log("SERVER STARTED");
});
