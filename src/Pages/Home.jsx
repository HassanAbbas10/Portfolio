import Skills from "@/components/Skills/Skills";
import { About, Projects, Contact, Experience } from "../components/index";
import { Element } from "react-scroll";
import { skill } from "@/components/utils/projects";
import LogoLoopComp from "@/components/LogoLoop/LogoLoopComp";
import AnimatedBeamDemo from "@/components/animated-beam-demo";
const Home = () => {
  return (
    <div className="w-full h-full">
      <Element name="about">
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <About />
        </div>
      </Element>

      <Element name="experience">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black">
          <Experience />
        </div>
      </Element>
      <div className="container mx-auto py-8">
        <AnimatedBeamDemo />
      </div>
      <LogoLoopComp />

      <Element name="projects">
        <div className="bg-gradient-to-br from-black via-gray-800 to-black">
          <Projects />
        </div>
      </Element>

      <Element name="skills">
        <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
          <Skills skilles={skill} />
        </div>
      </Element>

      <Element name="contact">
        <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <Contact />
        </div>
      </Element>
    </div>
  );
};

export default Home;
