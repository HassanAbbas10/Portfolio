
import { Button } from "../../components/ui/button";
import { socialLinks } from "../../components/utils/projects";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 text-base sm:text-lg">
    {socialLinks.email && (
      <Button
        className="bg-black border border-custom-teal rounded-full mb-2 sm:mb-0"
        rel="noopener"
        aria-label="URL"
        href={socialLinks.url}
        target="_blank"
      >
        <span className="p-1 sm:p-2">
          <EmailOutlinedIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
        </span>
      </Button>
    )}
    {socialLinks.linkedin && (
      <Button
        className="bg-blue-400 rounded-full mb-2 sm:mb-0"
        rel="noopener"
        aria-label="Linkedin"
        href={socialLinks.linkedin}
        target="_blank"
      >
        <span className="p-1 sm:p-2">
          <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
        </span>
      </Button>
    )}
    {socialLinks.github && (
      <Button
        className="bg-slate-600 rounded-full mb-2 sm:mb-0"
        href={socialLinks.github}
        rel="noopener"
        aria-label="Github"
        target="_blank"
      >
        <span className="p-1 sm:p-2">
          <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
        </span>
      </Button>
    )}
    {socialLinks.instagram && (
      <Button
        className="bg-pink-400 rounded-full mb-2 sm:mb-0"
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
      >
        <span className="p-1 sm:p-2">
          <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
        </span>
      </Button>
    )}
  </div>
  );
};

export default SocialLinks;