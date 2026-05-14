import { motion } from "framer-motion";
import { lazy, Suspense, memo } from "react";
import BlurText from "../ui/TextAnimations/BlurText/BlurText";
import { BorderBeam } from "../ui/border-beam";

const LottieAni = lazy(() => import("../Lottie/LottieAni"));
const SocialLinks = lazy(() => import("../Socials/SocialLinks "));

const items = [
  { label: "I am a Software Engineer", colorFrom: "#ffaa40", colorTo: "#9c40ff", delay: 0 },
  { label: "A Problem Solver", colorFrom: "#40ffaa", colorTo: "#4079ff", delay: 2 },
  { label: "Interested in System Design and Scalable Architectures", colorFrom: "#ff4040", colorTo: "#ffaa40", delay: 4 },
];

const About = memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.2, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="w-full h-screen mt-10 bg-gradient-to-br from-gray-950 via-black to-gray-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto text-center">
        <motion.h2
          className="pt-8 text-4xl font-bold uppercase text-fuchsia-50 font-quicksand"
          variants={itemVariants}
        >
          <BlurText
            text="About"
            delay={150}
            animateBy="letters"
            direction="top"
            className="flex items-center justify-center mb-8 text-3xl"
          />
        </motion.h2>

        <div className="container flex flex-col items-center px-5 py-10 mx-auto md:flex-row">
          <motion.div
            className="flex flex-col items-center mb-6 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
            variants={itemVariants}
          >
            <motion.h1
              className="mb-0 text-3xl font-medium text-gray-300 title-font sm:text-4xl font-quicksand"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.15 }}
            >
              <BlurText
                text="Hello, My Name is Hassan Abbas"
                delay={150}
                animateBy="words"
                direction="top"
                className="flex items-center justify-center text-3xl"
              />
            </motion.h1>

            {/* BorderBeam items */}
            <motion.div className="flex flex-col items-start gap-3 mt-4 mb-4" variants={itemVariants}>
              {items.map(({ label, colorFrom, colorTo, delay }, i) => (
                <div
                  key={i}
                  className="relative rounded-lg px-4 py-2.5 bg-gray-900/50 border border-transparent"
                >
                  <BorderBeam
                    size={60}
                    duration={6}
                    delay={delay}
                    colorFrom={colorFrom}
                    colorTo={colorTo}
                    borderWidth={1.5}
                  />
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    <span className="font-mono text-sm tracking-wide text-gray-300">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              className="my-8 mb-4 text-xl font-medium text-gray-300 title-font sm:text-xl font-quicksand"
              variants={itemVariants}
            >
              <BlurText
                text="Currently Working on Projects and My focus is on MERN Stack"
                delay={150}
                animateBy="words"
                direction="top"
                className="flex items-center justify-center text-xl"
              />
            </motion.p>

            <motion.div variants={itemVariants}>
              <Suspense fallback={<div className="w-32 h-8 bg-gray-800 rounded animate-pulse" />}>
                <SocialLinks />
              </Suspense>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Suspense fallback={<div className="w-full bg-gray-800 rounded-lg aspect-square animate-pulse" />}>
              <LottieAni />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

About.displayName = "About";

export default About;
