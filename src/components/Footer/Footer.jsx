import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "../utils/projects";

const Footer = () => (
  <footer className="site-footer">
    <div><a className="footer-signature" href="#about">Hassan Abbas<span>.</span></a><p>A work in progress. Just like me.</p></div>
    <div className="footer-right"><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">Built with React <ArrowUpRight size={12} aria-hidden="true" /></a><span>© {new Date().getFullYear()} Hassan Abbas</span></div>
  </footer>
);

export default Footer;
