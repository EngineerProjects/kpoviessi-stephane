import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, Bot, User, Sparkles, AlertCircle, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useAI } from './AIContext';

interface AskAIProps {
  onClose: () => void;
}

const AskAI: React.FC<AskAIProps> = ({ onClose }) => {
  const { data } = useLanguage();
  const { messages, sendMessage, isLoading, error } = useAI();
  
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    await sendMessage(userMsg);
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-2 md:p-8">
      <div className="w-full max-w-5xl h-full md:h-[80vh] flex flex-col border border-neon-blue/40 bg-deep-space/90 rounded-lg relative shadow-[0_0_50px_rgba(144,202,249,0.1)] overflow-hidden">
        
        {/* Header */}
        <div className="h-14 border-b border-neon-blue/30 bg-black/40 flex items-center justify-between px-4 md:px-6 shrink-0">
            <div className="flex items-center gap-3">
                <Sparkles className="text-green-400 animate-pulse" size={18} />
                <span className="text-neon-blue font-mono font-bold tracking-widest text-sm md:text-base">{data.ui.ai.header}</span>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="text-[10px] text-neon-blue/50 font-mono hidden md:block">
                   {data.ui.ai.status}
               </div>
               
               {/* Close Button */}
               <button 
                 onClick={onClose}
                 className="p-1.5 hover:bg-neon-blue/20 rounded-sm text-neon-blue/70 hover:text-neon-blue transition-colors border border-transparent hover:border-neon-blue/50"
                 aria-label="Close Assistant"
               >
                  <X size={20} />
               </button>
            </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 font-mono scrollbar-hide">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`
                        max-w-[85%] md:max-w-[70%] flex gap-3 md:gap-4
                        ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}
                    `}>
                        {/* Avatar */}
                        <div className={`
                            w-8 h-8 md:w-10 md:h-10 shrink-0 border flex items-center justify-center rounded-sm mt-1
                            ${msg.role === 'user' 
                                ? 'border-neon-blue/50 bg-neon-blue/10 text-neon-blue' 
                                : 'border-green-500/50 bg-green-500/10 text-green-400'}
                        `}>
                            {msg.role === 'user' ? <User size={16} className="md:w-5 md:h-5" /> : <Bot size={16} className="md:w-5 md:h-5" />}
                        </div>

                        {/* Bubble */}
                        <div className={`
                            p-3 md:p-4 border text-sm md:text-base leading-relaxed
                            ${msg.role === 'user' 
                                ? 'border-neon-blue/30 bg-neon-blue/5 text-blue-100 rounded-bl-xl rounded-tl-xl rounded-tr-xl' 
                                : 'border-green-500/30 bg-green-900/10 text-green-100 rounded-br-xl rounded-tr-xl rounded-tl-xl'}
                        `}>
                            {msg.role === 'model' && (
                                <div className="text-[10px] text-green-500/60 mb-2 font-bold tracking-wider">SK_CORE_AI</div>
                            )}
                            
                            <div className="prose prose-invert prose-p:my-1 prose-ul:my-2 prose-li:my-0.5 max-w-none text-xs md:text-base">
                              <ReactMarkdown 
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                                  strong: ({node, ...props}) => <strong className="text-white font-bold" {...props} />,
                                  a: ({node, ...props}) => <a className="text-neon-blue underline hover:text-white" target="_blank" rel="noopener noreferrer" {...props} />,
                                  ul: ({node, ...props}) => <ul className="ml-0 list-none space-y-1 my-2" {...props} />,
                                  ol: ({node, ...props}) => <ol className="ml-4 list-decimal space-y-1 my-2" {...props} />,
                                  li: ({node, ...props}) => (
                                    <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-neon-blue/70" {...props} />
                                  ),
                                  code: ({node, ...props}) => (
                                     <code className="bg-black/50 border border-white/10 px-1.5 py-0.5 rounded text-[10px] md:text-sm font-mono text-yellow-300" {...props} />
                                  ),
                                  blockquote: ({node, ...props}) => (
                                    <blockquote className="border-l-2 border-neon-blue/50 pl-3 italic text-white/60 my-2" {...props} />
                                  )
                                }}
                              >
                                {msg.text}
                              </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {isLoading && (
                 <div className="flex justify-start">
                    <div className="flex gap-4 max-w-[70%]">
                        <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 border border-green-500/50 bg-green-500/10 text-green-400 flex items-center justify-center rounded-sm">
                             <Bot size={16} className="animate-pulse md:w-5 md:h-5" />
                        </div>
                        <div className="flex items-center gap-2 p-3 md:p-4 text-green-400 font-mono text-xs animate-pulse">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                            {data.ui.ai.processing}
                        </div>
                    </div>
                 </div>
            )}
            
            {error && (
                <div className="flex justify-center my-4">
                    <div className="flex items-center gap-2 text-red-400 border border-red-500/50 bg-red-900/20 px-4 py-2 text-xs md:text-sm font-mono">
                        <AlertCircle size={16} /> {error}
                    </div>
                </div>
            )}
            
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 md:p-4 bg-black/60 border-t border-neon-blue/30 shrink-0">
            <form onSubmit={handleSend} className="relative flex items-center gap-2 md:gap-4">
                <div className="text-neon-blue font-mono font-bold text-base md:text-lg animate-pulse">{'>'}</div>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={isLoading ? "..." : data.ui.ai.placeholder}
                    disabled={isLoading}
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-neon-blue/30 h-10 md:h-12 text-sm md:text-base"
                />
                <button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className="p-2 md:p-3 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-deep-space transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <Send size={18} className="md:w-5 md:h-5" />
                </button>
            </form>
            {/* Warning Text */}
            <div className="absolute top-[-20px] left-0 right-0 flex justify-center pointer-events-none">
                 <span className="text-[9px] md:text-[10px] text-neon-blue/30 bg-deep-space px-2 border-t border-x border-neon-blue/10 rounded-t whitespace-nowrap">
                    {data.ui.ai.warning}
                 </span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AskAI;