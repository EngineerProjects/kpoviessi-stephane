"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useContent } from "@/lib/useContent";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { personalInfo, ui } = useContent();
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");

  const navLinks = [
    { num: "01", label: ui.nav.scope, href: "#about" },
    { num: "02", label: ui.nav.stack, href: "#skills" },
    { num: "03", label: ui.nav.blueprints, href: "#projects" },
    { num: "04", label: ui.nav.records, href: "#experience" },
    { num: "05", label: ui.nav.handshake, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    const updateClock = () => {
      const d = new Date();
      const hrs = String(d.getHours()).padStart(2, "0");
      const mins = String(d.getMinutes()).padStart(2, "0");
      const secs = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hrs}:${mins}:${secs} UTC`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300 border border-border-main/0",
            scrolled
              ? "glass px-6 py-2 rounded-xl shadow-lg border-border-main bg-bg-card/70 backdrop-blur-md"
              : "bg-transparent px-4 py-1"
          )}
        >
          {/* Logo & Operational Status */}
          <a
            href="#"
            className="flex items-center gap-3 group text-text-main font-mono tracking-tight"
          >
            <div className="relative w-8 h-8 flex items-center justify-center border border-accent/40 rounded bg-accent-soft text-accent group-hover:bg-accent group-hover:text-bg-main transition-all duration-300">
              <Terminal size={14} className="group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-widest text-text-main group-hover:text-accent transition-colors leading-tight">
                S. Kpoviessi
              </span>
              <span className="text-[8px] font-mono text-text-dim/70 tracking-widest leading-none flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {ui.nav.status}
              </span>
            </div>
          </a>

          {/* Desktop HUD links */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative px-3 py-1.5 text-[10px] font-mono font-bold text-text-dim hover:text-text-main transition-colors flex items-center gap-1"
                  >
                    <span className="text-[8px] text-accent opacity-60 group-hover:opacity-100 transition-opacity">
                      {link.num}
                    </span>
                    <span className="tracking-[0.15em]">{link.label}</span>
                    <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="w-px h-4 bg-border-main" />

            {/* Time Telemetry */}
            <span className="text-[9px] font-mono text-text-dim tracking-wider font-medium opacity-80 min-w-[70px]">
              {time || "00:00:00 UTC"}
            </span>

            <div className="w-px h-4 bg-border-main" />

            <div className="flex items-center gap-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-text-dim hover:text-accent hover:bg-accent-soft rounded transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-text-dim hover:text-accent hover:bg-accent-soft rounded transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="w-px h-4 bg-border-main" />

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-0.5 px-2 py-1 border border-border-main/60 rounded font-mono text-[9px] font-bold tracking-widest hover:border-accent/40 hover:bg-accent-soft transition-all duration-200"
            >
              <span className={language === "en" ? "text-accent" : "text-text-dim/50"}>EN</span>
              <span className="text-border-main mx-0.5">|</span>
              <span className={language === "fr" ? "text-accent" : "text-text-dim/50"}>FR</span>
            </button>

            <div className="w-px h-4 bg-border-main" />

            <ThemeToggle />
          </div>

          {/* Mobile HUD actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-0.5 px-2 py-1 border border-border-main/60 rounded font-mono text-[9px] font-bold tracking-widest hover:border-accent/40 hover:bg-accent-soft transition-all duration-200"
            >
              <span className={language === "en" ? "text-accent" : "text-text-dim/50"}>EN</span>
              <span className="text-border-main mx-0.5">|</span>
              <span className={language === "fr" ? "text-accent" : "text-text-dim/50"}>FR</span>
            </button>
            <ThemeToggle />
            <button
              className="p-2 border border-border-main/50 rounded-lg text-text-main hover:bg-accent-soft transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Terminal Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full mt-2 left-4 right-4 lg:hidden glass rounded-xl p-4 shadow-xl z-50 border-border-main bg-bg-main/98"
          >
            <div className="flex items-center justify-between border-b border-border-main/60 pb-3 mb-3">
              <span className="text-[9px] font-mono text-text-dim tracking-widest uppercase">{ui.nav.mobile_title}</span>
              <span className="text-[9px] font-mono text-accent">{time || "UTC"}</span>
            </div>

            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-xs font-mono font-bold text-text-dim hover:text-text-main hover:bg-accent-soft rounded-lg transition-all"
                  >
                    <span className="text-[9px] text-accent font-normal">{link.num}</span>
                    <span className="tracking-[0.1em]">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-border-main/60 flex items-center justify-between px-3">
              <span className="text-[9px] font-mono text-text-dim">{ui.nav.connect_links}</span>
              <div className="flex items-center gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-text-dim hover:text-accent">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
