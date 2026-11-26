"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { person, seshat } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { unlock } from "@/lib/game";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Seshat() {
  const { t } = useLang();

  return (
    <section id="seshat" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead index="01" kicker={t(seshat.kicker)} title={t(seshat.title)} lead={t(seshat.lead)} />

        <div className="grid gap-3 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src="/images/portrait-seshat.webp"
                alt={t(seshat.founder.alt)}
                width={820}
                height={1230}
                sizes="(min-width: 1024px) 380px, 90vw"
                className="aspect-[4/5] w-full object-cover object-[center_24%]"
              />
              <figcaption className="flex flex-1 flex-col justify-between gap-4 border-t border-line px-5 py-4">
                <div>
                  <p className="text-[15px] font-medium tracking-tight">{seshat.founder.name}</p>
                  <p className="mt-1 font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent">{t(seshat.founder.role)}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{t(seshat.founder.caption)}</p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11.5px] text-ink-3">
                  <a
                    href={person.seshat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-ink"
                  >
                    seshat-ai.com <ArrowUpRight size={11} aria-hidden />
                  </a>
                  <a
                    href={person.org}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => unlock("repo")}
                    className="inline-flex items-center gap-1 transition-colors hover:text-ink"
                  >
                    KPO-Tech <ArrowUpRight size={11} aria-hidden />
                  </a>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-9">
            <div className="flex h-full flex-col rounded-xl border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3">
                <span>{t(seshat.kicker)}</span>
                <span>01 — 0{seshat.products.length}</span>
              </div>
              <ul className="divide-y divide-line">
                {seshat.products.map((p, i) => {
                  const body = (
                    <div className="group grid gap-3 px-5 py-5 sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:items-start sm:gap-5">
                      <div>
                        <span className="font-mono text-[11.5px] text-ink-3">0{i + 1}</span>
                        <p className="mt-1 text-[15px] font-medium leading-tight tracking-tight">{p.name}</p>
                        <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-3">
                          <span
                            className={cn("h-1.5 w-1.5 rounded-full", p.tone === "live" ? "bg-leaf" : "bg-accent")}
                            aria-hidden
                          />
                          {t(p.status)}
                        </span>
                      </div>
                      <p className="text-[14px] leading-relaxed text-ink-2">{t(p.text)}</p>
                      {p.href ? (
                        <ArrowUpRight
                          size={15}
                          aria-hidden
                          className="hidden text-ink-3 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:block"
                        />
                      ) : (
                        <span aria-hidden />
                      )}
                    </div>
                  );
                  return (
                    <li key={p.name}>
                      {p.href ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => unlock("repo")}
                          className="block transition-colors hover:bg-surface-2/60"
                          aria-label={`${p.name} — ${t(p.cta)}`}
                        >
                          {body}
                        </a>
                      ) : (
                        body
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-3">
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-5 py-3">
              <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3">
                {t(seshat.architecture.label)}
              </p>
              <p className="max-w-none text-left font-mono text-[11.5px] leading-relaxed text-ink-3/80 md:max-w-[32rem] md:text-right">
                {t(seshat.architecture.note)}
              </p>
            </div>
            <div className="grid divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0">
              {seshat.architecture.layers.map((layer) => (
                <div key={layer.label} className="p-5">
                  <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-accent">{layer.label}</p>
                  <ul className="mt-3 space-y-1.5">
                    {layer.items.map((item) => (
                      <li key={item} className="font-mono text-[12px] leading-relaxed text-ink-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {seshat.ecosystem.items.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.04} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-5">
                <p className="text-[15px] font-medium leading-tight tracking-tight">{e.name}</p>
                <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3">{e.tag}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-2">
                  <span
                    className={cn("h-1.5 w-1.5 shrink-0 rounded-full", e.tone === "live" ? "bg-leaf" : "bg-accent")}
                    aria-hidden
                  />
                  {t(e.status)}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-2">{t(e.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {seshat.points.map((p, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border border-line bg-surface p-5 text-[14px] leading-relaxed text-ink-2"
            >
              <span className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent" aria-hidden />
              {t(p)}
            </li>
          ))}
        </ul>

        <Reveal className="mt-3 flex flex-col gap-5 rounded-xl border border-line bg-surface p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
            {seshat.stack.map((s) => (
              <li key={s} className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11.5px] text-ink-2">
                {s}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            <a
              href={person.seshat}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center gap-2 rounded-lg bg-ink px-4 text-[14px] font-medium text-bg transition-colors hover:bg-ink/90"
            >
              {t(seshat.links.site)}
              <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={person.org}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => unlock("repo")}
              className="group inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 text-[14px] font-medium text-ink transition-colors hover:border-line-strong"
            >
              {t(seshat.links.org)}
              <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
