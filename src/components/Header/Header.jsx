import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "stack", label: "Stack" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "contact", label: "Contact" },
];

const silverLine =
  "linear-gradient(90deg, transparent 0%, rgba(180,185,195,0.12) 10%, rgba(210,215,225,0.45) 35%, rgba(235,238,245,0.65) 50%, rgba(210,215,225,0.45) 65%, rgba(180,185,195,0.12) 90%, transparent 100%)";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main bar */}
      <div
        className={`h-16 flex items-center transition-all duration-300 ${
          scrolled ? "bg-black/96 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 w-full flex items-center justify-between gap-8">
          {/* Wordmark */}
          <span className="font-monument font-black text-[13px] text-[#fcfdff] uppercase tracking-[0.22em] select-none shrink-0">
            Hassan Abbas
          </span>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={600}
                offset={-64}
                className="font-monument font-light text-[10px] text-[rgba(252,253,255,0.45)] uppercase tracking-[0.22em] cursor-pointer hover:text-[#fcfdff] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-64}
            className="hidden md:inline-flex items-center h-8 px-4 shrink-0 rounded border border-white/[0.18] font-monument font-black text-[10px] text-[#fcfdff] uppercase tracking-[0.18em] cursor-pointer hover:bg-white/[0.06] transition-colors duration-200"
          >
            Hire Me
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] w-5 text-[#fcfdff]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px bg-current transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Silver lining */}
      <div
        className={`h-px w-full transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
        style={{ background: silverLine }}
      />

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="bg-black/98 backdrop-blur-md border-b border-white/[0.06] py-6 px-6 md:hidden">
          {/* Silver accent */}
          <div className="h-px mb-6" style={{ background: silverLine }} />
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={600}
                offset={-64}
                onClick={() => setMenuOpen(false)}
                className="font-monument font-light text-xs text-[rgba(252,253,255,0.6)] uppercase tracking-[0.22em] cursor-pointer hover:text-[#fcfdff] transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-64}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center h-9 px-5 border border-white/[0.18] rounded font-monument font-black text-[10px] text-[#fcfdff] uppercase tracking-[0.18em] cursor-pointer hover:bg-white/[0.06] transition-colors"
              >
                Hire Me
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
