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
      className="group relative flex flex-col h-full p-8 md:p-12 rounded-[3rem] glass hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/5"
    >
      <div className="flex items-center justify-between mb-12">
        <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
          <Icon size={32} />
        </div>
        <div className="flex items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-text-main/5 text-text-dim hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-text-main/5 text-text-dim hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="Lien externe"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>

      <div className="mb-8">
        <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-3 block">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-text-main mb-6 group-hover:text-accent transition-colors leading-tight tracking-tight uppercase">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-text-dim leading-relaxed font-medium line-clamp-3">
          {project.context}
        </p>
      </div>

      <div className="space-y-4 mb-10">
        <div className="p-6 rounded-[2rem] bg-accent/5 border border-accent/10 group-hover:border-accent/30 transition-colors">
          <h4 className="text-[10px] font-black text-text-dim uppercase tracking-[0.2em] mb-3 opacity-60">Solution Clé</h4>
          <p className="text-xs md:text-sm text-text-main leading-relaxed font-bold italic line-clamp-2">
            &quot;{project.solution}&quot;
          </p>
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-border-main flex flex-wrap gap-2.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 rounded-xl bg-bg-main text-text-dim text-[10px] font-black uppercase tracking-widest border border-border-main group-hover:border-accent/20 transition-colors"
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
    <section id="projects" className="py-24 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 md:mb-32">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-text-main mb-8 leading-none">
              Études de <span className="text-text-dim">Cas.</span>
            </h2>
            <p className="text-text-dim text-lg md:text-xl font-medium">
              Une sélection de projets spécialisés dans les systèmes multi-agents, 
              les pipelines RAG et les architectures avancées de vision par ordinateur.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
             <div className="px-8 py-4 rounded-2xl glass text-accent text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-accent/5">
                {projects.length} Projets Majeurs
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[4rem] bg-accent relative overflow-hidden group shadow-2xl shadow-accent/20"
        >
           <div className="absolute top-0 right-0 p-20 text-white/5 group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
              <Code2 size={400} />
           </div>
           <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12 text-center md:text-left">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">Envie d&apos;en voir plus ?</h3>
                <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed">
                  Je contribue régulièrement à l&apos;open-source et j&apos;expérimente de nouvelles architectures. 
                  Explorez mon GitHub pour plus d&apos;implémentations détaillées.
                </p>
              </div>
              <a 
                href="https://github.com/EngineerProjects" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 px-10 py-6 bg-white text-accent rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/10"
              >
                Explorer GitHub <GithubIcon className="w-6 h-6" />
              </a>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
