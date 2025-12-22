"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let mouseX = 0;
        let mouseY = 0;
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        class Wave {
            y: number;
            length: number;
            amplitude: number;
            frequency: number;
            phase: number;
            speed: number;
            color: string;

            constructor(y: number, color: string, amplitude: number, frequency: number, speed: number) {
                this.y = y;
                this.length = 0.01;
                this.amplitude = amplitude;
                this.frequency = frequency;
                this.phase = 0;
                this.speed = speed;
                this.color = color;
            }

            update() {
                this.phase += this.speed;
            }

            draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
                ctx.beginPath();
                ctx.moveTo(0, height / 2);

                for (let x = 0; x < width; x++) {
                    const distanceFromMouse = Math.sqrt(
                        Math.pow(x - mouseX, 2) + Math.pow(this.y - mouseY, 2)
                    );
                    const mouseInfluence = Math.max(0, 150 - distanceFromMouse) / 150;

                    const y =
                        this.y +
                        Math.sin(x * this.frequency + this.phase) * this.amplitude +
                        mouseInfluence * 30 * Math.sin(x * 0.01);

                    ctx.lineTo(x, y);
                }

                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }

        const waves = [
            new Wave(100, "rgba(59, 130, 246, 0.15)", 20, 0.01, 0.03),
            new Wave(150, "rgba(99, 102, 241, 0.1)", 25, 0.008, 0.02),
            new Wave(200, "rgba(139, 92, 246, 0.08)", 30, 0.012, 0.025),
        ];

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            waves.forEach((wave) => {
                wave.update();
                wave.draw(ctx, canvas.width, canvas.height);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden bg-white text-slate-900">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ opacity: 0.6 }}
            />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,black,rgba(255,255,255,0))] opacity-[0.03]"></div>



            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center z-10"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 cursor-default">
                    Hemant Manglani
                </h1>
                <h2 className="text-2xl md:text-3xl text-slate-600 mb-8 font-light hover:text-blue-600 transition-colors duration-300 cursor-default">
                    Backend Developer & Product Engineer
                </h2>

                <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto text-left md:text-center">
                    <p className="font-medium text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-[1.02] cursor-default">
                        Results-driven Python Backend Developer & Product Engineer with 6+ years of experience building scalable web applications, SaaS platforms, AI-driven products, and cloud-native systems.
                    </p>
                    <p className="hover:text-slate-800 transition-all duration-300 hover:scale-[1.02] cursor-default">
                        Strong expertise in <span className="font-semibold text-blue-600 hover:text-indigo-600 transition-colors">FastAPI, Django, AWS, NLP, ML/DL, WebSockets, Agentic AI, LLM, LangGraph, WebRTC, Docker</span>, and distributed architectures.
                    </p>
                    <p className="hover:text-slate-800 transition-all duration-300 hover:scale-[1.02] cursor-default">
                        As a Product Engineer, I've handled end-to-end product development, architecture, team collaboration, and client communication—strengthening my problem-solving skills and entrepreneurial mindset.
                    </p>
                    <p className="hover:text-slate-800 transition-all duration-300 hover:scale-[1.02] cursor-default">
                        Now seeking to join a high-growth, forward-thinking company where I can contribute my expertise, learn from a strong team, and accelerate professional growth while delivering meaningful value.
                    </p>
                </div>

                <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a
                        href="/Hemant-Resume-Updated.pdf"
                        download
                        className="group flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-110 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 cursor-pointer relative overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                        <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                        <span className="relative z-10">Download Resume</span>
                    </a>
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 px-8 py-3 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 rounded-full font-semibold transition-all hover:scale-110 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-100 cursor-pointer"
                    >
                        View Work
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-2 transition-transform duration-300" />
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
