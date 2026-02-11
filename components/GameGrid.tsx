"use client";

import React from "react";
import { Play } from "lucide-react"; // using lucide-react for the play icon
import { games } from "@/constants";

export default function GameGrid() {
  return (
    <div className="bg-background py-12 mt-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Take a break and play some games! 🎮
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {games.map((game) => (
            <div
              key={game.name}
              className="relative overflow-hidden rounded-xl group cursor-pointer w-full h-56 md:h-48 lg:h-56"
            >
              {/* Game Image */}
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Dark Gradient Overlay with Text and Play Button */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 flex justify-between items-center">
                <p className="text-white font-semibold text-lg">{game.name}</p>

                {/* Play button appears only on hover */}
                <button className="p-4 rounded-full flex items-center justify-center shadow-md bg-black opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 text-white" fill="white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
