"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Cpu, Database, Eye } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "@/data/content";

const categoryIcons = {
  "AI Systems": Cpu,
  "Data Engineering": Database,
  "Computer Vision": Eye,
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const Icon = categoryIcons[project.category as keyof typeof categoryIcons] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] glass hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/5"
    >
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
          <Icon size={24} className="md:w-8 md:h-8" />
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-text-main/5 text-text-dim hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-text-main/5 text-text-dim hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="Lien externe"
          >
            <ExternalLink size={20} className="md:w-6 md:h-6" />
          </a>
        </div>
      </div>

      <div className="mb-6 md:mb-8">
        <span className="text-[9px] md:text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 md:mb-3 block">
          {project.category}
        </span>
        <h3 className="text-xl md:text-3xl font-black text-text-main mb-4 md:mb-6 group-hover:text-accent transition-colors leading-tight tracking-tight uppercase">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-text-dim leading-relaxed font-medium line-clamp-4">
          {project.context}
        </p>
      </div>

      <div className="space-y-4 mb-8 md:mb-10">
        <div className="p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-accent/5 border border-accent/10 group-hover:border-accent/30 transition-colors">
          <h4 className="text-[9px] md:text-[10px] font-black text-text-dim uppercase tracking-[0.2em] mb-2 md:mb-3 opacity-60">Solution Clé</h4>
          <p className="text-xs md:text-sm text-text-main leading-relaxed font-bold italic line-clamp-2">
            &quot;{project.solution}&quot;
          </p>
        </div>
      </div>

      <div className="mt-auto pt-6 md:pt-8 border-t border-border-main flex flex-wrap gap-2 md:gap-2.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 md:px-3 py-1.5 rounded-lg md:rounded-xl bg-bg-main text-text-dim text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-border-main group-hover:border-accent/20 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-32">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-text-main mb-4 md:mb-8 leading-tight">
              Études de <span className="text-text-dim">Cas.</span>
            </h2>
            <p className="text-text-dim text-base md:text-xl font-medium">
              Une sélection de projets spécialisés dans les systèmes multi-agents, 
              les pipelines RAG et les architectures avancées de vision par ordinateur.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
             <div className="px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl glass text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                {projects.length} Projets Majeurs
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-accent relative overflow-hidden group shadow-2xl"
        >
           <div className="absolute top-0 right-0 p-10 md:p-20 text-white/5 group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
              <Code2 size={300} className="md:w-[400px] md:h-[400px]" />
           </div>
           <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 text-center md:text-left">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tighter uppercase leading-tight">Envie d&apos;en voir plus ?</h3>
                <p className="text-white/80 text-base md:text-xl font-medium leading-relaxed">
                  Je contribue régulièrement à l&apos;open-source et j&apos;expérimente de nouvelles architectures. 
                  Explorez mon GitHub pour plus d&apos;implémentations détaillées.
                </p>
              </div>
              <a 
                href="https://github.com/EngineerProjects" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 md:gap-4 px-8 py-5 md:px-10 md:py-6 bg-white text-accent rounded-2xl md:rounded-3xl font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                Explorer GitHub <GithubIcon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
