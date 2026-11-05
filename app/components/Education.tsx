"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, personal } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

interface EducationItemProps {
  edu: typeof education[0];
  index: number;
}

function EducationItem({ edu, index }: EducationItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Timeline Node */}
      <div className="absolute left-0 top-2 z-10 w-8 h-8 rounded-full border-2 border-white/20 bg-black flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-accent-gold/50" />
      </div>

      {/* Card */}
      <div className="ml-16 relative p-6 md:p-8 border border-white/10 bg-gradient-to-br from-white/3 to-white/1 rounded-xl hover:border-accent-gold/30 hover:bg-accent-gold/5 transition-all duration-500">
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent-gold/30 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent-gold/30 rounded-br-xl" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div className="space-y-2">
            <h3 className="font-editorial-heading text-xl md:text-2xl text-white" style={{ lineHeight: 0.88 }}>
              {edu.degree}
            </h3>
            <p className="font-editorial-serif text-white/70 text-base md:text-lg">{edu.institution}</p>
          </div>
          <div className="flex items-center gap-2 text-white/40 font-editorial-mono text-xs tracking-wider uppercase border border-white/10 bg-white/3 px-4 py-2 rounded-full">
            <time dateTime={edu.duration}>{edu.duration}</time>
          </div>
        </div>

        {/* Details */}
        {edu.details && (
          <div className="font-editorial-serif text-white/60 leading-relaxed">
            <span className="font-editorial-mono text-accent-gold text-sm tracking-wider uppercase mr-2">CGPA:</span>
            <span className="font-editorial-heading text-white text-base">{edu.details}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: "#000000" }}>
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      {/* Background geometric accents */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-cyan/5 to-transparent blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-gold/5 to-transparent blur-[200px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-editorial-mono text-xs tracking-widest uppercase text-accent-gold mb-4 block">
            06 — EDUCATION & CERTIFICATIONS
          </span>
          <h2 className="font-editorial-heading text-4xl md:text-6xl lg:text-7xl text-white" style={{ lineHeight: 0.88 }}>
            Academic <span className="shimmer-cta">Foundation</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Education Timeline */}
          <div className="relative pl-4 md:pl-8">
            <>
              {education.map((edu, idx) => (
                <EducationItem key={edu.degree} edu={edu} index={idx} />
              ))}

              {/* End node */}
              <div className="absolute left-0 bottom-0 w-8 h-8 rounded-full border-2 border-white/10 bg-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
            </>
          </div>

          {/* Right: Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-full"
          >
            <div className="relative h-full min-h-[400px] border border-white/10 bg-gradient-to-br from-white/3 to-white/1 rounded-xl p-6 md:p-8">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-accent-gold/30 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-accent-gold/30 rounded-br-xl" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-editorial-mono text-xs tracking-widest uppercase text-white/40">CERTIFICATIONS</span>
                    <a
                      href={personal.certificationsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white/50 hover:text-accent-gold transition-colors font-editorial-mono text-xs tracking-wider uppercase"
                    >
                      View All
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>

                  <p className="font-editorial-serif text-white/70 leading-relaxed">
                    Verified certifications and courses across AI/ML, Computer Vision, FastAPI development, creative media, and professional tools.
                  </p>

                  {/* Certification Badges */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "TensorFlow", color: "accent-gold" },
                      { name: "PyTorch", color: "accent-cyan" },
                      { name: "YOLO", color: "accent-gold" },
                      { name: "FastAPI", color: "accent-cyan" },
                      { name: "OpenCV", color: "accent-gold" },
                      { name: "Roboflow", color: "accent-cyan" },
                      { name: "Supabase", color: "accent-gold" },
                      { name: "Git/GitHub", color: "accent-cyan" },
                    ].map((cert) => (
                      <span
                        key={cert.name}
                        className={cn(
                          "px-4 py-2 rounded-full border text-[11px] font-editorial-mono tracking-wider uppercase transition-all duration-300 hover:scale-105",
                          cert.color === "accent-gold"
                            ? "border-accent-gold/50 bg-accent-gold/10 text-accent-gold hover:bg-accent-gold hover:text-black"
                            : "border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan hover:text-black"
                        )}
                      >
                        {cert.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={personal.certificationsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3.5 rounded-full border border-accent-gold/50 bg-accent-gold/10 text-accent-gold text-[10px] font-editorial-mono tracking-widest uppercase text-center hover:bg-accent-gold hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View All Certifications on Google Drive
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}