import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Globe, LayoutGrid, Rows3 } from "lucide-react";
import PropTypes from "prop-types";
import projects from "../utils/projects";

const Projects = ({ theme }) => {
  const shelfRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [position, setPosition] = useState({ first: true, last: false, index: 1 });

  const updatePosition = () => {
    const shelf = shelfRef.current;
    if (!shelf) return;
    const step = shelf.firstElementChild.getBoundingClientRect().width + 16;
    const last = shelf.scrollLeft + shelf.clientWidth >= shelf.scrollWidth - 8;
    setPosition({
      first: shelf.scrollLeft < 8,
      last,
      index: last ? projects.length : Math.min(projects.length, Math.round(shelf.scrollLeft / step) + 1),
    });
  };

  useEffect(() => {
    const shelf = shelfRef.current;
    if (!shelf || showAll) return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(shelf);
    updatePosition();
    return () => observer.disconnect();
  }, [showAll]);

  const moveShelf = (direction) => {
    const shelf = shelfRef.current;
    if (!shelf) return;
    shelf.scrollBy({
      left: direction * (shelf.firstElementChild.getBoundingClientRect().width + 16),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <section id="projects" className="portfolio-section projects-section" aria-labelledby="projects-title">
      <div className="section-heading">
        <div><span className="eyebrow">IDEAS MADE REAL</span><h2 id="projects-title">Things I’ve built<span>.</span></h2></div>
        {!showAll && <div className="carousel-controls">
          <button className="icon-button" type="button" aria-label="Previous project" aria-controls="projects-list" disabled={position.first} onClick={() => moveShelf(-1)}><ArrowLeft size={16} aria-hidden="true" /></button>
          <button className="icon-button" type="button" aria-label="Next project" aria-controls="projects-list" disabled={position.last} onClick={() => moveShelf(1)}><ArrowRight size={16} aria-hidden="true" /></button>
        </div>}
      </div>

      <div ref={shelfRef} id="projects-list" className={showAll ? "project-grid" : "project-shelf"} onScroll={showAll ? undefined : updatePosition} role="region" aria-label={showAll ? "All projects" : "Project gallery, scroll to explore"} tabIndex={showAll ? undefined : 0}>
        {projects.map((project, index) => {
          const liveLink = project.livelink?.startsWith("https://") ? project.livelink : null;
          const media = <img src={theme === "dark" ? "/projects/ponyo-loves-ham.gif" : "/projects/sleepy-cat-animation.gif"} alt={`${project.heading} preview`} width="1200" height="630" loading={index < 2 ? "eager" : "lazy"} decoding="async" />;
          return (
            <article className="project-card" key={project.id}>
              {liveLink ? <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-image" aria-label={`Visit ${project.heading}`}>
                {media}<span className="project-image-arrow"><ArrowUpRight size={17} aria-hidden="true" /></span>
              </a> : <div className="project-image">{media}</div>}
              <div className="project-body">
                <div className="project-title-row">
                  <h3>{liveLink ? <a href={liveLink} target="_blank" rel="noopener noreferrer">{project.heading}</a> : project.heading}</h3>
                  {project.featured && <span className="project-badge"><span />Live</span>}
                  {project.status === "In Progress" && <span className="project-badge is-building">In progress</span>}
                </div>
                <span className="project-category">{project.category === "WEB" ? "Web app" : project.category === "Mobile" ? "Mobile & web app" : project.category}</span>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-links">
                  {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer"><Globe size={13} aria-hidden="true" />Website<ArrowUpRight size={12} aria-hidden="true" /></a>}
                  {project.gitrepo && <a href={project.gitrepo} target="_blank" rel="noopener noreferrer"><Github size={13} aria-hidden="true" />Source<ArrowUpRight size={12} aria-hidden="true" /></a>}
                  {!liveLink && !project.gitrepo && <span className="project-private">{project.status === "In Progress" ? "Currently building" : "Private project"}</span>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="projects-bottom">
        <span className="project-counter">{showAll ? `${projects.length} projects, and counting` : <><span>{String(position.index).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}<span className="scroll-hint">A few things from my workbench</span></>}</span>
        <button type="button" className="text-link" aria-controls="projects-list" aria-expanded={showAll} onClick={() => setShowAll(!showAll)}>{showAll ? <Rows3 size={13} aria-hidden="true" /> : <LayoutGrid size={13} aria-hidden="true" />}{showAll ? "Back to gallery" : "View all projects"}</button>
      </div>
    </section>
  );
};

export default Projects;

Projects.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};
