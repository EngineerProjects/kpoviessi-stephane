"use client";

import { ArrowUpRight, Award, GraduationCap, Megaphone, Users } from "lucide-react";
import { about, background as b } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"];

function Panel({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("h-full", className)}>
      <div className="h-full rounded-xl border border-line bg-surface p-5 md:p-6">
        <p className="mb-5 font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3">{label}</p>
        {children}
      </div>
    </Reveal>
  );
}

export default function About() {
  const { t } = useLang();
  const steps = [...b.education.items].reverse();

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead index="06" title={t(about.title)} lead={t(about.lead)} />

        <Reveal className="mb-3">
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="border-b border-line px-5 py-2.5">
              <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3">{t(about.statsLabel)}</p>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
              {about.stats.map((s) => (
                <div key={s.l.en} className="bg-surface p-5">
                  <dt className="whitespace-pre font-mono text-[20px] leading-none tracking-tight text-ink">
                    {s.prefix}
                    <CountUp to={s.n} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-2 max-w-[13rem] text-[12px] leading-snug text-ink-2">{t(s.l)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-ink-3">{t(about.measurementNote)}</p>
        </Reveal>

        <div className="grid gap-3 lg:grid-cols-12">
          <Panel label={t(b.education.label)} className="lg:col-span-7">
            <ol className="divide-y divide-line">
              {steps.map((e) => (
                <li key={e.s + e.p} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-surface-2 text-ink-3">
                    <GraduationCap size={14} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-medium leading-snug">{t(e.t)}</p>
                    <p className="mt-0.5 text-[12px] text-ink-3">{e.s}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[11.5px] text-ink-3">{e.p}</span>
                </li>
              ))}
            </ol>
          </Panel>

          <Panel label={t(b.certs.label)} className="lg:col-span-5">
            <ul className="divide-y divide-line">
              {b.certs.items.map((c) => {
                const wip = c.p.en === "In progress";
                return (
                  <li key={c.t}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
                    >
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded border border-line text-ink-3">
                        <Award size={13} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] font-medium leading-snug">{c.t}</span>
                        <span className="mt-0.5 block text-[11.5px] text-ink-3">{c.s}</span>
                      </span>
                      <span
                        className={cn(
                          "shrink-0 font-mono text-[11.5px] uppercase tracking-[0.08em]",
                          wip ? "text-accent" : "text-ink-3",
                        )}
                      >
                        {t(c.p)}
                      </span>
                      <ArrowUpRight
                        size={12}
                        aria-hidden
                        className="mt-1 shrink-0 text-ink-3 opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Panel>

          <Panel label={`${t(b.community.label)} · JUNIA Alumni`} className="lg:col-span-6">
            <ul className="space-y-4">
              {b.community.items.map((c, i) => {
                const Icon = i === 0 ? Users : Megaphone;
                return (
                  <li key={c.p.en} className="flex gap-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-surface-2 text-ink-3">
                      <Icon size={14} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[14px] font-medium">{t(c.t)}</p>
                      <p className="font-mono text-[11.5px] text-ink-3">{t(c.p)}</p>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-2">{t(c.d)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Panel>

          <Panel label={t(b.languages.label)} className="lg:col-span-6">
            <ul className="space-y-5">
              {b.languages.items.map((l) => {
                const native = l.lvl === 6;
                return (
                  <li key={l.t.en}>
                    <div className="mb-2 flex items-baseline justify-between gap-4">
                      <span className="text-[14px] font-medium">{t(l.t)}</span>
                      <span className="text-[11.5px] text-ink-3">{t(l.d)}</span>
                    </div>
                    <div className="flex gap-1" role="img" aria-label={t(l.d)}>
                      {CEFR.map((step, i) => (
                        <span
                          key={step}
                          className={cn(
                            "h-1 flex-1 rounded-full",
                            i < l.lvl ? (native ? "bg-ink/60" : "bg-accent") : "bg-line",
                          )}
                        />
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Panel>
        </div>
      </div>
    </section>
  );
}
