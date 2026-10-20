"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { experience, type Role } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import RoleArt from "./RoleArt";
import SectionHead from "./SectionHead";

function RoleCard({ r }: { r: Role }) {
  const { t } = useLang();
  const [open, setOpen] = useState(!!r.open);
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={cn("rounded-2xl border bg-surface p-5 transition-colors md:p-6", open ? "border-accent/50" : "border-line hover:border-accent/40")}>
      <div className="flex gap-4 md:gap-5">
        <RoleArt name={r.art} play={seen} className="h-16 w-16 md:h-20 md:w-20" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-xl font-medium tracking-tight md:text-2xl">{r.company}</h3>
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
                r.current ? "border-accent/50 bg-accent-soft text-accent" : "border-line text-dim",
              )}
            >
              {t(r.kind)}
            </span>
          </div>
          <p className="mt-1 text-dim">{t(r.role)}</p>
        </div>
        <div className="hidden text-right sm:block">
          <p className="display text-3xl leading-none md:text-4xl">{r.metric.v}</p>
          <p className="mt-1.5 max-w-[10rem] text-xs leading-snug text-dim">{t(r.metric.l)}</p>
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed">{t(r.summary)}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-4 max-w-2xl space-y-2.5">
              {r.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-dim">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                  {t(p)}
                </li>
              ))}
            </ul>
            {r.links && (
              <div className="mt-4 flex flex-wrap gap-4">
                {r.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                    {l.label} <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {r.stack.map((s) => (
            <span key={s} className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-dim">
              {s}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm transition hover:border-accent"
        >
          {open ? t(experience.less) : t(experience.more)}
          <ChevronDown size={15} className={cn("transition-transform", open && "rotate-180")} />
        </button>
      </div>
    </div>
  );
}

export default function Experience() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const grow = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section id="experience" className="border-y border-line bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead index="02" title={t(experience.title)} lead={t(experience.lead)} />

        <ol ref={ref} className="relative">
          <span className="absolute bottom-2 left-[7px] top-2 w-px bg-line md:left-[11.5rem]" aria-hidden />
          <motion.span className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-accent md:left-[11.5rem]" style={reduce ? undefined : { scaleY: grow }} aria-hidden />
          {experience.roles.map((r) => (
            <li key={r.company} className="relative pb-8 last:pb-0">
              <Reveal className="grid gap-4 pl-8 md:grid-cols-[11rem_1fr] md:gap-12 md:pl-0">
                <div className="md:pt-6 md:text-right">
                  {r.logo && (
                    <span className="mb-3 inline-flex h-12 items-center rounded-xl border border-line bg-white px-3 shadow-sm">
                      <Image src={r.logo} alt={r.company} width={140} height={48} style={{ height: "2rem", width: "auto" }} />
                    </span>
                  )}
                  <p className="block font-mono text-xs text-dim">{t(r.period)}</p>
                  <p className="mt-1 text-xs text-dim/80">{t(r.place)}</p>
                </div>
                <div className="relative md:pl-12">
                  <span
                    className={cn(
                      "absolute -left-8 top-7 h-[15px] w-[15px] rounded-full border-2 md:left-[-0.4rem]",
                      r.current ? "border-accent bg-accent shadow-[0_0_0_4px_var(--accent-soft)]" : "border-dim/50 bg-bg",
                    )}
                    aria-hidden
                  />
                  <RoleCard r={r} />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
