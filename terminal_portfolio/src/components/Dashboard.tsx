import React, { useState, useEffect } from 'react';
import { MapPin, User, Terminal, Code, Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface DashboardProps {
   onNavigate: (view: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
   const { data } = useLanguage();

   // State for the sequenced bio animation
   const [introText, setIntroText] = useState('');
   const [outroText, setOutroText] = useState('');
   const [showPillars, setShowPillars] = useState(false);
   const [, setStage] = useState<'intro' | 'pillars' | 'outro' | 'done'>('intro');

   useEffect(() => {
      // Reset state when data (language) changes
      setIntroText('');
      setOutroText('');
      setShowPillars(false);
      setStage('intro');

      let currentStage = 'intro';
      let charIndex = 0;
      let timer: ReturnType<typeof setTimeout>;

      const fullIntro = data.personalInfo.marketing.intro;
      const fullOutro = data.personalInfo.marketing.outro;

      const typeWriter = () => {
         if (currentStage === 'intro') {
            if (charIndex < fullIntro.length) {
               charIndex++;
               setIntroText(fullIntro.substring(0, charIndex));
               timer = setTimeout(typeWriter, 10);
            } else {
               currentStage = 'pillars';
               setStage('pillars');
               setShowPillars(true);
               // Small delay before starting outro to let user digest pillars
               timer = setTimeout(typeWriter, 800);
            }
         } else if (currentStage === 'pillars') {
            // Pillars are shown via CSS transition, move to outro
            currentStage = 'outro';
            setStage('outro');
            charIndex = 0;
            timer = setTimeout(typeWriter, 10);
         } else if (currentStage === 'outro') {
            if (charIndex < fullOutro.length) {
               charIndex++;
               setOutroText(fullOutro.substring(0, charIndex));
               timer = setTimeout(typeWriter, 10);
            } else {
               currentStage = 'done';
               setStage('done');
            }
         }
      };

      timer = setTimeout(typeWriter, 100);

      return () => clearTimeout(timer);
   }, [data.personalInfo.marketing]);

   // Helper function to render text with clickable buttons for [CONTENT] patterns
   const renderTextWithButton = (text: string) => {
      // Regex to find content in brackets like [LETS_DISCUSS_YOUR_PROJECT]
      const parts = text.split(/(\[.*?\])/g);

      return parts.map((part, index) => {
         // If it starts with [ and ends with ], it's a button candidate
         if (part.startsWith('[') && part.endsWith(']')) {
            const buttonText = part.slice(1, -1).replace(/_/g, ' '); // Remove brackets and clean text
            return (
               <button
                  key={index}
                  onClick={() => onNavigate('comms')}
                  className="inline-flex items-center gap-2 px-4 py-1.5 mt-2 bg-neon-blue/10 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 font-bold font-mono tracking-wider text-sm md:text-base cursor-pointer shadow-[0_0_15px_rgba(144,202,249,0.2)] animate-pulse-fast hover:animate-none group"
               >
                  <span className="text-green-400 group-hover:text-black">{'>'}</span> {buttonText}
               </button>
            );
         }
         // Regular text
         return <span key={index}>{part}</span>;
      });
   };

   const topItems = [
      { type: 'link', label: 'LINKEDIN', val: 'CONNECT', icon: Linkedin, color: 'text-blue-400', url: data.personalInfo.socials.linkedin },
      { type: 'link', label: 'GITHUB', val: 'AMICHE02', icon: Github, color: 'text-purple-400', url: data.personalInfo.socials.github },
      { type: 'link', label: 'GITHUB', val: 'ENG.PROJ', icon: Github, color: 'text-green-400', url: data.personalInfo.socials.github_org },
      { type: 'action', label: 'EMAIL', val: 'SEND', icon: Mail, color: 'text-yellow-400', action: () => onNavigate('comms') }
   ];

   return (
      <div className="w-full max-w-[1600px] mx-auto space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in-up pb-8">

         {/* System Status Banner (now with Social Links) */}
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {topItems.map((item, i) => {
               const commonClasses = "bg-black/40 border border-neon-blue/20 p-3 md:p-5 flex items-center gap-3 md:gap-4 backdrop-blur-sm transition-all hover:bg-white/5 relative overflow-hidden group w-full text-left";
               const Icon = item.icon;

               // Render Action Button
               if (item.type === 'action') {
                  return (
                     <button key={i} onClick={item.action as () => void} className={commonClasses}>
                        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <div className="p-1.5 md:p-2 bg-white/5 rounded-sm scale-90 md:scale-100 group-hover:scale-110 transition-transform z-10"><Icon className={`${item.color} w-5 h-5 md:w-6 md:h-6`} /></div>
                        <div className="z-10">
                           <div className="text-[10px] md:text-xs text-neon-blue/60 font-mono tracking-wider mb-0.5 group-hover:text-neon-blue transition-colors">{item.label}</div>
                           <div className={`text-base md:text-xl font-bold font-mono text-white group-hover:text-neon-blue transition-colors flex items-center gap-1`}>
                              {item.val} <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                           </div>
                        </div>
                     </button>
                  );
               }

               // Render Link
               return (
                  <a key={i} href={item.url} target="_blank" rel="noreferrer" className={commonClasses}>
                     <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                     <div className="p-1.5 md:p-2 bg-white/5 rounded-sm scale-90 md:scale-100 group-hover:scale-110 transition-transform z-10"><Icon className={`${item.color} w-5 h-5 md:w-6 md:h-6`} /></div>
                     <div className="z-10">
                        <div className="text-[10px] md:text-xs text-neon-blue/60 font-mono tracking-wider mb-0.5 group-hover:text-neon-blue transition-colors">{item.label}</div>
                        <div className={`text-base md:text-xl font-bold font-mono text-white group-hover:text-neon-blue transition-colors flex items-center gap-1`}>
                           {item.val} <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </div>
                     </div>
                  </a>
               );
            })}
         </div>

         {/* Main Identity Terminal */}
         <div className="relative border border-neon-blue/40 bg-black/60 backdrop-blur-md p-1">
            {/* Frame Decoration */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white"></div>

            {/* 
            GRID LAYOUT LOGIC:
            Mobile: 1 column.
            Tablet (md to xl): Avatar Left, Header Right (Row 1). Bio Full Width (Row 2).
            Desktop (xl+): Avatar Left (Row-span-2). Header Right (Row 1). Bio Right (Row 2).
        */}
            <div className="p-4 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-10 gap-y-8 items-start">

               {/* 1. Avatar Hologram */}
               {/* Centered on mobile, Left on tablet+. Spans 2 rows on XL screens to sit beside both header and bio */}
               <div className="shrink-0 flex justify-center md:justify-start xl:row-span-2">
                  <div className="relative group">
                     <div className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 border-2 border-neon-blue rounded-full overflow-hidden relative shadow-[0_0_30px_rgba(144,202,249,0.3)] transition-all duration-500">
                        <div className="absolute inset-0 bg-neon-blue/20 z-10 animate-pulse"></div>
                        <div className="w-full h-full bg-deep-space flex items-center justify-center">
                           <img
                              src="/profile.png"
                              alt="Profile"
                              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                           />
                        </div>
                        <div className="absolute w-full h-1 bg-neon-blue/50 top-0 animate-scan z-20 shadow-[0_0_10px_#90CAF9]"></div>
                     </div>
                     <div className="mt-4 md:mt-6 text-center">
                        <div className="inline-block px-3 py-1 md:px-5 md:py-2 border border-neon-blue/30 text-neon-blue text-xs md:text-base font-mono rounded-full bg-neon-blue/5">
                           ID: SK-8842-ALPHA
                        </div>
                     </div>
                  </div>
               </div>

               {/* 2. Header Info (Name, Stats) */}
               {/* Centered on mobile, Left aligned on tablet+ */}
               <div className="w-full text-center md:text-left space-y-6 md:space-y-8">
                  <div className="border-b border-neon-blue/20 pb-4 md:pb-8">
                     <div className="flex flex-col xl:flex-row justify-center md:justify-between items-center xl:items-end gap-2 md:gap-4 mb-3">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight glitch-text relative inline-block">
                           {data.personalInfo.name}
                           <span className="hidden xl:inline absolute -top-5 -right-12 text-xs font-mono text-neon-blue border border-neon-blue/50 px-2 py-0.5 rounded bg-black">{data.ui.dashboard.admin}</span>
                        </h1>
                        <span className="xl:hidden text-[10px] md:text-xs font-mono text-neon-blue border border-neon-blue/50 px-2 py-0.5 rounded bg-black mt-1">{data.ui.dashboard.admin_access}</span>
                     </div>

                     <div className="text-xl md:text-2xl lg:text-3xl text-neon-blue font-mono flex items-center justify-center md:justify-start gap-2 md:gap-3 mt-2">
                        <Terminal className="w-5 h-5 md:w-6 md:h-6" />
                        {data.personalInfo.title}
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 text-sm md:text-lg font-mono text-neon-blue/80 w-full">
                     <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 bg-white/5 p-2 rounded md:bg-transparent md:p-0">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                        <span className="whitespace-nowrap">{data.ui.dashboard.location}:</span> <span className="text-white truncate">{data.personalInfo.location}</span>
                     </div>
                     <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 bg-white/5 p-2 rounded md:bg-transparent md:p-0">
                        <Code className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                        <span className="whitespace-nowrap">{data.ui.dashboard.stack}:</span> <span className="text-white">PYTHON / AI AGENTS / PYTORCH / PYSPARK / SQL</span>
                     </div>
                  </div>
               </div>

               {/* 3. Bio Terminal */}
               {/* Mobile: Full Width. Tablet: Full Width (col-span-2). Desktop XL: Right Column (col-span-1, row-2) */}
               <div className="w-full col-span-1 md:col-span-2 xl:col-span-1 xl:col-start-2 -mt-2 md:mt-0">
                  <div className="bg-black/80 border border-neon-blue/30 p-4 md:p-8 font-mono text-sm md:text-lg leading-relaxed text-blue-100 h-auto min-h-[150px] md:min-h-[220px] relative overflow-hidden shadow-inner text-left w-full">
                     <div className="absolute top-0 left-0 right-0 h-6 md:h-8 bg-neon-blue/10 flex items-center px-3 border-b border-neon-blue/20">
                        <span className="text-[10px] md:text-xs text-neon-blue uppercase tracking-widest flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-green-500"></div> bio_description.txt
                        </span>
                     </div>
                     <div className="mt-6 md:mt-8">
                        <span className="text-neon-blue mr-3 hidden md:inline select-none">$ cat profile.txt</span>
                        <div className="md:mt-4 whitespace-pre-wrap">
                           {introText}

                           {showPillars && (
                              <ul className="mt-4 mb-4 space-y-3 animate-fade-in-up">
                                 {data.personalInfo.marketing.pillars.map((pillar, idx) => (
                                    <li key={idx} className="flex flex-col md:flex-row md:items-start gap-1 md:gap-2">
                                       <span className="text-neon-blue shrink-0 font-bold">• {pillar.title} :</span>
                                       <span className="text-blue-100/90">{pillar.desc}</span>
                                    </li>
                                 ))}
                              </ul>
                           )}

                           {renderTextWithButton(outroText)}

                           <span className="animate-flicker inline-block w-2 h-4 md:w-3 md:h-5 bg-neon-blue align-middle ml-1"></span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>

         {/* Quick Stats Footer */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="border border-neon-blue/20 bg-neon-blue/5 p-4 md:p-8 flex flex-col justify-center">
               <h3 className="text-sm md:text-base font-mono text-neon-blue mb-4 font-bold tracking-wider">{data.ui.dashboard.hobbies}</h3>
               <div className="flex flex-wrap gap-2 md:gap-3">
                  {data.personalInfo.hobbies.map(h => (
                     <span key={h} className="px-2 py-1 md:px-3 md:py-2 bg-black border border-neon-blue/30 text-neon-blue text-[10px] md:text-sm font-mono hover:bg-neon-blue hover:text-black cursor-crosshair transition-colors uppercase">
                        {h}
                     </span>
                  ))}
               </div>
            </div>
            <div className="border border-neon-blue/20 bg-neon-blue/5 p-4 md:p-8 relative overflow-hidden flex flex-col justify-center">
               <h3 className="text-sm md:text-base font-mono text-neon-blue mb-4 font-bold tracking-wider">{data.ui.dashboard.status_log}</h3>
               <div className="text-[10px] md:text-sm font-mono text-white/70 space-y-2 md:space-y-3">
                  <div className="flex justify-between border-b border-white/5 pb-1"><span>{'>'} {data.ui.dashboard.last_login}:</span> <span>TODAY 09:42:12</span></div>
                  <div className="flex justify-between border-b border-white/5 pb-1"><span>{'>'} {data.ui.dashboard.firewall}:</span> <span className="text-green-400 font-bold">ACTIVE</span></div>
                  <div className="flex justify-between"><span>{'>'} {data.ui.dashboard.root_access}:</span> <span className="text-red-400 font-bold">GRANTED</span></div>
               </div>
            </div>
         </div>

      </div>
   );
};

export default Dashboard;