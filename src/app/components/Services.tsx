import { motion } from 'motion/react';
import { Brain, Code, Rocket, MessageCircle, Cloud } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Web Application Development',
    description: 'Crafting premium, responsive, and dynamic web experiences using React and Next.js.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Full-Stack SaaS Platforms',
    description: 'End-to-end scalable product development tailored for startups.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Agentic AI Integration',
    description: 'Building intelligent autonomous agents and integrating LLMs into web products.',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: MessageCircle,
    title: 'Real-Time Systems',
    description: 'Chat systems, WebRTC communication, and WebSocket applications.',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Deploying scalable systems on AWS using Docker and modern CI/CD pipelines.',
    gradient: 'from-teal-500 to-blue-500',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 px-4 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight md:leading-snug mb-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-lg text-gray-400">What I can help you build</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
