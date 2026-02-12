"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import GradientText from "./GradientText";

export default function Hero() {
  const wormRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const halo = containerRef.current.querySelector("#shapeHalo");

    if (!halo) return;

    const tl = gsap.to(halo, {
      rotate: 360,
      duration: 6,
      ease: "linear",
      repeat: -1,
      paused: true,
    });

    const enter = () => {
      halo.classList.add("border");
      tl.play();
    };

    const leave = () => {
      tl.pause();
      gsap.set(halo, { rotate: 0 });
    };

    containerRef.current.addEventListener("mouseenter", enter);
    containerRef.current.addEventListener("mouseleave", leave);

    return () => {
      containerRef.current?.removeEventListener("mouseenter", enter);
      containerRef.current?.removeEventListener("mouseleave", leave);
      tl.kill();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 h-125 w-200 bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center px-4 md:px-0">
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
              colors={["#FFFFFF99", "#FFFFFFCC", "#FFFFFF99"]}
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
            Software engineer based in Cameroon with 3+ years of experience
            building innovative, problem-solving solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact">
              <button className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-lg cursor-pointer group rounded-xl overflow-hidden">
                {/* Radial gradient hover */}
                <span className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-[radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_75%)] rounded-xl"></span>

                <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10">
                  <span>Let's get in touch</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + CIRCULAR HALO */}
        {/* RIGHT IMAGE + HALO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div
              ref={containerRef}
              className="relative group w-[320px] md:w-100 aspect-square"
            >
              {/* SHAPE STROKE HALO */}
              <div
                className="absolute inset-0 rounded-[28%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                id="shapeHalo"
              />

              {/* IMAGE */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{ borderRadius: "28%" }}
              >
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
