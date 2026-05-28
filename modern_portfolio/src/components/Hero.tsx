"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo, resumeLinks } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-main transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[70%] h-[50%] bg-accent/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[70%] h-[50%] bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-grid-soft opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative group flex-shrink-0"
          >
            <div className="absolute -inset-4 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-1000" />
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1.5 md:p-2 glass overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-accent/5">
                <Image
                  src="/images/profile.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-0 right-0 glass rounded-xl px-3 py-1.5 md:px-4 md:py-2 shadow-xl flex items-center gap-2"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-black text-text-main uppercase tracking-widest">Disponible</span>
            </motion.div>
          </motion.div>

          {/* Name & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-2 md:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <h2 className="text-accent font-black text-[10px] md:text-lg tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3 leading-tight">
                DATA ENGINEER / DATA SCIENTIST
              </h2>
              {/* Correction : suppression du whitespace-nowrap global et gestion précise du wrap */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-text-main mb-6 md:mb-8 leading-[1.1] md:leading-[1.2] lg:leading-[1.1] px-1">
                <span className="inline-block md:whitespace-nowrap">
                  Stéphane <span className="text-text-dim">KPOVIESSI<span className="text-accent">.</span></span>
                </span>
              </h1>
            </motion.div>

            {/* Hook phrase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl"
            >
              <p className="text-base md:text-xl text-text-dim leading-relaxed font-medium px-4 md:px-0">
                Spécialisé en <span className="text-text-main font-bold">Data Engineering</span>, Machine Learning et conception de <span className="text-text-main font-bold">systèmes IA</span> de bout en bout.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto px-6 sm:px-0"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-text-main text-bg-main text-sm font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-text-main/10 flex justify-center items-center"
              >
                <span className="flex items-center gap-2 uppercase tracking-widest">
                  Projets <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resumeLinks.map((resume) => (
                  <a
                    key={resume.href}
                    href={resume.href}
                    target="_blank"
                    className="group px-5 py-4 md:px-6 md:py-5 rounded-2xl glass text-text-main text-xs md:text-sm font-black hover:border-accent/30 transition-all hover:scale-105 active:scale-95 shadow-lg flex justify-center items-center"
                  >
                    <span className="flex items-center gap-2 uppercase tracking-widest">
                      {resume.label} <Download size={18} className="text-accent group-hover:translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-6 md:gap-8"
            >
              <div className="flex items-center gap-8">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
              </div>
              <div className="hidden md:block w-px h-6 bg-border-main" />
              <div className="flex items-center gap-2 text-text-dim font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] opacity-60">
                <MapPin size={12} className="text-accent" />
                {personalInfo.location}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
