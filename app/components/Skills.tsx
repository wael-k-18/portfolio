"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

const skillIcons: Record<string, React.ReactNode> = {
  languages: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  "ai-ml": <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  "computer-vision": <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  "backend-apis": <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" /></svg>,
  frontend: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
  databases: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
  "ar-vr": <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  tools: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  creative: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
};

const skillCategories = [
  { key: "languages", label: "Languages", color: "accent-gold" },
  { key: "ai-ml", label: "AI / ML", color: "accent-cyan" },
  { key: "computer-vision", label: "Computer Vision", color: "accent-gold" },
  { key: "backend-apis", label: "Backend & APIs", color: "accent-cyan" },
  { key: "frontend", label: "Frontend", color: "accent-gold" },
  { key: "databases", label: "Databases", color: "accent-cyan" },
  { key: "ar-vr", label: "AR / VR", color: "accent-gold" },
  { key: "tools", label: "Tools", color: "accent-cyan" },
  { key: "creative", label: "Creative", color: "accent-gold" },
];

interface SkillCardProps {
  category: typeof skillCategories[0];
  items: string[];
  index: number;
}

function SkillCard({ category, items, index }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      <div className="relative h-full min-h-[280px] border border-white/10 bg-gradient-to-br from-white/3 to-white/1 rounded-xl p-6 hover:border-accent-gold/30 hover:bg-accent-gold/5 transition-all duration-500">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent-gold/30 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent-gold/30 rounded-br-xl" />

        {/* Icon & Category Header */}
        <div className="relative z-10 mb-6 flex items-center gap-3">
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center",
            category.color === "accent-gold" ? "bg-accent-gold/10 text-accent-gold border border-accent-gold/30" : "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30"
          )}>
            {skillIcons[category.key]}
          </div>
          <div>
            <h3 className="font-editorial-heading text-xl text-white" style={{ lineHeight: 0.88 }}>
              {category.label}
            </h3>
            <p className="font-editorial-mono text-white/40 text-[10px] tracking-widest uppercase mt-1">
              {items.length} technologies
            </p>
          </div>
        </div>

        {/* Skill Tags */}
        <div className="relative z-10 flex flex-wrap gap-2">
          {items.map((skill, sIdx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.08 + sIdx * 0.03 }}
              className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-[11px] font-editorial-mono tracking-wider uppercase hover:border-accent-gold/50 hover:bg-accent-gold/10 hover:text-accent-gold transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: "#000000" }}>
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      {/* Background geometric accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-cyan/5 to-transparent blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-gold/5 to-transparent blur-[200px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-editorial-mono text-xs tracking-widest uppercase text-accent-gold mb-4 block">
            04 — SKILLS
          </span>
          <h2 className="font-editorial-heading text-4xl md:text-6xl lg:text-7xl text-white" style={{ lineHeight: 0.88 }}>
            Engineered <span className="shimmer-cta">Toolkit</span>
          </h2>
          <p className="mt-4 font-editorial-serif text-white/60 text-lg max-w-2xl">
            Categorized expertise from core programming to creative workflows.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard
              key={category.key}
              category={category}
              items={skills[category.key as keyof typeof skills] || []}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}