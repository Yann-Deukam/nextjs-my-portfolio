"use client";

import React, { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/Blogs";
import ContactSection from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import MyStack from "@/components/MyStack";
import PlaygroundHero from "@/components/Playground";
import { useSearchParams } from "next/navigation";

export default function Home({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        // small timeout to ensure DOM rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [scrollTo]);

  return (
    <>
      <div>
        <div className="pt-28">
          <Hero />
          <Heading id="about" title="More About me" legend="About">
            <AboutSection />
          </Heading>

          <Heading id="experience" title="Work Experience" legend="Experience">
            <ExperienceSection />
          </Heading>

          <Heading id="stack" title="My tech stack" legend="Stack">
            <MyStack />
          </Heading>

          <Heading id="projects" title="Selected Projects" legend="Projects">
            <FeaturedProjects />
          </Heading>

          <Heading
            id="playground"
            title="Digital Playground"
            legend="Playground"
          >
            <PlaygroundHero />
          </Heading>

          <Heading id="blog" title="Latest Blogs" legend="Blog">
            <BlogSection />
          </Heading>

          <Heading id="contact" title="Contact" legend="Contact">
            <ContactSection />
          </Heading>
        </div>
      </div>
    </>
  );
}
