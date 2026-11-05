"use client";

import { motion } from "framer-motion";
import { stats } from "@/app/data/portfolio";
import { Cpu, Zap, Activity, Code, Target, Sparkles } from "lucide-react";

const icons = [Cpu, Zap, Activity, Code, Target, Sparkles];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Section Header */}
          <div className="space-y-3 border-l-2 border-accent-cyan pl-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan">
              01 // ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground uppercase tracking-tight">
              Architecting <span className="gradient-text-cyan">Intelligence</span> & System Design
            </h2>
          </div>

          {/* Bio & Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Main Confident Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-muted leading-relaxed text-base sm:text-lg"
            >
              <p className="text-foreground font-medium text-lg sm:text-xl">
                I am an AI/ML developer and B.Tech CSE student specializing in Artificial Intelligence and Machine Learning at Bharati Vidyapeeth University.
              </p>
              <p>
                My focus lies in building intelligent, production-ready systems that merge cutting-edge computer vision models with real-world accessibility and performance optimization.
              </p>
              <p>
                With hands-on technical experience across <span className="text-accent-cyan font-mono">Computer Vision (YOLOv8, OpenCV)</span>, <span className="text-accent-magenta font-mono">FastAPI backends</span>, <span className="text-accent-violet font-mono">Multi-Agent AI workflows</span>, <span className="text-foreground font-mono">NLP</span>, and <span className="text-foreground font-mono">IoT</span>, I bridge complex theoretical AI with practical, high-impact digital solutions.
              </p>

              {/* Tag Highlights */}
              <div className="pt-4 flex flex-wrap gap-2 font-mono text-xs">
                {["Computer Vision", "YOLOv8", "FastAPI", "Multi-Agent AI", "NLP", "IoT", "Creative Media"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md glass border border-accent-cyan/20 text-accent-cyan"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Overview Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 rounded-xl glass-strong border border-glass-border p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-glass-border pb-3">
                <span className="text-xs font-mono text-muted uppercase">SYSTEM SPECS</span>
                <span className="text-xs font-mono text-accent-cyan">VERIFIED // 2026</span>
              </div>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex justify-between items-center">
                  <span className="text-muted">Degree:</span>
                  <span className="text-foreground font-semibold">B.Tech CSE (AI & ML)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-muted">CGPA:</span>
                  <span className="text-accent-cyan font-bold">8.2</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-muted">Specialization:</span>
                  <span className="text-foreground">Computer Vision & AI</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-muted">Primary Stack:</span>
                  <span className="text-accent-magenta">Python, YOLO, FastAPI</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Highlight Stats Grid */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted">
              SYSTEM PERFORMANCE METRICS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((stat, idx) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="rounded-xl glass border border-glass-border p-4 hover:border-accent-cyan/40 transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-between text-muted group-hover:text-accent-cyan mb-2">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-[10px] font-mono">0{idx + 1}</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-display font-bold text-accent-cyan mb-1 group-hover:text-shadow-neon">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted leading-snug">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}