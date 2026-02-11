"use client";

import { motion } from "framer-motion";
import Shuffle from "./Shuffle";
import { infoCards } from "@/constants";

export default function AboutSection() {
  return (
    <section className="py-24 grid md:grid-cols-12 gap-12">
      {/* LEFT: Info Cards */}
      <div className="md:col-span-4 flex flex-col gap-6">
        {infoCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }} // re-animate on scroll up
            transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }} // safe string for easing
            className="p-6 bg-white/5 backdrop-blur rounded-xl shadow-md border border-white/10"
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* RIGHT: Brief About Me */}
      <div className="md:col-span-8 flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground text-justify leading-relaxed"
        >
          I’m a{" "}
          <span className="font-bold underline decoration-primary text-white">
            {/* <Shuffle
              text="Software Engineer"
              shuffleDirection="right"
              duration={0.55}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="back.out(1.1)"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
            /> */}
            Software Engineer
          </span>{" "}
          and{" "}
          <span className="font-bold underline decoration-primary text-white">
            AI enthusiast
          </span>{" "}
          with a passion for building interactive, scalable, and creative
          projects. I love solving{" "}
          <span className="">challenging problems</span> and turning{" "}
          <span className="">complex ideas into real-world solutions</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground text-justify leading-relaxed"
        >
          Beyond coding, I enjoy{" "}
          <span className="font-bold underline text-white">
            exploring new technologies
          </span>
          , working on <span className="">side-projects</span>, and continuously
          learning. My goal is to contribute to{" "}
          <span className="font-bold underline text-white">
            meaningful projects
          </span>{" "}
          that blend <span className="font-bold text-white">creativity</span>,{" "}
          <span className="font-bold text-white">efficiency</span>, and{" "}
          <span className="font-bold underline text-white">Impact</span>.
        </motion.p>
      </div>
    </section>
  );
}
