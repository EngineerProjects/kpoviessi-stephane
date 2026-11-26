"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { experience, type Role } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function initials(company: string) {
  return company
    .split(/\s+/)
    .filter((w) => /^[A-Za-zÀ-ÿ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function RoleRow({ r, open, onToggle }: { r: Role; open: boolean; onToggle: () => void }) {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const id = `experience-details-${r.company.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

  return (
    <article className="grid gap-5 py-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10">
      <div>
        {r.logo ? (
          <span className="inline-flex h-10 items-center rounded-md border border-line bg-surface px-3">
            <Image
              src={r.logo}
              alt={r.company}
              width={120}
              height={40}
              style={{ height: "1.15rem", width: "auto" }}
            />
          </span>
        ) : (
          <span className="grid h-10 w-10 place-items-center rounded-md border border-line bg-surface font-mono text-[11.5px] text-ink-2">
            {initials(r.company)}
          </span>
        )}
        <p className="mt-3 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-2">{t(r.period)}</p>
        <p className="mt-1 text-[12px] leading-snug text-ink-3">{t(r.place)}</p>
        <p className="mt-4 font-mono text-[16.5px] leading-none text-ink">{r.metric.v}</p>
        <p className="mt-1.5 max-w-[11rem] text-[11.5px] leading-snug text-ink-3">{t(r.metric.l)}</p>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <h3 className="text-[17px] font-medium tracking-tight">{t(r.role)}</h3>
          <span className="text-[14.5px] text-ink-2">· {r.company}</span>
          <span
            className={cn(
              "ml-0.5 rounded border px-1.5 py-0.5 font-mono text-[11.5px] uppercase tracking-[0.1em]",
              r.current ? "border-accent/40 bg-accent-soft text-accent" : "border-line text-ink-3",
            )}
          >
            {t(r.kind)}
          </span>
        </div>

        <p className="mt-3 max-w-[46rem] text-[14.5px] leading-relaxed text-ink-2">{t(r.summary)}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={id}
              role="region"
              aria-label={`${t(r.role)} · ${r.company}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-4 max-w-[46rem] space-y-2.5">
                {r.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-ink-2">
                    <span className="mt-[0.55rem] h-px w-2.5 shrink-0 bg-accent" aria-hidden />
                    {t(p)}
                  </li>
                ))}
              </ul>
              {r.links && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {r.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11.5px] text-ink-3 transition-colors hover:text-accent"
                    >
                      {l.label} <ArrowUpRight size={11} aria-hidden />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <ul className="flex flex-wrap gap-1.5">
            {r.stack.map((s) => (
              <li key={s} className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11.5px] text-ink-2">
                {s}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={id}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
          >
            {open ? t(experience.less) : t(experience.more)}
            <ChevronDown size={12} aria-hidden className={cn("transition-transform duration-200", open && "rotate-180")} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const listRef = useRef<HTMLOListElement>(null);

  // Opens each role as it reaches the middle of the viewport, one after another while scrolling.
  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof IntersectionObserver === "undefined") return;
    const rows = Array.from(list.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        const index = rows.indexOf(hit.target as HTMLElement);
        if (index < 0) return;
        setOpen((prev) => (prev === index ? prev : index));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead index="02" title={t(experience.title)} lead={t(experience.lead)} />

        <ol ref={listRef} className="divide-y divide-line border-t border-line">
          {experience.roles.map((r, i) => (
            <li key={`${r.company}-${r.period.en}-${r.role.en}`}>
              <Reveal>
                <RoleRow r={r} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
