import React from "react";
import resume from "../assets/dm-res-6-6.pdf";
import projectsData from "./projectsData";


const Body = () => {
  return (
    <>
      <div className="body-container">
        <div className="more-pages">
          <section id="about">
            <p className="header-p">
              With a Bachelor of Science in Computer Science, my academic and
              internship experiences have given me a strong foundation in
              software development, data structures, and algorithms. I am eager
              to apply my skills as an Entry-Level Software Engineer, crafting
              impactful solutions.
            </p>

            <div className="headline-box" loading="lazy">
              About Me
            </div>
            <div>
              As a passionate software engineering graduate, I am fascinated by
              the power of code to solve complex problems and create impactful
              digital experiences. My computer science journey is focused on
              mastering programming languages and user-centric design. Outside
              of coding, I'm an avid sports fan, and marine biology enthusiast,
              music and theater lover. These interests shape my creative,
              persistent, and detail-oriented approach to problem-solving.
            </div>
          </section>

          <section id="experience">
            <div className="headline-box">Experience</div>
            <div>
              Throughout my academic career, I have undertaken various projects
              and internships that have allowed me to apply theoretical
              knowledge in practical settings. These experiences have honed my
              skills in software development, project management, and team
              collaboration. I've contributed to software projects from concept
              to deployment, ensuring that each solution is not only functional
              but also meets the highest standards of quality and user
              experience.
            </div>
          </section>
          <hr className="break-line"/>

          <section >
            {projectsData.map((project, index) => ( 
              <ol className="projects-list">
                <a href={project.url} className="project-link" key={index}>
                <li>
                  <div className="project-container">
                  <div className="overLay-project-container"></div>
                    <div className="header-time">
                      {project.date}
                    </div>
                    <div className="project-box">
                      <div className="project-container-header-row">
                        <div className="project-header">
                          {project.title}
                          <span
                            id="project-arrow"
                            role="img"
                            aria-label="Link to project"
                          >
                            ↗
                          </span>
                        </div>
                        <div className="project-img">
                          <img
                                src={project.logo}
                                className="proj-logo"
                                alt="logo-project"
                                draggable="false"
                          />
                        </div>
                      </div>
                      <div className="project-description">
                        {project.description}
                      </div>
                      <div className="skill-elements">
                        {project.builtWith.split(",").map((skill, i) => (
                                <li key={i}>
                                  <div className="skill-e">{skill.trim()}</div>
                                </li>                    
                          ))}
                      </div>
                    </div>
                  </div>
                </li>
                </a>
              </ol>
            ))}
            

            <a href={resume} className="project-link" target="_blank" rel="noopener noreferrer">
              <div className="project-container">
                <div className="overLay-project-container"></div>
                <div className="project-main-content">
                  <p className="resume" id="project-head">
                    <span className="project-header" >View Full Resume</span>
                    <span
                      id="project-arrow"
                      role="img"
                      aria-label="Link to project"
                    >
                      ↗
                    </span>
                  </p>
                </div>
              </div>
            </a>

            <a href="/archive" className="project-link">
              <div className="project-container">
                <div className="overLay-project-container"></div>
                <div className="project-main-content">
                  <p className="resume" id="project-head">
                    <span className="project-header" id="projects">
                      View Full Projects Archive
                    </span>
                    <span
                      id="project-arrow"
                      role="img"
                      aria-label="Link to project"
                    >
                      ↗
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </section>

          <section id="personal">
            <div className="headline-box">Personal Interests</div>
            <div>
              In addition to my passion for software engineering, I maintain an
              active lifestyle and diverse interests outside of work. Whether
              it's hitting the gym, participating in rowing competitions,
              cheering for my favorite football and basketball teams, or
              exploring the wonders of marine life, these activities reflect my
              enthusiasm for life and learning. My love for music and theater
              also speaks to my appreciation for creativity and expression,
              qualities that I bring to every project I undertake.
            </div>
          </section>

          <section id="contact">
            <div className="headline-box">Contact</div>
            <div className="bottom-contact-box">
              Designed and coded in Visual Studio Code by yours truly. Built
              with React and CSS. All text is set in the Inter font. You can
              reach out to me at{" "}
              <a
                href="mailto:dmitri.m80@gmail.com"
                className="bottom-email-link"
              >
                dmitri.m80@gmail.com
              </a>
            </div>
            {/* <div>
              <Link to="/viewip">
                view IP
              </Link>
            </div> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default Body;
