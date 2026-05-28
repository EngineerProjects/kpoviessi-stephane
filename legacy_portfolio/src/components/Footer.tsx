"use client";

import { personalInfo } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-10 md:p-16 rounded-[3rem] glass shadow-lg shadow-black/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white text-sm font-black shadow-lg shadow-accent/20">
              SK
            </div>
            <div>
              <span className="text-text-main font-black text-sm uppercase tracking-tight block">
                Stéphane Kpoviessi
              </span>
              <span className="text-text-dim font-black text-[10px] uppercase tracking-[0.2em] opacity-60">
                &copy; {currentYear} — Ingénieur Big Data & IA
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
             <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-xs font-black text-text-dim hover:text-accent uppercase tracking-[0.2em] transition-all">
                GitHub
             </a>
             <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-black text-text-dim hover:text-accent uppercase tracking-[0.2em] transition-all">
                LinkedIn
             </a>
             <a href={`mailto:${personalInfo.email}`} className="text-xs font-black text-text-dim hover:text-accent uppercase tracking-[0.2em] transition-all">
                Contact
             </a>
          </div>

          <div className="text-center md:text-right">
             <p className="text-[10px] font-black text-text-dim uppercase tracking-[0.3em] opacity-40">
               Design & Code by Stéphane K.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
