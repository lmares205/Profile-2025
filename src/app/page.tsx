import Image from "next/image";
import ProjectList from "@/components/projects/ProjectList";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Intro from "@/components/Intro";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/LM-logo.png"
          alt="Leslie Mares logo"
          width={180}
          height={38}
          priority
        />

        <Intro />
        <AboutMe />
        <ProjectList />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
