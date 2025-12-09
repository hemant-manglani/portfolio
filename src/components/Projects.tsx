"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    { name: "AgencyWale", img: "https://www.pyonix.in/assets/projects/agencywale-logo.png", desc: "Digital Agency Platform", href: "https://agencywale.com"},
    { name: "Casa", img: "https://www.pyonix.in/assets/projects/casaLogo.png", desc: "Real Estate Solution", href: "https://casaconstructions.in" },
    { name: "Civilismart", img: "/project/CivilisMart-1024x214.png", desc: "Digital construction workflow platform", href: "https://civilismart.in" },
    { name: "Dapperz", img: "https://www.pyonix.in/assets/projects/dapperz-logo.png", desc: "Fashion E-commerce", href: "https://dapperz.in" },
    { name: "PaperMaker", img: "https://www.pyonix.in/assets/projects/paperMaker.png", desc: "Paper Generator", href: "" },
    { name: "Scan2Serve", img: "https://www.pyonix.in/assets/projects/scan2serve-logo.png", desc: "Food Ordering", href: "https://scan2serve.in/menu/I6uX0rf8pWga" },
    { name: "Temport", img: "https://www.pyonix.in/assets/projects/temport-logo.png", desc: "Social Media", href: "https://play.google.com/store/apps/details?id=com.temport.temport" },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-slate-50 text-slate-900 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 cursor-default"
                >
                    Projects at Pyonix Technology
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-500 border border-slate-100 hover:border-blue-300 hover:-translate-y-2 cursor-pointer"
                            role={project.href ? "link" : undefined}
                            tabIndex={project.href ? 0 : undefined}
                            aria-label={project.href ? `Open ${project.name}` : undefined}
                            onClick={() => project.href && window.open(project.href, "_blank")}
                            onKeyDown={(event) => {
                                if (!project.href) return;
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    window.open(project.href, "_blank");
                                }
                            }}
                        >
                            <div className="aspect-video p-6 flex items-center justify-center bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-500">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="max-w-full max-h-full object-contain group-hover:scale-125 group-hover:rotate-3 transition-all duration-500"
                                />
                            </div>

                            <div className="p-6 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50/50 transition-all duration-500">
                                <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{project.name}</h3>
                                <p className="text-slate-500 text-sm group-hover:text-slate-700 transition-colors duration-300">{project.desc}</p>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 to-indigo-600/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-white font-semibold flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 text-lg">
                                    View Details <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                                </span>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
