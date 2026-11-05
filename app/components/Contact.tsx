"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personal, contact } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  description: string;
  color: "accent-gold" | "accent-cyan";
  index: number;
}

function ContactInfo({ icon, label, value, href, description, color, index }: ContactInfoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="relative h-full border border-white/10 bg-gradient-to-br from-white/3 to-white/1 rounded-xl p-6 hover:border-accent-gold/30 hover:bg-accent-gold/5 transition-all duration-500">
        {/* Corner accents */}
        <div className={cn(
          "absolute top-0 left-0 w-8 h-8 border-t border-l rounded-tl-xl",
          color === "accent-gold" ? "border-accent-gold/30" : "border-accent-cyan/30"
        )} />
        <div className={cn(
          "absolute bottom-0 right-0 w-8 h-8 border-b border-r rounded-br-xl",
          color === "accent-gold" ? "border-accent-gold/30" : "border-accent-cyan/30"
        )} />

        <div className="relative z-10 space-y-4">
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center",
            color === "accent-gold" ? "bg-accent-gold/10 text-accent-gold border border-accent-gold/30" : "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30"
          )}>
            {icon}
          </div>

          <div className="space-y-1">
            <p className="font-editorial-mono text-white/40 text-[10px] tracking-widest uppercase">{label}</p>
            <a
              href={href}
              className="font-editorial-heading text-white text-base hover:text-accent-gold transition-colors duration-300"
              style={{ lineHeight: 0.88 }}
            >
              {value}
            </a>
          </div>

          <p className="font-editorial-serif text-white/50 text-sm leading-relaxed pt-2 border-t border-white/10">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfos = [
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      description: "Reach me directly. Responses within 48 hours on business days.",
      color: "accent-gold" as const,
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      description: "Available 9 AM – 6 PM IST. WhatsApp welcome.",
      color: "accent-cyan" as const,
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
      label: "LinkedIn",
      value: "wael-k18",
      href: personal.linkedin,
      description: "Let's connect and discuss opportunities.",
      color: "accent-gold" as const,
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      label: "GitHub",
      value: "wael-k-18",
      href: personal.github,
      description: "Code repositories and projects.",
      color: "accent-cyan" as const,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: "#000000" }}>
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
            07 — CONTACT
          </span>
          <h2 className="font-editorial-heading text-4xl md:text-6xl lg:text-7xl text-white" style={{ lineHeight: 0.88 }}>
            Let's <span className="shimmer-cta">Collaborate</span>
          </h2>
          <p className="mt-4 font-editorial-serif text-white/60 text-lg max-w-2xl">
            Drop a note about AI/ML projects, creative collaborations, or just to say hi.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfos.map((info, idx) => (
              <ContactInfo key={info.label} {...info} index={idx} />
            ))}
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative border border-white/10 bg-gradient-to-br from-white/3 to-white/1 rounded-xl p-6 md:p-8">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-accent-gold/30 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-accent-gold/30 rounded-br-xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="font-editorial-mono text-xs tracking-widest uppercase text-white/40">SEND MESSAGE</span>
                  <span className="font-editorial-mono text-xs tracking-widest text-accent-gold">DIRECT LINE</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-4 rounded-lg bg-accent-gold/10 border border-accent-gold/30 text-accent-gold font-editorial-serif text-sm"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-editorial-mono text-[10px] tracking-widest uppercase text-white/40 mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/3 text-white placeholder-white/30 focus:outline-none focus:border-accent-gold/50 focus:bg-white/5 transition-all duration-300 font-editorial-serif"
                        placeholder="Wael Karbelkar"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-editorial-mono text-[10px] tracking-widest uppercase text-white/40 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/3 text-white placeholder-white/30 focus:outline-none focus:border-accent-gold/50 focus:bg-white/5 transition-all duration-300 font-editorial-serif"
                        placeholder="waelkarbelkar@gmail.com"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block font-editorial-mono text-[10px] tracking-widest uppercase text-white/40 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/3 text-white placeholder-white/30 focus:outline-none focus:border-accent-gold/50 focus:bg-white/5 transition-all duration-300 font-editorial-serif"
                      placeholder="AI/ML Project Inquiry"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-editorial-mono text-[10px] tracking-widest uppercase text-white/40 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/3 text-white placeholder-white/30 focus:outline-none focus:border-accent-gold/50 focus:bg-white/5 transition-all duration-300 font-editorial-serif resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full px-6 py-3.5 rounded-full border border-accent-gold/50 bg-accent-gold/10 text-accent-gold text-[10px] font-editorial-mono tracking-widest uppercase hover:bg-accent-gold hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitted ? "Sent ✓" : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24 pt-12 border-t border-white/10 text-center"
        >
          <p className="font-editorial-serif text-white/60 text-lg leading-relaxed">
            {contact.closingLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}