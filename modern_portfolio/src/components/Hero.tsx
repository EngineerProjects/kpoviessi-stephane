"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { hero, person, ui } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { unlock } from "@/lib/game";
import { GithubIcon, LinkedinIcon } from "./Icons";
import CountUp from "./CountUp";
import Typewriter from "./Typewriter";

const chipPos = [
  "left-[-1.5rem] top-[14%]",
  "right-[-1.25rem] top-[24%]",
  "left-[-2.25rem] bottom-[26%]",
  "right-[-1.75rem] bottom-[14%]",
  "left-[16%] top-[-1rem]",
];

export default function Hero() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const rise = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  });

  // Photo tilts toward the pointer.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 14 });
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="top" className="dots relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-sun/25 blur-[110px]" aria-hidden />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-leaf/15 blur-[100px]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="min-w-0">
          <motion.p {...rise(0)} className="mb-7 flex w-fit max-w-full items-center gap-2.5 rounded-2xl border border-line bg-surface px-3.5 py-1.5 text-xs text-dim sm:rounded-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
            </span>
            {t(hero.available)}
          </motion.p>

          <motion.p {...rise(0.05)} className="eyebrow mb-5">{t(hero.eyebrow)}</motion.p>

          <motion.h1 {...rise(0.1)} className="display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4.5rem]">
            {t(hero.titleA)} <em className="text-accent">{t(hero.titleB)}</em>
          </motion.h1>

          <motion.p {...rise(0.2)} className="mt-8 max-w-2xl text-lg leading-relaxed text-dim">
            {t(hero.lead)}
          </motion.p>

          <motion.p {...rise(0.25)} className="mt-6 min-h-7 font-mono text-sm text-ink">
            <span className="text-leaf">$</span> <span className="text-dim">{t(hero.building.label)}:</span>{" "}
            <Typewriter words={hero.building.words[lang]} />
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink shadow-[0_8px_24px_-8px_var(--accent)] transition hover:-translate-y-0.5">
              {t(ui.cta.contact)}
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={lang === "fr" ? "/cv/cv-genai-engineer-fr.pdf" : "/cv/cv-genai-engineer-en.pdf"}
              download
              onClick={() => unlock("cv")}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium transition hover:border-accent"
            >
              <ArrowDownToLine size={16} />
              {t(ui.cta.cv)}
            </a>
            <span className="mx-1 hidden h-6 w-px bg-line sm:block" />
            <a href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-dim transition hover:border-accent hover:text-ink">
              <GithubIcon />
            </a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-dim transition hover:border-accent hover:text-ink">
              <LinkedinIcon />
            </a>
          </motion.div>
        </div>

        <motion.div {...rise(0.25)} className="mx-auto w-full max-w-[19rem] lg:max-w-none" style={{ perspective: 1000 }}>
          <motion.div onPointerMove={onMove} onPointerLeave={onLeave} style={reduce ? undefined : { rotateX: rx, rotateY: ry }} className="relative">
            <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[2rem] border border-line" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.6rem] bg-surface shadow-[0_30px_60px_-30px_rgba(120,70,10,0.5)]">
              <Image src="/images/stephane.jpg" alt="Stéphane Kpoviessi" fill priority sizes="(min-width:1024px) 26rem, 19rem" className="object-cover" style={{ objectPosition: "50% 22%" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {hero.chips.map((c, i) => (
              <span
                key={c}
                className={`float absolute ${chipPos[i]} rounded-full border border-line bg-surface/95 px-3 py-1.5 font-mono text-xs shadow-md backdrop-blur`}
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                {c}
              </span>
            ))}

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-line bg-surface px-4 py-2.5 shadow-sm">
              <p className="eyebrow">{t(person.location)}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <dl className="relative mx-auto mt-24 grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-y border-line bg-line md:mt-32 md:grid-cols-4">
        {hero.stats.map((s) => (
          <div key={s.l.en} className="bg-bg px-5 py-7 md:px-8">
            <dt className="display text-4xl md:text-5xl">
              <CountUp to={s.n} suffix={s.suffix} />
            </dt>
            <dd className="mt-2 text-sm text-dim">{t(s.l)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
