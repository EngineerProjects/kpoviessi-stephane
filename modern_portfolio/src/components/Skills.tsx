"use client";

import { useRef, useState } from "react";
import {
  AppWindow,
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  Layers,
  Server,
  type LucideIcon,
} from "lucide-react";
import { skills, type Skill } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { unlock } from "@/lib/game";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import TechCloud from "./TechCloud";
import TechIcon from "./TechIcon";

const icons: Record<string, LucideIcon> = {
  bot: Bot,
  brain: BrainCircuit,
  database: Database,
  server: Server,
  app: AppWindow,
  cloud: Cloud,
  layers: Layers,
};

export default function Skills() {
  const { t } = useLang();
  const [picked, setPicked] = useState<Skill | null>(null);
  const seen = useRef(new Set<string>());

  function pick(s: Skill) {
    setPicked(s);
    seen.current.add(s.n);
    if (seen.current.size >= 5) unlock("inspect");
  }

  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead index="04" title={t(skills.title)} lead={t(skills.lead)} />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((g, gi) => {
            const Icon = icons[g.icon] ?? Layers;
            return (
              <Reveal key={g.id} delay={gi * 0.03} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-line-strong">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-md border border-line bg-surface-2 text-ink-2">
                      <Icon size={16} aria-hidden />
                    </span>
                    <span className="font-mono text-[11.5px] text-ink-3">
                      {String(g.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[15px] font-medium leading-tight tracking-tight">{t(g.name)}</h3>
                  <p className="mt-1 text-[12px] leading-snug text-ink-3">{t(g.tagline)}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {g.items.map((s) => {
                      const on = picked?.n === s.n;
                      return (
                        <li key={s.n}>
                          <button
                            type="button"
                            aria-pressed={on}
                            onClick={() => pick(s)}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-md border px-1.5 py-1 font-mono text-[11.5px] transition-colors duration-200",
                              on
                                ? "border-accent bg-accent-soft text-accent"
                                : "border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink",
                            )}
                          >
                            <TechIcon name={s.n} />
                            {s.n}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-3 flex min-h-[3.25rem] items-center rounded-xl border border-dashed border-line bg-surface/60 px-5 py-3" aria-live="polite">
          {picked ? (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-accent">
                <TechIcon name={picked.n} size={12} />
                {picked.n}
              </span>
              <span className="h-3 w-px bg-line" aria-hidden />
              <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-3">{t(skills.usedIn)}</span>
              {picked.used?.length ? (
                picked.used.map((u) => (
                  <span key={u} className="rounded border border-line bg-surface px-1.5 py-0.5 text-[12px] text-ink-2">
                    {u}
                  </span>
                ))
              ) : (
                <span className="text-[12px] text-ink-3">{t(skills.none)}</span>
              )}
            </div>
          ) : (
            <p className="flex items-center gap-2 text-[12px] text-ink-3">
              <span className="h-1 w-1 rounded-full bg-leaf" aria-hidden />
              {t(skills.pick)}
            </p>
          )}
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-6">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3">Toolkit</p>
          <TechCloud />
        </Reveal>
      </div>
    </section>
  );
}
