import PlayerSeat from "./PlayerSeat";

export default function PokerTable({ players }) {
  return (
    <div className="relative w-[1000px] h-[600px] bg-[#220000] rounded-full border-[10px] border-yellow-500 tableGlow">

      <PlayerSeat
        player={players[0]}
        position="top-[20px] left-[430px]"
      />

      <PlayerSeat
        player={players[1]}
        position="top-[120px] right-[40px]"
      />

      <PlayerSeat
        player={players[2]}
        position="bottom-[40px] right-[150px]"
      />

      <PlayerSeat
        player={players[3]}
        position="bottom-[40px] left-[150px]"
      />

      <PlayerSeat
        player={players[4]}
        position="top-[120px] left-[40px]"
      />

      <div className="absolute top-[250px] left-[430px] text-4xl text-yellow-500">
        POT $500
      </div>
    </div>
  );
          }
