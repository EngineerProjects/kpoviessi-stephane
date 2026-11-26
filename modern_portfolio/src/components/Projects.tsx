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

/* Bento spans on the six-column grid: every row sums to six, so no hole appears. */
const BENTO = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
];

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const keys = Object.keys(projects.filters) as Filter[];
  const items = projects.items.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead index="03" title={t(projects.title)} lead={t(projects.lead)} />

        <Reveal className="mb-6 flex flex-wrap gap-1.5">
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
                  "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.1em] transition-colors",
                  on
                    ? "border-ink bg-ink text-bg"
                    : "border-line bg-surface text-ink-3 hover:border-line-strong hover:text-ink",
                )}
              >
                {t(projects.filters[k])}
                <span className="opacity-60">{n}</span>
              </button>
            );
          })}
        </Reveal>

        <motion.div layout className="grid gap-3 md:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong",
                  filter === "all" ? BENTO[i] ?? "md:col-span-2" : "md:col-span-2",
                )}
              >
                <ProjectArt name={p.art} className="min-h-[210px] flex-1 border-b border-line" />

                <div className="shrink-0 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-3">{t(p.tag)}</span>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => unlock("repo")}
                        aria-label={`GitHub · ${p.title}`}
                        className="text-ink-3 transition-all duration-200 hover:text-accent"
                      >
                        <ArrowUpRight
                          size={15}
                          aria-hidden
                          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    )}
                  </div>

                  <h3 className="mt-2.5 text-[17px] font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{t(p.text)}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] text-ink-2"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  {p.caseStudy && (
                    <details className="group/case mt-4 border-t border-line pt-3">
                      <summary className="cursor-pointer list-none font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                        {t(projects.caseStudy.open)} +
                      </summary>
                      <dl className="mt-4 space-y-3 text-[13.5px] leading-relaxed">
                        {(["challenge", "approach", "outcome"] as const).map((key) => (
                          <div key={key}>
                            <dt className="mb-0.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-3">
                              {t(projects.caseStudy[key])}
                            </dt>
                            <dd className="text-ink-2">{t(p.caseStudy![key])}</dd>
                          </div>
                        ))}
                      </dl>
                    </details>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-6">
          <a
            href="https://github.com/EngineerProjects"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-3 transition-colors hover:text-ink"
          >
            {t(projects.viewAll)}
            <ArrowUpRight size={13} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
