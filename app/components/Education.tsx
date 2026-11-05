"use client";

import { motion } from "framer-motion";
import { education, personal } from "@/app/data/portfolio";
import { GraduationCap, Building, Globe, Calendar, Star, Lock, Mail, Link } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative School Motif */}
      <div className="absolute top-1/2 right-0 w-48 h-48 bg-accent-violet/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/2 left-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Section Header */}
          <div className="space-y-3 border-l-2 border-accent-violet pl-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-violet">
              06 // EDUCATION & CERTIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground uppercase tracking-tight">
              Academic <span className="gradient-text-violet">Foundation</span>
            </h2>
          </div>

          {/* Education Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Educational Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className="rounded-xl glass border border-glass-border p-5 space-y-3"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-muted uppercase">{edu.duration}</span>
                  </div>
                  {edu.details && (
                    <div className="text-sm text-muted">
                      {edu.details}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl glass border border-glass-border p-8 text-center space-y-6"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                {" "}
                <a
                  href={personal.certificationsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Certifications"
                  className="text-accent-cyan hover:text-accent-violet transition-colors text-underline"
                >
                  Google Drive Certifications
                </a>
                {" "}
              </h3>
              <p className="text-muted text-sm">
                Verified certifications and courses across AI/ML, Computer Vision,
                FastAPI development, creative media, and professional tools.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-md text-accent-cyan border border-accent-cyan/30">TensorFlow</span>
                <span className="px-3 py-1 rounded-md text-accent-magenta border border-accent-magenta/30">PyTorch</span>
                <span className="px-3 py-1 rounded-md text-accent-violet border border-accent-violet/30">YOLO</span>
                <span className="px-3 py-1 rounded-md text-muted border border-white/5">FastAPI</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}