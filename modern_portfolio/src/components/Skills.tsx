"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Cloud, Database, Eye, Server, type LucideIcon } from "lucide-react";
import { skills } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { unlock } from "@/lib/game";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const icons: Record<string, LucideIcon> = { bot: Bot, server: Server, database: Database, eye: Eye, cloud: Cloud };

export default function Skills() {
  const { t } = useLang();
  const [gi, setGi] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const seen = useRef(new Set<string>());

  const group = skills.groups[gi];
  const skill = group.items.find((i) => i.n === picked) ?? group.items[0];

  function pick(name: string) {
    setPicked(name);
    seen.current.add(name);
    if (seen.current.size >= 5) unlock("inspect");
  }

  return (
    <section id="skills" className="border-y border-line bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead index="04" title={t(skills.title)} lead={t(skills.lead)} />

        <Reveal className="grid gap-4 lg:grid-cols-[18rem_1fr]">
          {/* Domains */}
          <div role="tablist" aria-label={t(skills.title)} className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
            {skills.groups.map((g, i) => {
              const Icon = icons[g.icon];
              const active = i === gi;
              return (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => {
                    setGi(i);
                    setPicked(null);
                  }}
                  className={cn(
                    "group relative flex shrink-0 items-center gap-3 rounded-2xl border p-3.5 text-left transition lg:p-4",
                    active ? "border-accent bg-surface shadow-sm" : "border-line hover:border-accent/50",
                  )}
                >
                  {active && <motion.span layoutId="skill-tab" className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-accent" />}
                  <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl transition", active ? "bg-accent text-accent-ink" : "bg-bg text-dim group-hover:text-ink")}>
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block whitespace-nowrap text-[15px] font-medium leading-tight lg:whitespace-normal">{t(g.name)}</span>
                    <span className="mt-0.5 block font-mono text-[11px] text-dim">
                      {g.items.length} {t(skills.skills)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skills of the selected domain */}
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div key={group.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
                <p className="display text-3xl md:text-4xl">{t(group.name)}</p>
                <p className="mt-1 text-dim">{t(group.tagline)}</p>

                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {group.items.map((s, i) => {
                    const on = skill.n === s.n;
                    return (
                      <motion.li key={s.n} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }}>
                        <button
                          type="button"
                          aria-pressed={on}
                          onClick={() => pick(s.n)}
                          className={cn(
                            "relative rounded-full border px-4 py-2 text-sm transition",
                            on ? "border-accent bg-accent text-accent-ink" : "border-line bg-bg hover:-translate-y-0.5 hover:border-accent",
                          )}
                        >
                          {s.n}
                          {s.used && !on && <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-leaf ring-2 ring-surface" aria-hidden />}
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-8 min-h-28 rounded-xl border border-dashed border-line bg-bg/60 p-5" aria-live="polite">
                  <AnimatePresence mode="wait">
                    {skill ? (
                      <motion.div key={skill.n} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
                        <p className="eyebrow mb-3">
                          <span className="text-ink">{skill.n}</span> · {t(skills.usedIn)}
                        </p>
                        {skill.used ? (
                          <ul className="flex flex-wrap gap-2">
                            {skill.used.map((u) => (
                              <li key={u} className="rounded-lg bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
                                {u}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-dim">{t(skills.none)}</p>
                        )}
                      </motion.div>
                    ) : (
                      <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-full items-center gap-2 pt-2 text-sm text-dim">
                        <span className="h-2 w-2 rounded-full bg-leaf" /> {t(skills.pick)}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
