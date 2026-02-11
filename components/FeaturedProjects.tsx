"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { projects } from "@/constants";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useLayoutEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const trackWidth = trackRef.current.scrollWidth;

    const extraScroll = trackWidth - containerWidth;

    // height = viewport + horizontal distance
    setSectionHeight(window.innerHeight + extraScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const sectionTop = containerRef.current.offsetTop;
      const sectionHeightValue = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollY = window.scrollY;

      // Only run while inside section
      if (
        scrollY < sectionTop ||
        scrollY > sectionTop + sectionHeightValue - viewportHeight
      ) {
        return;
      }

      const scrollInside = scrollY - sectionTop;
      const maxScroll = sectionHeightValue - viewportHeight;

      const containerWidth = containerRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;
      const extraScroll = trackWidth - containerWidth;

      const progress = scrollInside / maxScroll;

      trackRef.current.style.transform = `translateX(-${
        progress * extraScroll
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: sectionHeight }}
    >
      {/* Header */}
      <div className=" pt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-muted-foreground text-lg">
            A curated selection of projects combining performance, architecture,
            and refined user experience.
          </p>
        </div>

        <Link
          href="/projects"
          className="self-start md:self-auto px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition"
        >
          See all projects →
        </Link>
      </div>

      {/* Horizontal Section */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div ref={trackRef} className="flex gap-16 will-change-transform">
          {projects.map((project, index) => (
            <div key={project.title + index} className="min-w-[60vw] h-[75vh]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
