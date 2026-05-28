"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/content";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 rounded-2xl",
            scrolled
              ? "glass px-6 py-2 shadow-xl shadow-accent/5"
              : "bg-transparent px-0 py-0"
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-text-main font-bold tracking-tight text-xl"
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
               <div className="absolute inset-0 bg-accent rounded-xl rotate-6 group-hover:rotate-0 transition-transform duration-300 opacity-20" />
               <div className="absolute inset-0 bg-accent rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-300" />
               <span className="relative text-white text-sm font-black">SK</span>
            </div>
            <span className="hidden sm:inline-block text-text-main group-hover:text-accent transition-colors duration-300">
              Kpoviessi<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm font-bold text-text-dim hover:text-text-main transition-all duration-200 rounded-lg hover:bg-accent/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="w-px h-6 bg-border-main mx-4" />
            
            <div className="flex items-center gap-2 mr-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-dim hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-dim hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-text-main hover:text-accent transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-24 left-6 right-6 md:hidden glass rounded-3xl p-6 shadow-2xl z-50 overflow-hidden"
          >
            <ul className="relative flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-4 text-lg font-black text-text-dim hover:text-text-main hover:bg-accent/5 rounded-2xl transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 pt-6 border-t border-border-main flex items-center justify-between px-4">
                <p className="text-sm font-bold text-text-dim">Socials</p>
                <div className="flex items-center gap-4">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent">
                    <GithubIcon className="w-6 h-6" />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent">
                    <LinkedinIcon className="w-6 h-6" />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="text-text-dim hover:text-accent">
                    <Mail size={24} />
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
