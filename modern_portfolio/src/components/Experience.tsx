"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences, associativeExperiences } from "@/data/content";
import { cn } from "@/lib/utils";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-10 md:mb-32 last:mb-0">
      {/* Desktop alternating layout */}
      <div className={cn(
        "flex flex-col md:flex-row items-center justify-between",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}>
        {/* Card Content */}
        <div className="w-full md:w-[48%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] glass transition-all duration-500",
              exp.featured && "ring-2 ring-accent/20 shadow-xl shadow-accent/5"
            )}
          >
            <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
              {exp.logo && (
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/50 dark:bg-zinc-800/50 border border-border-main overflow-hidden flex-shrink-0 p-1.5 md:p-2 shadow-sm">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              )}
              <div>
                <h3 className="text-lg md:text-2xl font-black text-text-main leading-tight tracking-tight uppercase">{exp.role}</h3>
                <p className="text-accent font-bold text-sm md:text-base">{exp.company}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-5 mb-6 md:mb-8 text-[10px] md:text-sm font-mono text-text-dim uppercase tracking-widest">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Calendar size={14} className="text-accent" />
                {exp.period}
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 tracking-widest">
                <MapPin size={14} className="text-accent" />
                {exp.location}
              </div>
            </div>

            <p className="text-sm md:text-lg text-text-dim leading-relaxed mb-6 md:mb-8 font-medium">
              {exp.summary}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-[10px] md:text-xs font-black text-accent hover:opacity-70 uppercase tracking-widest mb-6 md:mb-8 transition-all"
            >
              {isExpanded ? (
                <>Réduire <ChevronUp size={16} /></>
              ) : (
                <>Réalisations <ChevronDown size={16} /></>
              )}
            </button>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-6 md:space-y-8 overflow-hidden"
              >
                {exp.highlights.map((hl) => (
                  <div key={hl.category}>
                    <h4 className="text-[10px] md:text-xs font-black text-text-main uppercase tracking-widest mb-3 md:mb-4 opacity-80 border-l-2 border-accent pl-3 md:pl-4">
                      {hl.category}
                    </h4>
                    <ul className="space-y-2 md:space-y-3">
                      {hl.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-xs md:text-base text-text-dim leading-relaxed flex items-start gap-3 md:gap-4"
                        >
                          <div className="w-1 h-1 rounded-full bg-accent mt-1.5 md:mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border-main flex flex-wrap gap-2 md:gap-2.5">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-accent/5 text-accent text-[9px] font-black uppercase tracking-widest border border-accent/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center Dot - Desktop only */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center z-20">
            <div className="w-4 h-4 rounded-full bg-bg-main border-4 border-accent shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
        </div>

        {/* Empty space for alternating - Desktop only */}
        <div className="hidden md:block md:w-[48%]" />
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-text-main mb-4 md:mb-6 leading-none uppercase">
            Parcours <span className="text-text-dim">Professionnel.</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto text-base md:text-xl font-medium">
            Mon évolution technique à travers l&apos;ingénierie des données, la recherche en IA et le leadership technique.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-main to-transparent" />
          
          {/* Vertical Left Line - Mobile */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-border-main" />

          <div className="space-y-8 md:space-y-0">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company + exp.role} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Associative Section */}
        <div className="mt-24 md:mt-40">
           <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 md:mb-20">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl md:text-5xl font-black text-text-main tracking-tighter uppercase text-center md:text-left">Expériences Associatives</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
             {associativeExperiences.map((exp, i) => (
               <motion.div
                 key={exp.organization + exp.role}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] glass hover:border-accent/30 transition-all duration-500 group"
               >
                 <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 md:mb-8">
                    <div>
                      <h4 className="text-xl md:text-2xl font-black text-text-main mb-1 group-hover:text-accent transition-colors uppercase tracking-tight">{exp.role}</h4>
                      <p className="text-accent font-bold text-base">{exp.organization}</p>
                    </div>
                    <span className="text-[9px] md:text-[10px] font-mono text-text-dim bg-accent/5 px-3 py-1.5 rounded-full border border-accent/10 whitespace-nowrap">
                      {exp.period}
                    </span>
                 </div>
                 <ul className="space-y-3 md:space-y-4">
                   {exp.points.map((point, i) => (
                     <li key={i} className="text-sm md:text-base text-text-dim leading-relaxed flex items-start gap-3 md:gap-4">
                       <div className="w-1.5 h-px bg-accent mt-2.5 md:mt-3 flex-shrink-0" />
                       {point}
                     </li>
                   ))}
                 </ul>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
