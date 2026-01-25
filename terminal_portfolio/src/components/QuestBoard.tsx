import React, { useState } from 'react';
import { Folder, ExternalLink, Code2, Database, BrainCircuit, FileCode, Lock } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const QuestBoard: React.FC = () => {
  const { data } = useLanguage();
  const [filter, setFilter] = useState<'All' | 'AI' | 'Data' | 'Dev'>('All');
  
  const filteredProjects = filter === 'All' 
    ? data.projects 
    : data.projects.filter(p => p.category === filter);

  const getIcon = (cat: string) => {
    switch(cat) {
      case 'AI': return <BrainCircuit size={20} />;
      case 'Data': return <Database size={20} />;
      default: return <Code2 size={20} />;
    }
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto h-full flex flex-col pb-8">
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neon-blue/30 pb-4 md:pb-6 mb-8 md:mb-10 gap-4 md:gap-6">
        <div>
           <h2 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-tight flex items-center gap-3">
             <Folder className="text-neon-blue w-6 h-6 md:w-8 md:h-8" />
             {data.ui.projects.title}
           </h2>
           <p className="text-xs md:text-base font-mono text-neon-blue/60 mt-1">{data.ui.projects.access}</p>
        </div>
        
        {/* Futuristic Filter Tabs - Scrollable on mobile */}
        <div className="w-full md:w-auto overflow-x-auto scrollbar-hide">
          <div className="flex gap-px bg-neon-blue/20 p-[1px] min-w-max">
            {['All', 'AI', 'Data', 'Dev'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`
                  px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm font-mono uppercase tracking-wider transition-all relative overflow-hidden font-bold flex-1
                  ${filter === cat 
                    ? 'bg-neon-blue text-black' 
                    : 'bg-black/80 text-neon-blue hover:text-white hover:bg-neon-blue/20'}
                `}
              >
                {/* Map category names to UI labels */}
                {cat === 'All' ? data.ui.projects.all : cat === 'AI' ? data.ui.projects.ai : cat === 'Data' ? data.ui.projects.data : data.ui.projects.dev}
                
                {filter === cat && <div className="absolute top-0 left-0 w-full h-[3px] bg-white"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid - 1 col on mobile, expanded on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group flex flex-col h-full bg-transparent perspective-1000">
             
             {/* Folder Tab */}
             <div className="w-1/3 h-8 md:h-10 bg-neon-blue/10 border-t border-l border-r border-neon-blue/30 rounded-t-lg flex items-center justify-center relative -mb-[1px] z-10 group-hover:bg-neon-blue/20 transition-colors">
                <span className="text-[10px] md:text-xs font-bold text-neon-blue font-mono tracking-widest">{project.id.toUpperCase()}</span>
             </div>

             {/* Main Card */}
             <div className="relative flex-1 bg-black/60 border border-neon-blue/30 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-neon-blue hover:shadow-[0_0_25px_rgba(144,202,249,0.15)] group-hover:bg-black/80 flex flex-col">
                
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(144,202,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(144,202,249,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                <div className="flex justify-between items-start mb-4 md:mb-6 relative z-10">
                   <div className={`p-2 md:p-3 rounded-full border border-neon-blue/30 ${project.category === 'AI' ? 'text-purple-400 bg-purple-500/10' : 'text-neon-blue bg-neon-blue/10'}`}>
                      {getIcon(project.category)}
                   </div>
                   {project.link ? (
                     <a href={project.link} target="_blank" rel="noreferrer" className="text-neon-blue/50 hover:text-white hover:scale-110 transition-all p-1">
                       <ExternalLink size={18} />
                     </a>
                   ) : (
                     <Lock size={18} className="text-red-500/50" />
                   )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 font-mono group-hover:text-neon-blue transition-colors">
                   {project.title}
                </h3>
                
                <p className="text-sm md:text-base text-blue-100/80 mb-6 md:mb-8 font-mono leading-relaxed flex-1">
                   {project.description}
                </p>

                <div className="space-y-3 md:space-y-4 relative z-10">
                   <div className="h-px w-full bg-neon-blue/20"></div>
                   <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono font-semibold text-neon-blue/90 border border-neon-blue/20 px-2 py-1 rounded bg-deep-space/50">
                           <FileCode size={10} /> {tag}
                        </span>
                      ))}
                   </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neon-blue/0 group-hover:border-neon-blue/100 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neon-blue/0 group-hover:border-neon-blue/100 transition-all duration-500"></div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestBoard;
