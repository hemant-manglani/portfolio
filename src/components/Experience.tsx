"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Founder & Product Engineer",
        company: "Pyonix Technology",
        location: "Ahmedabad, India",
        period: "Aug 2022 - Present",
        highlights: [
            "Built full-stack e-commerce platform using Django, REST API, React, TypeScript with secure payments and order management",
            "Designed SaaS solution for agency directory with real-time chat and audio calls using WebRTC and Python WebSockets",
            "Developed Papermaker EdTech platform with role-based access and performance tracking dashboards",
            "Integrated AI-driven autonomous assistant for customer support using LangGraph and LangChain"
        ]
    },
    {
        role: "Backend Developer",
        company: "Freelancer",
        location: "Ahmedabad, India",
        period: "Jan 2021 - Aug 2022",
        highlights: [
            "Built Django web applications and REST APIs for social media features",
            "Implemented audio call functionality using WebRTC",
            "Developed chat module using Python WebSocket",
            "Created NLP-based chat analysis and voice assistant"
        ]
    },
    {
        role: "Software Engineer",
        company: "Softvan Pvt. Ltd.",
        location: "Ahmedabad, India",
        period: "Jul 2019 - Dec 2021",
        highlights: [
            "Developed ML/DL projects for Computer Vision and NLP using text, image, and speech data",
            "Built backend using Lambda and FastAPI with automated deployment",
            "Implemented Elasticsearch with fuzzy search, n-gram, and round-robin functionality",
            "Led team of 4 engineers with direct client communication"
        ]
    },
    {
        role: "Software Engineer Intern",
        company: "Softvan Pvt. Ltd.",
        location: "Ahmedabad, India",
        period: "Dec 2017 - May 2018",
        highlights: [
            "Implemented body angle detection project with data analysis and visualization",
            "Developed web application using Flask framework"
        ]
    }
];

export default function Experience() {
    return (
        <section className="py-20 px-6 bg-white text-slate-900 relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 cursor-default"
                >
                    Professional Journey
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative pl-8 border-l-2 border-slate-200 hover:border-blue-500 transition-all duration-500 hover:pl-10 cursor-default"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-500 group-hover:w-6 group-hover:h-6 group-hover:-left-[13px] group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300" />

                            <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 group-hover:translate-x-2 transition-transform duration-300">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{exp.role}</h3>
                                    <h4 className="text-lg text-slate-500 flex items-center gap-2 font-medium mt-1 group-hover:text-blue-500 transition-colors duration-300">
                                        <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                        {exp.company} • {exp.location}
                                    </h4>
                                </div>
                                <span className="text-blue-600 font-mono text-sm bg-blue-50 px-3 py-1 rounded-full w-fit font-semibold group-hover:bg-blue-100 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="mt-4 space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + i * 0.1 }}
                                        className="text-slate-600 leading-relaxed flex items-start gap-2 hover:text-slate-900 hover:translate-x-2 transition-all duration-300 group/item"
                                    >
                                        <span className="text-blue-500 mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300">●</span>
                                        <span className="group-hover/item:font-medium transition-all duration-300">{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
