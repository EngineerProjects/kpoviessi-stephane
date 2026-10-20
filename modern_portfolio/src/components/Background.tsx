"use client";

import { ArrowUpRight } from "lucide-react";
import { background as b } from "@/data/site";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function Card({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="h-full rounded-2xl border border-line bg-surface p-6 md:p-7">
      <h3 className="eyebrow mb-5 text-ink">{label}</h3>
      {children}
    </Reveal>
  );
}

export default function Background() {
  const { t } = useLang();
  return (
    <section id="background" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead index="06" title={t(b.title)} />
      <div className="grid gap-4 md:grid-cols-2">
        <Card label={t(b.education.label)}>
          <ul className="space-y-5">
            {b.education.items.map((e) => (
              <li key={e.s} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium leading-snug">{t(e.t)}</p>
                  <p className="mt-1 text-sm text-dim">{e.s}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-dim">{e.p}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card label={t(b.certs.label)}>
          <ul className="space-y-5">
            {b.certs.items.map((c) => (
              <li key={c.t} className="flex items-start justify-between gap-4">
                <div>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 font-medium leading-snug hover:text-accent">
                    {c.t} <ArrowUpRight size={13} className="opacity-0 transition group-hover:opacity-100" />
                  </a>
                  <p className="mt-1 text-sm text-dim">{c.s}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-dim">{t(c.p)}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card label={`${t(b.community.label)} · JUNIA Alumni`}>
          <ul className="space-y-5">
            {b.community.items.map((c) => (
              <li key={c.p.en}>
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium">{t(c.t)}</p>
                  <span className="shrink-0 font-mono text-xs text-dim">{t(c.p)}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-dim">{t(c.d)}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card label={t(b.languages.label)}>
          <ul className="space-y-4">
            {b.languages.items.map((l) => (
              <li key={l.t.en} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                <span className="font-medium">{t(l.t)}</span>
                <span className="text-sm text-dim">{t(l.d)}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
