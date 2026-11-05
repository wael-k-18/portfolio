"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { stats } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

interface StatCounterProps {
  value: string;
  label: string;
  index: number;
}

function StatCounter({ value, label, index }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const targetValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(targetValue * eased);
        setCount(current);
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(targetValue);
      };
      animate();
    }
  }, [isInView, targetValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-6 md:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-3 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent-gold/50 group-hover:bg-accent-gold/10 transition-all duration-500">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-accent-gold to-yellow-400" />
        </div>
        <div className="font-editorial-heading text-4xl md:text-5xl lg:text-6xl text-white" style={{ lineHeight: 0.88 }}>
          <span className="font-bold">{count}{suffix}</span>
        </div>
        <p className="mt-3 font-editorial-serif text-white/60 text-sm md:text-base leading-relaxed max-w-xs">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: "#000000" }}>
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      {/* Background geometric accent */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-accent-gold/10 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-accent-cyan/10 to-transparent blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="font-editorial-mono text-xs tracking-widest uppercase text-accent-gold mb-4 block">
            01 — ABOUT
          </span>
          <h2 className="font-editorial-heading text-4xl md:text-6xl lg:text-7xl text-white" style={{ lineHeight: 0.88 }}>
            Architecting <span className="shimmer-cta">Intelligence</span>
          </h2>
        </motion.div>

        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-editorial-serif text-white/70 text-lg md:text-xl leading-relaxed"
            >
              <p className="mb-6 text-foreground font-medium">
                I am an AI/ML developer and B.Tech CSE student specializing in Artificial Intelligence and Machine Learning at Bharati Vidyapeeth University.
              </p>
              <p className="mb-6">
                My focus lies in building intelligent, production-ready systems that merge cutting-edge computer vision models with real-world accessibility and performance optimization.
              </p>
              <p>
                With hands-on technical experience across
                <span className="text-accent-gold font-editorial-mono">Computer Vision (YOLOv8, OpenCV)</span>,
                <span className="text-accent-cyan font-editorial-mono">FastAPI backends</span>,
                <span className="text-accent-gold font-editorial-mono">Multi-Agent AI workflows</span>,
                <span className="text-white/80 font-editorial-mono">NLP</span>, and
                <span className="text-white/80 font-editorial-mono">IoT</span>,
                I bridge complex theoretical AI with practical, high-impact digital solutions.
              </p>
            </motion.div>

            {/* Tech Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {["Computer Vision", "YOLOv8", "FastAPI", "Multi-Agent AI", "NLP", "IoT", "Creative Media"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-editorial-mono tracking-wider uppercase hover:border-accent-gold/50 hover:bg-accent-gold/10 hover:text-accent-gold transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-full min-h-[400px] rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 p-6 md:p-8">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-accent-gold/50 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-accent-gold/50 rounded-br-xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-editorial-mono text-xs tracking-widest uppercase text-white/40">SYSTEM SPECS</span>
                  <span className="font-editorial-mono text-xs tracking-widest text-accent-gold">VERIFIED // 2026</span>
                </div>

                <dl className="space-y-5 font-editorial-serif text-white/70">
                  <div className="flex justify-between items-baseline">
                    <dt className="text-white/50">Degree</dt>
                    <dd className="font-editorial-heading text-white text-sm md:text-base">B.Tech CSE (AI & ML)</dd>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <dt className="text-white/50">CGPA</dt>
                    <dd className="font-editorial-heading text-accent-gold text-sm md:text-base">8.2</dd>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <dt className="text-white/50">Specialization</dt>
                    <dd className="text-white/80 text-sm md:text-base">Computer Vision & AI</dd>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <dt className="text-white/50">Primary Stack</dt>
                    <dd className="font-editorial-mono text-accent-cyan text-sm md:text-base">Python, YOLO, FastAPI</dd>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <dt className="text-white/50">Location</dt>
                    <dd className="text-white/80 text-sm md:text-base">Mumbai, India</dd>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <dt className="text-white/50">Status</dt>
                    <dd className="flex items-center gap-2 text-accent-gold text-sm md:text-base">
                      <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                      Available for Roles
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <span className="font-editorial-mono text-xs tracking-widest uppercase text-white/40 mb-3 block">SYSTEM METRICS</span>
            <h3 className="font-editorial-heading text-3xl md:text-4xl text-white" style={{ lineHeight: 0.88 }}>Performance Data</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {stats.map((stat, idx) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} index={idx} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}