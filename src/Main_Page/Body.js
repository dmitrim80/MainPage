import React from "react";
import { Link } from "react-router-dom";
import bjlogo from "../BlackJack/images/logo-blackjack.png";

const Body = () => {
  return (
    <>
      <div className="body-container">
        <div className="more-pages">
          <section id="about">
            With a Bachelor of Science in Computer Science, my academic and
            internship experiences have equipped me with a solid foundation in
            software development, data structures, and algorithms. I am eager to
            apply my knowledge and skills in a professional setting as an
            Entry-Level Software Engineer, crafting solutions that make a
            difference.
            <div className="headline-box">About Me</div>
            <div>
              As a graduate with a passion for software engineering, I have
              always been fascinated by the ability of code to solve complex
              problems and create impactful digital experiences. My journey in
              computer science has been marked by a relentless pursuit of
              knowledge, from mastering programming languages to understanding
              the nuances of user-centric design. Outside the classroom and
              coding environment, I'm an avid sports fan, music and theater
              lover, and an enthusiast of marine biology and aquatic life. These
              diverse interests have shaped my approach to problem-solving,
              fostering a unique blend of creativity, persistence, and attention
              to detail.
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

          <section id="projects">
            <div className="headline-box" id="projects">
              Projects
            </div>

            <div className="project-container">
              <div className="overLay-project-container"></div>
              <header className="header-time">2024 — Present</header>
              <div className="project-main-content">
                <h3 className="project-header">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="tittle"
                  >
                    PROJECT NAME 
                    <span id='project-arrow' role='img' aria-label="Link to project">↗</span>
                  </a>
                </h3>

                <p className="project-description">
                  Build and maintain critical components used to construct
                  Klaviyo’s frontend, work closely with cross-functional teams
                  to implement and advocate for web accessibility.
                </p>

                <ul className="skill-elements" aria-label="Technologies used">
                  <li>
                    <div className="skill-e">JavaScript</div>
                  </li>
                  <li>
                    <div className="skill-e">TypeScript</div>
                  </li>
                  <li>
                    <div className="skill-e">React</div>
                  </li>
                  <li>
                    <div className="skill-e">Storybook</div>
                  </li>
                </ul>

              </div>
            </div>

            <div className="project-box">
              <Link className="img-link" to="/blackjack">
                <img
                  src={bjlogo}
                  className="project-img"
                  alt="logo-blackjack"
                />
              </Link>

              <b>Project Date: April, 2024 </b>

              <p>
                As part of my capstone project, I developed a fully-functional
                BlackJack game. This project allowed me to apply and showcase my
                proficiency in JavaScript, HTML, and CSS, creating a game that
                is not only enjoyable but also visually appealing and
                accessible. Responsibilities included: Designing and
                implementing game logic to ensure a seamless and engaging user
                experience. Utilizing React for the UI to create a dynamic and
                responsive design. Ensuring the application's performance and
                security using Firebase as a backend service. Collaborating with
                peers for code reviews and optimizations, emphasizing clean,
                maintainable code.
              </p>
            </div>
            <div className="headline-box">Skills</div>
            <div>
              <p>
                <b>Programming Languages</b>
                <br />
                JavaScript, TypeScript, HTML, CSS, Swift, Python, R<br />
                <b>Libraries & Frameworks</b>
                <br />
                React
                <br />
                Tools & Platforms
                <br />
                GitHub, Firebase
              </p>
            </div>
          </section>

          <section id="personal interests">
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
              I am excited about the opportunity to contribute to innovative
              projects and teams. For collaborations or opportunities, please
              reach out to me at{" "}
              <a
                href="mailto:dmitri.m80@gmail.com"
                className="bottom-email-link"
              >
                dmitri.m80@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Body;
