"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Terminal, Settings } from "lucide-react";
import { skills } from "@/data/content";

const categoryIcons = {
  programming: Terminal,
  ml_ai: Cpu,
  data_engineering: Database,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-36 relative border-b border-border-main bg-bg-main/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header HUD */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-main/50 pb-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-accent/20 bg-accent-soft text-accent text-[9px] font-mono font-bold uppercase tracking-[0.2em] mb-4">
              <Settings size={10} /> 02 // ENGINE CALIBRATION SPECIFICATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-text-main leading-none">
              Technical <span className="text-text-dim">Specifications</span> Grid<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-[9px] text-text-dim uppercase tracking-widest">
            HARDWARE & SOFTWARE STACK
          </div>
        </div>

        {/* 3-Column Architectural Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-border-main rounded bg-bg-card/25 shadow-sm divide-y lg:divide-y-0 lg:divide-x divide-border-main">
          {Object.entries(skills).map(([key, category], catIndex) => {
            const Icon = categoryIcons[key as keyof typeof categoryIcons] || Code2;
            
            return (
              <div key={key} className="p-8 md:p-10 flex flex-col relative group">
                {/* Visual grid indicators */}
                <div className="absolute top-2 right-4 font-mono text-[7px] text-text-dim/35 tracking-wider">
                  SYSTEM LAYER // 0{catIndex + 1}
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-9 h-9 border border-border-main rounded bg-bg-main flex items-center justify-center text-text-dim group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-extrabold text-text-main tracking-tight uppercase">
                      {category.label}
                    </h3>
                    <span className="text-[7px] font-mono text-text-dim/80 tracking-widest uppercase">
                      READY FOR EXECUTION
                    </span>
                  </div>
                </div>

                {/* Highly structured list of capabilities */}
                <div className="space-y-2 mt-auto">
                  {category.items.map((skill) => {
                    const isExpert = skill.level === "Expert";
                    const isAdvanced = skill.level === "Advanced" || skill.level === "Advanced";
                    
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2 border border-border-main/40 bg-bg-main/30 hover:bg-bg-main/80 hover:border-accent/20 transition-all duration-200 rounded font-mono text-xs"
                      >
                        <span className="text-text-main font-semibold flex items-center gap-2">
                          {skill.name}
                          {isExpert && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          )}
                        </span>
                        
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded tracking-widest ${
                          isExpert 
                            ? "bg-accent-soft text-accent border border-accent/20"
                            : isAdvanced
                            ? "bg-text-main/5 text-text-main/80 border border-border-main"
                            : "bg-text-main/[0.02] text-text-dim/60"
                        }`}>
                          {skill.level.slice(0, 3).toUpperCase()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
