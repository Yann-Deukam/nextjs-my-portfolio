"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TicTacToeSetup() {
  const router = useRouter();
  const [symbol, setSymbol] = useState<"X" | "O">("X");

  const startGame = () => {
    const turn = symbol === "X" ? "player" : "ai";

    router.push(`/playground/tic-tac-toe/play?symbol=${symbol}&turn=${turn}`);
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-white space-y-8">
      <h1 className="text-4xl font-bold">Choose Your Symbol</h1>

      <TooltipProvider>
        <div className="flex gap-8">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setSymbol("X")}
                className={`w-24 h-24 text-4xl rounded-2xl border transition-all duration-300 ${
                  symbol === "X"
                    ? "border-cyan-400 shadow-[0_0_20px_#22d3ee]"
                    : "border-gray-600"
                }`}
              >
                X
              </button>
            </TooltipTrigger>
            <TooltipContent>You play first</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setSymbol("O")}
                className={`w-24 h-24 text-4xl rounded-2xl border transition-all duration-300 ${
                  symbol === "O"
                    ? "border-red-500 shadow-[0_0_20px_#ef4444]"
                    : "border-gray-600"
                }`}
              >
                O
              </button>
            </TooltipTrigger>
            <TooltipContent>You play second</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      <button
        onClick={startGame}
        className="mt-10 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-md text-black font-bold transition"
      >
        Start Game
      </button>
    </div>
  );
}
