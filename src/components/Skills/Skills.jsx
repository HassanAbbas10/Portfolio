/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaDatabase, FaLayerGroup, FaBriefcase, FaCloud } from "react-icons/fa";
import {
  SiReact, SiCss, SiTailwindcss, SiJavascript, SiNodedotjs,
  SiMongodb, SiPostgresql, SiRedux, SiApifox,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  React: SiReact, CSS: SiCss, Tailwind: SiTailwindcss, JavaScript: SiJavascript,
  Node: SiNodedotjs, API: SiApifox, MongoDB: SiMongodb, PostgreSQL: SiPostgresql,
  Redux: SiRedux, Database: FaDatabase, Cloud: FaCloud, Backend: FaLayerGroup, Frontend: FaBriefcase,
};

const SkillCircle = ({ skill, index }) => {
  const SkillIcon = iconMap[skill.name] || FaCode;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="w-32 h-32 p-2 flex flex-col items-center justify-center rounded-full bg-[#0a0a0c] border border-white/[0.12] hover:border-white/[0.22] transition-colors duration-300"
    >
      <div className="relative mb-3 w-24 h-24" style={{ color: skill.bg }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.15"
          />
          <motion.path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            initial={{ strokeDasharray: "0, 100" }}
            whileInView={{ strokeDasharray: `${skill.level}, 100` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: index * 0.07 + 0.4 }}
          />
        </svg>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.07 + 0.15, duration: 0.3 }}
        >
          <SkillIcon className="w-7 h-7" />
        </motion.div>
      </div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.07 + 0.25, duration: 0.3 }}
      >
        <p className="text-sm font-bold text-[#fcfdff] font-helvetica leading-none mb-1">{skill.name}</p>
        <p className="text-[10px] text-[rgba(252,253,255,0.45)] font-helvetica">{skill.level}%</p>
      </motion.div>
    </motion.div>
  );
};

const Skills = ({ skilles }) => {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        y: -50, ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", end: "bottom top", scrub: 1.2,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black py-24 overflow-hidden">
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-x-0 top-0 h-[440px]"
        style={{ background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(17,255,153,0.07), transparent)" }}
      />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
        >
          <p className="text-[#9DB4C0] font-monument font-light text-[10px] uppercase tracking-[0.28em] mb-4">Skills</p>
          <h2 className="font-monument text-[clamp(1.6rem,4vw,2.8rem)] font-black leading-[1.0] tracking-[-0.01em] text-[#fcfdff] uppercase">
            Technical Stack
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
          {skilles.map((skill, index) => (
            <SkillCircle key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
