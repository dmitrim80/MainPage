import React from "react";
import { Link } from "react-router-dom";
import bjlogo from "../BlackJack/images/logo-blackjack.png";

const Body = () => {
  return (
    <>
      <div className="body-container">
        <div className="more-pages">
          <section id="about">
            <p className="header-p">
            With a Bachelor of Science in Computer Science, my academic and
            internship experiences have equipped me with a solid foundation in
            software development, data structures, and algorithms. I am eager to
            apply my knowledge and skills in a professional setting as an
            Entry-Level Software Engineer, crafting solutions that make a
            difference.
            </p>
            
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
            
            <ol className="projects-list">
            
            <a href="https://www.dmitricode.com" className="project-link"> 
              <li>
                <div className="project-container">
                  <div className="overLay-project-container"></div>
                  <header className="header-time">2024 — Present</header>
                  <div className="project-main-content">
                    <p>
                        <span className="project-header">BlackJack Game</span>
                        <span 
                            id="project-arrow"
                            role="img"
                            aria-label="Link to project">
                        ↗</span>
                        <img 
                            src={bjlogo}
                            className="project-img"
                            alt="logo-blackjack"
                        /> 
                    </p>  
                    <p className="project-description">
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

                    <ul
                      className="skill-elements"
                      aria-label="Technologies used"
                    >
                      <li>
                        <div className="skill-e">JavaScript</div>
                      </li>
                      <li>
                        <div className="skill-e">React</div>
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

              <Link className="project-link" to="/corals/"> 
              <li>
                <div className="project-container">
                  <div className="overLay-project-container"></div>
                  <header className="header-time">2023 — Present</header>
                  <div className="project-main-content">
                  <p id="project-head">
                        
                        <span className="project-header">Coral Database Website</span>
                        <span 
                            id="project-arrow"
                            role="img"
                            aria-label="Link to project">
                        ↗</span>
                    </p>  
                    <p className="project-description">
                    Developed a vibrant website designed for marine-life enthusiasts to share and explore images of diverse coral species. This platform utilizes Google's robust database services for secure image storage, complete with user authentication to ensure privacy and safety. Users can upload and download images, update descriptions, curate personal favorites, and share their discoveries with the community. The project is actively evolving, with ongoing enhancements to enrich user experience and interaction.
                    </p>

                    <ul
                      className="skill-elements"
                      aria-label="Technologies used"
                    >
                      <li>
                        <div className="skill-e">JavaScript</div>
                      </li>
                      <li>
                        <div className="skill-e">React</div>
                      </li>
                      <li>
                        <div className="skill-e">CSS</div>
                      </li>
                      <li>
                        <div className="skill-e">HTML</div>
                      </li>
                      <li>
                        <div className="skill-e">Firebase</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              </Link>
              
              <Link className="project-link" to="/bootstrap"> 
              <li>
                <div className="project-container">
                  <div className="overLay-project-container"></div>
                  <header className="header-time">2024</header>
                  <div className="project-main-content">
                    <p id="project-head">
                        
                        <span className="project-header">8 Sorting Algorithms</span>
                        <span 
                            id="project-arrow"
                            role="img"
                            aria-label="Link to project">
                        ↗</span>
                    </p>  
                    <p className="project-description">
                    Discover the essentials of sorting with "8 Must-Know Sorting Algorithms," a dynamic educational tool built using JavaScript, Bootstrap, and React. This interactive webpage showcases the differences and efficiencies of various algorithms through engaging visuals and clear explanations. Whether you're a novice or a practiced coder, this project offers a practical look at algorithmic sorting, demonstrating each method's unique characteristics in an accessible format powered by modern web technologies.
                    </p>
                    

 
                    <ul
                      className="skill-elements"
                      aria-label="Technologies used"
                    >
                      <li>
                        <div className="skill-e">React</div>
                      </li>
                      <li>
                        <div className="skill-e">Bootstrap</div>
                      </li>
                      <li>
                        <div className="skill-e">JavaScript</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              </Link>

              <a href="https://1000gal.dmitrimorozov.com" className="project-link"> 
              <li>
                <div className="project-container">
                  <div className="overLay-project-container"></div>
                  <header className="header-time">2018-2022</header>
                  <div className="project-main-content">
                    <p id="project-head">

                    
                        <span className="project-header">1000gal Project</span>
                        
                        <span 
                            id="project-arrow"
                            role="img"
                            aria-label="Link to project">
                        ↗</span>
                    </p>  
                    <p className="project-description">
                    Explore the comprehensive journey of setting up and maintaining a 1000-gallon aquarium, documented from 2018 to 2022. This project delves into the intricacies of aquatic design, ecosystem balance, and the technical challenges faced during the creation and upkeep of a large-scale aquarium. Access detailed insights and visual documentation by visiting the dedicated project page.
                  </p>

                    

 
                    <ul
                      className="skill-elements"
                      aria-label="Technologies used"
                    >
                      <li>
                        <div className="skill-e">React</div>
                      </li>
                      <li>
                        <div className="skill-e">Bootstrap</div>
                      </li>
                      <li>
                        <div className="skill-e">JavaScript</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              </a>

            </ol>
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
            Designed and coded in Visual Studio Code by yours truly. Built with React and CSS. All text is set in the Inter font.
            You can reach out to me at{" "}
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
