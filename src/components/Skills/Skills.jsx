/* eslint-disable react/prop-types */
import {
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaBriefcase,
  FaPenNib,
  FaCloud,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiApifox,
  SiCss3,
} from "react-icons/si";

const SkillCircle = ({ skill }) => {
  // Map skill names to appropriate icons
  const iconMap = {
    React: SiReact,
    CSS: SiCss3,
    Tailwind: SiTailwindcss,
    JavaScript: SiJavascript,
    Node: SiNodedotjs,
    API: SiApifox,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    Redux: SiRedux,
    Database: FaDatabase,
    Cloud: FaCloud,
    Design: FaPenNib,
    Backend: FaLayerGroup,
    Frontend: FaBriefcase,
  };

  const SkillIcon = iconMap[skill.name] || FaCode;

  return (
    <div className="flex flex-col items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="relative w-28 h-28 mb-4" style={{ color: skill.bg }}>
        {/* Circular background */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 36 36"
        >
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeOpacity="0.3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${skill.level}, 100`}
          />
        </svg>

        {/* Skill Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SkillIcon className="w-16 h-12" strokeWidth={1.5} />
        </div>
      </div>

      {/* Skill Details */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
       
      </div>
    </div>
  );
};

const Skills = ({ skilles }) => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-black via-black to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-custom-teal mb-12 tracking-wide uppercase font-quicksand">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {skilles.map((skill) => (
            <SkillCircle  key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
