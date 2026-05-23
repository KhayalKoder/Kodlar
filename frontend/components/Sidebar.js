export default function Sidebar() {
  return (
    <div className="w-72 bg-[#090909] h-screen border-r border-red-800 p-6">
      <h1 className="text-5xl font-bold text-red-600">
        POKER
      </h1>

      <div className="mt-10 flex flex-col gap-4">
        <button className="bg-red-800 p-4 rounded-2xl">
          ALL ROOMS
        </button>

        <button className="bg-[#141414] p-4 rounded-2xl">
          LOW STAKES
        </button>

        <button className="bg-[#141414] p-4 rounded-2xl">
          VIP ROOMS
        </button>

        <button className="bg-[#141414] p-4 rounded-2xl">
          CREATE ROOM
        </button>
      </div>
    </div>
  );
}
