export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board" className=" flex flex-col flex-wrap justify-center gap-8 my-12 mx-0 p-0">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className=" flex flex-wrap justify-center items-center gap-8 m-0 p-0">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                  className=" w-30 h-30 border-none bg-[#aca788] text-[#3f3b00] text-8xl font-extrabold cursor-pointer p-4 "
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
