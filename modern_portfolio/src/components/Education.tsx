"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, certifications } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-text-main tracking-tighter uppercase leading-none">Éducation<span className="text-accent">.</span></h2>
            </div>

            <div className="space-y-10">
              {education.map((item, i) => (
                <motion.div
                  key={item.degree + item.school}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative pl-10 pb-10 last:pb-0"
                >
                  <div className="absolute left-0 top-1.5 bottom-0 w-px bg-border-main group-last:hidden" />
                  <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:scale-150 transition-transform duration-300" />
                  
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-xl font-black text-text-main group-hover:text-accent transition-colors tracking-tight uppercase">
                      {item.degree}
                    </h3>
                    <span className="text-[10px] font-mono text-text-dim bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
                      {item.period}
                    </span>
                    {item.level && (
                      <span className="text-[10px] font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {item.level}
                      </span>
                    )}
                  </div>
                  <p className="text-accent font-bold mb-3">{item.school}</p>
                  <p className="text-base text-text-dim mb-6 font-medium">{item.specialization}</p>

                  {item.description && (
                    <p className="text-sm text-text-dim leading-relaxed mb-6 font-medium">
                      {item.description}
                    </p>
                  )}

                  {item.courses && (
                    <div className="mb-6">
                      <h4 className="text-[10px] font-black text-text-main uppercase tracking-widest mb-3 opacity-70">
                        Principaux enseignements
                      </h4>
                      <ul className="space-y-2">
                        {item.courses.map((course) => (
                          <li
                            key={course}
                            className="text-xs md:text-sm text-text-dim leading-relaxed flex items-start gap-3"
                          >
                            <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.keySkills && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {item.keySkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-accent/5 text-accent text-[9px] font-black uppercase tracking-widest border border-accent/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.distinction && (
                    <p className="text-sm text-text-main leading-relaxed mb-6 font-bold border-l-2 border-accent pl-4">
                      Distinction : {item.distinction}
                    </p>
                  )}
                  
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-black text-text-dim hover:text-text-main uppercase tracking-widest transition-all"
                    >
                      Visiter l&apos;institution <ExternalLink size={14} className="text-accent" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <Award size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-text-main tracking-tighter uppercase leading-none">Certificats<span className="text-accent">.</span></h2>
            </div>

            <div className="grid gap-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] glass hover:border-accent/30 hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-all duration-500 flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-lg font-black text-text-main mb-2 group-hover:text-accent transition-colors uppercase tracking-tight">{cert.name}</h3>
                    <p className="text-[10px] text-text-dim uppercase tracking-[0.2em] font-black opacity-60">{cert.issuer}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-text-dim group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Award size={24} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-10 rounded-[3rem] glass border-dashed relative overflow-hidden group">
               <div className="relative z-10 text-center">
                  <p className="text-text-dim text-base md:text-lg leading-relaxed italic font-medium group-hover:text-text-main transition-colors duration-500">
                    &quot;Apprentissage continu et expansion de mes horizons techniques à travers des certifications professionnelles et de la recherche en laboratoire.&quot;
                  </p>
               </div>
               <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
