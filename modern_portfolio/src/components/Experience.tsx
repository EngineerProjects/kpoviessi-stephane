"use client";

import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/site";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="border-y border-line bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead index="02" title={t(experience.title)} lead={t(experience.lead)} />

        <ol className="relative">
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-[11.5rem]" aria-hidden />
          {experience.roles.map((r) => (
            <li key={r.company} className="relative pb-14 last:pb-0">
              <Reveal className="grid gap-4 pl-8 md:grid-cols-[11rem_1fr] md:gap-12 md:pl-0">
                <div className="md:text-right">
                  <p className="font-mono text-xs text-dim">{t(r.period)}</p>
                  <p className="mt-1 text-xs text-dim/80">{t(r.place)}</p>
                </div>
                <div className="relative md:pl-12">
                  <span
                    className={`absolute -left-8 top-1.5 h-[15px] w-[15px] rounded-full border-2 md:left-[-0.4rem] ${r.current ? "border-accent bg-accent" : "border-dim/50 bg-bg"}`}
                    aria-hidden
                  />
                  <h3 className="text-2xl font-medium tracking-tight">
                    {r.company}
                    <span className="ml-3 text-base font-normal text-dim">{t(r.role)}</span>
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed">{t(r.summary)}</p>
                  <ul className="mt-4 max-w-2xl space-y-2.5">
                    {r.points.map((p, i) => (
                      <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-dim">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                        {t(p)}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {r.stack.map((s) => (
                      <span key={s} className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-dim">
                        {s}
                      </span>
                    ))}
                    {r.links?.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="ml-1 inline-flex items-center gap-1 text-sm text-accent hover:underline">
                        {l.label} <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
