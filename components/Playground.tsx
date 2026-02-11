"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PlaygroundHero() {
  return (
    <section className="w-full py-24">
      <div
        className="
          max-w-6xl mx-auto
          bg-white text-black
          rounded-[40px]
          px-10 md:px-16
          py-16
          shadow-xl
        "
      >
        <div className="max-w-3xl space-y-8">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            What if you took a rest ?
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            A creative space where I experiment with interactive ideas,
            micro-projects, games, animations, and unconventional concepts. This
            is where exploration meets engineering.
          </p>

          {/* CTA */}
          <Link
            href="/playground"
            className="
              inline-flex items-center gap-3
              px-8 py-3
              bg-black text-white
              rounded-full
              hover:bg-neutral-800
              transition
              text-sm md:text-base
              font-medium
            "
          >
            Explore the Playground
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
