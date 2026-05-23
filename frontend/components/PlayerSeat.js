export default function PlayerSeat({
  player,
  position,
}) {
  return (
    <div
      className={`absolute ${position} w-32 h-24 bg-[#111] border border-red-700 rounded-2xl flex flex-col items-center justify-center`}
    >
      <h3>{player?.username || "Empty"}</h3>

      <p className="text-yellow-500">
        ${player?.chips || 0}
      </p>

      {player?.cards && (
        <div className="flex gap-2 mt-2">
          {player.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white text-black w-8 h-10 rounded flex items-center justify-center"
            >
              {card.value}
              {card.suit}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
