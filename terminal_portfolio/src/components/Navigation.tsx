import React from 'react';
import { Terminal, Cpu, Database, FolderGit2, Radio, Bot, Languages } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface NavigationProps {
  currentView: string;
  setView: (view: string) => void;
  onAskAI: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView, onAskAI }) => {
  const { data, language, toggleLanguage } = useLanguage();
  
  const navItems = [
    { id: 'dashboard', label: data.ui.nav.profile, icon: <Terminal size={16} /> },
    { id: 'skills', label: data.ui.nav.skills, icon: <Cpu size={16} /> },
    { id: 'experience', label: data.ui.nav.experience, icon: <Database size={16} /> },
    { id: 'projects', label: data.ui.nav.projects, icon: <FolderGit2 size={16} /> },
    { id: 'comms', label: data.ui.nav.contact, icon: <Radio size={16} /> },
  ];

  return (
    <header className="w-full h-14 md:h-16 lg:h-20 border-b border-neon-blue/30 bg-deep-space/90 backdrop-blur-md flex items-center justify-between px-2 md:px-6 lg:px-8 shrink-0 z-40 relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent"></div>

      {/* Logo Area */}
      <div className="flex items-center gap-2 md:gap-3 cursor-pointer shrink-0" onClick={() => setView('dashboard')}>
        <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 border border-neon-blue/50 flex items-center justify-center bg-neon-blue/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-neon-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="font-bold font-mono text-base md:text-lg lg:text-xl text-white z-10">SK</span>
        </div>
        <div className="flex flex-col leading-tight">
           <span className="font-bold text-white tracking-widest text-xs md:text-sm">SK_OS</span>
           <span className="text-[8px] md:text-[9px] lg:text-[10px] text-neon-blue/60 hidden sm:block">V.2.5.0 STABLE</span>
        </div>
      </div>
      
      {/* Nav Items (Center) - Scrollable on mobile/tablet */}
      <nav className="flex-1 flex items-center justify-start md:justify-center gap-1 md:gap-1.5 lg:gap-2 overflow-x-auto scrollbar-hide mask-image-linear-gradient mx-2 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`
              relative flex items-center gap-2 px-3 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-sm transition-all duration-300 border shrink-0
              ${currentView === item.id 
                ? 'bg-neon-blue/10 border-neon-blue text-white shadow-[0_0_15px_rgba(144,202,249,0.15)]' 
                : 'bg-transparent border-transparent text-neon-blue/50 hover:text-neon-blue hover:bg-neon-blue/5 hover:border-neon-blue/30'}
            `}
          >
            <div className="lg:hidden">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}</div>
            <div className="hidden lg:block">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 16 })}</div>
            
            <span className="hidden lg:inline font-mono text-xs tracking-wider font-bold">
              {item.label}
            </span>
            
            {/* Active Indicator */}
            {currentView === item.id && (
               <>
                 <span className="absolute -bottom-[1px] left-0 w-2 h-[2px] bg-neon-blue"></span>
                 <span className="absolute -bottom-[1px] right-0 w-2 h-[2px] bg-neon-blue"></span>
                 <span className="absolute -top-[1px] left-0 w-2 h-[2px] bg-neon-blue"></span>
                 <span className="absolute -top-[1px] right-0 w-2 h-[2px] bg-neon-blue"></span>
               </>
            )}
          </button>
        ))}
      </nav>
      
      {/* Right Actions: Lang + AI */}
      <div className="flex items-center shrink-0 gap-2 md:gap-4">
         
         {/* Language Switcher */}
         <button 
           onClick={toggleLanguage}
           className="relative group px-2 py-1.5 md:px-3 md:py-2 border border-neon-blue/30 bg-black hover:bg-neon-blue/10 transition-colors flex items-center gap-2"
         >
            <div className="absolute inset-0 border border-neon-blue/0 group-hover:border-neon-blue/50 transition-colors"></div>
            <Languages size={16} className="text-neon-blue" />
            <span className="font-mono font-bold text-xs md:text-sm text-neon-blue w-6 text-center">{language.toUpperCase()}</span>
         </button>

         {/* Assistant Button */}
         <button 
            onClick={onAskAI}
            className={`
              group relative px-2 py-1.5 md:px-3 md:py-2 lg:px-4 
              bg-green-500/10 border border-green-500/50 hover:bg-green-500/20 hover:border-green-400 
              transition-all duration-300 rounded-sm flex items-center gap-2 overflow-hidden
              ${currentView === 'ask-ai' ? 'border-green-400 bg-green-500/20 shadow-[0_0_15px_rgba(74,222,128,0.3)]' : ''}
            `}
         >
            <div className="absolute inset-0 bg-green-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <Bot className="text-green-300 group-hover:animate-bounce w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
            <div className="hidden md:flex flex-col items-start relative z-10">
               <span className="text-green-300 font-bold font-mono leading-none tracking-wider text-[10px] md:text-xs">{data.ui.nav.assistant}</span>
               <span className="text-[8px] text-green-400/60 font-mono hidden lg:inline">{data.ui.nav.ai_mode}</span>
            </div>
         </button>
      </div>
    </header>
  );
};

export default Navigation;
