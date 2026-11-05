"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitFork, UserCircle, Star, Mail, Terminal, Cpu } from "lucide-react";
import { personal } from "@/app/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden scanline-overlay">
      {/* Tokyo Midnight Cyberpunk Atmospheric Background */}
      <div className="absolute inset-0 bg-background -z-20" />

      {/* Grid Pattern with Glow Effects */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Atmospheric Neon Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-accent-cyan/15 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-magenta/15 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* Japanese Ambient Text */}
      <div className="absolute top-28 right-8 text-8xl font-black text-white/[0.02] select-none font-mono pointer-events-none uppercase">
        東京
      </div>
      <div className="absolute bottom-20 left-8 text-7xl font-black text-white/[0.02] select-none font-mono pointer-events-none uppercase">
        人工知能
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-accent-cyan/30 text-xs font-mono text-accent-cyan">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span>Available for AI/ML & Engineering Roles</span>
              <span className="text-muted ml-1">· 東京 MIDNIGHT</span>
            </div>

            {/* Name Header */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground uppercase">
                {personal.name.split(" ")[0]}{" "}
                <span className="gradient-text-cyan">{personal.name.split(" ")[1]}</span>
              </h1>
              <p className="text-lg sm:text-xl font-mono text-accent-cyan font-medium">
                {personal.headline}
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
              {personal.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-md font-mono text-sm font-semibold tracking-wider uppercase text-background bg-accent-cyan hover:bg-accent-cyan/90 transition-all shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-md font-mono text-sm font-semibold tracking-wider uppercase text-foreground glass hover:bg-white/10 hover:border-accent-cyan/50 transition-all hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-glass-border">
              <span className="text-xs font-mono text-muted uppercase tracking-widest">Connect:</span>
              <div className="flex gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <GitFork className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <UserCircle className="w-4 h-4" />
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-muted hover:text-accent-magenta hover:border-accent-magenta/40 transition-all hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Star className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg glass text-muted hover:text-accent-violet hover:border-accent-violet/40 transition-all hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive AI / Computer Vision Visual Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-strong border border-glass-border p-6 shadow-2xl overflow-hidden group">
              {/* Corner Accent Decorators */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-cyan rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-magenta rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-magenta rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-cyan rounded-br-xl" />

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-glass-border pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-muted">
                  <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>vision_pipeline.py</span>
                </div>
              </div>

              {/* Simulated Computer Vision Feed */}
              <div className="relative aspect-video rounded-lg bg-black/60 border border-white/5 overflow-hidden flex items-center justify-center">
                {/* Scanning Bounding Box Simulation */}
                <motion.div
                  animate={{
                    x: [-20, 20, -20],
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-32 h-24 border-2 border-accent-cyan/80 rounded bg-accent-cyan/10 flex flex-col justify-between p-1 shadow-lg shadow-accent-cyan/20"
                >
                  <div className="flex justify-between items-center text-[9px] font-mono text-accent-cyan font-bold bg-black/60 px-1 rounded">
                    <span>E-WASTE</span>
                    <span>87%</span>
                  </div>
                  <div className="text-[8px] font-mono text-accent-cyan/80">
                    YOLOv8 DETECTED
                  </div>
                </motion.div>

                {/* Secondary Target Box */}
                <motion.div
                  animate={{
                    x: [30, -30, 30],
                    y: [15, -15, 15],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-24 h-20 border-2 border-accent-magenta/80 rounded bg-accent-magenta/10 flex flex-col justify-between p-1 shadow-lg shadow-accent-magenta/20"
                >
                  <div className="flex justify-between items-center text-[9px] font-mono text-accent-magenta font-bold bg-black/60 px-1 rounded">
                    <span>GESTURE</span>
                    <span>94%</span>
                  </div>
                  <div className="text-[8px] font-mono text-accent-magenta/80">
                    CV_FEED
                  </div>
                </motion.div>

                {/* Grid Lines in Feed */}
                <div className="absolute inset-0 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                {/* Central Status Icon */}
                <Cpu className="w-10 h-10 text-accent-cyan/40 animate-pulse" />
              </div>

              {/* Telemetry Output */}
              <div className="mt-4 font-mono text-xs space-y-1.5 text-muted/80">
                <div className="flex justify-between text-accent-cyan">
                  <span>&gt; MODEL_STATUS: ACTIVE</span>
                  <span>FPS: 60.0</span>
                </div>
                <div className="text-white/40 truncate">
                  [LOG] Inference time: 113ms | Input: 1080p | Device: CUDA:0
                </div>
                <div className="text-white/40 truncate">
                  [LOG] Agents synchronized: 4/4 | System status: Nominal
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent-cyan transition-colors cursor-pointer">
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}