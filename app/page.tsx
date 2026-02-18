"use client";

import React, { Suspense, useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/Blogs";
import ContactSection from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import MyStack from "@/components/MyStack";
import PlaygroundHero from "@/components/Playground";
import ScrollHandler from "@/components/ScrollHandler";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Suspense fallback={null}>
          <ScrollHandler />
        </Suspense>
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
