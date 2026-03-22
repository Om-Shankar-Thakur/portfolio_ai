import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 
        Hero Area for Scrollytelling
        The fixed canvas is rendered in the background via this component. 
        It observes the scroll state relative to window.
      */}
      <ScrollyCanvas frameCount={120} />
      
      {/* 
        The Overlay contains the 3 hero texts that scroll over the canvas.
        Each section inside Overlay is 100vh.
      */}
      <Overlay />

      {/* 
        The standard content sections follow the hero sequences.
        They live inside a relative layout to cover the fixed canvas as the user scrolls further down.
      */}
      <div className="relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,1)]">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
