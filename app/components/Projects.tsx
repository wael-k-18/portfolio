"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/data/portfolio";
import { GitFork, Eye, Folder, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute inset-0 w-full h-full"
        >
          <path
            stroke="currentColor"
            strokeWidth={1}
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Section Header */}
          <div className="space-y-3 border-l-2 border-accent-cyan pl-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan">
              03 // PROJECTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground uppercase tracking-tight">
              Curated <span className="gradient-text-cyan">AI Experiments</span>
            </h2>
            <p className="text-muted text-sm">
              Selected projects spanning computer vision, multi-agent systems, and WebAR.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

            {projects.map((project, idx) => {
              const hasDemo = project.demo && project.demo !== "";
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-xl glass border border-glass-border overflow-hidden hover:border-accent-cyan/40 transition-all hover:shadow-xl hover:shadow-accent-cyan/20"
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 glass border border-accent-cyan/40 text-xs font-mono uppercase px-2.5 py-1 rounded">
                      ★ FEATURED
                    </div>
                  )}

                  {/* Image Placeholder */}
                  <div className="relative h-40 overflow-hidden bg-black/60">
                    {hasDemo ? (
                      <div
                        className="absolute inset-0 flex items-center justify-center text-xs font-mono text-accent-cyan"
                        style={{ background: "rgba(0, 243, 255, 0.2)" }}
                      >
                        LIVE DEMO
                      </div>
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center text-xs font-mono text-muted"
                        style={{ background: "rgba(13, 13, 20, 0.5)" }}
                      >
                        NO DEMO AVAILABLE
                      </div>
                    )}
                    <motion.div
                      animate={{
                        x: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-5 pt-2">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground line-clamp-2 line-clampMax-w-32">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted/80 line-clamp-1 line-clampMax-w-24">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md glass border border-accent-cyan/20 text-accent-cyan"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub: ${project.name}`}
                        className="flex-1 px-4 py-2 rounded-md font-mono text-xs font-medium tracking-wider uppercase text-background bg-accent-cyan/10 border border-accent-cyan/30 hover:bg-accent-cyan/20 hover:border-accent-cyan/50 transition-all hover:-translate-y-0.5"
                        style={{ color: "var(--foreground)" }}
                      >
                        GitHub
                      </a>
                      {hasDemo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live Demo: ${project.name}`}
                          className="px-4 py-2 rounded-md font-mono text-xs font-medium tracking-wider uppercase text-background bg-accent-magenta/10 border border-accent-magenta/30 hover:bg-accent-magenta/20 hover:border-accent-magenta/50 transition-all hover:-translate-y-0.5"
                          style={{ color: "var(--foreground)" }}
                        >
                          Live Demo
                        </a>
                      )}
                    </div>

                    {/* View All / Elevate */}
                    <div className="mt-2 text-xs font-mono text-muted text-center">
                      {" "}
                      {hasDemo ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-accent-cyan transition-colors"
                        >
                          View Project
                        </a>
                      ) : (
                        <span>View GitHub</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}