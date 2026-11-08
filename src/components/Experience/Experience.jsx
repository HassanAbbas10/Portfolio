import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import { companies, experiences } from "../utils/projects";

const accordionAnimations = new WeakMap();
const toggleExperience = (event) => {
  if (event.target.closest("a")) return;
  event.preventDefault();
  const details = event.currentTarget.parentElement;
  const previous = accordionAnimations.get(details);
  const opening = previous ? !previous.opening : !details.open;
  const startHeight = details.getBoundingClientRect().height;
  previous?.animation.cancel();
  details.open = true;
  const endHeight = opening ? details.getBoundingClientRect().height : event.currentTarget.getBoundingClientRect().height;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    details.open = opening;
    return;
  }
  const animation = details.animate(
    [{ height: `${startHeight}px`, overflow: "hidden" }, { height: `${endHeight}px`, overflow: "hidden" }],
    { duration: 400, easing: "cubic-bezier(.22, 1, .36, 1)" },
  );
  accordionAnimations.set(details, { animation, opening });
  animation.onfinish = () => {
    details.open = opening;
    accordionAnimations.delete(details);
  };
};

const Experience = () => (
  <section id="experience" className="portfolio-section experience-section" aria-labelledby="experience-heading">
    <div className="section-heading">
      <div>
        <span className="eyebrow">THE JOURNEY</span>
        <h2 id="experience-heading">Where I’ve been.</h2>
      </div>
      <span className="section-note">Always building. Always learning.</span>
    </div>

    <div className="experience-list">
      {experiences.map((experience, index) => {
        const company = companies[experience.company];

        return (
          <details key={experience.id} className="experience-item" open={index === 0}>
            <summary className="experience-row" onClick={toggleExperience}>
              <span className="experience-date">{experience.duration}</span>
              <span className="company-logo" aria-hidden="true">
                <img src={company.logo} alt="" width="34" height="34" loading="lazy" decoding="async" />
              </span>
              <span className="experience-role">
                <span className="experience-title">{experience.title}</span>
                {company.linkedin ? (
                  <a className="experience-company" href={company.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${experience.company} on LinkedIn`}>
                    {experience.company}<ArrowUpRight size={10} aria-hidden="true" />
                  </a>
                ) : <span className="experience-company">{experience.company}</span>}
              </span>
              <ChevronDown className="experience-chevron" size={17} aria-hidden="true" />
            </summary>

            <div className="experience-detail">
              <span className="experience-location">
                <MapPin size={13} aria-hidden="true" />
                {experience.location}
              </span>
              <p>{experience.description}</p>
              <ul className="experience-achievements">
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <ul className="tech-tags" aria-label="Technologies used">
                {experience.technologies.map((technology) => (
                  <li className="tech-tag" key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </details>
        );
      })}
    </div>
  </section>
);

export default Experience;
