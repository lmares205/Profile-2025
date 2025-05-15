import ProjectList from "@/components/projects/ProjectList";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Intro from "@/components/Intro";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 md:gap-14">
        <Intro />
        <AboutMe />
        <ProjectList />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
