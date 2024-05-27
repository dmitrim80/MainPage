import React, { useState, useEffect } from "react";
import "./archive.css";
import "./main.css";
const Archive = () => {
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: -200,
    y: -200,
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
      <div className="archive-container m-5">
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
        <h1>All Projects:</h1>

        <section className="archive-section">
          <div className="archive-row-header">
            <div className="archive-row-element">Year</div>
            <div className="archive-row-element">Project</div>
            <div className="archive-row-element">Made at</div>
            <div className="archive-row-element">Build with</div>
            <div className="archive-row-element">Link</div>
          </div>

          {Array.from({ length: 15 }).map((_, index) => (
            <div className="archive-row" key={index}>
              <div className="archive-row-element">2021</div>
              <div className="archive-row-element">Project {index + 1}</div>
              <div className="archive-row-element">Company</div>
              <div className="archive-row-element">Tech</div>
              <div className="archive-row-element">
                <a href="/" className="archive-link">
                  Link
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
