import { motion } from 'motion/react';
import { Code, Sparkles, Server, MessageSquare, Brain } from 'lucide-react';

const expertise = [
  {
    icon: Sparkles,
    title: 'Premium Web Apps',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Server,
    title: 'Scalable SaaS platforms',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    title: 'Modern Frontend',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Brain,
    title: 'Agentic AI Systems',
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: MessageSquare,
    title: 'Real-time communication',
    color: 'from-teal-500 to-blue-500',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight md:leading-snug mb-6 px-4 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hemant is a product-focused full-stack developer specializing in building beautiful web experiences, scalable SaaS platforms, and intelligent Agentic AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--neon-purple), var(--neon-blue))`,
                  }}
                />
                <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
