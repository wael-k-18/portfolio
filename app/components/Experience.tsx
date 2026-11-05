"use client";

import { motion } from "framer-motion";
import { experience } from "@/app/data/portfolio";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Subtle Grid Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Section Header */}
          <div className="space-y-3 border-l-2 border-accent-magenta pl-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-magenta">
              02 // EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground uppercase tracking-tight">
              Professional <span className="gradient-text-magenta font-extrabold">Track Record</span>
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="relative border-l border-glass-border ml-4 sm:ml-8 space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={item.role + item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Bullet Node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full glass border border-glass-border flex items-center justify-center group-hover:border-accent-magenta group-hover:bg-accent-magenta/10 transition-all shadow-md">
                  <Briefcase className="w-3.5 h-3.5 text-accent-magenta" />
                </div>

                {/* Card Container */}
                <div className="rounded-xl glass border border-glass-border p-6 hover:border-accent-magenta/40 transition-all hover:shadow-xl hover:shadow-accent-magenta/5 space-y-4">

                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-glass-border pb-3">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-accent-magenta transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-mono text-accent-cyan">
                        {item.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted glass px-3 py-1 rounded-full border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-accent-magenta" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-sm text-muted">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent-magenta shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}