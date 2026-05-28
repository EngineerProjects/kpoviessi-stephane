"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Download, Terminal, Cpu, Database } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo, resumeLinks } from "@/data/content";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-main pt-20 pb-16 transition-colors duration-500">
      {/* CAD Blueprint Backdrop Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-soft opacity-[0.4] dark:opacity-[0.25]" />
        
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px]" />
        
        {/* Hairline Grid Overlay Guidelines */}
        <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-border-main/50" />
        <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-border-main/50" />
        <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-border-main/50" />
        <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-border-main/50" />

        {/* CAD Grid Junction Dots */}
        <div className="absolute top-[25%] left-[15%] -translate-x-1/2 -translate-y-1/2 dot-junction" />
        <div className="absolute top-[25%] right-[15%] translate-x-1/2 -translate-y-1/2 dot-junction" />
        <div className="absolute bottom-[20%] left-[15%] -translate-x-1/2 translate-y-1/2 dot-junction" />
        <div className="absolute bottom-[20%] right-[15%] translate-x-1/2 translate-y-1/2 dot-junction" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-8 pt-16 lg:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Image and System Status HUD */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="relative group">
              {/* Mechanical bracket overlay details */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-accent" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-accent" />

              <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-none bg-bg-card border border-border-main p-2 overflow-hidden shadow-md">
                <div className="w-full h-full relative bg-accent-soft overflow-hidden grayscale contrast-[1.05] dark:contrast-[1.1] hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="/images/profile.png"
                    alt={personalInfo.name}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Float telemetry badge */}
              <div className="absolute -bottom-3 right-4 glass px-3 py-1 border border-border-main shadow-md flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[8px] font-mono font-bold tracking-widest text-text-main uppercase">
                  READY_FOR_DEPLOY
                </span>
              </div>
            </div>

            {/* Quick Engine Telemetry Specs */}
            <div className="mt-8 w-full max-w-[240px] md:max-w-[270px] border border-border-main bg-bg-card/45 p-4 rounded font-mono text-[9px] text-text-dim/80 space-y-2.5">
              <div className="flex justify-between pb-1.5 border-b border-border-main/50">
                <span className="text-accent uppercase font-bold tracking-wider flex items-center gap-1">
                  <Cpu size={10} /> ENGINE STATS
                </span>
                <span className="text-text-main font-bold">V1.2.6</span>
              </div>
              <div className="flex justify-between">
                <span>RUNTIME ENVIRONMENT</span>
                <span className="text-text-main font-semibold">NodeJS / Go / Py3</span>
              </div>
              <div className="flex justify-between">
                <span>ORCHESTRATION PIPELINES</span>
                <span className="text-text-main font-semibold">LangGraph & Pydantic AI</span>
              </div>
              <div className="flex justify-between">
                <span>DATA CLUSTER ENGINE</span>
                <span className="text-text-main font-semibold">PySpark / Databricks</span>
              </div>
              <div className="flex justify-between pt-1.5 border-t border-border-main/50 text-[8px] opacity-60">
                <span>LATITUDE: 48.8566 N</span>
                <span>LONGITUDE: 2.3522 E</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Content */}
          <div className="lg:col-span-8 flex flex-col text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/20 bg-accent-soft rounded text-[9px] font-mono font-bold text-accent uppercase tracking-[0.2em] mx-auto lg:mx-0">
                <Terminal size={10} /> CORE SYSTEMS PLATFORM
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-text-main leading-[1.05]">
                Stéphane <span className="text-text-dim">KPOVIESSI</span><span className="text-accent">.</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-mono text-accent font-bold tracking-tight mt-2 uppercase">
                AI Systems & Data Infrastructure Engineer
              </p>
            </motion.div>

            {/* Hook statement */}
            <motion.div variants={itemVariants} className="mt-6 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base md:text-lg text-text-dim leading-relaxed font-medium">
                Designing scalable multi-agent platforms, deterministic big data pipelines, and high-performance execution runtimes. Dedicated to transforming volatile models into production-grade pipelines.
              </p>
            </motion.div>

            {/* Action buttons (CTAs) */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-text-main text-bg-main border border-text-main hover:bg-bg-main hover:text-text-main transition-all duration-300 font-mono font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg active:scale-98"
              >
                Explore Blueprints
                <ArrowRight size={14} />
              </a>

              {resumeLinks.map((resume) => (
                <a
                  key={resume.href}
                  href={resume.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 glass text-text-main border border-border-main hover:border-accent/40 hover:bg-accent-soft transition-all duration-300 font-mono font-bold text-xs uppercase tracking-widest active:scale-98"
                >
                  {resume.label}
                  <Download size={14} className="text-accent" />
                </a>
              ))}
            </motion.div>

            {/* Social Coordinates HUD */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-border-main/50 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-dim hover:text-accent hover:bg-accent-soft p-2 rounded transition-all duration-300"
                  aria-label="Github Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-dim hover:text-accent hover:bg-accent-soft p-2 rounded transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-mono text-text-dim tracking-wider font-semibold">
                <MapPin size={12} className="text-accent" />
                {personalInfo.location.toUpperCase()}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
