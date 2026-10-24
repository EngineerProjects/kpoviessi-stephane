"use client";

import { useState } from "react";
import { ArrowDownToLine, Check, Copy, Eye, Loader2, Mail } from "lucide-react";
import { contact, person } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { unlock } from "@/lib/game";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] outline-none transition placeholder:text-dim/60 focus:border-accent";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.company) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${person.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message, _subject: `[Portfolio] Message from ${data.name}`, _template: "table", _captcha: "false" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      unlock("message");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <section id="contact" className="border-t border-line bg-surface/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead index="07" title={t(contact.title)} lead={t(contact.lead)} />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-8">
            <div>
              <a href={`mailto:${person.email}`} className="display break-all text-3xl hover:text-accent sm:text-4xl">
                {person.email}
              </a>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm transition hover:border-accent">
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? t(contact.copied) : t(contact.copy)}
                </button>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm transition hover:border-accent">
                  <LinkedinIcon size={15} /> LinkedIn
                </a>
                <a href={person.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm transition hover:border-accent">
                  <GithubIcon size={15} /> GitHub
                </a>
              </div>
            </div>

            <div>
              <h3 className="eyebrow mb-4 text-ink">{t(contact.resumes.label)}</h3>
              <p className="-mt-2 mb-4 text-sm leading-relaxed text-dim">{t(contact.resumes.hint)}</p>
              <ul className="divide-y divide-line border-y border-line">
                {contact.resumes.items.map((r) => (
                  <li key={r.en} className="flex flex-col items-start justify-between gap-3 py-3.5 sm:flex-row sm:items-center sm:gap-4">
                    <div className="min-w-0">
                      <p className="font-medium leading-snug">{t(r.name)}</p>
                      <p className="text-xs text-dim">{t(r.tag)}</p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      {(["en", "fr"] as const).map((l) => (
                        <div key={l} role="group" aria-label={`${t(r.name)} · ${l.toUpperCase()}`} className="inline-flex items-center rounded-full border border-line font-mono text-xs">
                          <a
                            href={r[l]}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${t(contact.resumes.view)} ${t(r.name)} · ${l.toUpperCase()} (${t(contact.resumes.newTab)})`}
                            title={`${t(contact.resumes.view)} · ${t(contact.resumes.newTab)}`}
                            onClick={() => unlock("cv")}
                            className="inline-flex min-h-10 items-center gap-1.5 rounded-l-full pl-3 pr-2 transition hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                          >
                            <Eye size={14} aria-hidden="true" /> {l.toUpperCase()}
                          </a>
                          <a
                            href={r[l]}
                            download
                            aria-label={`${t(contact.resumes.download)} ${t(r.name)} · ${l.toUpperCase()}`}
                            title={`${t(contact.resumes.download)} · PDF ${l.toUpperCase()}`}
                            onClick={() => unlock("cv")}
                            className="grid h-10 w-10 place-items-center rounded-r-full border-l border-line transition hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                          >
                            <ArrowDownToLine size={15} aria-hidden="true" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="space-y-4 rounded-2xl border border-line bg-surface p-6 md:p-8">
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow mb-2 block">{t(contact.form.name)}</span>
                  <input required name="name" autoComplete="name" className={field} />
                </label>
                <label className="block">
                  <span className="eyebrow mb-2 block">{t(contact.form.email)}</span>
                  <input required type="email" name="email" autoComplete="email" className={field} />
                </label>
              </div>
              <label className="block">
                <span className="eyebrow mb-2 block">{t(contact.form.message)}</span>
                <textarea required name="message" rows={6} className={field} />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Mail size={16} />}
                {status === "sending" ? t(contact.form.sending) : t(contact.form.send)}
              </button>
              <p role="status" aria-live="polite" className={`min-h-5 text-sm ${status === "error" ? "text-red-500" : "text-dim"}`}>
                {status === "sent" && t(contact.form.sent)}
                {status === "error" && t(contact.form.error)}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
