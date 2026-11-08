import { ChevronDown, MapPin } from "lucide-react";
import { experiences } from "../utils/projects";

const companyMarks = {
  "Developer Tag": { initials: "DT", className: "company-mark-developer" },
  "Void Soft Technologies": { initials: "VS", className: "company-mark-void" },
  Agentech: { initials: "A", className: "company-mark-agentech" },
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
        const mark = companyMarks[experience.company];

        return (
          <details key={experience.id} className="experience-item" open={index === 0}>
            <summary className="experience-row">
              <span className="experience-date">{experience.duration}</span>
              <span className={`company-mark ${mark.className}`} aria-hidden="true">
                {mark.initials}
              </span>
              <span className="experience-role">
                <span className="experience-title">{experience.title}</span>
                <span className="experience-company">{experience.company}</span>
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
