import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'AI Customer Support Agent',
    description: 'AI-powered autonomous assistant using LangChain and LangGraph to automate customer queries and provide intelligent responses.',
    image: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzcyNzg5NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['Python', 'LangChain', 'LangGraph', 'NLP'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Agency Directory SaaS Platform',
    description: 'Marketplace SaaS platform allowing agencies to list services with real-time chat and voice calling using WebRTC and Python WebSockets.',
    image: 'https://images.unsplash.com/photo-1629724024952-bada03d4e392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYXJrZXRwbGFjZSUyMHBsYXRmb3JtfGVufDF8fHx8MTc3MjgwNjUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['Python', 'WebRTC', 'WebSockets', 'FastAPI'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack clothing e-commerce platform built with Django REST API and React.',
    image: 'https://images.unsplash.com/photo-1558234200-3efd43232f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGNsb3RoaW5nfGVufDF8fHx8MTc3MjgwNjUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['Django', 'REST API', 'React', 'PostgreSQL'],
    color: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    title: 'Papermaker EdTech Platform',
    description: 'Platform for schools to generate custom practice papers and allow students to attempt mock exams with performance analytics.',
    image: 'https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzI3ODUwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['Python', 'Django', 'Analytics', 'PDF Generation'],
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    title: 'Robocam AI',
    description: 'Computer vision system that detects and identifies people from RTSP camera feeds using deep learning.',
    image: 'https://images.unsplash.com/photo-1672073311074-f60c4a5e7b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZWlsbGFuY2UlMjBzZWN1cml0eSUyMGNhbWVyYXxlbnwxfHx8fDE3NzI4MDY1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['Python', 'TensorFlow', 'Computer Vision', 'RTSP'],
    color: 'from-teal-500/20 to-green-500/20',
  },
  {
    title: 'Survey Analysis Platform',
    description: 'AI-powered system that analyzes survey data including text, numeric, images, and video using machine learning and NLP.',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc3MjcyMTIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Analytics'],
    color: 'from-purple-500/20 to-blue-500/20',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight md:leading-snug mb-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400">A showcase of my recent work and technical capabilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group h-full flex flex-col"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-xl`} />

              <div className="relative h-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold leading-snug mb-3 px-2 py-1 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-white/10 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
