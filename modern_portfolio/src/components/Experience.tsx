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
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-16 md:mb-32 last:mb-0">
      {/* Desktop alternating layout */}
      <div className={cn(
        "flex flex-col md:flex-row items-center justify-between",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}>
        {/* Card Content - Widened to 48% */}
        <div className="w-full md:w-[48%]">
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "p-8 md:p-10 rounded-[2.5rem] glass transition-all duration-500",
              exp.featured && "ring-2 ring-accent/20 shadow-xl shadow-accent/5"
            )}
          >
            <div className="flex items-center gap-5 mb-8">
              {exp.logo && (
                <div className="relative w-14 h-14 rounded-2xl bg-white/50 dark:bg-zinc-800/50 border border-border-main overflow-hidden flex-shrink-0 p-2 shadow-sm">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              )}
              <div>
                <h3 className="text-xl md:text-2xl font-black text-text-main leading-tight tracking-tight uppercase">{exp.role}</h3>
                <p className="text-accent font-bold text-base">{exp.company}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 mb-8 text-xs md:text-sm font-mono text-text-dim uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-accent" />
                {exp.period}
              </div>
              <div className="flex items-center gap-2 tracking-widest">
                <MapPin size={16} className="text-accent" />
                {exp.location}
              </div>
            </div>

            <p className="text-base md:text-lg text-text-dim leading-relaxed mb-8 font-medium">
              {exp.summary}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-xs font-black text-accent hover:opacity-70 uppercase tracking-widest mb-8 transition-all"
            >
              {isExpanded ? (
                <>Réduire <ChevronUp size={16} /></>
              ) : (
                <>Détails des réalisations <ChevronDown size={16} /></>
              )}
            </button>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-8 overflow-hidden"
              >
                {exp.highlights.map((hl) => (
                  <div key={hl.category}>
                    <h4 className="text-xs font-black text-text-main uppercase tracking-widest mb-4 opacity-80 border-l-2 border-accent pl-4">
                      {hl.category}
                    </h4>
                    <ul className="space-y-3">
                      {hl.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-base text-text-dim leading-relaxed flex items-start gap-4"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            <div className="mt-8 pt-8 border-t border-border-main flex flex-wrap gap-2.5">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-accent/5 text-accent text-[10px] font-black uppercase tracking-widest border border-accent/10"
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

        {/* Empty space - slightly narrower now at 48% */}
        <div className="hidden md:block md:w-[48%]" />
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-40 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-text-main mb-6 leading-none uppercase">
            Parcours <span className="text-text-dim">Professionnel.</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Mon évolution technique à travers l&apos;ingénierie des données, la recherche en IA et le leadership technique.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-main to-transparent" />
          
          {/* Vertical Left Line - Mobile */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-border-main" />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company + exp.role} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Associative Section */}
        <div className="mt-40">
           <div className="flex items-center justify-center gap-4 mb-20">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <Briefcase size={28} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-text-main tracking-tighter uppercase">Expériences Associatives</h3>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             {associativeExperiences.map((exp, i) => (
               <motion.div
                 key={exp.organization + exp.role}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-10 rounded-[3rem] glass hover:border-accent/30 transition-all duration-500 group"
               >
                 <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="text-2xl font-black text-text-main mb-2 group-hover:text-accent transition-colors uppercase tracking-tight">{exp.role}</h4>
                      <p className="text-accent font-bold text-lg">{exp.organization}</p>
                    </div>
                    <span className="text-[10px] font-mono text-text-dim bg-accent/5 px-3 py-1.5 rounded-full border border-accent/10">
                      {exp.period}
                    </span>
                 </div>
                 <ul className="space-y-4">
                   {exp.points.map((point, i) => (
                     <li key={i} className="text-base text-text-dim leading-relaxed flex items-start gap-4">
                       <div className="w-2 h-px bg-accent mt-3 flex-shrink-0" />
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
