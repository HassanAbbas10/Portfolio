import { ArrowDown, ArrowUpRight, Building2, Globe2, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { socialLinks } from "../utils/projects";
import PropTypes from "prop-types";

const About = ({ theme }) => (
  <section id="about" className="hero-section" aria-labelledby="profile-name">
    <div className="hero-art" aria-hidden="true">
      <img
        key={theme}
        src={`${theme === "dark" ? "/projects/ponyo-loves-ham.gif" : "/projects/sleepy-cat-animation.gif"}?theme=${theme}`}
        alt=""
        width="1360"
        height="360"
      />
      <span className="art-monogram">ha.</span>
      <span className="art-caption">A little curiosity. A lot of building.</span>
      <span className="art-spark">✳</span>
    </div>

    <div className="profile-heading">
      <div>
        <div className="availability"><span />Available for work</div>
        <h1 id="profile-name">Hassan Abbas<span>.</span></h1>
        <p className="profile-role">Software engineer. Thoughtful builder.</p>
      </div>
      <a className="profile-photo-link" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Meet Hassan on LinkedIn">
        <img className="profile-photo" src="/profile.webp" alt="Hassan Abbas" width="96" height="96" />
        <span className="profile-photo-arrow"><ArrowUpRight size={13} aria-hidden="true" /></span>
      </a>
    </div>

    <div className="profile-copy">
      <p className="profile-lead">I turn ideas into things you can actually use.</p>
      <p>I’m Hassan, a full-stack developer based in Pakistan. I build web apps with React, Next.js, and Node.js, with a soft spot for thoughtful interfaces and the details that make a product feel right.</p>
      <p>Currently building AI-powered platforms at <a href="#experience"><Building2 size={12} aria-hidden="true" />Developer Tag</a>. On the side, I’m working on <a href="https://dueradar.cc" target="_blank" rel="noopener noreferrer"><Globe2 size={12} aria-hidden="true" />DueRadar <ArrowUpRight size={12} aria-hidden="true" /></a> and <a href="https://bundle-back.vercel.app/" target="_blank" rel="noopener noreferrer"><Globe2 size={12} aria-hidden="true" />BundleBack <ArrowUpRight size={12} aria-hidden="true" /></a>. Always up for an interesting problem.</p>
    </div>

    <div className="profile-bottom">
      <div className="profile-socials" aria-label="Find me online">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} aria-hidden="true" /></a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} aria-hidden="true" /></a>
        <a href={socialLinks.email} aria-label="Email Hassan"><Mail size={18} aria-hidden="true" /></a>
        <span className="social-divider" />
        <span className="profile-location"><MapPin size={13} aria-hidden="true" />Pakistan</span>
      </div>
      <a className="text-link view-work" href="#projects">Explore my work <ArrowDown size={13} aria-hidden="true" /></a>
    </div>
  </section>
);

export default About;

About.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};
