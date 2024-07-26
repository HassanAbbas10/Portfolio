/* eslint-disable react/prop-types */
import Skill from "./Skill"

const Skills = ({skilles}) => {
  return (
   
        <div className="mb-4">
          
            <section className="w-full py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase text-custom-teal font-quicksand">
          Skills
        </h2>
        <div className="mt-10">
          {skilles.map((skill) => (
            <Skill key={skill.name} name={skill.name} level={skill.level} bg={skill.bg} />
          ))}
        </div>
      </div>
    </section>
        </div>
  )
}

export default Skills