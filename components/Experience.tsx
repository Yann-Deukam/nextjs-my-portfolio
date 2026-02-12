"use client";

import { experiences } from "@/constants";
import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="max-w-7xl mx-auto pb-24 pt-8 space-y-16">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.1,
          }}
          className="grid md:grid-cols-12 gap-10 items-start"
        >
          {/* LEFT - Company Info */}
          <div className="md:col-span-4 bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl space-y-4">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-40 h-24 object-contain mx-auto"
            />

            <h3 className="text-center font-semibold text-lg">{exp.company}</h3>

            <div className="space-y-2 text-sm text-muted-foreground text-center">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                {exp.contactEmail}
              </div>

              {exp.website && (
                <div className="flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" />
                  <a
                    href={exp.website}
                    target="_blank"
                    className="hover:text-primary transition-colors"
                  >
                    Website
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT - Description */}
          <div className="md:col-span-8 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium">
                {exp.role}
              </span>

              <span className="px-4 py-1 text-sm bg-white/10 rounded-full">
                {exp.type}
              </span>

              <span className="px-4 py-1 text-sm bg-white/10 rounded-full">
                {exp.duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground text-justify leading-relaxed">
              {exp.description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
