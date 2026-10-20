"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Award, GraduationCap, Megaphone, Users } from "lucide-react";
import { background as b } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"];

function Panel({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <Reveal className={cn("h-full rounded-2xl border border-line bg-surface p-6 md:p-8", className)}>
      <h3 className="eyebrow mb-6 flex items-center gap-3 text-ink">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {label}
      </h3>
      {children}
    </Reveal>
  );
}

export default function Background() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  // Education runs oldest to newest so the steps climb.
  const steps = [...b.education.items].reverse();
  const heights = ["sm:min-h-44", "sm:min-h-56", "sm:min-h-72"];

  return (
    <section id="background" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead index="06" title={t(b.title)} />

      <div className="grid gap-4 lg:grid-cols-12">
        {/* Education: a staircase */}
        <Panel label={t(b.education.label)} className="lg:col-span-7">
          <ol className="grid items-end gap-3 sm:grid-cols-3">
            {steps.map((e, i) => {
              const last = i === steps.length - 1;
              return (
                <motion.li
                  key={e.s + e.p}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "relative flex flex-col justify-between overflow-hidden rounded-xl border p-5",
                    heights[i],
                    last ? "border-accent bg-accent-soft" : "border-line bg-bg",
                  )}
                >
                  <span className={cn("grid h-9 w-9 place-items-center rounded-lg", last ? "bg-accent text-accent-ink" : "bg-surface text-dim")}>
                    <GraduationCap size={17} />
                  </span>
                  <div className="mt-6">
                    <p className="font-mono text-xs text-dim">{e.p}</p>
                    <p className="mt-1.5 font-medium leading-snug">{t(e.t)}</p>
                    <p className="mt-1 text-sm text-dim">{e.s}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </Panel>

        {/* Certifications: badges */}
        <Panel label={t(b.certs.label)} className="lg:col-span-5">
          <ul className="grid gap-3 sm:grid-cols-2">
            {b.certs.items.map((c) => {
              const wip = c.p.en === "In progress";
              return (
                <li key={c.t}>
                  <motion.a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={reduce ? undefined : { y: -4, rotate: -0.8 }}
                    className={cn(
                      "group flex h-full flex-col rounded-xl border p-4 transition-colors hover:border-accent",
                      wip ? "border-dashed border-accent/60 bg-accent-soft" : "border-line bg-bg",
                    )}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className={cn("grid h-9 w-9 place-items-center rounded-full", wip ? "bg-accent text-accent-ink" : "bg-leaf/15 text-leaf")}>
                        <Award size={17} />
                      </span>
                      <ArrowUpRight size={15} className="text-dim opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <p className="text-[15px] font-medium leading-snug">{c.t}</p>
                    <p className="mt-1 text-xs text-dim">{c.s}</p>
                    <p className={cn("mt-auto pt-3 font-mono text-[11px]", wip ? "text-accent" : "text-dim")}>
                      {wip && <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent align-middle" />}
                      {t(c.p)}
                    </p>
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </Panel>

        {/* Community */}
        <Panel label={`${t(b.community.label)} · JUNIA Alumni`} className="lg:col-span-6">
          <ul className="space-y-4">
            {b.community.items.map((c, i) => {
              const Icon = i === 0 ? Users : Megaphone;
              return (
                <li key={c.p.en} className="flex gap-4 rounded-xl border border-line bg-bg p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-ink">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="font-medium">{t(c.t)}</p>
                    <p className="font-mono text-xs text-dim">{t(c.p)}</p>
                    <p className="mt-2 text-sm leading-relaxed text-dim">{t(c.d)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>

        {/* Languages */}
        <Panel label={t(b.languages.label)} className="lg:col-span-6">
          <ul className="space-y-6">
            {b.languages.items.map((l) => {
              const native = l.lvl === 6;
              return (
                <li key={l.t.en}>
                  <div className="mb-2.5 flex items-baseline justify-between gap-4">
                    <span className="font-medium">{t(l.t)}</span>
                    <span className="text-sm text-dim">{t(l.d)}</span>
                  </div>
                  <motion.div
                    className="flex gap-1.5"
                    role="img"
                    aria-label={t(l.d)}
                    initial={reduce ? "show" : "hide"}
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ staggerChildren: 0.07, delayChildren: 0.15 }}
                  >
                    {CEFR.map((step, i) => (
                      <div key={step} className="relative h-2 flex-1 overflow-hidden rounded-full bg-line">
                        <motion.span
                          className={cn("absolute inset-0 origin-left rounded-full", native ? "bg-leaf" : "bg-accent")}
                          variants={{ hide: { scaleX: 0 }, show: { scaleX: i < l.lvl ? 1 : 0 } }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    ))}
                  </motion.div>
                  {!native && (
                    <div className="mt-1.5 flex gap-1.5 font-mono text-[10px] text-dim">
                      {CEFR.map((step) => (
                        <span key={step} className={cn("flex-1 text-center", step === "B2" && "text-accent")}>
                          {step}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Panel>
      </div>
    </section>
  );
}
