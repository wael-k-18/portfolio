"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GitFork, UserCircle, Star, Mail } from "lucide-react";
import { personal } from "@/app/data/portfolio";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Creative", href: "#creative" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-3 border-b border-glass-border shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#"
            className="group flex items-center gap-2 font-display font-bold text-lg tracking-wider uppercase text-foreground hover:text-accent-cyan transition-colors"
          >
            <span className="text-accent-cyan font-mono text-sm">[WK]</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-accent-cyan group-hover:to-accent-magenta transition-all">
              {personal.name.split(" ")[0]}
            </span>
            <span className="text-xs text-accent-cyan font-mono px-1.5 py-0.5 rounded border border-accent-cyan/30 bg-accent-cyan/10">
              東京
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase rounded-md transition-all relative ${
                    isActive
                      ? "text-accent-cyan font-semibold"
                      : "text-muted hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-accent-cyan/10 rounded-md border border-accent-cyan/30 -z-10" />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Social Links & Contact Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-muted hover:text-accent-cyan hover:bg-white/5 rounded-full transition-all"
            >
              <GitFork className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-muted hover:text-accent-cyan hover:bg-white/5 rounded-full transition-all"
            >
              <UserCircle className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="ml-2 px-4 py-1.5 text-xs font-mono font-medium tracking-wider uppercase text-background bg-accent-cyan hover:bg-accent-cyan/90 rounded-md transition-all shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-b border-glass-border px-4 pt-2 pb-6 space-y-3 mt-2 animate-in slide-in-from-top-5 duration-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-mono tracking-wider uppercase text-muted hover:text-accent-cyan hover:bg-white/5 rounded-md transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-glass-border flex items-center justify-around">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent-cyan"
            >
              <GitFork className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent-cyan"
            >
              <UserCircle className="w-5 h-5" />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent-magenta"
            >
              <Star className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 text-muted hover:text-accent-violet"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}