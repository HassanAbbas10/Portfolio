import { useEffect, useId, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Github, Mail } from "lucide-react";
import { socialLinks } from "../utils/projects";
import { Ghost, Kid, PirateCat, Yeti } from "./DoodleCharacters";
import "./Footer.css";

const letters = [..."HASSAN"];
const crew = [
  { name: "Pixel", kind: "yeti", Character: Yeti, says: "Big ideas. Tiny details." },
  { name: "Juno", kind: "kid", Character: Kid, says: "Always making something." },
  { name: "Boo", kind: "ghost", Character: Ghost, says: "Just saying hello!" },
  { name: "Patch", kind: "cat", Character: PirateCat, says: "Ready for the next adventure." },
];
const linkGroups = [
  { title: "Explore", links: [{ label: "About me", href: "#about" }, { label: "My projects", href: "#projects" }, { label: "Experience", href: "#experience" }, { label: "My toolkit", href: "#stack" }] },
  { title: "On the workbench", links: [{ label: "DueRadar", href: "https://dueradar.cc/" }, { label: "BundleBack", href: "https://bundle-back.vercel.app/" }, { label: "More on GitHub", href: socialLinks.github }] },
  { title: "Say hello", links: [{ label: "Email me", href: socialLinks.email }, { label: "LinkedIn", href: socialLinks.linkedin }, { label: "GitHub", href: socialLinks.github }] },
];

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [chatting, setChatting] = useState(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={`doodle-footer${visible ? " is-visible" : ""}`} aria-label="HASSAN — portfolio footer">
      <div className="doodle-footer-inner">
        <div className="doodle-footer-top">
          <div className="doodle-intro">
            <a className="doodle-brand" href="#about" aria-label="HASSAN, back to top">
              <span className="doodle-brand-icon" aria-hidden="true"><Ghost /></span>
              <span>HASSAN<span className="doodle-brand-dot">.</span></span>
            </a>
            <p>A curious mind, a few lines of code, and a little room for play. Building useful things, one idea at a time.</p>
          </div>
          <nav className="doodle-footer-links" aria-label="Footer navigation">
            {linkGroups.map((group) => (
              <div className="doodle-link-group" key={group.title}>
                <h2>{group.title}</h2>
                <ul>{group.links.map(({ label, href }) => {
                  const external = href.startsWith("https://");
                  return <li key={label}><a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{label}{external && <ArrowUpRight size={11} aria-hidden="true" />}</a></li>;
                })}</ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="doodle-scene">
          <svg className="doodle-wordmark" viewBox="0 0 1200 370" role="img" aria-labelledby={`${id}-wordmark-title`}>
            <title id={`${id}-wordmark-title`}>HASSAN</title>
            <defs>
              <mask id={`${id}-brush`} x="0" y="0" width="1200" height="370" maskUnits="userSpaceOnUse">
                <rect width="1200" height="370" fill="white" />
                {Array.from({ length: 72 }, (_, index) => <path key={index} d={`M${(index * 137 + 23) % 1160} ${139 + (index * 31) % 191}l${18 + (index * 37) % 123} ${index % 2 ? -1.8 : 1.3}`} stroke="black" strokeWidth={0.6 + (index % 4) * 0.5} />)}
                {Array.from({ length: 90 }, (_, index) => <circle key={index} cx={(index * 131 + 15) % 1150} cy={145 + (index * 43) % 181} r={0.45 + (index % 3) * 0.35} fill="black" />)}
              </mask>
            </defs>
            <g mask={`url(#${id}-brush)`} fill="currentColor">
              {letters.map((letter, index) => <text key={`${letter}-${index}`} className="doodle-letter" x={79 + index * 174} y="326" textLength="170" lengthAdjust="spacingAndGlyphs" style={{ "--letter-index": index }}>{letter}</text>)}
            </g>
            <g className="doodle-ground" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 333c104 3 149-4 249-1s194-2 300 0 194-3 286 0 218 2 331-1" />
              <path d="m49 330 2-9 2 10m6 0 1-13 3 13m1026 1 3-9 1 9m8-1 1-15 3 15M409 330l2-8 2 8m5 0 1-13 3 13" />
              <path d="M140 345c-8-6-16-1-10 3 8 5 16 1 10-3Zm106-5c-5-3-11 0-7 3 5 3 12 0 7-3Zm22 9c-7-4-13-1-9 3 6 5 15 0 9-3Zm430-5c-7-3-14 0-9 4 6 4 15 0 9-4Zm283 4c-8-6-18-1-11 5 7 4 18-1 11-5Zm132-7c-7-4-15 1-9 5 7 4 15-1 9-5Z" />
            </g>
          </svg>

          <svg className="doodle-sky" viewBox="0 0 1200 370" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <g className="doodle-float float-star"><path d="m970 107 3-9 5 8 10 1-8 6 2 10-9-5-8 5 1-10-7-6Z" fill="#efc555" /></g>
            <g className="doodle-float float-spark"><path d="m654 46 3-12 6 11 12 3-11 6-3 12-5-11-13-4Z" fill="#aacdd2" /></g>
            <g className="doodle-float float-bolt"><path d="m794 73-9 16h9l-3 13 15-20h-10l5-12Z" fill="#efc555" /></g>
            <g className="doodle-float float-squiggle"><path d="M174 99c-11-11-2-19 4-11 6 8-1 17 5 20s10-7 7-11" stroke="#7e9d85" /></g>
            <g className="doodle-float float-cross"><path d="m1090 71 8 9m0-9-8 9" stroke="#cc7750" /></g>
            <g className="doodle-bird">
              <path d="M286 146c-24-23-5-49 15-44 18 3 21 27 9 38-7 7-17 8-24 6Z" fill="var(--doodle-paper)" />
              <path d="m310 117 16 6-15 5Z" fill="#efb159" /><path d="m280 108 9-27 17 26Z" fill="#de8b50" /><path d="m285 94 16 1M276 140l-15 4c3-9 9-11 15-10m12 12 1 11m10-12 1 11m-14 1h7m4-1h7" />
              <circle cx="299" cy="117" r="4" fill="currentColor" /><circle cx="300" cy="116" r="1" fill="var(--doodle-paper)" /><path d="M283 125c-7-2-7 9 0 10 7-2 6-8 0-10Z" />
              <circle cx="290" cy="78" r="4" fill="var(--doodle-paper)" />
            </g>
            <g className="doodle-mushroom">
              <path d="m370 330 1-28h17l1 28Z" fill="var(--doodle-paper)" /><path d="M348 303c-2-36 58-43 63-3-18 6-44 8-63 3Z" fill="#e97e72" />
              <circle cx="364" cy="288" r="4" fill="var(--doodle-paper)" /><circle cx="384" cy="282" r="3" fill="var(--doodle-paper)" /><circle cx="397" cy="295" r="4" fill="var(--doodle-paper)" /><circle cx="377" cy="312" r="1.4" fill="currentColor" /><circle cx="383" cy="312" r="1.4" fill="currentColor" /><path d="M377 318q3 4 6 0" />
            </g>
          </svg>

          {crew.map(({ name, kind, Character, says }) => (
            <button key={kind} type="button" className={`doodle-crew doodle-crew-${kind}`} aria-label={`Meet ${name}, the ${kind}`} aria-describedby={`${id}-${kind}`} aria-expanded={chatting === kind} onClick={() => setChatting(chatting === kind ? null : kind)} onBlur={() => setChatting(null)}>
              <span className="doodle-character"><Character /></span>
              <span className="doodle-speech" id={`${id}-${kind}`} role="tooltip"><strong>{name}</strong>{says}</span>
            </button>
          ))}
        </div>

        <div className="doodle-signoff">
          <p>Good things start with a little curiosity.</p>
          <div className="doodle-actions">
            <a className="doodle-button doodle-button-outline" href={socialLinks.github} target="_blank" rel="noopener noreferrer"><Github size={15} aria-hidden="true" />Explore my work<ArrowUpRight size={13} aria-hidden="true" /></a>
            <a className="doodle-button doodle-button-solid" href={socialLinks.email}><Mail size={15} aria-hidden="true" />Let’s talk</a>
          </div>
        </div>

        <div className="doodle-footer-bottom">
          <p>© {new Date().getFullYear()} HASSAN ABBAS<span>Made with care. And a little character.</span></p>
          <div className="doodle-bottom-links"><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a className="doodle-back-top" href="#about">Back to top<ArrowUp size={14} aria-hidden="true" /></a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
