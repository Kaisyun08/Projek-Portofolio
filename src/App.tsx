import Navbar from '@/components/Navbar';
import MarginRail from '@/components/MarginRail';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Education from '@/sections/Education';
import Contact from '@/sections/Contact';

function App() {
  return (
    <>
      <MarginRail />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
      </main>
    </>
  );
}

export default App;
