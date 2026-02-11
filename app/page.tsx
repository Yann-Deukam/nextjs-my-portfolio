import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/Experience";
import Hero from "@/components/Hero";

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
      </div>
    </div>
  );
}
