import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { EndToEnd } from './components/EndToEnd';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      {/* Animated particle background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <EndToEnd />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}