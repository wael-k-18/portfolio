"use client";

import { useState, useEffect } from "react";
import { personal, contact } from "@/app/data/portfolio";
import { GitFork, UserCircle, Star, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return new Date().getFullYear();
    }
    return 2026;
  });

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl py-12 md:py-16" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-8 md:space-y-12">

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-accent-gold font-editorial-mono text-xs">[WK]</span>
                <span className="font-editorial-heading text-white text-base tracking-wider uppercase" style={{ lineHeight: 0.88 }}>
                  {personal.name.split(" ")[0]}
                </span>
                <span className="text-xs text-accent-gold font-editorial-mono px-2 py-0.5 rounded border border-accent-gold/30 bg-accent-gold/10">
                  TOKYO
                </span>
              </div>
              <p className="font-editorial-serif text-white/60 text-sm md:text-base max-w-xs leading-relaxed">
                {personal.subheadline}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-white/3 text-white/50 hover:border-accent-gold/50 hover:bg-accent-gold/10 hover:text-accent-gold transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GitFork className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-white/3 text-white/50 hover:border-accent-gold/50 hover:bg-accent-gold/10 hover:text-accent-gold transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <UserCircle className="w-5 h-5" />
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-white/3 text-white/50 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 hover:text-accent-cyan transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Star className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-white/3 text-white/50 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 hover:text-accent-cyan transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-editorial-mono text-[10px] tracking-widest uppercase text-white/40">QUICK LINKS</h4>
              <nav className="space-y-3 font-editorial-serif text-white/60 text-sm">
                <a href="#about" className="block hover:text-accent-gold transition-colors duration-300">About Me</a>
                <a href="#experience" className="block hover:text-accent-gold transition-colors duration-300">Experience</a>
                <a href="#projects" className="block hover:text-accent-gold transition-colors duration-300">Projects</a>
                <a href="#skills" className="block hover:text-accent-gold transition-colors duration-300">Skills</a>
                <a href="#creative" className="block hover:text-accent-gold transition-colors duration-300">Creative Work</a>
                <a href="#education" className="block hover:text-accent-gold transition-colors duration-300">Education</a>
                <a href="#contact" className="block hover:text-accent-gold transition-colors duration-300">Contact</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-editorial-mono text-[10px] tracking-widest uppercase text-white/40">CONTACT</h4>
              <div className="space-y-3 font-editorial-serif text-white/60 text-sm">
                <a href={`mailto:${personal.email}`} className="block hover:text-accent-gold transition-colors duration-300">{personal.email}</a>
                <a href={`tel:${personal.phone}`} className="block hover:text-accent-gold transition-colors duration-300">{personal.phone}</a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-accent-gold transition-colors duration-300">LinkedIn</a>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="block hover:text-accent-gold transition-colors duration-300">GitHub</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="font-editorial-mono text-[10px] tracking-widest uppercase text-white/30">
              © {year} {personal.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="flex items-center gap-1.5 font-editorial-mono text-[10px] tracking-widest uppercase text-white/40 hover:text-accent-gold transition-colors duration-300"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Back to top
              </a>
              <span className="font-editorial-mono text-[10px] tracking-widest uppercase text-white/20 hidden md:block">
                Built with Next.js & Framer Motion
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}