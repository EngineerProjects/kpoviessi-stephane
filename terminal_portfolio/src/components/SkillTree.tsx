import React from 'react';
import { Code, Brain, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const SkillTree: React.FC = () => {
  const { data } = useLanguage();
  const categories = Array.from(new Set(data.skills.map(s => s.category)));

  const getSkillIcon = (skillName: string, category: string) => {
    const name = skillName.toLowerCase();
    const className = "text-3xl md:text-4xl hover:scale-110 transition-transform duration-300";

    // Handle Languages Category specifically
    if (category === 'Languages') return <Globe className="text-green-400 w-8 h-8 md:w-9 md:h-9" />;

    if (name === 'python') return <i className={`devicon-python-plain colored ${className}`} />;
    if (name === 'r') return <i className={`devicon-r-plain colored ${className}`} />;
    if (name === 'sql') return <i className={`devicon-postgresql-plain colored ${className}`} />;
    if (name === 'bash') return <i className={`devicon-bash-plain text-white ${className}`} />;
    if (name === 'golang') return <i className={`devicon-go-original-wordmark colored ${className}`} />;

    if (name === 'pytorch') return <i className={`devicon-pytorch-original colored ${className}`} />;
    if (name === 'scikit-learn') return <i className={`devicon-scikitlearn-plain colored ${className}`} />;
    if (name === 'tensorflow') return <i className={`devicon-tensorflow-original colored ${className}`} />;
    if (name === 'computer vision' || name.includes('vision')) return <i className={`devicon-opencv-plain colored ${className}`} />;
    if (name.includes('nlp') || name.includes('llm')) return <Brain className="text-pink-500 w-8 h-8 md:w-9 md:h-9" />;

    // Ajout d'un fond blanc et de padding pour Pandas et NumPy pour la visibilité
    if (name === 'pandas') return <i className={`devicon-pandas-original colored ${className} bg-white rounded p-1`} />;
    if (name === 'numpy') return <i className={`devicon-numpy-original colored ${className} bg-white rounded p-1`} />;

    if (name === 'pyspark' || name.includes('spark')) return <i className={`devicon-apachespark-original colored ${className}`} />;
    if (name === 'docker') return <i className={`devicon-docker-plain colored ${className}`} />;
    if (name === 'aws') return <i className={`devicon-amazonwebservices-plain-wordmark colored ${className}`} />;
    if (name === 'azure') return <i className={`devicon-azure-plain colored ${className}`} />;
    if (name === 'postgresql') return <i className={`devicon-postgresql-plain colored ${className}`} />;

    // Default Fallback
    return <Code className="text-neon-blue opacity-50 w-8 h-8 md:w-9 md:h-9" />;
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 md:space-y-12 animate-fade-in-up pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-neon-blue/30 pb-4 md:pb-6 mb-6 md:mb-10 gap-2">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight flex items-center gap-4">
          <span className="text-neon-blue text-4xl md:text-5xl">/</span> {data.ui.skills.title}
        </h2>
        <div className="text-xs md:text-sm font-mono text-neon-blue/50">
          {data.ui.skills.scan}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:gap-16">
        {categories.map((cat) => (
          <div key={cat} className="relative group">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-widest pl-2 border-l-4 border-neon-blue">{cat}</h3>
              <div className="h-px bg-neon-blue/20 flex-1 ml-4 md:ml-6 group-hover:bg-neon-blue/50 transition-colors"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 md:gap-y-12">
              {data.skills.filter(s => s.category === cat).map((skill, i) => (
                <div key={skill.name} className="relative group/skill">

                  {/* Skill Layout: Icon + Info */}
                  <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-deep-space/50 border border-neon-blue/20 rounded flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover/skill:border-neon-blue/60 transition-colors">
                      {getSkillIcon(skill.name, skill.category)}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-2 font-mono">
                        <span className="text-neon-blue font-bold tracking-wide text-base md:text-xl">
                          {skill.name}
                        </span>
                        <span className="text-neon-blue/60 text-[10px] md:text-xs font-bold">
                          LVL.{skill.level}
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="h-3 md:h-4 w-full bg-deep-space border border-neon-blue/20 rounded-sm relative overflow-hidden">
                        {/* Grid background for bar */}
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_20%,rgba(0,0,0,0.8)_20%)] bg-[length:5px_100%] z-10"></div>

                        {/* The Fill */}
                        <div
                          className="h-full bg-neon-blue shadow-[0_0_10px_#90CAF9] relative group-hover/skill:bg-blue-400 transition-colors duration-300"
                          style={{
                            width: `${(skill.level / 5) * 100}%`,
                            transition: `width 1s ease-out ${i * 0.1}s`
                          }}
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Summary */}
      <div className="mt-8 md:mt-16 p-4 md:p-6 border border-neon-blue/20 bg-neon-blue/5 flex flex-col md:flex-row justify-between items-center font-mono text-xs md:text-base text-neon-blue/70 gap-2">
        <span>{data.ui.skills.loaded}: {data.skills.length}</span>
        <span>OPTIMIZATION: 100%</span>
      </div>
    </div>
  );
};

export default SkillTree;
