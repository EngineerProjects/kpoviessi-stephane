"use client";

import { useContent } from "@/lib/useContent";
import { Terminal } from "lucide-react";

export default function Footer() {
  const { personalInfo, ui } = useContent();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden border-t border-border-main bg-bg-main/30 font-mono text-[9px] text-text-dim">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-6">
          
          {/* Logo HUD */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border border-accent/30 rounded bg-accent-soft text-accent flex items-center justify-center">
              <Terminal size={12} />
            </div>
            <div>
              <span className="text-text-main font-bold uppercase tracking-widest block leading-tight">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="tracking-wider uppercase opacity-80 mt-0.5 block">
                &copy; {currentYear} {"//"} {ui.footer.record}
              </span>
            </div>
          </div>

          {/* Core Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-bold">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent uppercase tracking-wider transition-colors">
              GITHUB {"//"} {ui.footer.registry}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent uppercase tracking-wider transition-colors">
              LINKEDIN // HUB
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-accent uppercase tracking-wider transition-colors">
              SMTP // MAIL
            </a>
          </div>

          {/* Right telemetry details */}
          <div className="text-center md:text-right font-medium opacity-65">
            <span>{ui.footer.compiled}</span>
            <br />
            <span>{ui.footer.rendered}</span>
          </div>

        </div>

        {/* Dynamic sub-footer grid lines */}
        <div className="border-t border-border-main/50 pt-6 flex flex-col sm:flex-row items-center justify-between text-[8px] opacity-60">
          <span>{ui.footer.hosted}</span>
          <span className="mt-2 sm:mt-0">{ui.footer.design}</span>
        </div>

      </div>
    </footer>
  );
}
