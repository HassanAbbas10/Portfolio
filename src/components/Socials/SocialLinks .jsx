

import { socialLinks } from "../../components/utils/projects";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 text-base sm:text-lg">
    {socialLinks.email && (
      <button
        className="bg-custom-orange border border-custom-teal rounded-full mb-2 sm:mb-0"
      
      >
        <span className="p-1 sm:p-2">
          <a href={socialLinks.email} target="_blank">
          <EmailOutlinedIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
          </a>
        </span>
      </button>
    )}
    {socialLinks.linkedin && (
      <button
        className="bg-blue-400 rounded-full mb-2 sm:mb-0"

      >
        <span className="p-1 sm:p-2">
          <a href={socialLinks.linkedin} target="_blank">
          <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
          </a>
        </span>
      </button>
    )}
    {socialLinks.github && (
      <button
        className="bg-slate-600 rounded-full mb-2 sm:mb-0"
       
      >
       <span className="p-1 sm:p-2">
          <a href={socialLinks.github} target="_blank">
          <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
          </a>
        </span>
      </button>
    )}
    {socialLinks.instagram && (
      <button
        className="bg-pink-400 rounded-full mb-2 sm:mb-0"
      >
        <span className="p-1 sm:p-2">
          <a href={socialLinks.instagram} target="_blank">
          <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
          </a>
        </span>
      </button>
    )}
  </div>
  );
};

export default SocialLinks;