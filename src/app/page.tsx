import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Architecture } from "@/components/architecture";
import { AIResearch } from "@/components/ai-research";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Architecture />
      <AIResearch />
    </>
  );
}
