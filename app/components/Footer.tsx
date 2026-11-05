"use client";

import { useState, useEffect } from "react";
import { personal, contact } from "@/app/data/portfolio";
import { GitFork, UserCircle, Star, Mail, ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-glass-border bg-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan font-mono text-sm">[WK]</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 font-display font-bold text-lg tracking-wider uppercase">
                  {personal.name.split(" ")[0]}
                </span>
                <span className="text-xs text-accent-cyan font-mono px-1.5 py-0.5 rounded border border-accent-cyan/30 bg-accent-cyan/10">
                  東京
                </span>
              </div>
              <p className="text-muted text-sm max-w-xs">
                {personal.subheadline}
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <GitFork className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <UserCircle className="w-4 h-4" />
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-muted hover:text-accent-magenta hover:border-accent-magenta/40 transition-all hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Star className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg glass text-muted hover:text-accent-violet hover:border-accent-violet/40 transition-all hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted">QUICK LINKS</h4>
              <nav className="space-y-2 text-sm">
                <a href="#about" className="block text-muted hover:text-accent-cyan transition-colors">About Me</a>
                <a href="#experience" className="block text-muted hover:text-accent-cyan transition-colors">Experience</a>
                <a href="#projects" className="block text-muted hover:text-accent-cyan transition-colors">Projects</a>
                <a href="#skills" className="block text-muted hover:text-accent-cyan transition-colors">Skills</a>
                <a href="#creative" className="block text-muted hover:text-accent-cyan transition-colors">Creative Work</a>
                <a href="#education" className="block text-muted hover:text-accent-cyan transition-colors">Education</a>
                <a href="#contact" className="block text-muted hover:text-accent-cyan transition-colors">Contact</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted">CONTACT</h4>
              <div className="space-y-2 text-sm text-muted">
                <a href={`mailto:${personal.email}`} className="block hover:text-accent-cyan transition-colors">{personal.email}</a>
                <a href={`tel:${personal.phone}`} className="block hover:text-accent-cyan transition-colors">{personal.phone}</a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-accent-cyan transition-colors">LinkedIn</a>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="block hover:text-accent-cyan transition-colors">GitHub</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-glass-border">
            <p className="text-xs text-muted/60">
              © {year} {personal.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-accent-cyan transition-colors"
              >
                <ArrowUp className="w-3 h-3" />
                Back to top
              </a>
              <span className="text-xs font-mono text-muted/40 hidden md:block">
                Built with Next.js & Framer Motion
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}