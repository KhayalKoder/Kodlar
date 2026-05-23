const { v4: uuidv4 } = require("uuid");

const rooms = [
  {
    id: uuidv4(),
    name: "Bronze Room",
    blinds: "0.20 / 0.40",
    buyIn: 20,
    players: [],
    maxPlayers: 5,
    premium: false,
  },
  {
    id: uuidv4(),
    name: "Silver Room",
    blinds: "1 / 2",
    buyIn: 100,
    players: [],
    maxPlayers: 5,
    premium: false,
  },
  {
    id: uuidv4(),
    name: "Gold VIP",
    blinds: "5 / 10",
    buyIn: 500,
    players: [],
    maxPlayers: 5,
    premium: true,
  }
];

module.exports = rooms;
