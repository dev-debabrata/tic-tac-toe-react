export default function Log({ turns }) {
  return (
    <ol className="max-w-[20rem] text-gray-400 list-none my-8 mx-auto p-0 text-center">
      {turns.map((turn, index) => {
        const isHighlighted = index === 0; // Highlight the latest turn (customize this logic)

        return (
          <li
            key={`${turn.square.row}${turn.square.col}`}
            className={`rounded animate-slide-in-left my-3 ${isHighlighted ? 'bg-[#3f3b00] text-white' : ''
              }`}
          >
            {turn.player} selected {turn.square.row},{turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}


