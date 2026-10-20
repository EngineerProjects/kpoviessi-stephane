"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { unlock } from "@/lib/game";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead index="03" title={t(projects.title)} lead={t(projects.lead)} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((p, i) => {
          const Tag = p.href ? "a" : "div";
          return (
            <Reveal key={p.title} delay={(i % 3) * 0.07} className={cn("h-full", p.featured && i === 0 && "lg:col-span-2")}>
              <Tag
                {...(p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer", onClick: () => unlock("repo") } : {})}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition",
                  p.href && "hover:-translate-y-1 hover:border-accent",
                )}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="eyebrow">{t(p.tag)}</span>
                  {p.href && <ArrowUpRight size={18} className="text-dim transition group-hover:text-accent" />}
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
              </Tag>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-8">
        <a href="https://github.com/EngineerProjects" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
          {t(projects.viewAll)} <ArrowUpRight size={15} />
        </a>
      </Reveal>
    </section>
  );
}
