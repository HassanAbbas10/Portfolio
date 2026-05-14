import { socialLinks } from "../utils/projects";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const links = [
  { key: "email", icon: Mail, label: "Email" },
  { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { key: "github", icon: Github, label: "GitHub" },
  { key: "instagram", icon: Instagram, label: "Instagram" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2.5">
      {links
        .filter(({ key }) => socialLinks[key])
        .map(({ key, icon: Icon, label }) => (
          <a
            key={key}
            href={socialLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 flex items-center justify-center rounded-md border border-white/[0.14] bg-[#101012] text-[rgba(252,253,255,0.6)] hover:text-[#fcfdff] hover:border-white/[0.28] transition-colors duration-200"
          >
            <Icon size={15} />
          </a>
        ))}
    </div>
  );
};

export default SocialLinks;
