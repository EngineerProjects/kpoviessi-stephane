"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { unlock } from "@/lib/game";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import ProjectArt from "./ProjectArt";

type Filter = "all" | keyof typeof projects.filters;

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const keys = Object.keys(projects.filters) as Filter[];
  const items = projects.items.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead index="03" title={t(projects.title)} lead={t(projects.lead)} />

      <Reveal className="mb-8 flex flex-wrap gap-2" >
        {keys.map((k) => {
          const on = filter === k;
          const n = k === "all" ? projects.items.length : projects.items.filter((p) => p.cat === k).length;
          return (
            <button
              key={k}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(k)}
              className={cn(
                "relative rounded-full border px-4 py-2 text-sm transition",
                on ? "border-transparent text-accent-ink" : "border-line bg-surface hover:border-accent",
              )}
            >
              {on && <motion.span layoutId="proj-filter" className="absolute inset-0 rounded-full bg-accent" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className="relative">
                {t(projects.filters[k])} <span className="ml-1 font-mono text-[11px] opacity-70">{n}</span>
              </span>
            </button>
          );
        })}
      </Reveal>

      <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((p) => {
            const Tag = p.href ? "a" : "div";
            const wide = !!p.wide && filter === "all";
            return (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className={cn(wide && "lg:col-span-2")}
              >
                <Tag
                  {...(p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer", onClick: () => unlock("repo") } : {})}
                  className={cn(
                    "group flex h-full overflow-hidden rounded-2xl border border-line bg-surface transition",
                    wide ? "flex-col sm:flex-row" : "flex-col",
                    p.href && "hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_-24px_var(--accent)]",
                  )}
                >
                  <ProjectArt name={p.art} className={cn("border-b border-line", wide ? "aspect-[2/1] sm:aspect-auto sm:w-[44%] sm:border-b-0 sm:border-r" : "aspect-[2/1]")} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="eyebrow">{t(p.tag)}</span>
                      {p.href && (
                        <span className="inline-flex items-center gap-1 text-xs text-dim transition group-hover:text-accent">
                          GitHub <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-dim">{t(p.text)}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <Reveal className="mt-8">
        <a href="https://github.com/EngineerProjects" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
          {t(projects.viewAll)} <ArrowUpRight size={15} />
        </a>
      </Reveal>
    </section>
  );
}
