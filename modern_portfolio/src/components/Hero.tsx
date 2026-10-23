"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { ArrowRight, Mail } from "lucide-react";
import { hero, person, ui } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { GithubIcon, LinkedinIcon } from "./Icons";
import CountUp from "./CountUp";
import Typewriter from "./Typewriter";
import TechCloud from "./TechCloud";
import CvMenu from "./CvMenu";

const social = [
  { href: person.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: person.github, label: "GitHub", Icon: GithubIcon },
  { href: `mailto:${person.email}`, label: "Email", Icon: MailIcon },
];

function MailIcon() {
  return <Mail size={18} />;
}

export default function Hero() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const rise = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-x-clip">
      <div className="relative mx-auto grid max-w-6xl items-end gap-4 px-5 pt-24 md:px-8 lg:min-h-[44rem] lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:pt-20">
        {/* Social rail, down the left edge. */}
        <ul className="absolute left-2 top-1/2 hidden -translate-y-1/2 flex-col gap-4 2xl:flex 2xl:-left-12" aria-label="Social">
          {social.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center text-dim transition hover:text-accent">
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        {/* Cut-out portrait standing on the stats row, with a warm arch behind. */}
        <motion.div {...rise(0.15)} className="relative order-2 mx-auto w-full max-w-sm self-end lg:order-1 lg:-ml-10 lg:w-[calc(100%+2.5rem)] lg:max-w-none">
          <div className="absolute inset-x-[4%] bottom-0 top-[6%] rounded-t-[999px] bg-gradient-to-b from-sun/55 via-sun/25 to-accent/5" aria-hidden />
          <div className="absolute -left-6 bottom-[16%] h-44 w-44 rounded-full bg-leaf/25 blur-3xl" aria-hidden />
          <Image
            src="/images/stephane-cutout-v2.webp"
            alt="Stéphane Kpoviessi"
            width={745}
            height={1152}
            priority
            sizes="(min-width:1024px) 34rem, 24rem"
            className="relative mx-auto h-auto w-full max-w-[28rem] lg:max-w-none drop-shadow-[0_24px_30px_rgba(120,70,10,0.28)]"
          />
        </motion.div>

        <div className="relative order-1 flex min-w-0 flex-col gap-10 pb-8 lg:order-2 lg:justify-between lg:gap-8 lg:self-stretch lg:pb-6 lg:pt-2">
          <div>
          <motion.p {...rise(0)} className="mb-5 flex w-fit max-w-full items-center gap-2.5 rounded-2xl border border-line bg-surface px-3.5 py-1.5 text-xs text-dim sm:rounded-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
            </span>
            {t(hero.available)}
          </motion.p>

          <motion.p {...rise(0.05)} className="eyebrow mb-5">{t(hero.eyebrow)}</motion.p>

          <motion.h1 {...rise(0.1)} className="display text-[2.75rem] sm:text-6xl lg:text-[4.1rem]">
            {t(hero.titleA)} <em className="text-accent">{t(hero.titleB)}</em>
          </motion.h1>

          <motion.p {...rise(0.2)} className="mt-5 max-w-xl text-lg leading-relaxed text-dim">
            {t(hero.lead)}
          </motion.p>

          <motion.p {...rise(0.25)} className="mt-4 min-h-7 font-mono text-sm text-ink">
            <span className="text-leaf">$</span> <span className="text-dim">{t(hero.building.label)}:</span>{" "}
            <Typewriter words={hero.building.words[lang]} />
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-ink shadow-[0_8px_24px_-8px_var(--accent)] transition hover:-translate-y-0.5">
              {t(ui.cta.contact)}
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <CvMenu />
            <span className="ml-1 flex items-center gap-1 2xl:hidden">
              {social.map(({ href, label, Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center text-dim transition hover:text-accent">
                  <Icon />
                </a>
              ))}
            </span>
          </motion.div>
          </div>

          <motion.div {...rise(0.4)}>
            <TechCloud />
          </motion.div>
        </div>
      </div>

      <dl className="relative mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-y border-line bg-line md:grid-cols-4">
        {hero.stats.map((s) => (
          <div key={s.l.en} className="bg-bg px-5 py-7 md:px-8">
            <dt className="display text-4xl md:text-5xl">
              {s.prefix}<CountUp to={s.n} suffix={s.suffix} />
            </dt>
            <dd className="mt-2 text-sm text-dim">{t(s.l)}</dd>
          </div>
        ))}
      </dl>
      <p className="mx-auto max-w-6xl px-5 pt-4 text-xs leading-relaxed text-dim md:px-8">{t(hero.measurementNote)}</p>
    </section>
  );
}
