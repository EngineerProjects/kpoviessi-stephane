import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import SkillTree from './components/SkillTree';
import MissionLog from './components/MissionLog';
import QuestBoard from './components/QuestBoard';
import Comms from './components/Comms';
import AskAI from './components/AskAI';
import { LanguageProvider } from './components/LanguageContext';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [bootSequence, setBootSequence] = useState(true);

  useEffect(() => {
    // Simulate system boot
    const timer = setTimeout(() => {
      setBootSequence(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard onNavigate={setCurrentView} />;
      case 'skills': return <SkillTree />;
      case 'experience': return <MissionLog />;
      case 'projects': return <QuestBoard />;
      case 'comms': return <Comms />;
      case 'ask-ai': return <AskAI onClose={() => setCurrentView('dashboard')} />;
      default: return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  if (bootSequence) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-neon-blue font-mono p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none"></div>
        <div className="w-full max-w-md border border-neon-blue/30 p-1 rounded">
          <div className="h-2 bg-neon-blue animate-progress-bar shadow-[0_0_10px_#90CAF9]"></div>
        </div>
        <div className="mt-4 text-xs md:text-sm font-mono space-y-2 text-left w-full max-w-md">
          <div className="animate-fade-in-up text-neon-blue/70"> {'>'} INIT_KERNEL_PANIC... <span className="text-green-500">BYPASSED</span></div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}> {'>'} MOUNTING_FILE_SYSTEM... <span className="text-green-500">OK</span></div>
          <div className="animate-fade-in-up" style={{ animationDelay: '1.0s' }}> {'>'} LOADING_UX_INTERFACE... <span className="text-green-500">OK</span></div>
          <div className="animate-fade-in-up text-white font-bold blink" style={{ animationDelay: '1.8s' }}> {'>'} SYSTEM READY_</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black overflow-hidden relative font-mono text-neon-blue selection:bg-neon-blue selection:text-black">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-deep-space/90 to-black/90"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%] opacity-20"></div>
      </div>

      {/* Main Layout Container - EXPANDED WIDTH */}
      <div className="relative z-20 flex flex-col h-full w-full md:w-[96%] lg:w-[98%] max-w-[1920px] mx-auto border-x border-neon-blue/10 bg-black/40 shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-all duration-300">

        {/* Top Header / Navigation - Passed onAskAI to trigger view switch */}
        <Navigation
          currentView={currentView}
          setView={setCurrentView}
          onAskAI={() => setCurrentView('ask-ai')}
        />

        {/* Main Content Area (Terminal Screen) */}
        <main className="flex-1 overflow-hidden relative flex flex-col">
          {/* Internal Border/Glow for the screen look */}
          <div className="absolute inset-0 border-x border-neon-blue/20 pointer-events-none z-30"></div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent z-30"></div>

          <div className="flex-1 overflow-y-auto scrollbar-hide relative p-3 md:p-8">
            {renderView()}
          </div>
        </main>

        {/* Footer / System Status */}
        <footer className="h-6 md:h-8 border-t border-neon-blue/30 bg-deep-space/90 backdrop-blur flex justify-between items-center px-4 text-[9px] md:text-xs text-neon-blue/60 uppercase tracking-wider z-30 shrink-0">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> ONLINE</span>
            <span className="hidden md:inline">RAM: 64GB [||||||----] 62%</span>
            <span className="hidden md:inline">CPU: 12 CORES [||--------] 12%</span>
          </div>
          <div className="animate-pulse">SECURE_CONNECTION_ESTABLISHED_V2.5</div>
        </footer>

      </div>

      {/* Global CRT Scanlines Overlay (Topmost) */}
      <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-10 z-50"></div>

      <style>{`
        .bg-scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2)
          );
          background-size: 100% 4px;
        }
        @keyframes progress-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-bar {
          animation: progress-bar 2.5s ease-out forwards;
        }
        .blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .text-shadow-neon {
          text-shadow: 0 0 5px rgba(144, 202, 249, 0.7);
        }
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;