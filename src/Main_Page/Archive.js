import React, { useState, useEffect } from "react";
import "./archive.css";
import "./main.css";
import projectsData from "./projectsData";

const Archive = () => {
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: -2,
    y: -2,
  });

  useEffect(() => {
    const updateSpotlightPosition = (e) => {
      setSpotlightPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateSpotlightPosition);

    return () => {
      window.removeEventListener("mousemove", updateSpotlightPosition);
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
                rgba(255,255,255,0.055) 0%,
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
            <div className="archive-row-element-title">{project.title}</div>
            <div className="archive-row-element">{project.madeAt}</div>
            <div className="archive-row-element">
              {project.builtWith.split(",").map((skill, i) => (
                <span key={i} className="skill-e">{skill.trim()}</span>
              ))}
            </div>
            <div className="archive-row-element">
            <a href={project.url} className="project-link">
              <span className="project-archive-url">{project.url}</span>
              <span
                id="project-arrow2-archive"
                role="img"
                aria-label="Link to project"
              >
                ↗
              </span>
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
