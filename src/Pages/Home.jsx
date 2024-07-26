import Skills from "@/components/Skills/Skills";
import { About, Projects, Contact } from "../components/index";
import { Element } from "react-scroll";
import { skill} from "@/components/utils/projects";
const Home = () => {
  return (
    <div className="w-full h-full">
      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="skills">
        <Skills skilles={skill}/>
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
