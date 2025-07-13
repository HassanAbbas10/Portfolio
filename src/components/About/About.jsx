import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import LottieAni from '../Lottie/LottieAni'
import { words } from '../utils/projects';
import CV from '../../assets/CV.pdf'
import SocialLinks from '../Socials/SocialLinks ';
const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.4
      }
    }
  };

  return (
    <>
    <motion.section 
      className="w-full h-screen mt-10 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className=" mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold uppercase text-custom-teal font-quicksand"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-10">
          <motion.div 
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center"
            variants={itemVariants}
          >
            <motion.h1 
              className="title-font sm:text-4xl text-3xl mb-4 font-medium font-quicksand text-gray-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Hello, My Name is
              Hassan Abbas
            </motion.h1>
            <motion.h1 
              className="text-3xl text-custom-orange font-quicksand font-extrabold"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Typewriter
                words={words}
                loop={0} // Set to 0 for infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.h1>
            <motion.p 
              className="title-font sm:text-xl text-xl mb-4 font-medium font-quicksand text-gray-300 my-8"
              variants={itemVariants}
            >
              Currently Working on Projects and My focus is on MERN Stack
            </motion.p>
            <motion.a 
              href={CV} 
              download="My CV" 
              target="_blank"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
            <button className="w-[12rem] p-3 font-quicksand animate-shimmer items-center justify-center border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-custom-green transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-8">
              
                Download CV
              
            </button>
            </motion.a>
            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            variants={imageVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <LottieAni />
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default About;
