/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import projects from "../utils/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiNextdotjs,
  SiPython, SiDjango, SiTypescript, SiGraphql, SiDocker, SiMongodb,
  SiPostgresql, SiRedux, SiExpress, SiAxios, SiReactrouter, SiCss,
  SiStripe, SiAndroidstudio, SiFirebase,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const techIcons = {
  React: SiReact, Tailwind: SiTailwindcss, JavaScript: SiJavascript,
  Node: SiNodedotjs, NextJS: SiNextdotjs, Python: SiPython, Django: SiDjango,
  TypeScript: SiTypescript, GraphQL: SiGraphql, Docker: SiDocker,
  MongoDB: SiMongodb, PostgreSQL: SiPostgresql, Redux: SiRedux,
  Express: SiExpress, Axios: SiAxios, ReactRouter: SiReactrouter, CSS: SiCss,
  Stripe: SiStripe, Android: SiAndroidstudio, Firebase: SiFirebase,
};

const ProjectCard = ({ proj, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: i * 0.04 }}
  >
    <CardContainer containerClassName="py-2 w-full" className="w-full">
      <CardBody className="h-auto w-full bg-[#0a0a0c] border border-white/[0.12] rounded-xl flex flex-col hover:border-white/[0.22] transition-colors duration-300">
        {/* Thumbnail */}
        <CardItem translateZ={30} className="w-full overflow-hidden rounded-t-xl flex-shrink-0">
          <img
            src={proj.picture || "/placeholder.svg"}
            className="w-full h-44 object-cover transition-transform duration-500 hover:scale-105"
            alt={proj.heading}
          />
        </CardItem>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          {/* Title + status */}
          <CardItem translateZ={50} className="w-full mb-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[#fcfdff] font-helvetica font-bold text-sm leading-snug">
                {proj.heading}
              </h3>
              <span
                className={`flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full font-helvetica ${
                  proj.status === "Completed"
                    ? "bg-[#11ff99]/10 text-[#11ff99] border border-[#11ff99]/20"
                    : "bg-[#ffc53d]/10 text-[#ffc53d] border border-[#ffc53d]/20"
                }`}
              >
                {proj.status}
              </span>
            </div>
          </CardItem>

          {/* Description */}
          <CardItem translateZ={35} className="w-full mb-4 flex-1">
            <p className="text-[rgba(252,253,255,0.45)] text-xs leading-relaxed font-helvetica line-clamp-2">
              {proj.description}
            </p>
          </CardItem>

          {/* Tech icons */}
          <CardItem translateZ={40} className="w-full mb-4">
            <div className="flex flex-wrap gap-1.5">
              {proj.technologies.map((tech) => {
                const Icon = techIcons[tech];
                return Icon ? (
                  <div
                    key={tech}
                    title={tech}
                    className="w-7 h-7 flex items-center justify-center rounded bg-[#101012] border border-white/[0.07]"
                  >
                    <Icon className="w-3.5 h-3.5 text-[rgba(252,253,255,0.45)]" />
                  </div>
                ) : null;
              })}
            </div>
          </CardItem>

          {/* CTA */}
          {proj.livelink && proj.livelink !== "none" && (
            <CardItem translateZ={60} className="w-fit">
              <a
                href={proj.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-8 px-3 bg-[#fcfdff] text-black font-monument font-black text-[9px] uppercase tracking-[0.15em] rounded hover:bg-[#e8eef8] transition-colors duration-200"
              >
                <ExternalLink size={11} />
                Live Demo
              </a>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  </motion.div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const availableFilters = ["All", ...new Set(projects.map((p) => p.category).filter(Boolean))];
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={sectionRef} className="relative bg-black py-24 overflow-hidden">
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(255,197,61,0.07), transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[#9DB4C0] font-monument font-light text-[10px] uppercase tracking-[0.28em] mb-4">
            Portfolio
          </p>
          <h2 className="font-monument text-[clamp(1.6rem,4vw,2.8rem)] font-black leading-[1.0] tracking-[-0.01em] text-[#fcfdff] uppercase">
            Selected Work
          </h2>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {availableFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full font-monument font-light text-[10px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-[#fcfdff] text-black"
                  : "bg-[#0a0a0c] text-[rgba(252,253,255,0.6)] border border-white/[0.12] hover:border-white/[0.28] hover:text-[#fcfdff]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filteredProjects.map((proj, i) => (
                <ProjectCard key={`${activeFilter}-${proj.id}`} proj={proj} i={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className="py-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-[rgba(252,253,255,0.45)] font-helvetica text-base mb-4">
                No projects in &ldquo;{activeFilter}&rdquo;
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="h-9 px-5 bg-[#fcfdff] text-black font-monument font-black text-[10px] uppercase tracking-[0.18em] rounded-md hover:bg-[#e8eef8] transition-colors duration-200"
              >
                Show All
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
