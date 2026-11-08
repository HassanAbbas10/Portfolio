import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { socialLinks } from "../utils/projects";

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState("idle");
  const emailAddress = socialLinks.email.replace(/^mailto:/, "");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
        <h2 id="contact-heading">Let’s make it happen.</h2>
        <p>
          Have an idea, a project, or a role in mind? I’m open to freelance
          projects and full-time opportunities. Let’s talk.
        </p>
        <a className="button button-primary contact-cta" href={socialLinks.email}>
          <Mail size={16} aria-hidden="true" />
          Say hello
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className="contact-details">
        <div className="contact-availability">
          <span className="status-dot" aria-hidden="true" />
          Available for work
        </div>
        <div className="contact-email-row">
          <a className="contact-email" href={socialLinks.email}>{emailAddress}</a>
          <button
            className="icon-button copy-email-button"
            type="button"
            onClick={copyEmail}
            aria-label={copyStatus === "copied" ? "Email address copied" : "Copy email address"}
          >
            {copyStatus === "copied" ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
          </button>
        </div>
        <p className="copy-status" role="status">
          {copyStatus === "copied" && "Email address copied."}
          {copyStatus === "error" && "Couldn’t copy. You can select the email address above."}
        </p>
        <div className="contact-socials">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={15} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
        <span className="contact-discord"><MessageCircle size={14} aria-hidden="true" /> @Orion_dev on Discord</span>
      </div>
    </section>
  );
};

export default Contact;
