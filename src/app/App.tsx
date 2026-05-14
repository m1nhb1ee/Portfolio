import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  CustomCursor,
  MagneticButtons,
  ScrollReveal,
  ScrollProgress,
} from './components/Interactive';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <ScrollReveal />
      <MagneticButtons />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
