import ProjectList from "@/components/projects/ProjectList";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Intro from "@/components/Intro";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Intro />
        <AboutMe />
        <ProjectList />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
