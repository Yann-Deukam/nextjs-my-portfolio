import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/Blogs";
import ContactSection from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import MyStack from "@/components/MyStack";
import PlaygroundHero from "@/components/Playground";

export default function Home() {
  return (
    <div>
      <div className="pt-28">
        <Hero />
        <section id="about" className="scroll-mt-30">
          <h1 className="text-6xl mt-40 font-bold">More About me</h1>
          <AboutSection />
        </section>
        <section id="experience" className="scroll-mt-30">
          <h1 className="text-6xl mt-40 font-bold">Work Experience</h1>
          <ExperienceSection />
        </section>
        <section id="stack" className="scroll-mt-30">
          <h1 className="text-6xl mt-40 font-bold">My tech stack</h1>
          <MyStack />
        </section>
        <section id="projects" className="scroll-mt-30">
          <h1 className="text-6xl mt-40 font-bold">Selected Projects</h1>
          <FeaturedProjects />
        </section>
        <section id="playground" className="scroll-mt-30">
          <h1 className="text-6xl mt-40 font-bold">Digital Playground</h1>
          <PlaygroundHero />
        </section>
        <section id="blog" className="scroll-mt-30">
          <h1 className="text-6xl mt-40 font-bold">Latest Blogs</h1>
          <BlogSection />
        </section>
        <section id="contact" className="scroll-mt-30">
          <h1 className="text-6xl mt-40 font-bold">Contact</h1>
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
