import Link from "next/link";

export default function RoomCard({ room }) {
  return (
    <Link href={`/room/${room.id}`}>
      <div className="bg-[#111] border border-red-700 rounded-3xl p-6">
        <h2 className="text-3xl font-bold">
          {room.name}
        </h2>

        <p className="text-yellow-500 text-2xl mt-3">
          {room.blinds}
        </p>
      </div>
    </Link>
  );
}
