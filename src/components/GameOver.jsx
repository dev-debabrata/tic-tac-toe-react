export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over" className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-[rgba(22,22,22,0.95)] animate-[pop-in_0.5s_cubic-bezier(0.68,-0.55,0.65,0.52)_forwards] gap-8 ">
      <h2 className=" text-6xl text-[#fcd256] m-0">Game Over!</h2>
      {winner && <p className=" text-3xl text-[#e1dec7]">{winner} won!</p>}
      {!winner && <p className=" text-3xl text-[#e1dec7]">It&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart} className=" block my-0 mx-auto text-2xl bg-none border-2 border-[#fcd256] text-[#fcd256] py-2 px-4 rounded cursor-pointer transition-all duration-200 shadow-[0_0_8px_rgba(255,187,0,0.4)] hover:bg-[#fcd256] hover:text-[#3f3b00] hover:scale-110 hover:shadow-[0_0_20px_rgba(255,187,0,0.8)] ">Rematch!</button>
      </p>
    </div>
  );
}
