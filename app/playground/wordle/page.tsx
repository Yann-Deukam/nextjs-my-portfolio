"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Home, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { WORDS } from "@/constants";

type Status = "playing" | "won" | "lost";

export default function WordlePage() {
  const router = useRouter();
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [status, setStatus] = useState<Status>("playing");

  useEffect(() => {
    const random = WORDS[Math.floor(Math.random() * WORDS.length)];
    setSolution(random);
  }, []);

  useEffect(() => {
    if (status === "won") {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  }, [status]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (status !== "playing") return;

    if (e.key === "Enter") {
      if (currentGuess.length !== 5) return;

      const newGuesses = [...guesses, currentGuess.toUpperCase()];
      setGuesses(newGuesses);
      setCurrentGuess("");

      if (currentGuess.toUpperCase() === solution) {
        setStatus("won");
      } else if (newGuesses.length === 6) {
        setStatus("lost");
      }
    }

    if (e.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }

    if (/^[a-zA-Z]$/.test(e.key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + e.key.toUpperCase());
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const getTileColor = (letter: string, index: number) => {
    if (solution[index] === letter) return "bg-green-500";
    if (solution.includes(letter)) return "bg-yellow-500";
    return "bg-gray-700";
  };

  const resetGame = () => {
    const random = WORDS[Math.floor(Math.random() * WORDS.length)];
    setSolution(random);
    setGuesses([]);
    setCurrentGuess("");
    setStatus("playing");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center text-white px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN — GAME GRID */}
        <div className="flex justify-center lg:justify-end">
          <div className="grid gap-2">
            {[...Array(6)].map((_, rowIndex) => {
              const guess =
                guesses[rowIndex] ||
                (rowIndex === guesses.length ? currentGuess : "");

              return (
                <div key={rowIndex} className="flex gap-2">
                  {[...Array(5)].map((_, colIndex) => {
                    const letter = guess[colIndex] || "";
                    const isSubmitted = rowIndex < guesses.length;

                    return (
                      <motion.div
                        key={colIndex}
                        className={`w-20 h-20 flex items-center justify-center text-2xl font-bold uppercase border border-gray-600
                      ${
                        isSubmitted
                          ? getTileColor(letter, colIndex)
                          : "bg-gray-800"
                      }`}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {letter}
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN — INFO & ACTIONS */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-8">Wordle</h1>

          {status === "playing" && (
            <p className="text-gray-400 mb-6">
              Guess the 5-letter word in 6 attempts.
            </p>
          )}

          {status !== "playing" && (
            <>
              <p className="text-xl font-semibold mb-6">
                {status === "won"
                  ? "🎉 You Won!"
                  : `❌ You Lost! Word was ${solution}`}
              </p>

              <div className="flex gap-10 mt-4">
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
