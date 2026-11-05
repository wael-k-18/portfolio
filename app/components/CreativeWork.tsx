"use client";

import { motion } from "framer-motion";
import { creativeWork } from "@/app/data/portfolio";
import { Palette, Video, Image, Camera, LayoutGrid, Box } from "lucide-react";

export default function CreativeWork() {
  return (
    <section id="creative" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-magenta/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Section Header */}
          <div className="space-y-3 border-l-2 border-accent-cyan pl-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan">
              05 // CREATIVE WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground uppercase tracking-tight">
              Designing <span className="gradient-text-cyan font-extrabold">Brand</span> & Experience
            </h2>
          </div>

          {/* Creative Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {creativeWork.items.map((item, idx) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-xl glass border border-glass-border p-4 hover:border-accent-cyan/40 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl glass border border-accent-cyan/20 flex items-center justify-center mb-3 text-accent-cyan group-hover:border-accent-magenta/40 group-hover:text-accent-magenta transition-all">
                  {item.type === "design" && <Palette className="w-6 h-6" />}
                  {item.type === "video" && <Video className="w-6 h-6" />}
                  {item.type === "photo" && <Camera className="w-6 h-6" />}
                  {item.type === "design" && item.title.includes("Campaign") && <LayoutGrid className="w-6 h-6" />}
                  {/* Default */}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted/80 line-clamp-2">{item.description}</p>
              </motion.div>
            ))}

            {/* General Creative Section */}
            <div className="col-span-12 lg:col-span-12 group rounded-xl glass border border-glass-border p-6 text-center">
              <div className="w-16 h-16 rounded-xl glass border border-accent-magenta/20 flex items-center justify-center mx-auto mb-4 text-accent-magenta">
                <Box className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">Creative & Media Strategy</h3>
              <p className="text-xs text-muted/80 line-clamp-3">
                Co-founder of Dystopia Digital. Social-media marketing and creative strategy. Graphic design, reels, photography, videography, and content production. Client-focused brand growth and campaign management.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}