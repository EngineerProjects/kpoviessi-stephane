"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, Trash2, Terminal } from "lucide-react";
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

  // Load chat memory on mount
  useEffect(() => {
    const saved = localStorage.getItem("assistant_memory");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          role: "assistant",
          content: "Hello! I am Stéphane's System Assistant. I can describe his Big Data pipelines at Allianz, Go backend architectures at Hello Pulse, generative PyTorch modeling, and agentic multi-agent systems. What coordinate would you like to explore?",
        },
      ]);
    }
  }, []);

  // Save chat memory on updates
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
      content: "Conversation history cleared. System standby. How can I assist you?",
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
      setMessages([...newMessages, { role: "assistant", content: "Apologies, a communication timeout occurred. Let us re-try the query." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Activation Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 border border-accent bg-bg-card text-accent shadow-lg flex items-center justify-center group cursor-pointer"
        style={{ borderRadius: "4px" }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close"><X size={20} /></motion.div>
          ) : (
            <motion.div key="open" className="relative flex items-center justify-center">
              <MessageSquare size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border border-bg-card rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* CAD Terminal Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="fixed bottom-24 right-6 z-[60] w-[92vw] sm:w-[420px] h-[580px] max-h-[72vh] border border-border-main bg-bg-main/98 backdrop-blur-md shadow-xl flex flex-col overflow-hidden"
            style={{ borderRadius: "8px" }}
          >
            {/* HUD Terminal Header */}
            <div className="px-5 py-4 border-b border-border-main flex items-center justify-between bg-bg-card/45 relative">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-accent/20 bg-accent-soft rounded flex items-center justify-center text-accent">
                  <Bot size={16} />
                </div>
                <div className="font-mono">
                  <h3 className="text-[10px] font-bold text-text-main uppercase tracking-wider leading-none">SYSTEM ASSISTANT</h3>
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
                  title="Reset System Cache"
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
                    {msg.role === "assistant" ? "■ TELEMETRY_OUT" : "■ CONSOLE_IN"}
                  </span>
                  
                  <div className={cn(
                    "max-w-[85%] p-4 border shadow-sm font-sans text-xs leading-relaxed font-medium",
                    msg.role === "user" 
                      ? "bg-text-main text-bg-main border-text-main rounded-l rounded-tr-none" 
                      : "bg-bg-card text-text-main border-border-main rounded-r rounded-tl-none"
                  )}>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex flex-col gap-1.5 items-start">
                  <span className="font-mono text-[7px] text-accent uppercase tracking-widest px-1">■ PROCESS: COMPUTE_WEIGHTS</span>
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
                  placeholder="Enter system query specs..."
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
                <Sparkles size={8} className="text-accent" /> SECURE TUNNEL AUGMENTED BY STÉPHANE
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
