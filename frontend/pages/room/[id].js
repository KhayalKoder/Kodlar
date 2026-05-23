import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";

import PokerTable from "../../components/PokerTable";

const socket = io("http://localhost:5000");

export default function RoomPage() {
  const router = useRouter();

  const { id } = router.query;

  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (!id) return;

    socket.emit("joinRoom", {
      roomId: id,
      username: "Player",
    });

    socket.on("roomData", (data) => {
      setRoom(data);
    });
  }, [id]);

  if (!room) {
    return (
      <div className="text-white p-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">

      <PokerTable players={room.players} />

      <div className="flex gap-6 mt-10">
        <button
          className="bg-red-700 px-10 py-4 rounded-2xl text-2xl"
          onClick={() =>
            socket.emit("fold", {
              roomId: room.id,
            })
          }
        >
          FOLD
        </button>

        <button
          className="bg-green-700 px-10 py-4 rounded-2xl text-2xl"
          onClick={() =>
            socket.emit("call", {
              roomId: room.id,
            })
          }
        >
          CALL
        </button>

        <button
          className="bg-yellow-500 text-black px-10 py-4 rounded-2xl text-2xl"
          onClick={() =>
            socket.emit("raise", {
              roomId: room.id,
              amount: 100,
            })
          }
        >
          RAISE
        </button>
      </div>
    </div>
  );
}
