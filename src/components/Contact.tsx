"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-20 px-6 bg-slate-50 text-slate-900 relative overflow-hidden">
            {/* Animated background particles */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 relative overflow-hidden shadow-2xl shadow-blue-300 hover:shadow-blue-400 hover:scale-[1.02] transition-all duration-500 cursor-default"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>

                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-white group-hover:scale-105 transition-transform duration-300">
                        Let's Connect
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10 group-hover:text-white transition-colors duration-300">
                        I'm currently available for new opportunities and would love to discuss how I can contribute to your team's success.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 mb-6">
                        <a
                            href="mailto:hemant.manglani01@gmail.com"
                            className="group/btn flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                            <Mail className="w-5 h-5 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span className="relative z-10">Email Me</span>
                        </a>
                        <a
                            href="tel:+918200291456"
                            className="group/btn flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-full font-bold hover:bg-blue-800 transition-all border border-blue-500 shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                            <Phone className="w-5 h-5 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span className="relative z-10">Call Me</span>
                        </a>
                    </div>

                    <div className="flex gap-4 justify-center relative z-10">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/social p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-125 hover:rotate-12 duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6 text-white" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/social p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-125 hover:rotate-12 duration-300"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6 text-white" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
