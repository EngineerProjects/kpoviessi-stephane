import React from 'react';
import { Skill } from '@/types';
import { 
  FaPython, 
  FaReact, 
  FaAws, 
  FaDocker, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt,
  FaNode,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiJavascript, 
  SiTypescript, 
  SiGo,
  SiR,
  SiMongodb,
  SiPostgresql,
  SiTerraform,
  SiApacheairflow,
  SiApachekafka,
  SiApachespark,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiC,
} from 'react-icons/si';

interface SkillIconsMap {
  [key: string]: React.ReactNode;
}

const skillIcons: SkillIconsMap = {
  python: <FaPython />,
  pytorch: <SiPytorch />,
  tensorflow: <SiTensorflow />,
  react: <FaReact />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  r: <SiR />,
  go: <SiGo />,
  aws: <FaAws />,
  azure: <FaMicrosoft />,
  docker: <FaDocker />,
  postgresql: <SiPostgresql />,
  mongodb: <SiMongodb />,
  pandas: <SiPandas />,
  numpy: <SiNumpy />,
  opencv: <SiOpencv />,
  terraform: <SiTerraform />,
  airflow: <SiApacheairflow />,
  kafka: <SiApachekafka />,
  spark: <SiApachespark />,
  java: <FaJava />,
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  nodejs: <FaNode />,
  c: <SiC />
};

const levelText = ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const icon = skill.icon && skillIcons[skill.icon] ? skillIcons[skill.icon] : null;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-gray-800">{skill.name}</h3>
          <p className="text-sm text-gray-500">{levelText[skill.level - 1]}</p>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
        <div 
          className="h-2.5 rounded-full bg-blue-500"
          style={{ width: `${skill.level * 20}%` }}  
        ></div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>Beginner</span>
        <span>Expert</span>
      </div>
    </div>
  );
};

export default SkillBar;