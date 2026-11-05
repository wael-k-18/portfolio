"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

interface ExperienceItemProps {
  item: typeof experience[0];
  index: number;
}

function ExperienceItem({ item, index }: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Timeline Node */}
      <div className="absolute left-0 top-2 z-10 w-8 h-8 rounded-full border-2 border-white/20 bg-black flex items-center justify-center group-hover:border-accent-gold group-hover:bg-accent-gold/20 transition-all duration-500">
        <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-accent-gold group-hover:w-3 group-hover:h-3 transition-all duration-500" />
      </div>

      {/* Card */}
      <div className="ml-16 relative p-6 md:p-8 border border-white/10 bg-gradient-to-br from-white/3 to-white/1 rounded-xl hover:border-accent-gold/30 hover:bg-accent-gold/5 transition-all duration-500">
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent-gold/30 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent-gold/30 rounded-br-xl" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="space-y-2">
            <h3 className="font-editorial-heading text-2xl md:text-3xl text-white" style={{ lineHeight: 0.88 }}>
              {item.role}
            </h3>
            <p className="font-editorial-mono text-accent-gold text-sm tracking-wider uppercase">{item.company}</p>
          </div>
          <div className="flex items-center gap-2 text-white/40 font-editorial-mono text-xs tracking-wider uppercase border border-white/10 bg-white/3 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent-gold" />
            <time dateTime={item.duration}>{item.duration}</time>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-3 font-editorial-serif text-white/70 leading-relaxed">
          {item.bullets.map((bullet, bIdx) => (
            <motion.li
              key={bIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.12 + 0.2 + bIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-6 md:pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-accent-gold/50 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity"
            >
              {bullet}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: "#000000" }}>
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      {/* Background geometric accents */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-gold/5 to-transparent blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-cyan/5 to-transparent blur-[200px] pointer-events-none" />

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
            02 — EXPERIENCE
          </span>
          <h2 className="font-editorial-heading text-4xl md:text-6xl lg:text-7xl text-white" style={{ lineHeight: 0.88 }}>
            Professional <span className="shimmer-cta">Track Record</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-4 md:pl-8">
          {experience.map((item, idx) => (
            <ExperienceItem key={`${item.role}-${item.company}`} item={item} index={idx} />
          ))}

          {/* End node */}
          <div className="absolute left-0 bottom-0 w-8 h-8 rounded-full border-2 border-white/10 bg-black flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}