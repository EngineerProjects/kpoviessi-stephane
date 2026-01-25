import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare, User, AtSign, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Comms: React.FC = () => {
  const { data } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'TRANSMITTING' | 'SENT' | 'ERROR'>('IDLE');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('TRANSMITTING');

    // Prepare data for FormSubmit
    // We enable CORS and set the response to JSON to avoid page redirects
    const submissionData = {
      ...formData,
      _subject: `[SK-OS] NEW MISSION: Transmission from ${formData.name}`,
      _template: 'table', // Formats the email nicely
      _captcha: 'false'   // Disables the captcha page (optional)
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${data.personalInfo.socials.email.replace('mailto:', '')}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        setStatus('SENT');
        // Reset form after a delay
        setTimeout(() => {
          setStatus('IDLE');
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        throw new Error('Transmission rejected by server');
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      setStatus('ERROR');
      // Fallback to IDLE after showing error
      setTimeout(() => setStatus('IDLE'), 4000);
    }
  };

  return (
    <div className="h-full w-full flex items-start md:items-center justify-center p-2 md:p-8 lg:p-12 overflow-y-auto pb-10">
      <div className="max-w-[1600px] w-full border border-neon-blue/40 bg-deep-space/90 p-4 md:p-10 rounded-lg relative shadow-[0_0_50px_rgba(144,202,249,0.1)] flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 md:mt-0">

        {/* Tech Header Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-deep-space px-4 md:px-6 border border-neon-blue/40 rounded py-1 md:py-2 z-10 w-max">
          <span className="text-neon-blue font-mono font-bold text-sm md:text-lg animate-pulse">{data.ui.comms.header}</span>
        </div>

        {/* LEFT COLUMN: Direct Links */}
        <div className="flex-1 space-y-6 md:space-y-8 lg:border-r border-neon-blue/20 lg:pr-12 pt-4 md:pt-0">
          <div className="mb-4 md:mb-6">
            <h3 className="text-white font-sans font-bold text-2xl md:text-3xl mb-2 flex items-center gap-3">
              <RadioTowerIcon /> {data.ui.comms.direct_uplink}
            </h3>
            <p className="text-neon-blue/60 font-mono text-xs md:text-sm">{data.ui.comms.protocol}</p>
          </div>

          <div className="p-4 md:p-5 border border-neon-blue/20 bg-neon-blue/5 rounded flex items-center gap-4 md:gap-6 overflow-hidden">
            <div className="p-2 md:p-3 bg-red-900 text-white rounded shrink-0">
              <Mail size={24} className="md:w-[28px] md:h-[28px]" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] md:text-xs text-neon-blue/60 font-mono">{data.ui.comms.email}</div>
              <div className="text-white font-bold text-sm md:text-lg select-all truncate">{data.personalInfo.email.replace('mailto:', '')}</div>
            </div>
          </div>

          <a href={data.personalInfo.socials.linkedin} target="_blank" rel="noreferrer"
            className="flex items-center gap-4 md:gap-6 p-4 md:p-5 border border-neon-blue/20 bg-neon-blue/5 rounded hover:bg-neon-blue/20 hover:border-neon-blue transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="p-2 md:p-3 bg-blue-700 text-white rounded group-hover:scale-110 transition-transform relative z-10">
              <Linkedin size={24} className="md:w-[28px] md:h-[28px]" />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] md:text-xs text-neon-blue/60 font-mono">{data.ui.comms.linkedin}</div>
              <div className="text-white font-bold text-lg md:text-xl tracking-wide">LinkedIn</div>
            </div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neon-blue hidden sm:block">
              <span className="font-mono text-xs blink">{data.ui.comms.connecting}</span>
            </div>
          </a>

          <a href={data.personalInfo.socials.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-4 md:gap-6 p-4 md:p-5 border border-neon-blue/20 bg-neon-blue/5 rounded hover:bg-neon-blue/20 hover:border-neon-blue transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-600/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="p-2 md:p-3 bg-gray-800 text-white rounded group-hover:scale-110 transition-transform relative z-10">
              <Github size={24} className="md:w-[28px] md:h-[28px]" />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] md:text-xs text-neon-blue/60 font-mono">{data.ui.comms.github}</div>
              <div className="text-white font-bold text-lg md:text-xl tracking-wide">GitHub</div>
            </div>
          </a>

          <div className="mt-8 pt-6 border-t border-neon-blue/20 text-[10px] md:text-xs font-mono text-neon-blue/40 uppercase tracking-widest flex justify-between">
            <span>ENCRYPTION: AES-256</span>
            <span>STATUS: ONLINE</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="flex-1 relative">
          <div className="absolute -top-3 left-0 text-[10px] md:text-xs font-mono text-neon-blue/60 bg-deep-space px-2">
            {data.ui.comms.form_title}
          </div>

          <form onSubmit={handleSubmit} className="h-full flex flex-col gap-4 md:gap-6 pt-4">

            {/* Name Input */}
            <div className="group">
              <label htmlFor="name" className="block text-xs font-mono text-neon-blue/70 mb-1 ml-1 group-focus-within:text-neon-blue transition-colors">
                <span className="text-neon-blue mr-2">{'>'}</span>{data.ui.comms.sender_id}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-blue/50">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'TRANSMITTING'}
                  className="block w-full pl-10 pr-3 py-3 bg-black/50 border border-neon-blue/30 text-white placeholder-neon-blue/20 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-mono rounded-sm disabled:opacity-50 text-sm md:text-base"
                  placeholder={data.ui.comms.enter_name}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group">
              <label htmlFor="email" className="block text-xs font-mono text-neon-blue/70 mb-1 ml-1 group-focus-within:text-neon-blue transition-colors">
                <span className="text-neon-blue mr-2">{'>'}</span>{data.ui.comms.return_addr}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-blue/50">
                  <AtSign size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'TRANSMITTING'}
                  className="block w-full pl-10 pr-3 py-3 bg-black/50 border border-neon-blue/30 text-white placeholder-neon-blue/20 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-mono rounded-sm disabled:opacity-50 text-sm md:text-base"
                  placeholder={data.ui.comms.enter_email}
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="group flex-1 flex flex-col">
              <label htmlFor="message" className="block text-xs font-mono text-neon-blue/70 mb-1 ml-1 group-focus-within:text-neon-blue transition-colors">
                <span className="text-neon-blue mr-2">{'>'}</span>{data.ui.comms.content}
              </label>
              <div className="relative flex-1">
                <div className="absolute top-3 left-3 pointer-events-none text-neon-blue/50">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'TRANSMITTING'}
                  className="block w-full h-full min-h-[120px] pl-10 pr-3 py-3 bg-black/50 border border-neon-blue/30 text-white placeholder-neon-blue/20 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-mono rounded-sm resize-none disabled:opacity-50 text-sm md:text-base"
                  placeholder={data.ui.comms.input_msg}
                />
              </div>
            </div>

            {/* Submit Button Area */}
            <div className="pt-2">
              {status === 'IDLE' && (
                <button
                  type="submit"
                  className="w-full py-3 md:py-4 bg-neon-blue/10 hover:bg-neon-blue hover:text-deep-space border border-neon-blue text-neon-blue font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group uppercase font-mono text-sm md:text-base"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  {data.ui.comms.initiate}
                </button>
              )}

              {status === 'TRANSMITTING' && (
                <div className="w-full py-3 md:py-4 bg-black border border-neon-blue/50 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-neon-blue/20 animate-scan"></div>
                  <span className="text-neon-blue font-mono text-xs md:text-sm font-bold animate-pulse">{data.ui.comms.uploading}</span>
                  <div className="w-1/2 h-1 bg-deep-space mt-2 rounded-full overflow-hidden">
                    <div className="h-full bg-neon-blue animate-progress-bar"></div>
                  </div>
                </div>
              )}

              {status === 'SENT' && (
                <div className="w-full py-3 md:py-4 bg-green-500/10 border border-green-500 text-green-500 flex items-center justify-center gap-2 font-mono font-bold animate-pulse text-sm md:text-base">
                  <CheckCircle size={20} />
                  {data.ui.comms.complete}
                </div>
              )}

              {status === 'ERROR' && (
                <div className="w-full py-3 md:py-4 bg-red-500/10 border border-red-500 text-red-500 flex items-center justify-center gap-2 font-mono font-bold text-sm md:text-base">
                  <AlertCircle size={20} />
                  {data.ui.comms.failed}
                </div>
              )}
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

// Simple Icon component for the header
const RadioTowerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
    <circle cx="12" cy="12" r="2" />
    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
  </svg>
);

export default Comms;
