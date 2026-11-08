import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, FolderOpen, Home, Moon, Sun } from "lucide-react";
import { socialLinks } from "../utils/projects";

const navigation = [
  { href: "#about", label: "About", Icon: Home },
  { href: "#projects", label: "Projects", Icon: FolderOpen },
  { href: "#experience", label: "Experience", Icon: BriefcaseBusiness },
];

const Header = ({ theme, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-12% 0px -55% 0px", threshold: 0 });
    document.querySelectorAll("main > section").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="floating-dock">
      <nav className="dock-inner" aria-label="Main navigation">
        <a href="#about" className="dock-identity" aria-label="Hassan Abbas, back to top">
          <img src="/profile.webp" alt="" width="28" height="28" />
          <span>Hassan Abbas</span>
        </a>
        <span className="dock-divider identity-divider" />
        {navigation.map(({ href, label, Icon }) => (
          <a key={href} href={href} className={`dock-icon ${activeSection === href.slice(1) ? "is-active" : ""}`} aria-label={label} aria-current={activeSection === href.slice(1) ? "location" : undefined}>
            <Icon size={16} aria-hidden="true" /><span className="dock-tooltip">{label}</span>
          </a>
        ))}
        <span className="dock-divider" />
        <button type="button" className="dock-icon" onClick={onToggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
          {theme === "light" ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
          <span className="dock-tooltip">{theme === "light" ? "Dark mode" : "Light mode"}</span>
        </button>
        <a className="dock-contact" href={socialLinks.email}>Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
      </nav>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default Header;
