
import { Button } from "../../components/ui/button";
import { socialLinks } from "../../components/utils/projects";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
const SocialLinks = () => {
  return (
    <div className=" space-x-5 text-lg">
      {socialLinks.email && (
        <Button
          className="bg-black border border-custom-teal rounded-full "
         
          rel="noopener"
          aria-label="URL"
          href={socialLinks.url}
          target="_blank"
        >
          <span className="py-1">
          <EmailOutlinedIcon/>
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="bg-blue-400 rounded-full ml-1"
          
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="py-1">
           <LinkedInIcon/>
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="bg-slate-600 rounded-full ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="py-1">
            <GitHubIcon/>
          </span>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="bg-pink-400 rounded-full"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <span className="py-1">
            <InstagramIcon/>
          </span>
        </Button>
      )}
     
    </div>
  );
};

export default SocialLinks;