import { motion } from "framer-motion";
import { lazy, Suspense, memo, useEffect, useRef } from "react";
import { socialLinks } from "../utils/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LottieAni = lazy(() => import("../Lottie/LottieAni"));
const SocialLinks = lazy(() => import("../Socials/SocialLinks "));

gsap.registerPlugin(ScrollTrigger);

const About = memo(() => {
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: glowRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center overflow-hidden pt-16">
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px]"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 30% 0%, rgba(255,128,31,0.13), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 80% 0%, rgba(59,158,255,0.07), transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-[#9DB4C0] font-monument font-light text-[10px] uppercase tracking-[0.28em] mb-5">
            Software Engineer · MERN Stack
          </p>

          <h1 className="font-monument text-[clamp(2.2rem,4.8vw,3.8rem)] font-black leading-[1.0] text-[#fcfdff] mb-6 uppercase">
            Hassan Abbas
          </h1>

          <motion.p
            className="text-[rgba(252,253,255,0.65)] text-lg leading-relaxed mb-9 max-w-[460px] font-helvetica"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            I&apos;ve been building web apps for a few years. React on the
            front, Node and MongoDB on the back. I care about code that&apos;s
            easy to read, products that feel fast, and not shipping half-baked
            features. Currently open to freelance and full-time work.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-5 bg-[#fcfdff] text-black font-monument font-black text-[10px] uppercase tracking-[0.18em] rounded-md inline-flex items-center hover:bg-[#e8eef8] transition-colors duration-200"
            >
              View GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-5 bg-transparent text-[#fcfdff] font-monument font-black text-[10px] uppercase tracking-[0.18em] rounded-md inline-flex items-center border border-white/[0.15] hover:border-white/[0.35] transition-colors duration-200"
            >
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.4 }}
          >
            <Suspense fallback={null}>
              <SocialLinks />
            </Suspense>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <Suspense
            fallback={
              <div className="w-full max-w-md aspect-square bg-[#0a0a0c] rounded-xl animate-pulse" />
            }
          >
            <LottieAni />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
