"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, Trash2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { useContent } from "@/lib/useContent";
import { useLanguage } from "@/lib/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Renders message text with URLs, emails and phone numbers as colored clickable links
function renderMessage(content: string, isUser: boolean) {
  const pattern = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[a-z]{2,}|\+\d[\d\s\-]{7,}\d)/g;
  const parts = content.split(pattern);
  return parts.map((part, i) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer"
          className={isUser ? "underline opacity-80 hover:opacity-100" : "text-accent underline hover:opacity-80 transition-opacity"}>
          {part}
        </a>
      );
    }
    if (/^[\w.+-]+@[\w-]+\.[a-z]{2,}$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`}
          className={isUser ? "underline opacity-80 hover:opacity-100" : "text-accent underline hover:opacity-80 transition-opacity"}>
          {part}
        </a>
      );
    }
    if (/^\+\d[\d\s\-]{7,}\d$/.test(part)) {
      return (
        <a key={i} href={`tel:${part.replace(/[\s\-]/g, "")}`}
          className={isUser ? "underline opacity-80 hover:opacity-100" : "text-accent underline hover:opacity-80 transition-opacity"}>
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const NOTIF_KEY = "sk_chat_notif_seen";

export default function ChatBot() {
  const { ui } = useContent();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const iconControls = useAnimation();

  // Periodic icon shake every 8 seconds when chat is closed
  useEffect(() => {
    if (isOpen) return;
    const shake = () =>
      iconControls.start({
        rotate: [0, -18, 18, -10, 10, -4, 4, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    const t = setTimeout(shake, 3000);
    const interval = setInterval(shake, 8000);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, [isOpen, iconControls]);

  // Show notification bubble, 6 seconds after mount
  useEffect(() => {
    const t = setTimeout(() => setShowNotif(true), 6000);
    return () => clearTimeout(t);
  }, []);

  // Auto-hide after 8 seconds
  useEffect(() => {
    if (!showNotif) return;
    const t = setTimeout(() => setShowNotif(false), 8000);
    return () => clearTimeout(t);
  }, [showNotif]);

  const openChat = () => {
    setShowNotif(false);
    setIsOpen(true);
  };

  // Load chat memory on mount
  useEffect(() => {
    const saved = localStorage.getItem(`assistant_memory_${language}`);
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          role: "assistant",
          content: ui.chat.initial,
        },
      ]);
    }
  }, [language, ui.chat.initial]);

  // Save chat memory only when there's a real conversation (not just the initial/cleared message)
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem(`assistant_memory_${language}`, JSON.stringify(messages));
    }
  }, [messages, language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const clearChat = () => {
    const initialMessage: Message[] = [{
      role: "assistant",
      content: ui.chat.initial,
    }];
    setMessages(initialMessage);
    localStorage.removeItem(`assistant_memory_${language}`);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    const newMessages = [...messages, { role: "user", content: userMessage } as Message];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, language }),
      });

      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.content }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages([...newMessages, { role: "assistant", content: ui.chat.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  const notifText = language === "fr"
    ? "👋 Salut ! Je suis Lys. Des questions sur Stéphane ? Je suis là !"
    : "👋 Hi! I'm Lys. Want to know more about Stéphane? Ask me!";

  return (
    <>
      {/* Notification bubble */}
      <AnimatePresence>
        {showNotif && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 z-[61] max-w-[220px] cursor-pointer"
            onClick={openChat}
          >
            <div className="relative bg-bg-card border border-accent/30 shadow-lg rounded-lg px-4 py-3">
              <button
                onClick={(e) => { e.stopPropagation(); setShowNotif(false); }}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-bg-card border border-border-main text-text-dim hover:text-accent flex items-center justify-center text-[10px] leading-none"
              >
                ×
              </button>
              <p className="text-xs font-medium text-text-main leading-snug">{notifText}</p>
              {/* Tail pointing down toward chat button */}
              <div className="absolute -bottom-[7px] right-5 w-3 h-3 bg-bg-card border-r border-b border-accent/30 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Activation Button */}
      <div className="fixed bottom-6 right-6 z-[60]">
        {/* Sonar rings — only when chat is closed */}
        {!isOpen && (
          <>
            {[0, 0.9, 1.8].map((delay) => (
              <motion.span
                key={delay}
                className="absolute inset-0 border border-accent/40 pointer-events-none"
                style={{ borderRadius: "4px" }}
                animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.6, delay, ease: "easeOut" }}
              />
            ))}
          </>
        )}

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 border border-accent bg-bg-card text-accent shadow-lg flex items-center justify-center cursor-pointer"
          style={{ borderRadius: "4px" }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close"><X size={20} /></motion.div>
            ) : (
              <motion.div key="open" animate={iconControls} className="relative flex items-center justify-center">
                <MessageSquare size={20} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border border-bg-card rounded-full animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* CAD Terminal Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-[60] w-[calc(100vw-1.5rem)] sm:w-[420px] h-[60vh] sm:h-[580px] max-h-[85vh] border border-border-main bg-bg-main/98 backdrop-blur-md shadow-xl flex flex-col overflow-hidden"
            style={{ borderRadius: "8px" }}
          >
            {/* HUD Terminal Header */}
            <div className="px-5 py-4 border-b border-border-main flex items-center justify-between bg-bg-card/45 relative">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-accent/20 bg-accent-soft rounded flex items-center justify-center text-accent">
                  <Bot size={16} />
                </div>
                <div className="font-mono">
                  <h3 className="text-[10px] font-bold text-text-main uppercase tracking-wider leading-none">{ui.chat.title}</h3>
                  <div className="flex items-center gap-1.5 mt-1 leading-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[7px] font-bold text-text-dim/80 tracking-widest uppercase">NODE: ACTIVE // PORT_443</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 font-mono">
                <button 
                  onClick={clearChat} 
                  className="p-1.5 border border-border-main/50 rounded text-text-dim hover:text-accent hover:bg-accent-soft transition-colors" 
                  title={ui.chat.reset_title}
                >
                  <Trash2 size={12} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 border border-border-main/50 rounded text-text-dim hover:text-accent hover:bg-accent-soft transition-colors"
                >
                  <X size={12} />
                </button>
              </div>
            </div>

            {/* Monospace Message Timeline */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-bg-main/30 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn("flex flex-col gap-1.5", msg.role === "user" ? "items-end" : "items-start")}
                >
                  <span className="font-mono text-[7px] text-text-dim/70 uppercase tracking-widest px-1">
                    {msg.role === "assistant" ? ui.chat.assistant_label : ui.chat.user_label}
                  </span>
                  
                  <div className={cn(
                    "max-w-[85%] p-4 border shadow-sm font-sans text-xs leading-relaxed font-medium",
                    msg.role === "user" 
                      ? "bg-text-main text-bg-main border-text-main rounded-l rounded-tr-none" 
                      : "bg-bg-card text-text-main border-border-main rounded-r rounded-tl-none"
                  )}>
                    {msg.role === "user" ? (
                      <p className="whitespace-pre-wrap">{renderMessage(msg.content, true)}</p>
                    ) : (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc list-inside space-y-0.5 my-1.5">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside space-y-0.5 my-1.5">{children}</ol>,
                          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                          strong: ({ children }) => <strong className="font-bold text-text-main">{children}</strong>,
                          em: ({ children }) => <em className="italic opacity-80">{children}</em>,
                          a: ({ href, children }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer"
                              className="text-accent underline hover:opacity-80 transition-opacity">
                              {children}
                            </a>
                          ),
                          code: ({ children }) => (
                            <code className="font-mono text-[10px] bg-bg-main/60 px-1 py-0.5 rounded border border-border-main/40">
                              {children}
                            </code>
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex flex-col gap-1.5 items-start">
                  <span className="font-mono text-[7px] text-accent uppercase tracking-widest px-1">{ui.chat.loading_label}</span>
                  <div className="bg-bg-card text-text-main p-4 border border-border-main rounded-r rounded-tl-none flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Dispatch Console */}
            <div className="p-4 border-t border-border-main bg-bg-card/45 font-mono">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={ui.chat.placeholder}
                  className="w-full pl-3 pr-12 py-3 rounded border border-border-main bg-bg-main/50 text-text-main placeholder:text-text-dim/40 focus:outline-none focus:border-accent/40 font-mono text-xs"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded border border-border-main bg-bg-main flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/30 hover:bg-accent-soft transition-all disabled:opacity-50"
                >
                  <Send size={12} />
                </button>
              </div>
              <p className="mt-3 text-[7px] text-text-dim/80 text-center uppercase tracking-[0.15em] flex items-center justify-center gap-1.5 opacity-65">
                <Sparkles size={8} className="text-accent" /> {ui.chat.footer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
