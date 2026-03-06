import { motion } from 'motion/react';
import { Lightbulb, Layout, Code2, TestTube, Rocket, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    icon: Lightbulb,
    title: 'Prototype',
    description: 'Transform your ideas into interactive prototypes and proof of concepts',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Layout,
    title: 'System Design',
    description: 'Architecture planning, database design, and scalable infrastructure setup',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Full-stack development using modern technologies and best practices',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TestTube,
    title: 'Testing',
    description: 'Comprehensive testing including unit, integration, and performance tests',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Rocket,
    title: 'Production',
    description: 'Deployment on AWS with Docker containerization and CI/CD pipelines',
    gradient: 'from-pink-500 to-purple-500',
  },
];

const technologies = [
  { name: 'Docker', description: 'Containerization' },
  { name: 'AWS', description: 'Cloud Infrastructure' },
  { name: 'CI/CD', description: 'Automated Deployment' },
  { name: 'GitHub Actions', description: 'Pipeline Automation' },
  { name: 'EC2 & Lambda', description: 'Compute Services' },
  { name: 'Monitoring', description: 'CloudWatch & Logging' },
];

export function EndToEnd() {
  return (
    <section id="end-to-end" className="relative py-24 px-4 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight md:leading-snug mb-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            End-to-End Project Development
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I handle the complete software development lifecycle - from initial concept to production deployment
          </p>
        </motion.div>

        {/* Development Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${phase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 h-full flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${phase.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{phase.title}</h3>
                  <p className="text-sm text-gray-400">{phase.description}</p>
                </div>

                {/* Arrow connector */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Technologies & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl rounded-3xl" />

          <div className="relative p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-8 text-center px-4 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              DevOps & Deployment Stack
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{tech.name}</p>
                    <p className="text-xs text-gray-400">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
