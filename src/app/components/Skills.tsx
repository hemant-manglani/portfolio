import { motion } from 'motion/react';

const skillCategories = [
  {
    category: 'Web Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-pink-500 to-purple-500',
  },
  {
    category: 'Backend Architecture',
    skills: ['Python', 'FastAPI', 'Django', 'REST APIs', 'Node.js'],
    color: 'from-purple-500 to-blue-500',
  },
  {
    category: 'Agentic AI & ML',
    skills: ['LangChain', 'LangGraph', 'OpenAI', 'TensorFlow', 'NLP'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'EC2', 'Lambda', 'CI/CD'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    category: 'Real-time Systems',
    skills: ['WebSockets', 'WebRTC'],
    color: 'from-teal-500 to-green-500',
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'VectorDB', 'DynamoDB', 'SQL'],
    color: 'from-green-500 to-blue-500',
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight md:leading-snug mb-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--neon-purple), var(--neon-cyan))`,
                }}
              />
              <div className="relative h-full p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col">
                <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} mb-4 self-start`}>
                  <h3 className="font-semibold text-white">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}