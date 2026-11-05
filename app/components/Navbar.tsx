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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#"
            className="group flex items-center gap-2 font-editorial-heading text-sm tracking-wider uppercase text-white hover:text-accent-gold transition-colors duration-300"
            style={{ lineHeight: 0.88 }}
          >
            <span className="text-accent-gold font-editorial-mono text-xs">[WK]</span>
            <span className="text-white group-hover:text-accent-gold transition-colors duration-300">
              {personal.name.split(" ")[0]}
            </span>
            <span className="text-xs text-accent-gold font-editorial-mono px-2 py-0.5 rounded border border-accent-gold/30 bg-accent-gold/10">
              TOKYO
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
                  className={`px-3 py-1.5 text-[10px] font-editorial-mono tracking-widest uppercase rounded-full transition-all duration-300 relative ${
                    isActive
                      ? "text-accent-gold font-semibold"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-accent-gold/10 rounded-full border border-accent-gold/30 -z-10" />
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
              className="p-2 text-white/50 hover:text-accent-gold hover:bg-white/5 rounded-full transition-all duration-300"
            >
              <GitFork className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-white/50 hover:text-accent-gold hover:bg-white/5 rounded-full transition-all duration-300"
            >
              <UserCircle className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="ml-2 px-4 py-1.5 text-[10px] font-editorial-mono font-medium tracking-widest uppercase text-white bg-accent-gold hover:bg-white hover:text-black rounded-full transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/50 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl px-6 pt-4 pb-8 space-y-3 animate-in slide-in-from-top-5 duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-editorial-mono tracking-widest uppercase text-white/50 hover:text-accent-gold hover:bg-white/5 rounded-full transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-around">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/50 hover:text-accent-gold"
            >
              <GitFork className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/50 hover:text-accent-gold"
            >
              <UserCircle className="w-5 h-5" />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/50 hover:text-accent-cyan"
            >
              <Star className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 text-white/50 hover:text-accent-cyan"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}