import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { memo, useEffect, useRef } from "react";
import { experiences } from "../utils/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = memo(() => {
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

  return (
    <section ref={sectionRef} className="relative bg-black py-24 overflow-hidden">
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(59,158,255,0.1), transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[#9DB4C0] font-monument font-light text-[10px] uppercase tracking-[0.28em] mb-4">
            Career
          </p>
          <h2 className="font-monument text-[clamp(1.6rem,4vw,2.8rem)] font-black leading-[1.0] tracking-[-0.01em] text-[#fcfdff] uppercase">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-white/[0.07] md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative mb-10 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.38, delay: index * 0.04 }}
            >
              <div className="absolute left-[11px] top-4 w-2.5 h-2.5 rounded-full bg-[#fcfdff] z-10 md:left-1/2 md:-translate-x-[5px]" />

              <div
                className={`pl-10 md:pl-0 md:flex ${
                  index % 2 === 0
                    ? "md:pr-[calc(50%+28px)]"
                    : "md:pl-[calc(50%+28px)]"
                }`}
              >
                <div className="bg-[#0a0a0c] border border-white/[0.12] rounded-xl p-6 w-full hover:border-white/[0.22] transition-colors duration-300">
                  <div className="mb-4">
                    <h3 className="text-[#fcfdff] font-helvetica font-bold text-base mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#3b9eff] text-sm mb-2 font-helvetica font-bold">
                      <Building2 size={13} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-[#888e90] text-xs font-helvetica">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-[rgba(252,253,255,0.6)] text-sm leading-relaxed mb-4 font-helvetica">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[rgba(252,253,255,0.55)] text-xs leading-relaxed font-helvetica"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#101012] border border-white/[0.07] text-[rgba(252,253,255,0.55)] text-[11px] px-2.5 py-1 rounded-full font-helvetica"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
export default Experience;
