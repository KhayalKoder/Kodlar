import { useEffect, useState } from "react";
import io from "socket.io-client";

import Sidebar from "../components/Sidebar";
import RoomCard from "../components/RoomCard";

const socket = io("http://localhost:5000");

export default function Home() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket.on("rooms", (data) => {
      setRooms(data);
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-6xl font-bold text-red-600 mb-10">
          PREMIUM LOBBY
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
