"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const stackItems = [
  "NextJS",
  "React",
  "TypeScript",
  "GSAP",
  "MongoDB",
  "ThreeJS",
  "NodeJS",
  "ExpressJS",
  "Docker",
  "React Native",
];

export default function MyStack() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wallRef.current) return;

    const wallWidth = wallRef.current.scrollWidth / 2;

    const tl = gsap.to(wallRef.current, {
      x: -wallWidth,
      duration: 16, // slightly faster
      ease: "linear",
      repeat: -1,
    });

    const speedUp = () => tl.timeScale(2);
    const slowDown = () => tl.timeScale(1);

    wrapperRef.current?.addEventListener("mouseenter", speedUp);
    wrapperRef.current?.addEventListener("mouseleave", slowDown);

    return () => {
      wrapperRef.current?.removeEventListener("mouseenter", speedUp);
      wrapperRef.current?.removeEventListener("mouseleave", slowDown);
      tl.kill();
    };
  }, []);

  const Row = ({
    offset = false,
    variant = "white",
  }: {
    offset?: boolean;
    variant?: "white" | "outline" | "cyan";
  }) => {
    const baseStyle =
      "text-6xl md:text-7xl font-extrabold uppercase whitespace-nowrap italic";

    const variantStyle =
      variant === "outline"
        ? "text-transparent stroke-text"
        : variant === "cyan"
          ? "text-cyan-400"
          : "text-white";

    return (
      <div className={`flex gap-16 ${baseStyle} ${offset ? "ml-24" : ""}`}>
        {[...stackItems, ...stackItems].map((item, i) => (
          <span key={i} className={variantStyle}>
            {item}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div ref={wrapperRef} className="relative overflow-hidden py-24">
      {/* Gradient Edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-10" />

      <div ref={wallRef} className="flex flex-col gap-10 w-max">
        <Row variant="white" />
        <Row variant="outline" offset />
        <Row variant="cyan" />
      </div>
    </div>
  );
}
