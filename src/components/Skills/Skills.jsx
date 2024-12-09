import React from 'react';

const Skills = ({ skilles }) => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-black via-black to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-custom-teal mb-12 tracking-wide uppercase font-quicksand">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skilles.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div 
                className="h-24 flex items-center justify-center"
                style={{ backgroundColor: skill.bg }}
              >
                <span className="text-white text-2xl font-semibold">{skill.name}</span>
              </div>
              <div className="p-4">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className={`${skill.bg} h-3 rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-center text-gray-400 mt-2">
                  {skill.level}% Proficiency
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;