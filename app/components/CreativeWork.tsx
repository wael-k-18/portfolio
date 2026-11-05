"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { creativeWork } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

const creativeIcons: Record<string, React.ReactNode> = {
  design: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
  video: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  photo: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  strategy: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
};

interface CreativeItemProps {
  item: typeof creativeWork.items[0];
  index: number;
  isLarge?: boolean;
}

function CreativeItem({ item, index, isLarge }: CreativeItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative group cursor-pointer",
        isLarge ? "lg:col-span-2 lg:row-span-2" : ""
      )}
    >
      <div className="relative aspect-[4/3] isLarge:aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%)`,
          backgroundSize: '20px 20px'
        }} />

        {/* Icon & Type */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm text-[10px] font-editorial-mono tracking-widest uppercase text-white/80">
            {item.type.toUpperCase()}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
          <div className="flex items-center gap-3 mb-3">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              item.type === "design" || item.type === "strategy" ? "bg-accent-gold/10 text-accent-gold border border-accent-gold/30" : "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30"
            )}>
              {creativeIcons[item.type] || creativeIcons.design}
            </div>
            <span className="font-editorial-mono text-[10px] tracking-widest uppercase text-white/60">{item.type}</span>
          </div>
          <h3 className="font-editorial-heading text-xl md:text-2xl text-white mb-2" style={{ lineHeight: 0.88 }}>
            {item.title}
          </h3>
          <p className="font-editorial-serif text-white/70 text-sm md:text-base leading-relaxed max-h-24 overflow-hidden">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 p-2 text-center">
        <p className="font-editorial-serif text-white/50 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function CreativeWork() {
  return (
    <section id="creative" className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: "#000000" }}>
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      {/* Background geometric accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-gold/5 to-transparent blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-cyan/5 to-transparent blur-[200px] pointer-events-none" />

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
            05 — CREATIVE WORK
          </span>
          <h2 className="font-editorial-heading text-4xl md:text-6xl lg:text-7xl text-white" style={{ lineHeight: 0.88 }}>
            Designing <span className="shimmer-cta">Brand</span> & Experience
          </h2>
          <p className="mt-4 font-editorial-serif text-white/60 text-lg max-w-2xl">
            Co-founder of Dystopia Digital. Social-media marketing, creative strategy, graphic design, reels, photography, videography, and content production.
          </p>
        </motion.div>

        {/* Creative Grid - Masonry Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:grid-rows-[300px] lg:grid-auto-flow-dense">
          {/* Large featured item */}
          <CreativeItem
            item={{
              type: "strategy",
              title: "Creative & Media Strategy",
              description: "Co-founder of Dystopia Digital. Social-media marketing and creative strategy. Graphic design, reels, photography, videography, and content production. Client-focused brand growth and campaign management."
            }}
            index={0}
            isLarge={true}
          />

          {creativeWork.items.map((item, idx) => (
            <CreativeItem key={item.title} item={item} index={idx + 1} isLarge={false} />
          ))}
        </div>
      </div>
    </section>
  );
}