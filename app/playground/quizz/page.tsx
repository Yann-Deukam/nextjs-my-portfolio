"use client";

import React, { useState } from "react";
import { generateQuestions, Question } from "@/constants/generateQuestions";
import { motion } from "framer-motion";
import { RotateCcw, Home, Gamepad2 } from "lucide-react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

interface AnswerRecord {
  question: string;
  selected: string;
  correct: string;
  isCorrect: boolean;
}

export default function QuizPage() {
  const router = useRouter();
  const questions: Question[] = generateQuestions();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentQuestion.correctAnswer;

    setAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: answer,
        correct: currentQuestion.correctAnswer,
        isCorrect,
      },
    ]);

    if (isCorrect) setScore((prev) => prev + 1);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
    }
  };

  const getRatingMessage = () => {
    if (score <= 2) return "👀 You need to explore the portfolio more!";
    if (score <= 4) return "😎 Nice! You know quite a bit!";
    return "🏆 You're officially a portfolio expert!";
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentIndex(0);
    setShowResult(false);
    setAnswers([]);
  };

  return (
    <div className="flex flex-col min-h-[80vh] px-4 text-white mt-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Portfolio Quiz</h1>

      {!showResult ? (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Question + Options */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-semibold">
                Question {currentIndex + 1}/{questions.length}
              </p>
              <p className="mt-4 text-xl">{currentQuestion.question}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option)}
                  className="p-4 bg-cyan-500/20 border border-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500/40 transition"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column: Progress */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4">
              <p className="text-xl font-semibold">Progress</p>
              <p>
                Question: {currentIndex + 1} / {questions.length}
              </p>
              <p>Answers so far: {answers.length}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Result Grid: Answers left, Score & Buttons right */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column: All answers */}
            <div className="flex-1 flex flex-col gap-3">
              {answers.map((ans, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    ans.isCorrect
                      ? "bg-green-600/20 border-green-400"
                      : "bg-red-600/20 border-red-400"
                  }`}
                >
                  <p className="font-semibold">
                    Q{idx + 1}: {ans.question}
                  </p>
                  <p>
                    Your answer: {ans.selected} {ans.isCorrect ? "✅" : "❌"}
                  </p>
                  {!ans.isCorrect && <p>Correct answer: {ans.correct}</p>}
                </div>
              ))}
            </div>

            {/* Right Column: Score, Rating, Buttons */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4">
                <p className="text-3xl font-semibold">
                  Your Score: {score} / {questions.length}
                </p>
                <p className="text-xl text-gray-300">{getRatingMessage()}</p>
              </div>

              <div className="flex flex-col gap-6">
                {/* Buttons */}
                <div className="flex gap-8 flex-wrap">
                  <button
                    onClick={resetQuiz}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center group-hover:scale-110 transition shadow-[0_0_20px_#22d3ee50]">
                      <RotateCcw size={36} className="text-cyan-400" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition">
                      Play Again
                    </span>
                  </button>

                  <button
                    onClick={() => router.push("/")}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-20 h-20 rounded-full bg-red-500/20 border border-red-400 flex items-center justify-center group-hover:scale-110 transition shadow-[0_0_20px_#ef444450]">
                      <Home size={36} className="text-red-400" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-red-400 transition">
                      Home
                    </span>
                  </button>

                  <button
                    onClick={() => router.push("/playground")}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-20 h-20 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center group-hover:scale-110 transition shadow-[0_0_20px_#a855f750]">
                      <Gamepad2 size={36} className="text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-purple-400 transition">
                      Games
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
