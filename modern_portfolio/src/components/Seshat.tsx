"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { seshat } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { unlock } from "@/lib/game";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Seshat() {
  const { t } = useLang();
  return (
    <section id="seshat" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead index="01" kicker={t(seshat.kicker)} title={t(seshat.title)} lead={t(seshat.lead)} />

      <div className="grid gap-4 md:grid-cols-3">
        {seshat.products.map((p, i) => {
          const Tag = p.href ? "a" : "div";
          return (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <Tag
                {...(p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer", onClick: () => unlock("repo") } : {})}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition",
                  p.href && "hover:-translate-y-1 hover:border-accent",
                )}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-dim">
                    <span className={cn("mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle", p.tone === "live" ? "bg-leaf" : "bg-sun")} />
                    {t(p.status)}
                  </span>
                  {p.href && <ArrowUpRight size={18} className="text-dim transition group-hover:text-accent" />}
                </div>
                <h3 className="display text-3xl">{p.name}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-dim">{t(p.text)}</p>
                {p.href && <p className="mt-5 text-sm font-medium text-accent">{t(p.cta)}</p>}
              </Tag>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-4 grid gap-10 rounded-2xl border border-line bg-surface p-7 md:grid-cols-[1.3fr_1fr] md:p-10">
        <ul className="space-y-4">
          {seshat.points.map((p, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
              <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                <Check size={12} strokeWidth={3} />
              </span>
              {t(p)}
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-wrap gap-2">
            {seshat.stack.map((s) => (
              <span key={s} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-dim">
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://seshat-ai.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-85">
              {t(seshat.links.site)} <ArrowUpRight size={15} />
            </a>
            <a href="https://github.com/KPO-Tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition hover:border-accent">
              {t(seshat.links.org)} <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
