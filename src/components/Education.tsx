"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <section className="py-20 px-6 bg-slate-50 text-slate-900 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 cursor-default"
                >
                    Education & Certifications
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-300 hover:-translate-y-2 transition-all duration-500 cursor-default relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-100 transition-all duration-300">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">Bachelor of Engineering</h3>
                                <p className="text-slate-500 mb-2 font-medium group-hover:text-blue-500 transition-colors duration-300">Information Technology</p>
                                <p className="text-slate-600 text-sm mb-3 group-hover:text-slate-800 transition-colors duration-300">Apollo Institute of Engineering & Technology</p>
                                <p className="text-slate-500 text-sm mb-3">Ahmedabad, India • Jun 2015 - May 2019</p>
                                <p className="text-slate-600 text-sm leading-relaxed mb-2 group-hover:text-slate-800 transition-colors duration-300">
                                    Final year project: Athlete Intelligence System for posture comparison between users and professional athletes.
                                </p>
                                <p className="text-blue-600 font-semibold group-hover:scale-105 inline-block transition-transform duration-300">CGPA: 8.64/10</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-200/50 hover:border-indigo-300 hover:-translate-y-2 transition-all duration-500 cursor-default relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-indigo-100 transition-all duration-300">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">Certifications</h3>
                            </div>
                        </div>

                        <div className="space-y-4 ml-16">
                            <div className="border-l-2 border-blue-200 pl-4 hover:border-blue-500 hover:pl-6 transition-all duration-300 group/cert">
                                <h4 className="font-semibold text-slate-800 group-hover/cert:text-blue-600 transition-colors duration-300">Machine Learning Specialization</h4>
                                <p className="text-sm text-slate-600 group-hover/cert:text-slate-800 transition-colors duration-300">Coursera / Stanford University</p>
                                <p className="text-sm text-slate-500">Instructor: Andrew Ng • Aug 2020</p>
                            </div>

                            <div className="border-l-2 border-indigo-200 pl-4 hover:border-indigo-500 hover:pl-6 transition-all duration-300 group/cert">
                                <h4 className="font-semibold text-slate-800 group-hover/cert:text-indigo-600 transition-colors duration-300">Deep Learning Specialization</h4>
                                <p className="text-sm text-slate-600 group-hover/cert:text-slate-800 transition-colors duration-300">Coursera / deeplearning.ai</p>
                                <p className="text-sm text-slate-500">Instructor: Andrew Ng • Apr 2021</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
