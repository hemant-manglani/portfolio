import { motion } from 'motion/react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { Button } from './ui/button';

const techStack = [
  { name: 'React/Next.js', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'Agentic AI', icon: '🤖' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'AWS', icon: '☁️' },
];

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight md:leading-snug mb-6 pb-2 px-4 py-2 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Crafting Premium Web Apps & Agentic AI Solutions
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Product-focused Full-Stack Developer helping startups build stunning web platforms, scalable SaaS products, and intelligent Agentic AI solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
          >
            View Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-purple-500/50 hover:bg-purple-500/10 text-white px-8 py-6 text-lg"
          >
            <Briefcase className="mr-2 w-5 h-5" />
            Hire Me
          </Button>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="flex flex-wrap gap-6 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-sm text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
