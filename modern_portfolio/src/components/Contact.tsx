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
  "w-full rounded-md border border-line bg-bg px-3 py-2.5 text-[14.5px] text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-ink/35";

const ghost =
  "inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 font-mono text-[11.5px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink";

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
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `[Portfolio] Message from ${data.name}`,
          _template: "table",
          _captcha: "false",
        }),
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
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead index="07" title={t(contact.title)} lead={t(contact.lead)} />

        <div className="grid gap-3 lg:grid-cols-[1fr_1.05fr]">
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-6 rounded-xl border border-line bg-surface p-5 md:p-6">
              <div>
                <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3">Email</p>
                <a
                  href={`mailto:${person.email}`}
                  className="mt-2 block break-all text-[18px] font-medium tracking-tight text-ink transition-colors hover:text-accent md:text-[20px]"
                >
                  {person.email}
                </a>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <button type="button" onClick={copy} className={ghost}>
                    {copied ? <Check size={12} aria-hidden /> : <Copy size={12} aria-hidden />}
                    {copied ? t(contact.copied) : t(contact.copy)}
                  </button>
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={ghost}>
                    <LinkedinIcon size={12} /> LinkedIn
                  </a>
                  <a href={person.github} target="_blank" rel="noopener noreferrer" className={ghost}>
                    <GithubIcon size={12} /> GitHub
                  </a>
                </div>
              </div>

              <div className="border-t border-line pt-5">
                <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3">{t(contact.resumes.label)}</p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-3">{t(contact.resumes.hint)}</p>
                <ul className="mt-3 divide-y divide-line">
                  {contact.resumes.items.map((r) => (
                    <li key={r.en} className="flex flex-col items-start justify-between gap-2 py-3 first:pt-0 sm:flex-row sm:items-center">
                      <div className="min-w-0">
                        <p className="text-[13px] font-medium leading-snug">{t(r.name)}</p>
                        <p className="text-[11.5px] text-ink-3">{t(r.tag)}</p>
                      </div>
                      <div className="flex shrink-0 gap-1.5">
                        {(["en", "fr"] as const).map((l) => (
                          <div
                            key={l}
                            role="group"
                            aria-label={`${t(r.name)} · ${l.toUpperCase()}`}
                            className="inline-flex items-center rounded-md border border-line font-mono text-[11.5px]"
                          >
                            <a
                              href={r[l]}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${t(contact.resumes.view)} ${t(r.name)} · ${l.toUpperCase()} (${t(contact.resumes.newTab)})`}
                              title={`${t(contact.resumes.view)} · ${t(contact.resumes.newTab)}`}
                              onClick={() => unlock("cv")}
                              className="inline-flex min-h-8 items-center gap-1 rounded-l-md pl-2 pr-1.5 transition-colors hover:bg-surface-2 hover:text-accent"
                            >
                              <Eye size={12} aria-hidden /> {l.toUpperCase()}
                            </a>
                            <a
                              href={r[l]}
                              download
                              aria-label={`${t(contact.resumes.download)} ${t(r.name)} · ${l.toUpperCase()}`}
                              title={`${t(contact.resumes.download)} · PDF ${l.toUpperCase()}`}
                              onClick={() => unlock("cv")}
                              className="grid h-8 w-8 place-items-center border-l border-line transition-colors hover:bg-surface-2 hover:text-accent"
                            >
                              <ArrowDownToLine size={13} aria-hidden />
                            </a>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="h-full">
            <form onSubmit={submit} className="flex h-full flex-col gap-4 rounded-xl border border-line bg-surface p-5 md:p-6">
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-3">
                    {t(contact.form.name)}
                  </span>
                  <input required name="name" autoComplete="name" className={field} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-3">
                    {t(contact.form.email)}
                  </span>
                  <input required type="email" name="email" autoComplete="email" className={field} />
                </label>
              </div>
              <label className="flex flex-1 flex-col">
                <span className="mb-1.5 block font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-3">
                  {t(contact.form.message)}
                </span>
                <textarea required name="message" rows={7} className={`${field} flex-1 resize-none`} />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-[14px] font-medium text-bg transition-colors hover:bg-ink/90 disabled:opacity-60"
              >
                {status === "sending" ? <Loader2 size={14} className="animate-spin" /> : <Mail size={14} />}
                {status === "sending" ? t(contact.form.sending) : t(contact.form.send)}
              </button>
              <p role="status" aria-live="polite" className={`min-h-4 text-[12.5px] ${status === "error" ? "text-red-500" : "text-ink-3"}`}>
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
