import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Terminal } from './components/Terminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  CustomCursor,
  KonamiEasterEgg,
  MagneticButtons,
  ScrollReveal,
  NeuralNetworkGame,
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
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <NeuralNetworkGame />
        <Terminal />
        <Contact />
      </main>
      <KonamiEasterEgg />
      <Footer />
    </>
  );
}
