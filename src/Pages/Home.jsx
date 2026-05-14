import Skills from "@/components/Skills/Skills";
import { About, Projects, Contact, Experience } from "../components/index";
import { Element } from "react-scroll";
import { skill } from "@/components/utils/projects";
import DepthGallery from "@/components/DepthGallery/DepthGallery";

const Home = () => {
  return (
    <div className="w-full h-full bg-black">
      <Element name="about">
        <About />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="stack">
        <DepthGallery />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="skills">
        <Skills skilles={skill} />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
