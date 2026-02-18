"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { RotateCcw, Home, Gamepad2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { CardType, ICONS } from "@/constants";

export default function MemoryGame() {
  const router = useRouter();

  const [cards, setCards] = useState<CardType[]>([]);
  const [selected, setSelected] = useState<CardType[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  // Timer
  useEffect(() => {
    if (won || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [won, gameOver]);

  const initializeGame = () => {
    const duplicated = [...ICONS, ...ICONS];

    const shuffled = duplicated
      .map((value) => ({
        id: Math.random(),
        value,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setSelected([]);
    setMoves(0);
    setWon(false);
    setGameOver(false);
    setTimeLeft(120);
  };

  const handleCardClick = (card: CardType) => {
    if (isChecking || card.isFlipped || card.isMatched || gameOver) return;

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c,
    );

    const newSelected = [...selected, { ...card, isFlipped: true }];

    setCards(updatedCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setIsChecking(true);
      setMoves((prev) => prev + 1);

      setTimeout(() => {
        checkMatch(newSelected);
      }, 500); // faster flip back
    }
  };

  const checkMatch = (selectedCards: CardType[]) => {
    const [first, second] = selectedCards;

    if (first.value === second.value) {
      setCards((prev) =>
        prev.map((card) =>
          card.value === first.value ? { ...card, isMatched: true } : card,
        ),
      );
    } else {
      setCards((prev) =>
        prev.map((card) =>
          card.id === first.id || card.id === second.id
            ? { ...card, isFlipped: false }
            : card,
        ),
      );
    }

    setSelected([]);
    setIsChecking(false);
  };

  // Win detection
  useEffect(() => {
    if (cards.length && cards.every((card) => card.isMatched)) {
      setWon(true);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  }, [cards]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-[80vh] text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Memory Game</h1>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT COLUMN - GAME */}
        <div>
          <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 cursor-pointer"
              >
                <motion.div
                  animate={{
                    rotateY: card.isFlipped || card.isMatched ? 180 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className="absolute w-full h-full bg-cyan-500/20 border border-cyan-400 rounded-xl
                    flex items-center justify-center text-3xl shadow-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    ?
                  </div>

                  {/* Back */}
                  <div
                    className={`absolute w-full h-full rounded-xl
                    flex items-center justify-center text-3xl shadow-lg
                    ${card.isMatched ? "bg-green-500" : "bg-gray-100"}`}
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {card.value}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - INFO PANEL */}
        <div className="flex flex-col gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-4">Game Info</h2>
            <p className="text-lg mb-2">Moves: {moves}</p>
            <p className="text-lg">
              Time Left:{" "}
              <span className={timeLeft < 15 ? "text-red-500" : ""}>
                {formatTime(timeLeft)}
              </span>
            </p>
          </div>

          {(won || gameOver) && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <p className="text-2xl font-semibold mb-6">
                {won ? `🎉 You Won in ${moves} moves!` : "⏳ Time’s up!"}
              </p>

              <div className="flex gap-8">
                <button
                  onClick={initializeGame}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400
                  flex items-center justify-center group-hover:scale-110 transition"
                  >
                    <RotateCcw size={30} className="text-cyan-400" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-cyan-400">
                    Play Again
                  </span>
                </button>

                <button
                  onClick={() => router.push("/playground")}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className="w-16 h-16 rounded-full bg-red-500/20 border border-red-400
                  flex items-center justify-center group-hover:scale-110 transition"
                  >
                    <Home size={30} className="text-red-400" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-red-400">
                    Playground
                  </span>
                </button>
                <button
                  onClick={() => router.push("/playground")}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400
                  flex items-center justify-center group-hover:scale-110 transition"
                  >
                    <Gamepad2 size={30} className="text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-purple-400">
                    Playground
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
