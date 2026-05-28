"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase, Calendar, MapPin, GitBranch, GitCommit, FileText } from "lucide-react";
import { experiences, associativeExperiences } from "@/data/content";
import { cn } from "@/lib/utils";

// Mapping experience company to technical commit identifiers
const commitMap: Record<string, string> = {
  "Allianz France": "0xALLZ_PROD_MIGRATE",
  "Hello Pulse": "0xHP_CTO_INITIAL_RELS",
  "Groupe Sylvagreg": "0xSYL_ML_3D_MESH",
  "LYNE ET FRERES SARL": "0xLYN_LOG_BI_ANALYST",
};

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(index < 2); // First two expanded by default for maximum impact
  const commitHash = commitMap[exp.company] || `0xGEN_NODE_0${index}`;

  return (
    <div className="relative pl-8 md:pl-12 pb-16 last:pb-4 group">
      {/* Git branch line node representation */}
      <div className="absolute left-[3px] top-[6px] w-[15px] h-[15px] rounded-full border-2 border-accent bg-bg-main flex items-center justify-center z-10 group-hover:bg-accent transition-colors duration-300">
        <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-bg-main transition-colors duration-300" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="p-6 md:p-8 border border-border-main bg-bg-card/25 rounded hover:border-accent/30 hover:bg-bg-card transition-all duration-300 shadow-sm"
      >
        {/* Telemetry commit badge */}
        <div className="absolute top-2 right-4 font-mono text-[7px] text-text-dim/40 tracking-wider">
          COMMIT // {commitHash}
        </div>

        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border-main/40">
          <div>
            <h3 className="text-lg font-display font-extrabold text-text-main tracking-tight leading-none uppercase">
              {exp.role}
            </h3>
            <p className="text-sm font-mono font-bold text-accent mt-2 uppercase">
              @{exp.company}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-[9px] text-text-dim uppercase tracking-wider">
            <span className="flex items-center gap-1.5 bg-bg-main border border-border-main px-2.5 py-1 rounded">
              <Calendar size={10} className="text-accent" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5 bg-bg-main border border-border-main px-2.5 py-1 rounded">
              <MapPin size={10} className="text-accent" />
              {exp.location}
            </span>
          </div>
        </div>

        <p className="text-sm text-text-dim leading-relaxed font-medium mb-6 pl-2 border-l border-accent/20">
          {exp.summary}
        </p>

        {/* Highlights Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 font-mono text-[9px] font-bold text-accent hover:text-text-main transition-colors uppercase tracking-widest mb-6"
        >
          {isExpanded ? (
            <>Collapse Details <ChevronUp size={12} /></>
          ) : (
            <>Expand Log Nodes <ChevronDown size={12} /></>
          )}
        </button>

        {/* Expanded System Points */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-6 overflow-hidden"
          >
            {exp.highlights.map((hl) => (
              <div key={hl.category} className="space-y-2.5">
                <h4 className="font-mono text-[9px] font-bold text-text-main uppercase tracking-widest flex items-center gap-1.5 opacity-90">
                  <span className="text-accent">[{hl.category.toUpperCase()}]</span>
                </h4>
                <ul className="space-y-2">
                  {hl.points.map((point, i) => (
                    <li
                      key={i}
                      className="font-mono text-[10px] text-text-dim leading-relaxed flex items-start gap-2.5 font-medium"
                    >
                      <span className="text-accent mt-0.5 font-bold">↳</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}

        {/* Technical stack logs */}
        <div className="mt-8 pt-4 border-t border-border-main/50 flex flex-wrap gap-1.5">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded border border-border-main/50 bg-bg-main text-text-dim text-[8px] font-mono font-bold uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-36 relative border-b border-border-main bg-bg-main/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header HUD */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-main/50 pb-8 mb-12 md:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-accent/20 bg-accent-soft text-accent text-[9px] font-mono font-bold uppercase tracking-[0.2em] mb-4">
              <GitBranch size={10} /> 04 // OPERATIONAL RECORDS & EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-text-main leading-none">
              Operational <span className="text-text-dim">Releases</span> & Experience<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-[9px] text-text-dim uppercase tracking-widest">
            CHRONOLOGICAL CHANGELOG
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12 md:mt-20">
          {/* Vertical branch line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-[1px] bg-border-main/60" />

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company + exp.role} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Associative Timeline releases */}
        <div className="mt-28 border-t border-border-main/50 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-main/50 pb-6 mb-12">
            <div className="max-w-4xl">
              <h3 className="text-xl md:text-3xl font-display font-extrabold text-text-main tracking-tight uppercase flex items-center gap-3">
                <Briefcase size={20} className="text-accent stroke-[1.5]" />
                Community & Leadership Changelog
              </h3>
            </div>
            <div className="mt-2 md:mt-0 font-mono text-[8px] text-text-dim uppercase tracking-widest">
              JUNIA ALUMNI NETWORKS
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {associativeExperiences.map((exp, i) => (
              <motion.div
                key={exp.organization + exp.role}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 md:p-8 border border-border-main bg-bg-card/20 rounded hover:border-accent/30 hover:bg-bg-card transition-all duration-300 shadow-sm relative group"
              >
                <div className="absolute top-2 right-4 font-mono text-[7px] text-text-dim/40 tracking-wider">
                  NODE // COMM_0{i + 1}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 pb-4 border-b border-border-main/30">
                  <div>
                    <h4 className="text-base font-display font-extrabold text-text-main tracking-tight uppercase group-hover:text-accent transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-mono font-bold text-accent mt-1 uppercase">
                      @{exp.organization}
                    </p>
                  </div>
                  <span className="text-[9px] font-mono text-text-dim bg-bg-main border border-border-main px-2.5 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2.5 font-mono text-[10px] text-text-dim">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-accent font-bold">↳</span>
                      <span>{point}</span>
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
