import { About, Projects, Contact } from "../components/index";
import { Element } from "react-scroll";
const Home = () => {
  return (
    <div className="w-full h-full">
      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
