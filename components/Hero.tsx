"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import GradientText from "./GradientText";

export default function Hero() {
  const wormRef = useRef<SVGRectElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wormRef.current || !containerRef.current) return;

    const worm = wormRef.current;
    const container = containerRef.current;

    // Create GSAP timeline for the worm orbit
    const tl = gsap.timeline({ paused: true, repeat: -1 });

    tl.to(worm, {
      strokeDashoffset: -100,
      duration: 2.5,
      ease: "linear",
    });

    // Play the timeline only on hover
    const enter = () => tl.play();
    const leave = () => tl.pause();

    container.addEventListener("mouseenter", enter);
    container.addEventListener("mouseleave", leave);

    return () => {
      container.removeEventListener("mouseenter", enter);
      container.removeEventListener("mouseleave", leave);
      tl.kill();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className=" grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          className="space-y-8 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border text-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              Digital renovator
            </GradientText>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Navigating the{" "}
            <span className="text-primary">digital landscape</span> for success
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0">
            I’m a software engineer and AI enthusiast, creating innovative
            projects that showcase my skills, creativity, and problem-solving
            abilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="/signup">
              <button className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
                <span className="absolute inset-0 overflow-hidden rounded-xl">
                  <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
                  <span>Lets get in touch</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SQUIRCLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div
            ref={containerRef}
            className="relative group w-[320px] md:w-[400px] aspect-square"
          >
            {/* Orbiting Worm */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 100 100"
            >
              <rect
                ref={wormRef}
                x="3"
                y="3"
                width="94"
                height="94"
                rx="28"
                ry="28"
                fill="none"
                stroke="hsl(275,80%,60%)"
                strokeWidth="1"
                strokeDasharray="15 85"
              />
            </svg>

            {/* Image */}
            <div
              className="w-full h-full overflow-hidden"
              style={{ borderRadius: "28%" }}
            >
              <img
                src="/pp.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
