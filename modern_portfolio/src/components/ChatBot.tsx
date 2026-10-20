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
    const show = setTimeout(() => setBubble(true), 7000);
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            onClick={() => {
              setBubble(false);
              setOpen(true);
            }}
            className="fixed bottom-24 right-5 z-40 max-w-[15rem] rounded-2xl rounded-br-md border border-line bg-surface px-4 py-3 text-left text-sm shadow-lg"
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
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-ink shadow-xl transition hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={t(chat.title)}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 bottom-24 z-50 flex h-[min(34rem,calc(100dvh-8rem))] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl sm:inset-x-auto sm:right-5 sm:w-[24rem]"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <div>
                <p className="font-medium leading-tight">{t(chat.title)}</p>
                <p className="text-xs text-dim">{t(chat.sub)}</p>
              </div>
              <button type="button" onClick={clear} aria-label={t(chat.reset)} title={t(chat.reset)} className="grid h-8 w-8 place-items-center rounded-full text-dim transition hover:bg-bg hover:text-ink">
                <Trash2 size={15} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "prose-chat max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      m.role === "user" ? "rounded-br-md bg-accent text-accent-ink" : "rounded-bl-md bg-bg",
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
                  <div className="flex gap-1 rounded-2xl rounded-bl-md bg-bg px-4 py-3" aria-label="…">
                    {[0, 1, 2].map((d) => (
                      <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-dim" style={{ animationDelay: `${d * 0.15}s` }} />
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
              className="flex items-center gap-2 border-t border-line p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t(chat.placeholder)}
                className="min-w-0 flex-1 rounded-full border border-line bg-bg px-4 py-2.5 text-sm outline-none transition focus:border-accent"
              />
              <button type="submit" disabled={!input.trim() || loading} aria-label="Send" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition disabled:opacity-40">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
