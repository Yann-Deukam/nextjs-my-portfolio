"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { RotateCcw, Home, Gamepad2 } from "lucide-react";
import confetti from "canvas-confetti";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToeBoard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const playerSymbol = searchParams.get("symbol") as "X" | "O";
  const firstTurn = searchParams.get("turn") as "player" | "ai";

  const aiSymbol = playerSymbol === "X" ? "O" : "X";

  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [turn, setTurn] = useState(firstTurn);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (board: (string | null)[]) => {
    for (let [a, b, c] of winningCombos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (!board.includes(null)) return "draw";
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || turn !== "player" || winner) return;

    const newBoard = [...board];
    newBoard[index] = playerSymbol;

    const result = checkWinner(newBoard);
    setBoard(newBoard);

    if (result) {
      setWinner(result);
      return;
    }

    setTurn("ai");
  };

  useEffect(() => {
    if (turn === "ai" && !winner) {
      const empty = board
        .map((cell, i) => (cell === null ? i : null))
        .filter((v) => v !== null) as number[];

      if (!empty.length) return;

      const randomMove = empty[Math.floor(Math.random() * empty.length)];

      const timeout = setTimeout(() => {
        const newBoard = [...board];
        newBoard[randomMove] = aiSymbol;

        const result = checkWinner(newBoard);
        setBoard(newBoard);

        if (result) {
          setWinner(result);
          return;
        }

        setTurn("player");
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [turn, board, winner]);

  useEffect(() => {
    if (winner === playerSymbol) {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [winner, playerSymbol]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(firstTurn);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-white">
      {/* Thinking Indicator (Reserved Space) */}
      <div className="h-6 mb-6 flex items-center justify-center">
        <p
          className={`text-gray-400 transition-opacity duration-300 ${
            turn === "ai" && !winner ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
        >
          AI is thinking...
        </p>
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-5 p-6 rounded-2xl shadow-[0_0_40px_#22d3ee40]">
        {board.map((cell, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className="w-28 h-28 flex items-center justify-center text-5xl font-bold border border-cyan-400 cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <span
              className={
                cell === "X"
                  ? "text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]"
                  : "text-red-500 drop-shadow-[0_0_8px_#ef4444]"
              }
            >
              {cell}
            </span>
          </div>
        ))}
      </div>

      {/* Result Section (ALWAYS takes space) */}
      <div className="h-32 mt-10 flex flex-col items-center justify-center space-y-4">
        <div className="text-3xl font-bold">
          {winner === "draw" && "Stalemate 🤝"}
          {winner === playerSymbol && "Victory 🚀"}
          {winner &&
            winner !== playerSymbol &&
            winner !== "draw" &&
            "Defeat 💀"}
        </div>

        {winner && (
          <div className="flex gap-10 mt-6">
            {/* Play Again */}
            <button
              onClick={resetGame}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center
                      group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_#22d3ee50]"
              >
                <RotateCcw size={36} className="text-cyan-400" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition">
                Play Again
              </span>
            </button>

            {/* Home */}
            <button
              onClick={() => router.push("/")}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className="w-20 h-20 rounded-full bg-red-500/20 border border-red-400 flex items-center justify-center
                      group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_#ef444450]"
              >
                <Home size={36} className="text-red-400" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-red-400 transition">
                Home
              </span>
            </button>

            {/* Games List */}
            <button
              onClick={() => router.push("/playground")}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className="w-20 h-20 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center
                      group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_#a855f750]"
              >
                <Gamepad2 size={36} className="text-purple-400" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-purple-400 transition">
                Games
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
