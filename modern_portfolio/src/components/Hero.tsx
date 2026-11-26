"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { ArrowUpRight, Mail } from "lucide-react";
import { hero, person, ui } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Typewriter from "./Typewriter";
import CvMenu from "./CvMenu";

const social = [
  { href: person.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: person.github, label: "GitHub", Icon: GithubIcon },
  { href: `mailto:${person.email}`, label: "Email", Icon: MailIcon },
];

function MailIcon({ size = 18 }: { size?: number }) {
  return <Mail size={size} />;
}

export default function Hero() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const rise = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="grid items-center gap-10 pb-12 pt-24 md:pt-28 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-16 lg:pb-14 lg:pt-24">
          <div className="min-w-0">
            <motion.p
              {...rise(0)}
              className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-3 pr-3.5 text-[12.5px] leading-snug text-ink-2"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-leaf" />
              </span>
              {t(hero.available)}
            </motion.p>

            <motion.p
              {...rise(0.05)}
              className="mt-7 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.2em] text-ink-3"
            >
              <span className="h-px w-6 bg-line-strong" aria-hidden />
              {t(hero.eyebrow)}
            </motion.p>

            <motion.h1 {...rise(0.1)} className="display mt-4 text-[clamp(2.4rem,5.4vw,3.9rem)]">
              {t(hero.titleA)}
              <br />
              {t(hero.titleB)}
            </motion.h1>

            <motion.p {...rise(0.18)} className="mt-6 max-w-[33rem] text-[16.5px] leading-[1.7] text-ink-2 md:text-[17px]">
              {t(hero.lead)}
            </motion.p>

            <motion.p {...rise(0.24)} className="mt-5 flex min-h-6 flex-wrap items-baseline gap-x-2 font-mono text-[12.5px] text-ink-2">
              <span className="text-accent" aria-hidden>
                &rarr;
              </span>
              <span className="text-ink-3">{t(hero.building.label)}</span>
              <Typewriter words={hero.building.words[lang]} />
            </motion.p>

            <motion.div {...rise(0.3)} className="mt-8 flex flex-wrap items-center gap-2.5">
              <a
                href="#seshat"
                className="group inline-flex h-11 items-center gap-2 rounded-lg bg-ink px-5 text-[15px] font-medium text-bg transition-colors duration-200 hover:bg-ink/90"
              >
                {t(ui.cta.explore)}
                <ArrowUpRight
                  size={15}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <CvMenu />
            </motion.div>

            <motion.ul
              {...rise(0.36)}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-5"
              aria-label="Profiles"
            >
              {social.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[12px] text-ink-3 transition-colors hover:text-ink"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div {...rise(0.12)} className="relative mx-auto w-full max-w-[22rem] lg:max-w-[27rem]">
            <span className="plus -left-2 -top-2" aria-hidden />
            <span className="plus -right-2 -top-2" aria-hidden />
            <span className="plus -bottom-2 -left-2" aria-hidden />
            <span className="plus -bottom-2 -right-2" aria-hidden />

            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src="/images/portrait-hero.webp"
                alt={t(hero.portrait.alt)}
                width={1024}
                height={1536}
                priority
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 352px, 90vw"
                className="aspect-[4/5] w-full object-cover object-[center_26%]"
              />
              <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-3">
                <span className="text-ink-2">Portrait</span>
                <span>{t(hero.portrait.caption)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
