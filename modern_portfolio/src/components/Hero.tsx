"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { hero, person, ui } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { unlock } from "@/lib/game";
import { GithubIcon, LinkedinIcon } from "./Icons";
import CountUp from "./CountUp";
import Typewriter from "./Typewriter";

const chipPos = [
  "left-[14%] top-[24%]",
  "right-[8%] top-[34%]",
  "left-[6%] top-[56%]",
  "right-[6%] top-[70%]",
  "left-[34%] top-[12%]",
];

export default function Hero() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const rise = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="dots relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-leaf/15 blur-[100px]" aria-hidden />

      <div className="relative lg:flex lg:min-h-[50rem] lg:items-center">
        {/* Desktop portrait: bleeds to the right edge of the screen, full height. */}
        <motion.div {...rise(0.2)} className="fade-left pointer-events-none absolute inset-y-0 right-0 hidden w-[34rem] lg:block xl:w-[36rem]">
          <Image src="/images/stephane.jpg" alt="Stéphane Kpoviessi" fill priority sizes="36rem" className="object-cover object-top" />
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34rem] lg:block xl:w-[36rem]" aria-hidden>
          {hero.chips.map((c, i) => (
            <span
              key={c}
              className={`float absolute ${chipPos[i]} rounded-full border border-line bg-surface/95 px-3 py-1.5 font-mono text-xs shadow-md backdrop-blur`}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 pt-28 md:px-8 md:pt-32 lg:pb-20">
          <div className="min-w-0 lg:max-w-[40rem]">
            <motion.p {...rise(0)} className="mb-7 flex w-fit max-w-full items-center gap-2.5 rounded-2xl border border-line bg-surface px-3.5 py-1.5 text-xs text-dim sm:rounded-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
              </span>
              {t(hero.available)}
            </motion.p>

            <motion.p {...rise(0.05)} className="eyebrow mb-5">{t(hero.eyebrow)}</motion.p>

            <motion.h1 {...rise(0.1)} className="display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4rem]">
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
        </div>

        {/* Mobile portrait: under the text, fading in from the top. */}
        <div className="fade-top relative mx-auto aspect-[2/3] w-full max-w-sm lg:hidden">
          <Image src="/images/stephane.jpg" alt="" fill sizes="24rem" className="object-cover object-top" />
        </div>
      </div>

      <dl className="relative mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-y border-line bg-line md:grid-cols-4">
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
