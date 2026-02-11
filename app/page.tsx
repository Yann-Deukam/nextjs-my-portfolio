import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/Blogs";
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
        <section>
          <h1 className="text-6xl mt-40 font-bold">More About me</h1>
          <AboutSection />
        </section>
        <section>
          <h1 className="text-6xl mt-40 font-bold">Work Experience</h1>
          <ExperienceSection />
        </section>
        <section>
          <h1 className="text-6xl mt-40 font-bold">My tech stack</h1>
          <MyStack />
        </section>
        <section>
          <h1 className="text-6xl mt-40 font-bold">Selected Projects</h1>
          <FeaturedProjects />
        </section>
        <section>
          <h1 className="text-6xl mt-40 font-bold">Digital Playground</h1>
          <PlaygroundHero />
        </section>
        <section>
          <h1 className="text-6xl mt-40 font-bold">Latest Blogs</h1>
          <BlogSection />
        </section>
      </div>
    </div>
  );
}
