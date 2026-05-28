"use client";

import { motion } from "framer-motion";
import { Brain, Database, Eye, Wrench, Sparkles, Terminal, Activity } from "lucide-react";
import { about } from "@/data/content";

const iconMap = {
  database: Database,
  chart: Activity,
  brain: Brain,
  eye: Eye,
  wrench: Wrench,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-36 relative border-b border-border-main bg-bg-main/30">
      {/* Decorative vertical hairline for architectural framing */}
      <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-border-main/30 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header HUD */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-main/50 pb-8 mb-12 md:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-accent/20 bg-accent-soft text-accent text-[9px] font-mono font-bold uppercase tracking-[0.2em] mb-4">
              <Terminal size={10} /> 01 // CORE RESEARCH SCOPE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold tracking-tighter text-text-main leading-none whitespace-nowrap">
              Engineering <span className="text-text-dim">Deterministic</span> Systems<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-[9px] text-text-dim uppercase tracking-widest">
            FOCUS: SCALE & DETAILED PARITY
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Thesis & Statement */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            <div className="space-y-4 text-base text-text-dim leading-relaxed font-medium">
              <p className="text-text-main font-semibold text-lg leading-relaxed">
                {about.summary}
              </p>
              <p>
                {about.detail}
              </p>
            </div>
            
            {/* Technical Philosophy Block */}
            <div className="border border-border-main bg-bg-card p-6 md:p-8 rounded relative overflow-hidden group shadow-sm">
              {/* Mechanical Corner Overlay */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-accent opacity-20" />
              <div className="absolute top-0 left-0 w-0.5 h-full bg-accent" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded border border-accent/20 bg-accent-soft flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg-main transition-colors duration-300">
                  <Activity size={18} />
                </div>
                <div>
                  <h3 className="text-text-main font-mono font-bold text-xs uppercase tracking-wider">Systems Architecture Rule</h3>
                  <span className="text-[8px] font-mono text-text-dim tracking-widest uppercase">FROM METRIC TO MACHINE</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-text-dim leading-relaxed italic border-l border-border-main pl-4 py-0.5">
                &quot;I do not merely train models or run queries. I architect complete, self-healing platforms that ensure functional parity, schema safety, and micro-second reliability.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right Column: High-density Spec Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {about.expertise.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Brain;
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative border border-border-main bg-bg-card/40 p-6 md:p-8 rounded hover:border-accent/40 hover:bg-bg-card transition-all duration-300 shadow-sm"
                >
                  {/* Absolute coordinate specs */}
                  <div className="absolute top-2 right-3 font-mono text-[7px] text-text-dim/40 tracking-wider">
                    SPEC NODE // 0{index + 1}
                  </div>

                  <div className="w-11 h-11 border border-border-main rounded bg-bg-main flex items-center justify-center text-text-dim group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300 mb-6">
                    <Icon size={20} className="stroke-[1.5]" />
                  </div>
                  
                  <h3 className="text-base font-display font-extrabold text-text-main mb-3 tracking-tight uppercase group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-text-dim leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
