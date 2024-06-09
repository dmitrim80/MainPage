import React, { useState, useEffect } from "react";
import "./archive.css";
import "./main.css";
import projectsData from "./projectsData";

const Archive = () => {
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: -2,
    y: -2,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1039);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1040);
  useEffect(() => {
    const updateSpotlightPosition = (e) => {
      setSpotlightPosition({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
      setIsTablet(window.innerWidth <= 1039);
      setIsDesktop(window.innerWidth >= 1040);
    };
    window.addEventListener("mousemove", updateSpotlightPosition);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", updateSpotlightPosition);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="archive-container">
        <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle 100px at 
                ${spotlightPosition.x}px 
                ${spotlightPosition.y}px, 
                rgba(4, 79, 226,0.09) 0%,
                rgba(0,0,0,0.2) 700%)`,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        ></div>
        <a href="/" className="project-link">
          <span
            id="project-arrow-archive"
            role="img"
            aria-label="Link to project"
          >
            ←
          </span>
          <span className="project-header-archive">Dmitri Morozov</span>
        </a>
        <h1>All Projects</h1>

        <section className="archive-section">
          <div className="archive-row-header">
            <div className="archive-row-element-date">Date</div>
            <div className="archive-row-element-title">Project</div>
            <div className="archive-row-element-madeAt">Made at</div>
            <div className="archive-row-element-builtWith">Built with</div>
            <div className="archive-row-element-link">Link</div>
          </div>
          {projectsData.map((project, index) => ( 
            <div className="archive-row" key={index}>
              <div className="archive-row-element-date">{project.date}</div>
              <div className="archive-row-element-title">
              {isMobile ? (
                  <a href={project.url} className="project-link" key={index}>{project.title} 
                  <span
                  id="project-arrow2-archive"
                  role="img"
                  aria-label="Link to project"
                >
                  ↗
                </span>
                  </a>
                ) : (
                  project.title
                )}
              </div>
              <div className="archive-row-element-madeAt">{project.madeAt}</div>
              <div className="archive-row-element-builtWith">
                {project.builtWith.split(",").map((skill, i) => (
                  <span key={i} className="skill-e">{skill.trim()}</span>
                ))}
              </div>
              
              <div className="archive-row-element-link">
              <a href={project.url} className="project-link">
              {isTablet || isDesktop ? (
                  <a href={project.url} className="project-link" key={index}>{project.url} 
                  <span
                  id="project-arrow2-archive"
                  role="img"
                  aria-label="Link to project"
                >
                  ↗
                </span>
                  </a>
                ) : (
                  project.url
                )}
              </a>
              </div>
          </div>
          ))}
            

        </section>
      </div>
    </>
  );
};

export default Archive;
