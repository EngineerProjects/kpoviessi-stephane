import React from 'react';
import { Terminal, GraduationCap, Award, Users, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const MissionLog: React.FC = () => {
  const { data } = useLanguage();

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12 md:space-y-16 animate-fade-in-up pb-10">
      
      {/* PROFESSIONAL EXPERIENCE Section */}
      <div>
        <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
           <div className="h-12 md:h-16 w-1.5 bg-neon-blue shadow-[0_0_15px_#90CAF9]"></div>
           <div>
              <h2 className="text-2xl md:text-5xl font-bold text-white font-mono tracking-tight">{data.ui.experience.title}</h2>
              <div className="text-xs md:text-sm text-neon-blue/60 font-mono flex flex-col md:flex-row md:gap-6 mt-1">
                  <span>{data.ui.experience.path}</span>
                  <span>{data.ui.experience.mode}</span>
              </div>
           </div>
        </div>

        <div className="space-y-8 md:space-y-10">
           {data.experience.map((exp, index) => (
               <div key={exp.id} className="group relative">
                   {/* Timeline vertical line: Only visible on desktop */}
                   <div className="hidden md:block absolute left-[36px] top-12 bottom-[-40px] w-0.5 bg-neon-blue/20 group-last:hidden"></div>
                   
                   <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                       {/* Logo/Icon */}
                       <div className="flex flex-row md:flex-col items-center md:items-start shrink-0 gap-4">
                           <div className="w-12 h-12 md:w-20 md:h-20 border border-neon-blue/50 bg-white p-1 md:p-2 flex items-center justify-center text-neon-blue shadow-[0_0_15px_rgba(144,202,249,0.3)] rounded-lg z-10 overflow-hidden shrink-0">
                               {exp.logo ? (
                                 <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                               ) : (
                                 <span className="font-mono font-bold text-lg text-black">{index + 1}</span>
                               )}
                           </div>
                           {/* Mobile Role Title next to logo */}
                           <div className="md:hidden flex-1">
                              <div className="font-mono text-sm font-bold text-white">{exp.role}</div>
                              <div className="text-xs text-neon-blue">{exp.date}</div>
                           </div>
                       </div>

                       <div className="flex-1 border border-neon-blue/30 bg-black/40 p-0 overflow-hidden group-hover:border-neon-blue/60 transition-colors">
                           {/* Desktop Header Row */}
                           <div className="hidden md:flex bg-neon-blue/10 px-6 py-3 justify-between items-center border-b border-neon-blue/20">
                               <div className="font-mono text-base text-neon-blue font-bold flex items-center gap-3">
                                   <Terminal size={16} />
                                   {exp.role.toUpperCase()}
                               </div>
                               <div className="font-mono text-sm text-neon-blue/60">
                                   {exp.date}
                               </div>
                           </div>
                           
                           <div className="p-4 md:p-8 font-mono space-y-4 md:space-y-6">
                               <div className="flex flex-wrap items-center gap-2 md:gap-3 text-white/90 font-bold border-b border-gray-800 pb-3 md:pb-4 mb-3 md:mb-4 text-base md:text-xl">
                                   <span className="text-green-500">@</span>
                                   {exp.company}
                                   <span className="hidden md:inline text-gray-500">::</span>
                                   <span className="block md:inline text-neon-blue/80 w-full md:w-auto text-sm md:text-lg">{exp.location}</span>
                               </div>
                               
                               <div className="space-y-2 md:space-y-3 pl-1 md:pl-2">
                                   {exp.description.map((desc, i) => (
                                       <div key={i} className="flex items-start gap-2 md:gap-3 text-blue-100/90 text-sm md:text-lg leading-relaxed">
                                           <span className="text-green-500 shrink-0 mt-1">{'>'}</span>
                                           <span>{desc}</span>
                                       </div>
                                   ))}
                               </div>

                               <div className="flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6 mt-4 border-t border-white/5">
                                   {exp.skills.map(skill => (
                                       <span key={skill} className="text-[10px] md:text-sm bg-neon-blue/5 border border-neon-blue/20 text-neon-blue px-2 py-1 md:px-3 md:py-1.5 hover:bg-neon-blue hover:text-deep-space transition-colors cursor-default font-semibold">
                                           #{skill}
                                       </span>
                                   ))}
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           ))}
        </div>
      </div>

      {/* LEADERSHIP & ASSOCIATIONS Section */}
      <div className="border-t border-dashed border-neon-blue/30 pt-10 md:pt-16">
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
             <Users className="text-purple-400 w-6 h-6 md:w-8 md:h-8" />
             <h3 className="text-xl md:text-4xl font-bold text-white font-mono tracking-tight">{data.ui.experience.assoc_title}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             {data.associations.map((assoc, idx) => (
                <div key={idx} className="bg-deep-space/60 border border-purple-500/30 p-4 md:p-6 relative overflow-hidden group hover:border-purple-500/60 transition-colors">
                   <div className="absolute top-0 right-0 p-2 bg-purple-500/10 rounded-bl text-[10px] md:text-xs text-purple-300 font-mono">
                      ASSOC_ID_{idx+1}
                   </div>
                   
                   <h4 className="text-lg md:text-xl font-bold text-white mb-2 font-mono">{assoc.role}</h4>
                   <div className="text-purple-400 font-bold mb-4 flex flex-col md:flex-row md:justify-between md:items-center text-sm md:text-base gap-1">
                      <span>@{assoc.organization}</span>
                      <span className="text-xs text-white/50">{assoc.date}</span>
                   </div>
                   
                   <ul className="space-y-2 mb-4">
                      {assoc.description.map((desc, i) => (
                         <li key={i} className="text-xs md:text-sm text-blue-100/80 flex gap-2">
                            <span className="text-purple-500 mt-0.5">▪</span>
                            {desc}
                         </li>
                      ))}
                   </ul>

                   <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-500/20">
                      {assoc.skills.map(skill => (
                         <span key={skill} className="text-[10px] uppercase bg-purple-500/10 text-purple-300 px-2 py-1 border border-purple-500/20">
                            {skill}
                         </span>
                      ))}
                   </div>
                </div>
             ))}
          </div>
      </div>

      {/* CERTIFICATIONS & EDUCATION Section (Grid Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 border-t border-dashed border-neon-blue/30 pt-10 md:pt-16">
          
          {/* Education Column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 font-mono flex items-center gap-3">
                <GraduationCap className="text-neon-blue w-5 h-5 md:w-6 md:h-6" /> {data.ui.experience.edu_title}
            </h3>
            <div className="space-y-4">
                {data.education.map((edu, idx) => (
                    <div key={idx} className="bg-deep-space/50 border border-neon-blue/20 p-4 hover:border-neon-blue/60 hover:bg-neon-blue/5 transition-colors relative overflow-hidden flex flex-col group">
                        <div className="flex justify-between items-start mb-2">
                           <div className="text-white font-bold text-sm md:text-base group-hover:text-neon-blue transition-colors">
                             {edu.degree}
                           </div>
                           <div className="text-[10px] md:text-xs text-white/40 font-mono whitespace-nowrap ml-4">{edu.date}</div>
                        </div>
                        
                        <div className="text-neon-blue/80 text-xs md:text-sm font-mono mb-2">{edu.institution}</div>
                        
                        {edu.description && (
                          <div className="text-xs text-white/60 leading-relaxed border-t border-neon-blue/10 pt-2 mt-auto">
                            {edu.description}
                          </div>
                        )}
                        
                        <div className="text-[10px] text-neon-blue/40 font-mono mt-2 flex justify-end">
                           {edu.location}
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 font-mono flex items-center gap-3">
                <Award className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" /> {data.ui.experience.cert_title}
            </h3>
            <div className="space-y-4">
                {data.certifications.map((cert, idx) => (
                    <a key={idx} href={cert.link} target="_blank" rel="noreferrer" className="block bg-deep-space/50 border border-yellow-500/20 p-4 hover:border-yellow-500/60 hover:bg-yellow-500/5 transition-all group">
                        <div className="flex justify-between items-start">
                           <div className="flex-1">
                              <div className="text-white font-bold text-sm md:text-base group-hover:text-yellow-400 transition-colors flex items-center gap-2 flex-wrap">
                                 {cert.name}
                                 <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="text-yellow-500/80 text-xs md:text-sm font-mono">{cert.organization}</div>
                           </div>
                           <div className="text-[10px] md:text-xs text-white/40 font-mono whitespace-nowrap ml-2">{cert.date}</div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {cert.skills.slice(0,3).map(skill => (
                                <span key={skill} className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                   {skill}
                                </span>
                            ))}
                            {cert.skills.length > 3 && <span className="text-[10px] text-white/40 self-center">+{cert.skills.length - 3}</span>}
                        </div>
                    </a>
                ))}
            </div>
          </div>

      </div>

    </div>
  );
};

export default MissionLog;
