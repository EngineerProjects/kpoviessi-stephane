"use client";

import { ArrowUpRight } from "lucide-react";
import { highlights } from "@/data/site";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Highlights() {
  const { t } = useLang();

  return (
    <section aria-label="Highlights" className="mx-auto max-w-[1180px] px-5 pb-16 md:px-8 md:pb-20">
      <div className="grid gap-3 md:grid-cols-3">
        {highlights.items.map((c, i) => (
          <Reveal key={c.index} delay={i * 0.06} className="h-full">
            <a
              href={c.href}
              className="group flex h-full flex-col gap-5 rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3">
                  <span className="text-accent">{c.index}</span>
                  <span className="px-1.5 text-line-strong">/</span>
                  {t(c.label)}
                </span>
                <ArrowUpRight
                  size={15}
                  aria-hidden
                  className="shrink-0 text-ink-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </div>
              <div>
                <p className="text-[17px] font-medium tracking-tight text-ink">{t(c.title)}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{t(c.text)}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
