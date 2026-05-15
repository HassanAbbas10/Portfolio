import { Link } from "react-scroll";
import { socialLinks } from "../utils/projects";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const silverLine =
  "linear-gradient(90deg, transparent 0%, rgba(180,185,195,0.12) 10%, rgba(210,215,225,0.45) 35%, rgba(235,238,245,0.65) 50%, rgba(210,215,225,0.45) 65%, rgba(180,185,195,0.12) 90%, transparent 100%)";

const navCols = [
  [
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "stack", label: "Stack" },
  ],
  [
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" },
  ],
];

const socials = [
  { key: "email", icon: Mail, label: "Email", href: (s) => s.email },
  { key: "github", icon: Github, label: "GitHub", href: (s) => s.github },
  { key: "linkedin", icon: Linkedin, label: "LinkedIn", href: (s) => s.linkedin },
  { key: "instagram", icon: Instagram, label: "Instagram", href: (s) => s.instagram },
];

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* Silver lining */}
      <div className="h-px" style={{ background: silverLine }} />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">

          {/* Col 1 — Identity */}
          <div className="flex flex-col gap-4">
            <span className="font-monument font-black text-[13px] text-[#fcfdff] uppercase tracking-[0.22em]">
              Hassan Abbas
            </span>
            <p className="font-monument font-light text-[10px] text-[rgba(252,253,255,0.65)] uppercase tracking-[0.18em] leading-relaxed">
              Full-Stack Developer
              <br />
              MERN Stack
            </p>
            <p className="font-helvetica text-[11px] text-[rgba(252,253,255,0.5)]">
              &copy; {new Date().getFullYear()}
            </p>
          </div>

          {/* Col 2 — Nav */}
          <div className="flex gap-10 sm:justify-center">
            {navCols.map((col, ci) => (
              <ul key={ci} className="flex flex-col gap-3">
                {col.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      smooth={true}
                      duration={600}
                      offset={-64}
                      className="font-monument font-light text-[10px] text-[rgba(252,253,255,0.72)] uppercase tracking-[0.18em] cursor-pointer hover:text-[#fcfdff] transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Col 3 — Social + availability */}
          <div className="flex flex-col gap-5 sm:items-end">
            <div className="flex items-center gap-2.5">
              {socials
                .filter(({ key }) => socialLinks[key])
                .map(({ key, icon: Icon, label, href }) => (
                  <a
                    key={key}
                    href={href(socialLinks)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center rounded border border-white/[0.22] text-[rgba(252,253,255,0.72)] hover:text-[#fcfdff] hover:border-white/[0.4] transition-colors duration-200"
                  >
                    <Icon size={13} />
                  </a>
                ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#11ff99] animate-pulse shrink-0" />
              <span className="font-monument font-light text-[9px] text-[rgba(252,253,255,0.68)] uppercase tracking-[0.2em]">
                Available for work
              </span>
            </div>
          </div>

        </div>

        {/* Bottom silver rule */}
        <div className="mt-12 h-px" style={{ background: silverLine }} />
        <p className="mt-4 font-monument font-light text-[9px] text-[rgba(252,253,255,0.45)] uppercase tracking-[0.2em] text-center">
          Built with React &amp; Three.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
