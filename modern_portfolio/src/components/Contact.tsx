"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/data/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SENT" | "ERROR">("IDLE");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");

    const submissionData = {
      ...formData,
      _subject: `[Portfolio] Nouveau message de ${formData.name}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setStatus("SENT");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      setStatus("ERROR");
      setTimeout(() => setStatus("IDLE"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 relative text-text-main">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              <MessageSquare size={14} />
              Me contacter
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-text-main mb-10 leading-[0.9] uppercase whitespace-nowrap">
              Construisons <span className="text-accent italic">l&apos;extraordinaire.</span>
            </h2>
            <p className="text-text-dim text-lg md:text-2xl leading-relaxed mb-16 max-w-lg font-medium">
              Ouvert aux collaborations sur des systèmes d&apos;IA, des projets de data engineering ou tout défi technique ambitieux.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-6 p-8 rounded-[2.5rem] glass hover:bg-white/50 dark:hover:bg-zinc-900/50 hover:border-accent/30 transition-all duration-500 shadow-lg shadow-black/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-text-dim uppercase tracking-[0.2em] mb-1.5 opacity-60">Email</p>
                  <p className="text-lg md:text-xl font-black text-text-main group-hover:text-accent transition-colors tracking-tight">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-6 p-8 rounded-[2.5rem] glass hover:bg-white/50 dark:hover:bg-zinc-900/50 hover:border-accent/30 transition-all duration-500 shadow-lg shadow-black/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-text-dim uppercase tracking-[0.2em] mb-1.5 opacity-60">Téléphone</p>
                  <p className="text-lg md:text-xl font-black text-text-main group-hover:text-accent transition-colors tracking-tight">{personalInfo.phone}</p>
                </div>
              </a>
            </div>

            <div className="mt-16 flex items-center gap-10 px-6">
               <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent transition-all hover:scale-125">
                  <LinkedinIcon className="w-8 h-8" />
               </a>
               <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent transition-all hover:scale-125">
                  <GithubIcon className="w-8 h-8" />
               </a>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pt-[240px] w-full"
          >
            <div className="p-10 md:p-16 rounded-[4rem] glass relative overflow-hidden group shadow-2xl shadow-black/5">
              <div className="absolute top-0 right-0 p-16 text-text-main/[0.02] group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
                  <Send size={240} />
              </div>
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-[10px] font-black text-text-dim uppercase tracking-widest ml-6 opacity-60">Nom Complet</label>
                      <input 
                        type="text" 
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "SENDING"}
                        placeholder="John Doe"
                        className="w-full px-8 py-5 rounded-2xl bg-bg-main/50 border border-border-main text-text-main placeholder:text-text-dim/40 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/30 transition-all font-bold disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-[10px] font-black text-text-dim uppercase tracking-widest ml-6 opacity-60">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "SENDING"}
                        placeholder="john@example.com"
                        className="w-full px-8 py-5 rounded-2xl bg-bg-main/50 border border-border-main text-text-main placeholder:text-text-dim/40 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/30 transition-all font-bold disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                      <label htmlFor="message" className="text-[10px] font-black text-text-dim uppercase tracking-widest ml-6 opacity-60">Message</label>
                      <textarea 
                        name="message"
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "SENDING"}
                        placeholder="Dites-moi tout..."
                        className="w-full px-8 py-6 rounded-[2rem] bg-bg-main/50 border border-border-main text-text-main placeholder:text-text-dim/40 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/30 transition-all resize-none font-bold disabled:opacity-50"
                      />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status === "SENDING" || status === "SENT"}
                    className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl transition-all flex items-center justify-center gap-3 ${
                      status === "SENT" 
                        ? "bg-emerald-500 text-white" 
                        : status === "ERROR" 
                        ? "bg-red-500 text-white"
                        : "bg-text-main text-bg-main hover:scale-[1.02] active:scale-[0.98] shadow-text-main/20"
                    }`}
                  >
                    {status === "IDLE" && (
                      <>Envoyer <Send size={16} /></>
                    )}
                    {status === "SENDING" && (
                      <>Transmission... <Loader2 size={16} className="animate-spin" /></>
                    )}
                    {status === "SENT" && (
                      <>Message Envoyé <CheckCircle size={16} /></>
                    )}
                    {status === "ERROR" && (
                      <>Erreur d&apos;envoi <AlertCircle size={16} /></>
                    )}
                  </button>

                  {status === "SENT" && (
                    <p className="text-[10px] text-emerald-500 text-center font-bold uppercase tracking-widest animate-pulse">
                      Merci ! Je vous répondrai très prochainement.
                    </p>
                  )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
