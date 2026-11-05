"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/data/portfolio";
import { Code, Zap, Palette, Server, Database, Microscope, Wrench, Cpu, FileCode, FileImage as LucideFileImage, FileVideo, LayoutGrid, GitFork } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Subtle Circuit Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute inset-0 w-full h-full stroke-currentColor stroke-1"
        >
          <path d="M5 13.5a3 3 0 0 1 3-3h2.25c.59 0 1.15.18 1.65.57l4.5-3.25a.75.75 0 1 1 1.12 1.44L9.87 13.05a3 3 0 0 1 1.08 1.35h2.25a3 3 0 0 1 3 3v5.5a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-5.5zM12 18l2.29-1.64a.75.75 0 0 0-.95-.28L12 15.75l-1.71-.88a.75.75 0 0 0-.95.28L12 18zm0-3.25l-2.29 1.64a.75.75 0 0 0-.28.95L12 14.25l1.71.88a.75.75 0 0 0 .28-.95zM5 8.25a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Section Header */}
          <div className="space-y-3 border-l-2 border-accent-violet pl-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-violet">
              04 // SKILLS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground uppercase tracking-tight">
              Engineered <span className="gradient-text-violet">Toolkit</span>
            </h2>
            <p className="text-muted text-sm">
              Categorized expertise from core programming to creative workflows.
            </p>
          </div>

          {/* Skills Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl glass border border-glass-border p-6 text-center hover:border-accent-cyan/40 transition-all hover:shadow-lg hover:shadow-accent-cyan/20"
            >
              <Code className="w-10 h-10 mx-auto mb-4 text-accent-cyan group-hover:text-accent-violet transition-colors" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Python</div>
              <div className="text-xs text-muted uppercase tracking-wider">11 items</div>
            </motion.div>

            {/* AI/ML */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl glass border border-glass-border p-6 text-center hover:border-accent-violet/40 transition-all hover:shadow-lg hover:shadow-accent-violet/20"
            >
              <Zap className="w-10 h-10 mx-auto mb-4 text-accent-magenta group-hover:text-accent-cyan transition-colors" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">AI/ML</div>
              <div className="text-xs text-muted uppercase tracking-wider">18 items</div>
            </motion.div>

            {/* Computer Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl glass border border-glass-border p-6 text-center hover:border-accent-magenta/40 transition-all hover:shadow-lg hover:shadow-accent-magenta/20"
            >
              <Microscope className="w-10 h-10 mx-auto mb-4 text-accent-violet group-hover:text-accent-cyan transition-colors" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Computer Vision</div>
              <div className="text-xs text-muted uppercase tracking-wider">14 items</div>
            </motion.div>

            {/* Backend APIs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl glass border border-glass-border p-6 text-center hover:border-accent-cyan/40 transition-all hover:shadow-lg hover:shadow-accent-cyan/20"
            >
              <Server className="w-10 h-10 mx-auto mb-4 text-accent-cyan group-hover:text-accent-violet transition-colors" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Backend & APIs</div>
              <div className="text-xs text-muted uppercase tracking-wider">12 items</div>
            </motion.div>

            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-xl glass border border-glass-border p-6 text-center hover:border-accent-violet/40 transition-all hover:shadow-lg hover:shadow-accent-violet/20"
            >
              <LucideFileImage className="w-10 h-10 mx-auto mb-4 text-accent-violet group-hover:text-accent-cyan transition-colors" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Frontend</div>
              <div className="text-xs text-muted uppercase tracking-wider">10 items</div>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-xl glass border border-glass-border p-6 text-center hover:border-accent-magenta/40 transition-all hover:shadow-lg hover:shadow-accent-magenta/20"
            >
              <Database className="w-10 h-10 mx-auto mb-4 text-accent-magenta group-hover:text-accent-cyan transition-colors" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Databases</div>
              <div className="text-xs text-muted uppercase tracking-wider">8 items</div>
            </motion.div>

            {/* AR/VR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="rounded-xl glass border border-glass-border p-6 text-center hover:border-accent-cyan/40 transition-all hover:shadow-lg hover:shadow-accent-cyan/20"
            >
              <LayoutGrid className="w-10 h-10 mx-auto mb-4 text-accent-cyan group-hover:text-accent-magenta transition-colors" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">AR/VR</div>
              <div className="text-xs text-muted uppercase tracking-wider">16 items</div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-xl glass border border-glass-border p-6 text-center hover:border-accent-cyan/40 transition-all hover:shadow-lg hover:shadow-accent-cyan/20"
            >
              <Wrench className="w-10 h-10 mx-auto mb-4 text-accent-cyan group-hover:text-accent-violet transition-colors" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Tools</div>
              <div className="text-xs text-muted uppercase tracking-wider">22 items</div>
            </motion.div>

            {/* Creative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="rounded-xl glass border border-glass-border p-6 text-center hover:border-accent-magenta/40 transition-all hover:shadow-lg hover:shadow-accent-magenta/20"
            >
              <Palette className="w-10 h-10 mx-auto mb-4 text-accent-magenta group-hover:text-accent-cyan transition-colors" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Creative</div>
              <div className="text-xs text-muted uppercase tracking-wider">15 items</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}