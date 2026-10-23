"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { journey } from "@/data/site";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Journey() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const grow = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead index="05" title={t(journey.title)} lead={t(journey.lead)} />

      <div className="relative">
        {/* Route line: horizontal on desktop, vertical on mobile. It fills as you scroll. */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-line md:inset-x-0 md:left-0 md:top-[11px] md:bottom-auto md:h-px md:w-auto" aria-hidden />
        <motion.div
          className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-accent md:hidden"
          style={reduce ? undefined : { scaleY: grow }}
          aria-hidden
        />
        <motion.div
          className="absolute inset-x-0 top-[11px] hidden h-px origin-left bg-accent md:block"
          style={reduce ? undefined : { scaleX: grow }}
          aria-hidden
        />

        <ol ref={ref} className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {journey.stops.map((s, i) => (
            <li key={s.city} className="relative pl-9 md:pl-0 md:pt-10">
              <Reveal delay={i * 0.1}>
                <span className="absolute left-0 top-0 grid h-6 w-6 place-items-center rounded-full border-2 border-accent bg-bg font-mono text-[10px] font-semibold text-accent">
                  {i + 1}
                </span>
                <p className="font-mono text-xs text-dim">{s.years}</p>
                <h3 className="display mt-2 text-3xl">{s.city}</h3>
                <p className="eyebrow mt-1">{t(s.country)}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-dim">{t(s.text)}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal className="mt-16 rounded-2xl border border-dashed border-line p-6 md:p-8">
        <p className="eyebrow mb-4 text-ink">{t(journey.quests.label)}</p>
        <ul className="flex flex-wrap gap-3">
          {journey.quests.items.map((q, i) => (
            <motion.li
              key={q.en}
              whileHover={{ y: -3, rotate: i % 2 ? 1.5 : -1.5 }}
              className="cursor-default rounded-full border border-line bg-surface px-4 py-2 text-sm transition-colors hover:border-accent hover:bg-accent-soft"
            >
              {t(q)}
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
