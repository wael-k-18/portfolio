"use client";

import { motion } from "framer-motion";
import { personal, contact } from "@/app/data/portfolio";
import { Mail, Phone, UserCircle, GitFork, Star } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Floating Orbs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-accent-magenta/10 rounded-full blur-[80px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Section Header */}
          <div className="space-y-3 border-l-2 border-accent-violet pl-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-violet">
              07 // CONTACT
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-foreground uppercase tracking-tight">
              Let's <span className="gradient-text-violet font-extrabold">Collaborate</span>
            </h2>
          </div>

          {/* Contact Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted text-sm mb-12"
          >
            {" "}
            Drop a note about AI/ML projects, creative collaborations, or just to say hi.
            {" "}
          </motion.div>

          {/* Info & Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Contact Info Column */}
            <div className="space-y-6">
              {/* Email */}
              <div className="glass border border-glass-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-accent-violet" />
                  <span className="text-foreground font-semibold">Email</span>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-accent-cyan font-mono text-sm hover:text-accent-magenta transition-colors underline"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  {personal.email}
                </a>
                <p className="text-xs text-muted/60 mt-1">
                  Reach me directly. Responses within 48 hours on business days.
                </p>
              </div>

              {/* Phone */}
              <div className="glass border border-glass-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-accent-violet" />
                  <span className="text-foreground font-semibold">Phone</span>
                </div>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-accent-cyan font-mono text-sm hover:text-accent-magenta transition-colors"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  {personal.phone}
                </a>
                <p className="text-xs text-muted/60 mt-1">
                  Available 9 AM – 6 PM IST. WhatsApp welcome.
                </p>
              </div>

              {/* Links */}
              <div className="glass border border-glass-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <UserCircle className="w-5 h-5 text-accent-violet" />
                  <span className="text-foreground font-semibold">LinkedIn</span>
                </div>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan font-mono text-sm hover:text-accent-magenta transition-colors underline"
                >
                  {personal.linkedin}
                </a>
                <p className="text-xs text-muted/60 mt-1">
                  Let's connect and discuss opportunities.
                </p>
              </div>

              {/* GitHub & Instagram */}
              <div className="glass border border-glass-border rounded-lg p-5 grid grid-cols-2 gap-4">
                <div>
                  <GitFork className="w-5 h-5 text-accent-violet" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      GitHub Profile
                    </p>
                    <p className="text-xs text-muted/60 mt-0.5">
                      Code repositories and projects
                    </p>
                  </div>
                </div>
                <div>
                  <Star className="w-5 h-5 text-accent-violet" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Instagram @waelfdv_
                    </p>
                    <p className="text-xs text-muted/60 mt-0.5">
                      Design work & updates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="space-y-4">
              <form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase text-muted mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md glass border border-glass-border bg-black/70 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan/30 transition-all"
                    placeholder="Wael Karbelkar"
                    style={{ color: "var(--foreground)" }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase text-muted mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md glass border border-glass-border bg-black/70 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan/30 transition-all"
                    placeholder="waelkarbelkar@gmail.com"
                    style={{ color: "var(--foreground)" }}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase text-muted mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-md glass border border-glass-border bg-black/70 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan/30 transition-all"
                    placeholder="AI/ML Project Inquiry"
                    style={{ color: "var(--foreground)" }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase text-muted mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md glass border border-glass-border bg-black/70 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan/30 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    style={{ color: "var(--foreground)" }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-md font-mono text-sm font-semibold tracking-wider uppercase text-background bg-accent-cyan hover:bg-accent-cyan/90 transition-all shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Closing Line */}
          <div className="pt-12 border-t border-glass-border text-center">
            <p className="text-muted text-sm">
              {contact.closingLine}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}