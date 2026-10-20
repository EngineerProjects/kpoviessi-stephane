"use client";

import { skills } from "@/data/site";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="border-y border-line bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead index="04" title={t(skills.title)} lead={t(skills.lead)} />
        <div className="divide-y divide-line border-y border-line">
          {skills.groups.map((g) => (
            <Reveal key={g.items[0]} className="grid gap-4 py-6 md:grid-cols-[14rem_1fr] md:gap-10">
              <h3 className="eyebrow pt-1.5 text-ink">{t(g.name)}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-sm transition hover:border-accent">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
