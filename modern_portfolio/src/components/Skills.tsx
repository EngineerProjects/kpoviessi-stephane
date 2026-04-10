"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Terminal } from "lucide-react";
import { skills } from "@/data/content";
import { cn } from "@/lib/utils";

const categoryIcons = {
  programming: Terminal,
  ml_ai: Cpu,
  data_engineering: Database,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 md:mb-32">
           <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-text-main mb-6 leading-none">Stack <span className="text-text-dim">Technique.</span></h2>
           <p className="text-text-dim max-w-xl text-lg md:text-xl font-medium">
             Un ensemble complet d&apos;outils et de technologies que j&apos;utilise pour construire des solutions de données robustes et scalables.
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {Object.entries(skills).map(([key, category], catIndex) => {
            const Icon = categoryIcons[key as keyof typeof categoryIcons] || Code2;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="group relative p-8 md:p-12 rounded-[3rem] glass hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-all duration-700"
              >
                <div className="absolute top-0 right-0 p-12 text-text-main/5 group-hover:text-accent/10 transition-colors pointer-events-none">
                  <Icon size={160} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-text-main tracking-tight uppercase">{category.label}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border transition-all duration-300",
                          skill.level === "Expert" 
                            ? "bg-accent/10 border-accent/20 text-accent shadow-sm" 
                            : skill.level === "Avancé"
                            ? "bg-text-main/5 border-border-main text-text-main opacity-80"
                            : "bg-text-main/[0.02] border-border-main text-text-dim opacity-60"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {skill.name}
                          {skill.level === "Expert" && <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
