import { Typewriter } from 'react-simple-typewriter';
import LottieAni from '../Lottie/LottieAni'
import { words } from '../utils/projects';
import CV from '../../assets/CV.pdf'
import SocialLinks from '../Socials/SocialLinks ';
const About = () => {
  return (
    <section className="w-full h-screen mt-10 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase text-custom-teal font-quicksand">
          About Me
        </h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-quicksand text-gray-300">
              Hello, My Name is
              <br className="hidden lg:inline-block" /> Hassan Abbas
            </h1>
            <h1 className="text-3xl text-custom-orange font-quicksand font-extrabold">
              <Typewriter
                words={words}
                loop={0} // Set to 0 for infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
            <p className="title-font sm:text-xl text-xl mb-4 font-medium font-quicksand text-gray-300 my-8">
              Currently Working on Projects
            </p>
            <button className="w-[12rem] p-3 font-quicksand animate-shimmer items-center justify-center border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-custom-green transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-8">
              <a href={CV} download="My CV" target="_blank">
                Download CV
              </a>
            </button>
            <SocialLinks />
          </div>
          <div className="">
            <LottieAni />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
