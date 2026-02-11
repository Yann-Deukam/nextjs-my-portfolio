"use client";

import { Project } from "@/constants";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
        relative group
        w-full h-full
        rounded-3xl overflow-hidden
        border border-white/10
        bg-white/5 backdrop-blur-xl
      "
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            grayscale
            group-hover:grayscale-0
            group-hover:scale-105
            transition-all
            duration-700
          "
        />
      </div>

      {/* Always visible title */}
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">
          {project.title}
        </h3>
      </div>

      {/* Stronger Hover Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/95 via-black/80 to-black/40
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          flex flex-col justify-end p-10
        "
      >
        <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl">
          {project.description}
        </p>

        {/* Buttons Row */}
        <div className="flex items-center justify-between">
          {/* Left side buttons */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="
                px-6 py-2
                border border-white/20
                rounded-full
                hover:bg-white/10
                transition
                text-sm
              "
            >
              Read more
            </Link>

            <Link
              href={project.github ?? "#"}
              className="
                px-6 py-2
                border border-white/20
                rounded-full
                hover:bg-white/10
                transition
                text-sm
              "
            >
              Code
            </Link>
          </div>

          {/* Right side button */}
          <Link
            href={project.demo ?? "#"}
            className="
              px-6 py-2
              border border-white/20
              rounded-full
              hover:bg-white/10
              transition
              text-sm
              flex items-center gap-2
            "
          >
            Live Demo
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
