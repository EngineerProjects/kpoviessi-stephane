import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Seshat from "@/components/Seshat";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Seshat />
        <Experience />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
