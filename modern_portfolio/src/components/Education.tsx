"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, Library, Terminal, ShieldAlert } from "lucide-react";
import { education, certifications } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-36 relative border-b border-border-main bg-bg-main/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Grid Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Academic Foundations */}
          <div className="lg:col-span-7 space-y-12">
            <div className="border-b border-border-main/50 pb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-accent/20 bg-accent-soft text-accent text-[9px] font-mono font-bold uppercase tracking-[0.2em] mb-4">
                <Library size={10} /> 05 // SCIENTIFIC & MATHEMATICAL RIGOR
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tighter text-text-main leading-none">
                Academic <span className="text-text-dim">Foundations</span><span className="text-accent">.</span>
              </h2>
            </div>

            <div className="space-y-10">
              {education.map((item, i) => (
                <motion.div
                  key={item.degree + item.school}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative pl-8 pb-8 last:pb-0"
                >
                  {/* Left branch hairline guides */}
                  <div className="absolute left-[3px] top-[8px] bottom-0 w-[1px] bg-border-main group-last:hidden" />
                  <div className="absolute left-0 top-[8px] w-2 h-2 rounded-full border border-accent bg-bg-main flex items-center justify-center group-hover:bg-accent transition-colors duration-300" />
                  
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-display font-extrabold text-text-main group-hover:text-accent transition-colors tracking-tight uppercase leading-none">
                      {item.degree}
                    </h3>
                    <span className="text-[8px] font-mono font-bold text-text-dim bg-bg-main border border-border-main px-2 py-0.5 rounded">
                      {item.period}
                    </span>
                    {item.level && (
                      <span className="text-[8px] font-mono font-bold text-accent bg-accent-soft border border-accent/20 px-2 py-0.5 rounded">
                        {item.level.toUpperCase()}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs font-mono font-bold text-text-dim uppercase tracking-wider mb-2">
                    {item.school} // {item.specialization}
                  </p>
                  
                  <p className="text-xs text-text-dim leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Syllabus lists */}
                  {item.courses && (
                    <div className="mb-4 pl-3 border-l border-border-main/50 space-y-1.5 font-mono text-[9px] text-text-dim">
                      <span className="text-accent font-bold block mb-1 text-[8px] tracking-wider uppercase">CORE TECHNICAL SYLLABUS:</span>
                      {item.courses.map((course) => (
                        <div key={course} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-accent font-bold">↳</span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Distinction telemetry */}
                  {item.distinction && (
                    <div className="border border-accent/20 bg-accent-soft p-3 rounded font-mono text-[9px] text-text-main font-bold tracking-wide mb-4">
                      [DISTINCTION] {item.distinction.toUpperCase()}
                    </div>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold text-text-dim hover:text-text-main uppercase tracking-widest transition-colors mt-2"
                    >
                      Verify Institution <ExternalLink size={10} className="text-accent" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-12 lg:pl-6">
            <div className="border-b border-border-main/50 pb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-accent/20 bg-accent-soft text-accent text-[9px] font-mono font-bold uppercase tracking-[0.2em] mb-4">
                <Award size={10} /> REGISTRY CREDENTIALS
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tighter text-text-main leading-none">
                Verified <span className="text-text-dim">Registry</span><span className="text-accent">.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-5 border border-border-main bg-bg-card/30 rounded hover:border-accent/40 hover:bg-bg-card transition-all duration-300 flex items-center justify-between group shadow-sm"
                >
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-display font-extrabold text-text-main group-hover:text-accent transition-colors uppercase tracking-tight">
                      {cert.name}
                    </h3>
                    <p className="text-[8px] font-mono text-text-dim uppercase tracking-wider font-bold">
                      ISSUER: {cert.issuer}
                    </p>
                  </div>
                  <div className="w-8 h-8 border border-border-main/60 rounded bg-bg-main flex items-center justify-center text-text-dim group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300">
                    <Award size={14} className="stroke-[1.5]" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Continuous Learning statement */}
            <div className="border border-border-main/50 border-dashed p-6 rounded relative overflow-hidden bg-bg-card/10">
              <div className="absolute top-0 right-0 w-8 h-8 bg-accent/5 pointer-events-none" />
              <p className="font-mono text-[10px] text-text-dim leading-relaxed italic text-center">
                &quot;Continuous alignment with changing cloud paradigms, mathematical operations research, and automated workflow state machines.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
