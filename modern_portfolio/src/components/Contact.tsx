"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useContent } from "@/lib/useContent";

export default function Contact() {
  const { personalInfo, ui } = useContent();
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
      _subject: `[System:Archetype Portfolio] Message from ${formData.name}`,
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
        throw new Error("Transmission interrupted");
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      setStatus("ERROR");
      setTimeout(() => setStatus("IDLE"), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-36 relative border-b border-border-main bg-bg-main/10 text-text-main">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header HUD */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-border-main/50 pb-8 mb-12 md:mb-16 gap-4">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-accent/20 bg-accent-soft text-accent text-[9px] font-mono font-bold uppercase tracking-[0.2em] mb-4">
              <MessageSquare size={10} /> {ui.contact.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tighter text-text-main leading-none lg:whitespace-nowrap">
              {ui.contact.heading_1} <span className="text-text-dim">{ui.contact.heading_2}</span> {ui.contact.heading_3}<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="shrink-0 font-mono text-[9px] text-text-dim uppercase tracking-widest">
            {ui.contact.subheading}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <p className="text-text-dim text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              {ui.contact.intro}
            </p>

            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 p-5 border border-border-main bg-bg-card/20 rounded hover:border-accent/40 hover:bg-bg-card transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 border border-border-main/60 rounded bg-bg-main flex items-center justify-center text-text-dim group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300">
                  <Mail size={16} />
                </div>
                <div className="text-left overflow-hidden font-mono">
                  <p className="text-[8px] font-bold text-text-dim uppercase tracking-wider mb-0.5 opacity-60">{ui.contact.email_label}</p>
                  <p className="text-xs font-bold text-text-main group-hover:text-accent transition-colors truncate">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-4 p-5 border border-border-main bg-bg-card/20 rounded hover:border-accent/40 hover:bg-bg-card transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 border border-border-main/60 rounded bg-bg-main flex items-center justify-center text-text-dim group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300">
                  <Phone size={16} />
                </div>
                <div className="text-left font-mono">
                  <p className="text-[8px] font-bold text-text-dim uppercase tracking-wider mb-0.5 opacity-60">{ui.contact.phone_label}</p>
                  <p className="text-xs font-bold text-text-main group-hover:text-accent transition-colors">{personalInfo.phone}</p>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 px-2">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent p-2 hover:bg-accent-soft rounded transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent p-2 hover:bg-accent-soft rounded transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 w-full"
          >
            <div className="p-6 md:p-10 border border-border-main bg-bg-card/25 rounded relative overflow-hidden shadow-sm">
              <div className="absolute top-2 right-4 font-mono text-[7px] text-text-dim/40 tracking-wider">
                TRANSMISSION GRID // FORM_302
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[9px] font-mono font-bold text-text-dim uppercase tracking-wider block opacity-75">
                      {ui.contact.form_name}
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "SENDING"}
                      placeholder={ui.contact.form_name_placeholder}
                      className="w-full px-4 py-3 rounded border border-border-main/80 bg-bg-main/30 text-text-main placeholder:text-text-dim/40 focus:outline-none focus:border-accent/40 focus:bg-bg-main transition-all font-mono text-xs disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[9px] font-mono font-bold text-text-dim uppercase tracking-wider block opacity-75">
                      {ui.contact.form_email}
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "SENDING"}
                      placeholder={ui.contact.form_email_placeholder}
                      className="w-full px-4 py-3 rounded border border-border-main/80 bg-bg-main/30 text-text-main placeholder:text-text-dim/40 focus:outline-none focus:border-accent/40 focus:bg-bg-main transition-all font-mono text-xs disabled:opacity-50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[9px] font-mono font-bold text-text-dim uppercase tracking-wider block opacity-75">
                    {ui.contact.form_message}
                  </label>
                  <textarea 
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "SENDING"}
                    placeholder={ui.contact.form_message_placeholder}
                    className="w-full px-4 py-3 rounded border border-border-main/80 bg-bg-main/30 text-text-main placeholder:text-text-dim/40 focus:outline-none focus:border-accent/40 focus:bg-bg-main transition-all resize-none font-mono text-xs disabled:opacity-50"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={status === "SENDING" || status === "SENT"}
                  className={`w-full py-4 border font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 rounded active:scale-98 ${
                    status === "SENT" 
                      ? "bg-emerald-500 text-white border-emerald-500" 
                      : status === "ERROR" 
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-text-main text-bg-main border-text-main hover:bg-bg-main hover:text-text-main"
                  }`}
                >
                  {status === "IDLE" && (
                    <>{ui.contact.submit_idle} <Send size={12} /></>
                  )}
                  {status === "SENDING" && (
                    <>{ui.contact.submit_sending} <Loader2 size={12} className="animate-spin" /></>
                  )}
                  {status === "SENT" && (
                    <>{ui.contact.submit_sent} <CheckCircle size={12} /></>
                  )}
                  {status === "ERROR" && (
                    <>{ui.contact.submit_error} <AlertCircle size={12} /></>
                  )}
                </button>

                {status === "SENT" && (
                  <p className="text-[9px] font-mono text-emerald-500 text-center font-bold uppercase tracking-widest animate-pulse">
                    {ui.contact.success_msg}
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
