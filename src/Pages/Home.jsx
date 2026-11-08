import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import PropTypes from "prop-types";

const Home = ({ theme }) => (
  <main id="main-content">
    <About />
    <Projects theme={theme} />
    <Experience />
    <Skills />
    <Contact />
  </main>
);

export default Home;

Home.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};
