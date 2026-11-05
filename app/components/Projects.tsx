"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projects } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isFeatured?: boolean;
}

function ProjectCard({ project, index, isFeatured }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollX } = useScroll({ container: ref.current?.parentElement as any });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative flex-shrink-0 group cursor-pointer",
        isFeatured ? "w-[420px] md:w-[500px] lg:w-[580px]" : "w-[320px] md:w-[380px]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image/Media Area */}
      <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2">
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* Project Type Indicator */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm text-[10px] font-editorial-mono tracking-widest uppercase text-white/80">
            {isFeatured ? "FEATURED" : "PROJECT"}
          </span>
        </div>

        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full border border-accent-gold/50 bg-accent-gold/10 backdrop-blur-sm text-[10px] font-editorial-mono tracking-widest uppercase text-accent-gold">
            ★ FEATURED
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
          <h3 className="font-editorial-heading text-xl md:text-2xl text-white mb-2" style={{ lineHeight: 0.88 }}>
            {project.name}
          </h3>
          <p className="font-editorial-serif text-white/70 text-sm md:text-base leading-relaxed mb-4 max-h-20 overflow-hidden">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-[10px] font-editorial-mono tracking-wider uppercase hover:border-accent-gold/50 hover:bg-accent-gold/10 hover:text-accent-gold transition-all duration-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/40 text-[10px] font-editorial-mono tracking-wider uppercase">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-[10px] font-editorial-mono tracking-widest uppercase text-center hover:border-accent-gold/50 hover:bg-accent-gold/10 hover:text-accent-gold transition-all duration-300"
            >
              View Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full border border-accent-gold/50 bg-accent-gold/10 text-accent-gold text-[10px] font-editorial-mono tracking-widest uppercase text-center hover:bg-accent-gold hover:text-black transition-all duration-300"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Placeholder Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Card Footer */}
      <div className="mt-4 p-2">
        <div className="flex items-center justify-between text-white/40 font-editorial-mono text-[10px] tracking-wider uppercase">
          <span>{project.contribution.split(".")[0]}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: "#000000" }}>
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      {/* Background geometric accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-gold/5 to-transparent blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-cyan/5 to-transparent blur-[200px] pointer-events-none" />

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
            03 — PROJECTS
          </span>
          <h2 className="font-editorial-heading text-4xl md:text-6xl lg:text-7xl text-white" style={{ lineHeight: 0.88 }}>
            Curated <span className="shimmer-cta">AI Experiments</span>
          </h2>
          <p className="mt-4 font-editorial-serif text-white/60 text-lg max-w-2xl">
            Selected projects spanning computer vision, multi-agent systems, and WebAR.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-editorial-heading text-2xl md:text-3xl text-white" style={{ lineHeight: 0.88 }}>
                Featured Work
              </h3>
              <p className="font-editorial-serif text-white/50 text-sm mt-1">Flagship projects with production deployment</p>
            </div>
            <div className="flex items-center gap-2 text-white/40 font-editorial-mono text-[10px] tracking-wider uppercase">
              <span>← Swipe / Scroll →</span>
            </div>
          </div>

          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-6 pb-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 px-6"
          >
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.name} project={project} index={idx} isFeatured />
            ))}
          </div>

          {/* Scroll Progress Indicator */}
          <div className="relative h-px bg-white/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-accent-gold"
              animate={{ width: `${scrollProgress * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="font-editorial-heading text-2xl md:text-3xl text-white mb-8" style={{ lineHeight: 0.88 }}>
            Additional Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <ProjectCard key={project.name} project={project} index={idx + featuredProjects.length} isFeatured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}