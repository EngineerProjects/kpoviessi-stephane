"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Charger la mémoire au montage
  useEffect(() => {
    const saved = localStorage.getItem("assistant_memory");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          role: "assistant",
          content: "Bonjour ! Je suis l'assistant IA de Stéphane. Je peux vous parler de ses projets en Data Engineering, de son expertise en IA ou même faire une recherche en ligne pour vous. Comment puis-je vous aider ?",
        },
      ]);
    }
  }, []);

  // Sauvegarder la mémoire à chaque changement de message
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("assistant_memory", JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const clearChat = () => {
    const initialMessage: Message[] = [{
      role: "assistant",
      content: "Conversation réinitialisée. Comment puis-je vous aider ?",
    }];
    setMessages(initialMessage);
    localStorage.removeItem("assistant_memory");
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
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.content }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages([...newMessages, { role: "assistant", content: "Désolé, j'ai un petit souci technique. Réessayons !" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 rounded-full bg-accent text-white shadow-2xl flex items-center justify-center group border-4 border-white/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close"><X size={28} /></motion.div>
          ) : (
            <motion.div key="open" className="relative">
              <MessageSquare size={28} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-accent rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-[60] w-[90vw] md:w-[450px] h-[650px] max-h-[75vh] rounded-[3rem] glass shadow-2xl overflow-hidden flex flex-col border border-white/20"
          >
            {/* Header */}
            <div className="p-8 bg-accent flex items-center justify-between text-white relative">
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xl border border-white/30">
                  <Bot size={28} />
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-[0.2em]">Assistant IA</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-black opacity-80 uppercase tracking-widest">GLM-4 ONLINE</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 relative z-10">
                <button onClick={clearChat} className="p-2 hover:bg-white/10 rounded-xl transition-all" title="Effacer l'historique">
                  <Trash2 size={18} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-bg-main/20 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn("flex flex-col gap-2", msg.role === "user" ? "items-end" : "items-start")}
                >
                  <span className="text-[9px] font-black text-text-dim uppercase tracking-widest px-2">
                    {msg.role === "assistant" ? "Assistant" : "Vous"}
                  </span>
                  <div className={cn(
                    "max-w-[90%] p-5 rounded-[2rem] backdrop-blur-xl border shadow-sm",
                    msg.role === "user" 
                      ? "bg-accent text-white rounded-tr-none border-white/20" 
                      : "bg-white/40 dark:bg-white/[0.03] text-text-main rounded-tl-none border-border-main"
                  )}>
                    <p className="text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex flex-col gap-2 items-start">
                  <span className="text-[9px] font-black text-accent uppercase tracking-widest px-2">Réflexion en cours...</span>
                  <div className="bg-white/40 dark:bg-white/[0.03] p-6 rounded-[2rem] rounded-tl-none border border-border-main backdrop-blur-xl flex gap-2">
                    <span className="w-2 h-2 bg-accent/40 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-accent/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-accent/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-8 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-3xl border-t border-border-main">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Posez votre question..."
                  className="w-full pl-6 pr-16 py-5 rounded-[1.5rem] bg-bg-main border border-border-main text-text-main placeholder:text-text-dim/40 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/30 transition-all font-bold"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-[1.2rem] bg-accent text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-lg shadow-accent/20"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="mt-4 text-[9px] text-text-dim text-center uppercase tracking-[0.25em] font-black opacity-40 flex items-center justify-center gap-2">
                <Sparkles size={10} className="text-accent" /> Intelligence augmentée par Stéphane
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
