"use client";

import { motion } from "framer-motion";

const skills = [
    "Python", "Django", "FastAPI", "Flask",
    "LLM & GenAI", "LangChain", "LangGraph", "Agentic AI",
    "TensorFlow", "Keras", "Scikit-Learn",
    "React", "JavaScript", "Next.js", "React.js",
    "AWS", "Docker", "WebSockets", "WebRTC",
    "PostgreSQL", "MongoDB", "DynamoDB", "SQLAlchemy",
    "REST APIs", "Microservices", "System Design"
];

export default function Skills() {
    return (
        <section className="py-20 px-6 bg-white text-slate-900 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 cursor-default"
                >
                    Technical Expertise
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            className="group px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm hover:shadow-xl hover:shadow-blue-200/50 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-default text-sm hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative z-10">{skill}</span>
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
