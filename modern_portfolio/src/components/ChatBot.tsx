"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Trash2, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { chat } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { unlock } from "@/lib/game";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const memoryKey = (lang: string) => `sk_chat_${lang}`;

export default function ChatBot() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const show = setTimeout(() => setBubble(true), 8000);
    return () => clearTimeout(show);
  }, []);
  useEffect(() => {
    if (!bubble) return;
    const hide = setTimeout(() => setBubble(false), 8000);
    return () => clearTimeout(hide);
  }, [bubble]);

  useEffect(() => {
    let saved: Message[] | null = null;
    try {
      const raw = localStorage.getItem(memoryKey(lang));
      if (raw) saved = JSON.parse(raw);
    } catch {}
    setMessages(saved?.length ? saved : [{ role: "assistant", content: chat.initial[lang] }]);
  }, [lang]);

  useEffect(() => {
    if (messages.length > 1) {
      try {
        localStorage.setItem(memoryKey(lang), JSON.stringify(messages));
      } catch {}
    }
  }, [messages, lang]);

  useEffect(() => {
    if (open) unlock("chat");
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  function clear() {
    setMessages([{ role: "assistant", content: chat.initial[lang] }]);
    try {
      localStorage.removeItem(memoryKey(lang));
    } catch {}
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, language: lang }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.content }]);
    } catch {
      setMessages([...next, { role: "assistant", content: t(chat.error) }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {bubble && !open && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            onClick={() => {
              setBubble(false);
              setOpen(true);
            }}
            className="fixed bottom-[4.75rem] right-4 z-40 max-w-[14rem] rounded-lg rounded-br-sm border border-line bg-surface px-3 py-2.5 text-left text-[12.5px] leading-snug text-ink-2 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.5)]"
          >
            {t(chat.notif)}
          </motion.button>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t(chat.close) : t(chat.open)}
        aria-expanded={open}
        className="fixed bottom-4 right-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink-2 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:border-line-strong hover:text-ink"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={t(chat.title)}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 bottom-[4.25rem] z-50 flex h-[min(32rem,calc(100dvh-7rem))] flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] sm:inset-x-auto sm:right-4 sm:w-[23rem]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <div>
                <p className="flex items-center gap-2 text-[14px] font-medium leading-tight">
                  {t(chat.title)}
                  <span className="h-1 w-1 rounded-full bg-leaf" aria-hidden />
                </p>
                <p className="mt-0.5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-3">{t(chat.sub)}</p>
              </div>
              <button
                type="button"
                onClick={clear}
                aria-label={t(chat.reset)}
                title={t(chat.reset)}
                className="grid h-7 w-7 place-items-center rounded-md text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <Trash2 size={13} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "prose-chat max-w-[86%] rounded-lg px-3 py-2 text-[14px] leading-relaxed",
                      m.role === "user" ? "bg-ink text-bg" : "bg-surface-2 text-ink",
                    )}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ children, ...props }) => (
                          <a {...props} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-lg bg-surface-2 px-3 py-2.5" aria-label="…">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1 w-1 animate-bounce rounded-full bg-ink-3"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-line p-2.5"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t(chat.placeholder)}
                aria-label={t(chat.placeholder)}
                className="min-w-0 flex-1 rounded-md border border-line bg-bg px-3 py-2 text-[14px] outline-none transition-colors placeholder:text-ink-3/70 focus:border-ink/35"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-ink text-bg transition-colors disabled:opacity-40"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
