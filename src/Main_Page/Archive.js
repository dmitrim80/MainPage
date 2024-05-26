import React from "react";

const Archive = () => {
  return (
    <>
      <section id="projects">
            <ol className="projects-list">
              <a href="https://cherryhillcpr.com" className="project-link">
                <li>
                  <div className="project-container">
                    <div className="overLay-project-container"></div>
                    <header className="header-time">2024 - May</header>
                    <div className="project-main-content">
                      <p>
                        <span className="project-header">
                          cherryhillcpr.com
                        </span>
                        <span
                          id="project-arrow"
                          role="img"
                          aria-label="Link to project"
                        >
                          ↗
                        </span>
                        {/* <img
                          src={cprlogo}
                          className="project-img"
                          alt="logo-myfishtank"
                        /> */}
                      </p>
                      <p className="project-description">
                        I developed cherryhillcpr.com, a modern and accessible
                        website for a CPR training service. This project
                        involved creating a clean and professional interface,
                        integrating essential features like course scheduling
                        and secure payment options, and optimizing for both
                        performance and security. The design focused on
                        user-friendliness and clear navigation to ensure an
                        optimal user experience. Through this project, I
                        enhanced my skills in web development, user interface
                        design, and e-commerce solutions.
                      </p>

                      <ul
                        className="skill-elements"
                        aria-label="Technologies used"
                      >
                        <li>
                          <div className="skill-e">JavaScript</div>
                        </li>
                        <li>
                          <div className="skill-e">WordPress</div>
                        </li>
                        <li>
                          <div className="skill-e">CSS</div>
                        </li>
                        <li>
                          <div className="skill-e">HTML</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </a>
              </ol>
              </section>
    </>
  );
};

export default Archive;
