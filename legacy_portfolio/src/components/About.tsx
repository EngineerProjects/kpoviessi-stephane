"use client";

import { motion } from "framer-motion";
import { Brain, Database, Eye, Sparkles, TrendingUp } from "lucide-react";
import { about } from "@/data/content";

const iconMap = {
  database: Database,
  chart: TrendingUp,
  brain: Brain,
  eye: Eye,
};

export default function About() {
  return (
    <section id="about" className="py-16 md:py-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title on top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
            <Sparkles size={14} />
            À Propos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-text-main leading-[1.2] md:leading-[1.1]">
            Transformer la donnée complexe en <span className="text-accent italic">systèmes intelligents.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start">
          {/* Left side: Text Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6 text-base md:text-xl text-text-dim leading-relaxed font-medium">
              <p>{about.summary}</p>
              <p>{about.detail}</p>
            </div>
            
            <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] glass group hover:border-accent/30 transition-all duration-500">
               <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-500">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="text-text-main font-black text-sm md:text-lg uppercase tracking-tight">Approche End-to-End</h3>
                    <p className="text-[10px] md:text-sm font-bold text-text-dim uppercase tracking-widest opacity-70">De la donnée brute à la production</p>
                  </div>
               </div>
               <p className="text-sm md:text-base text-text-dim leading-relaxed italic border-l-2 border-accent/30 pl-4 md:pl-6 py-1">
                 &quot;Je ne me contente pas de construire des modèles ; je conçois des architectures robustes qui résolvent des problèmes concrets et passent à l&apos;échelle.&quot;
               </p>
            </div>
          </motion.div>

          {/* Right side: Expertise Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {about.expertise.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Brain;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] glass hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/10 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-6 md:mb-8">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-text-main mb-3 md:mb-4 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-xs md:text-sm font-medium text-text-dim leading-relaxed group-hover:text-text-main transition-colors">
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
