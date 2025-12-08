import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />

      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-50 border-t border-slate-200">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}
