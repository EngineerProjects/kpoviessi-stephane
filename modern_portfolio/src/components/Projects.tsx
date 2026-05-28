"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Cpu, Database, Eye, Box, Wrench, Server, Sparkles, LineChart, Terminal, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "@/data/content";

const categoryIcons = {
  "AI Systems": Cpu,
  "Data Engineering": Database,
  "Data Science": LineChart,
  "Computer Vision": Eye,
  "3D Systems": Box,
  "AI Product": Sparkles,
  "Developer Tooling": Wrench,
  Backend: Server,
};

// Simplified Pure CSS/SVG Architecture Diagrams for each primary project
function SystemDiagram({ category, title }: { category: string; title: string }) {
  if (title === "Nexus AI") {
    return (
      <div className="w-full h-24 border border-border-main/40 bg-bg-main/30 rounded font-mono text-[8px] flex items-center justify-around px-3 mb-6 relative overflow-hidden">
        <div className="absolute top-1 left-2 text-[7px] text-text-dim/50 tracking-wider">SYSTEM DIAGRAM // ARCHITECTURE</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>React Client</span>
          <span className="text-[6px] text-text-dim">Electron</span>
        </div>
        <div className="text-accent animate-pulse font-bold">◄ gRPC ►</div>
        <div className="flex flex-col items-center p-1 border border-accent/30 rounded bg-accent-soft text-accent font-bold">
          <span>Go Engine</span>
          <span className="text-[6px] text-text-dim">Orchestrator</span>
        </div>
        <div className="text-text-dim">──</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>SQLite / MCP</span>
          <span className="text-[6px] text-text-dim">Sandboxed Tool</span>
        </div>
      </div>
    );
  }

  if (title === "BI Retail") {
    return (
      <div className="w-full h-24 border border-border-main/40 bg-bg-main/30 rounded font-mono text-[8px] flex items-center justify-around px-3 mb-6 relative overflow-hidden">
        <div className="absolute top-1 left-2 text-[7px] text-text-dim/50 tracking-wider">SYSTEM DIAGRAM // ANALYTICS PIPELINE</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>Sales & Client Data</span>
          <span className="text-[6px] text-text-dim">SQL Logs</span>
        </div>
        <div className="text-accent animate-pulse font-bold">◄ Python ETL ►</div>
        <div className="flex flex-col items-center p-1 border border-accent/30 rounded bg-accent-soft text-accent font-bold">
          <span>Analytical Mart</span>
          <span className="text-[6px] text-text-dim">Pandas Metrics</span>
        </div>
        <div className="text-text-dim">──►</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>Power BI</span>
          <span className="text-[6px] text-text-dim">Executive HUD</span>
        </div>
      </div>
    );
  }

  if (title === "Tech Watch Agent") {
    return (
      <div className="w-full h-24 border border-border-main/40 bg-bg-main/30 rounded font-mono text-[8px] flex items-center justify-around px-3 mb-6 relative overflow-hidden">
        <div className="absolute top-1 left-2 text-[7px] text-text-dim/50 tracking-wider">SYSTEM DIAGRAM // MULTI-AGENT STATE</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>Data Ingest</span>
          <span className="text-[6px] text-text-dim">arXiv/GitHub</span>
        </div>
        <div className="text-text-dim">─►</div>
        <div className="flex flex-col items-center p-1 border border-accent/30 rounded bg-accent-soft text-accent font-bold">
          <span>LangGraph Router</span>
          <span className="text-[6px] text-text-dim">Debate Loop</span>
        </div>
        <div className="text-accent animate-pulse font-bold">◄ SSE ►</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>pgvector Index</span>
          <span className="text-[6px] text-text-dim">FastAPI Cache</span>
        </div>
      </div>
    );
  }

  if (title === "Sylva3D") {
    return (
      <div className="w-full h-24 border border-border-main/40 bg-bg-main/30 rounded font-mono text-[8px] flex items-center justify-around px-3 mb-6 relative overflow-hidden">
        <div className="absolute top-1 left-2 text-[7px] text-text-dim/50 tracking-wider">SYSTEM DIAGRAM // VECTOR PIPELINE</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>Noise Generator</span>
          <span className="text-[6px] text-text-dim">Perlin/Math3D</span>
        </div>
        <div className="text-text-dim">─►</div>
        <div className="flex flex-col items-center p-1 border border-accent/30 rounded bg-accent-soft text-accent font-bold">
          <span>OpenGL Renderer</span>
          <span className="text-[6px] text-text-dim">Mesh Compute</span>
        </div>
        <div className="text-text-dim">─►</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>3D Simulation</span>
          <span className="text-[6px] text-text-dim">Watertight G-Code</span>
        </div>
      </div>
    );
  }

  if (title === "Advanced Football Video Analysis") {
    return (
      <div className="w-full h-24 border border-border-main/40 bg-bg-main/30 rounded font-mono text-[8px] flex items-center justify-around px-3 mb-6 relative overflow-hidden">
        <div className="absolute top-1 left-2 text-[7px] text-text-dim/50 tracking-wider">SYSTEM DIAGRAM // CV DEPLOYMENT</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>Raw Video Ingest</span>
          <span className="text-[6px] text-text-dim">OpenCV Frames</span>
        </div>
        <div className="text-accent animate-pulse font-bold">◄ Processing ►</div>
        <div className="flex flex-col items-center p-1 border border-accent/30 rounded bg-accent-soft text-accent font-bold">
          <span>YOLO Predictor</span>
          <span className="text-[6px] text-text-dim">Tracking & Colors</span>
        </div>
        <div className="text-text-dim">─►</div>
        <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card font-bold">
          <span>Tactical Map</span>
          <span className="text-[6px] text-text-dim">Team Heatmaps</span>
        </div>
      </div>
    );
  }

  // Fallback minimalist grid diagram
  return (
    <div className="w-full h-24 border border-border-main/40 bg-bg-main/30 rounded font-mono text-[8px] flex items-center justify-around px-3 mb-6 relative overflow-hidden">
      <div className="absolute top-1 left-2 text-[7px] text-text-dim/50 tracking-wider">SYSTEM DIAGRAM // FLOW</div>
      <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card">
        <span>Raw Input</span>
      </div>
      <div className="text-text-dim">──►</div>
      <div className="flex flex-col items-center p-1 border border-accent/30 rounded bg-accent-soft text-accent">
        <span>Processing Node</span>
      </div>
      <div className="text-text-dim">──►</div>
      <div className="flex flex-col items-center p-1 border border-border-main rounded bg-bg-card">
        <span>System Outputs</span>
      </div>
    </div>
  );
}

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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col h-full p-6 md:p-8 rounded border border-border-main bg-bg-card/30 hover:border-accent/40 hover:bg-bg-card transition-all duration-300 shadow-sm"
    >
      {/* Structural corner details */}
      <div className="absolute top-2 right-3 font-mono text-[7px] text-text-dim/35 tracking-wider">
        PLATFORM BLUEPRINT // 0{index + 1}
      </div>

      {/* Card Header HUD */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-main/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border border-border-main rounded bg-bg-main flex items-center justify-center text-text-dim group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300">
            <Icon size={16} />
          </div>
          <div>
            <span className="text-[8px] font-mono font-bold text-accent uppercase tracking-[0.2em] block leading-none">
              {project.category}
            </span>
            <h3 className="text-base font-display font-extrabold text-text-main group-hover:text-accent transition-colors tracking-tight mt-1 leading-none">
              {project.title.toUpperCase()}
            </h3>
          </div>
        </div>

        {/* Links HUD */}
        <div className="flex items-center gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 border border-border-main/60 rounded text-text-dim hover:text-accent hover:border-accent/30 hover:bg-accent-soft transition-all duration-200"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Embedded Visual System Diagram */}
      <SystemDiagram category={project.category} title={project.title} />

      {/* Technical Specifications Columns */}
      <div className="space-y-4 font-mono text-[10px] text-text-dim leading-relaxed mb-6">
        <div>
          <span className="text-accent font-bold mr-1.5 uppercase">■ SYSTEM CONTEXT:</span>
          <span className="text-text-main font-medium">{project.context}</span>
        </div>
        <div className="border-t border-border-main/30 pt-3">
          <span className="text-accent font-bold mr-1.5 uppercase">■ TECHNICAL SOLUTION:</span>
          <span className="text-text-main font-medium">{project.solution}</span>
        </div>
        
        {project.impact && project.impact.length > 0 && (
          <div className="border-t border-border-main/30 pt-3">
            <span className="text-accent font-bold block mb-1.5 uppercase">■ VERIFIED PRODUCTION IMPACT:</span>
            <ul className="list-none space-y-1 pl-3 text-text-main font-medium">
              {project.impact.map((imp, i) => (
                <li key={i} className="relative before:content-['•'] before:absolute before:left-[-10px] before:text-accent">
                  {imp}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Stack Telemetry tags */}
      <div className="mt-auto pt-4 border-t border-border-main/50 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded border border-border-main/50 bg-bg-main text-text-dim text-[8px] font-mono font-bold uppercase tracking-wider group-hover:border-accent/20 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  // We only showcase the primary technical cases in the grid
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-36 relative border-b border-border-main">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header HUD */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-main/50 pb-8 mb-12 md:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-accent/20 bg-accent-soft text-accent text-[9px] font-mono font-bold uppercase tracking-[0.2em] mb-4">
              <Layers size={10} /> 03 // ACTIVE PLATFORM BLUEPRINTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-text-main leading-none">
              Technical <span className="text-text-dim">Case Studies</span> & Systems<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-[9px] text-text-dim uppercase tracking-widest">
            {featuredProjects.length} SPECIFIED BLUEPRINTS
          </div>
        </div>

        {/* Primary Schematic grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Auxiliary Specifications Catalogue */}
        {otherProjects.length > 0 && (
          <div className="mt-20 border border-border-main rounded bg-bg-card/25 p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-2 right-4 font-mono text-[7px] text-text-dim/35 tracking-wider">
              AUXILIARY CATALOGUE // OPTIMIZATIONS
            </div>
            <h3 className="text-sm font-mono font-bold text-accent uppercase tracking-widest mb-6 border-b border-border-main/50 pb-3 flex items-center gap-2">
              <Terminal size={12} /> AUXILIARY EXPERIMENTAL NODES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-4 border border-border-main/50 bg-bg-main/30 rounded hover:border-accent/30 hover:bg-bg-card transition-all duration-300"
                >
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-border-main/30">
                    <h4 className="text-xs font-display font-extrabold text-text-main tracking-tight uppercase">
                      {project.title}
                    </h4>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 border border-border-main/50 rounded text-text-dim hover:text-accent hover:bg-accent-soft transition-colors"
                      aria-label="GitHub link"
                    >
                      <ExternalLink size={10} />
                    </a>
                  </div>
                  <p className="text-[10px] font-mono text-text-dim leading-relaxed mb-4 line-clamp-3">
                    {project.solution}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 border border-border-main/30 bg-bg-main/80 text-[7px] font-mono text-text-dim uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Global Call to Action node */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-16 border border-accent/20 bg-accent-soft relative overflow-hidden group shadow-sm rounded"
        >
          <div className="absolute top-0 right-0 p-10 text-accent/5 pointer-events-none group-hover:scale-105 transition-transform duration-1000">
            <Code2 size={240} className="stroke-[1]" />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-text-main mb-3 tracking-tighter uppercase leading-none">
                EXPLORE COMPLETE CLUSTER NODES
              </h3>
              <p className="text-text-dim text-sm font-medium leading-relaxed">
                I actively contribute to open-source software, testing local sandboxes and structural parsing strategies. Explore my global GitHub organization for full implementation scripts.
              </p>
            </div>
            <a
              href="https://github.com/EngineerProjects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-text-main text-bg-main hover:bg-bg-main hover:text-text-main border border-text-main transition-all duration-300 font-mono font-bold text-xs uppercase tracking-widest active:scale-98 shadow-sm hover:shadow"
            >
              Access Github Org <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
