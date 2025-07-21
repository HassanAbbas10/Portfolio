import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { lazy, Suspense, memo } from 'react';
import { words } from '../utils/projects';

// Lazy load heavy components
const LottieAni = lazy(() => import('../Lottie/LottieAni'));
const SocialLinks = lazy(() => import('../Socials/SocialLinks '));

const About = memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        duration: 0.2, // Reduced from 0.3
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced from 50
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Slightly increased for smoothness
        ease: "easeOut" // More performant than spring
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 }, // Removed rotate, reduced scale
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="w-full h-screen mt-10 bg-gradient-to-br from-gray-950 via-black to-gray-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Trigger earlier
      variants={containerVariants}
    >
      <div className="mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold uppercase text-fuchsia-50 font-quicksand pt-8"
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
              whileHover={{ scale: 1.01 }} // Reduced from 1.02
              transition={{ duration: 0.15 }} // Faster hover
            >
              Hello, My Name is Hassan Abbas
            </motion.h1>
            
            <motion.div 
              className="text-3xl text-custom-orange font-quicksand font-extrabold h-12" // Fixed height prevents layout shift
              variants={itemVariants}
            >
              <Typewriter
                words={words}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.div>
            
            <motion.p 
              className="title-font sm:text-xl text-xl mb-4 font-medium font-quicksand text-gray-300 my-8"
              variants={itemVariants}
            >
              Currently Working on Projects and My focus is on MERN Stack
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Suspense fallback={
                <div className="w-32 h-8 bg-gray-800 animate-pulse rounded" />
              }>
                <SocialLinks />
              </Suspense>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }} // Reduced from 1.05, removed rotate
            transition={{ duration: 0.2 }}
          >
            <Suspense fallback={
              <div className="w-full aspect-square bg-gray-800 animate-pulse rounded-lg" />
            }>
              <LottieAni />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

About.displayName = 'About';

export default About;