import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import CreativeWork from "@/app/components/CreativeWork";
import Education from "@/app/components/Education";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent-cyan selection:text-background relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <CreativeWork />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}