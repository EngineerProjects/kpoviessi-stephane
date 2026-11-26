"use client";

import { journey } from "@/data/site";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Journey() {
  const { t } = useLang();

  return (
    <section id="journey" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead index="05" title={t(journey.title)} lead={t(journey.lead)} />

        <div className="relative">
          <div className="absolute inset-x-0 top-[5px] hidden h-px bg-line md:block" aria-hidden />
          <div className="absolute bottom-2 left-[5px] top-2 w-px bg-line md:hidden" aria-hidden />

          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {journey.stops.map((s, i) => (
              <li key={s.city} className="relative pl-7 md:pl-0 md:pt-7">
                <Reveal delay={i * 0.06}>
                  <span
                    className="absolute left-0 top-0 h-[11px] w-[11px] rounded-full border-2 border-accent bg-bg"
                    aria-hidden
                  />
                  <p className="font-mono text-[11.5px] tracking-[0.1em] text-accent">{s.years}</p>
                  <h3 className="mt-2 text-[17px] font-medium tracking-tight">{s.city}</h3>
                  <p className="mt-0.5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-3">{t(s.country)}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{t(s.text)}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-12 rounded-xl border border-line bg-surface p-5 md:p-6">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3">{t(journey.quests.label)}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {journey.quests.items.map((q) => (
              <li
                key={q.en}
                className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11.5px] text-ink-2 transition-colors duration-200 hover:border-line-strong hover:text-ink"
              >
                {t(q)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
