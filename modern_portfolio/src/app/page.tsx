import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Seshat from "@/components/Seshat";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GameHud from "@/components/GameHud";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Seshat />
        <Experience />
        <Projects />
        <Skills />
        <Journey />
        <About />
        <Contact />
      </main>
      <Footer />
      <GameHud />
    </>
  );
}
