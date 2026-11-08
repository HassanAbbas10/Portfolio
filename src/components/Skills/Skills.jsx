import { FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiDrizzle,
  SiSupabase,
  SiFirebase,
  SiFigma,
  SiStripe,
} from "react-icons/si";
import { Braces } from "lucide-react";

const toolGroups = [
  {
    name: "Frontend",
    description: "Interfaces that look good and feel fast.",
    tools: [
      { name: "React", icon: SiReact, color: "#087ea4" },
      { name: "Next.js", icon: SiNextdotjs, color: "#252525" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#b58c00" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0891b2" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
    ],
  },
  {
    name: "Backend & data",
    description: "APIs, databases, and the systems behind them.",
    tools: [
      { name: "Node.js", icon: SiNodedotjs, color: "#43853d" },
      { name: "Express", icon: SiExpress, color: "#252525" },
      { name: "NestJS", icon: SiNestjs, color: "#d82148" },
      { name: "MongoDB", icon: SiMongodb, color: "#459d45" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Drizzle ORM", icon: SiDrizzle, color: "#59772b" },
      { name: "Supabase", icon: SiSupabase, color: "#238d63" },
      { name: "Firebase", icon: SiFirebase, color: "#e18800" },
      { name: "REST APIs", icon: Braces, color: "#ac6848" },
    ],
  },
  {
    name: "Tools & platforms",
    description: "From the first design to shipping it live.",
    tools: [
      { name: "AWS", icon: FaAws, color: "#b97917" },
      { name: "Git", icon: FaGitAlt, color: "#e34f26" },
      { name: "Figma", icon: SiFigma, color: "#a259ff" },
      { name: "Stripe", icon: SiStripe, color: "#635bff" },
    ],
  },
];

const Skills = () => (
  <section id="stack" className="portfolio-section stack-section" aria-labelledby="stack-heading">
    <div className="section-heading">
      <div>
        <span className="eyebrow">THE TOOLKIT</span>
        <h2 id="stack-heading">Tools I build with.</h2>
      </div>
      <span className="section-note">The right tool for the idea.</span>
    </div>

    <div className="stack-groups">
      {toolGroups.map((group) => (
        <div className="stack-group" key={group.name}>
          <div className="stack-group-heading">
            <h3>{group.name}</h3>
            <p>{group.description}</p>
          </div>
          <ul className="stack-tools" aria-label={group.name}>
            {group.tools.map(({ name, icon: Icon, color }) => (
              <li className="stack-tool" key={name}>
                <Icon className="stack-tool-icon" style={{ color }} aria-hidden="true" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
