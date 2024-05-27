import React from "react";
import bjlogo from "../assets/images/logo-blackjack-85w.png";
import resume from "../assets/Dmitri Morozov - resume0524.pdf";
import myfishtanklogo from "../assets/images/logo-myfishtank-85w.png";
import cprlogo from "../assets/images/CHCPR-logo-dark-85w.png";
// import projectsData from "./projectsData";

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
                        <img
                          src={cprlogo}
                          className="project-img"
                          alt="logo-myfishtank"
                        />
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
              <a href="https://my-fishtank.com" className="project-link">
                <li>
                  <div className="project-container">
                    <div className="overLay-project-container"></div>
                    <header className="header-time">2024 - May</header>
                    <div className="project-main-content">
                      <p>
                        <span className="project-header">My-FishTank.com</span>
                        <span
                          id="project-arrow"
                          role="img"
                          aria-label="Link to project"
                        >
                          ↗
                        </span>
                        <img
                          src={myfishtanklogo}
                          className="project-img"
                          alt="logo-myfishtank"
                        />
                      </p>
                      <p className="project-description">
                        I developed my-fishtank.com, a WordPress-based
                        e-commerce website specializing in marine supplies and
                        corals. This project involved creating a visually
                        appealing and user-friendly interface, integrating
                        essential features like secure payment gateways and user
                        account management, and optimizing for performance and
                        security. Additionally, I developed detailed product
                        descriptions and care guides to enhance SEO and user
                        engagement. Through this project, I refined my skills in
                        WordPress development, e-commerce solutions, and web
                        design, delivering a professional and efficient platform
                        for marine enthusiasts.
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
                          aria-label="Link to project"
                        >
                          ↗
                        </span>
                        <img
                          src={bjlogo}
                          className="project-img"
                          alt="logo-blackjack"
                        />
                      </p>
                      <p className="project-description">
                        I developed a fully-functional BlackJack game,
                        leveraging my expertise in JavaScript, HTML, and CSS.
                        This project showcased my ability to create an engaging
                        and visually appealing game. Key responsibilities
                        included designing and implementing game logic for a
                        seamless user experience, using React for a dynamic and
                        responsive UI, and ensuring performance and security
                        with Firebase as the backend service. I also
                        collaborated with peers for code reviews and
                        optimizations, emphasizing clean and maintainable code.
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

              <a href="https://v1.dmitrimorozov.com" className="project-link">
                <li>
                  <div className="project-container">
                    <div className="overLay-project-container"></div>
                    <header className="header-time">2024</header>
                    <div className="project-main-content">
                      <p id="project-head">
                        <span className="project-header">
                          8 Sorting Algorithms
                        </span>
                        <span
                          id="project-arrow"
                          role="img"
                          aria-label="Link to project"
                        >
                          ↗
                        </span>
                      </p>
                      <p className="project-description">
                        Discover the essentials of sorting with "8 Must-Know
                        Sorting Algorithms," a dynamic educational tool built
                        using JavaScript, Bootstrap, and React. This interactive
                        webpage showcases the differences and efficiencies of
                        various algorithms through engaging visuals and clear
                        explanations. Whether you're a novice or a practiced
                        coder, this project offers a practical look at
                        algorithmic sorting, demonstrating each method's unique
                        characteristics in an accessible format powered by
                        modern web technologies.
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

              <a
                href="https://corals.dmitrimorozov.com"
                className="project-link"
              >
                <li>
                  <div className="project-container">
                    <div className="overLay-project-container"></div>
                    <header className="header-time">2023 — Present</header>
                    <div className="project-main-content">
                      <p id="project-head">
                        <span className="project-header">
                          Coral Database Website
                        </span>
                        <span
                          id="project-arrow"
                          role="img"
                          aria-label="Link to project"
                        >
                          ↗
                        </span>
                      </p>
                      <p className="project-description">
                        Developed a vibrant website designed for marine-life
                        enthusiasts to share and explore images of diverse coral
                        species. This platform utilizes Google's robust database
                        services for secure image storage, complete with user
                        authentication to ensure privacy and safety. Users can
                        upload and download images, update descriptions, curate
                        personal favorites, and share their discoveries with the
                        community. The project is actively evolving, with
                        ongoing enhancements to enrich user experience and
                        interaction.
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
              </a>

              <a href="https://v2.dmitrimorozov.com/" className="project-link">
                <li>
                  <div className="project-container">
                    <div className="overLay-project-container"></div>
                    <header className="header-time">2023</header>
                    <div className="project-main-content">
                      <p id="project-head">
                        <span className="project-header">
                          Digital Business Card - Figma
                        </span>

                        <span
                          id="project-arrow"
                          role="img"
                          aria-label="Link to project"
                        >
                          ↗
                        </span>
                      </p>
                      <p className="project-description">
                        Digital Busines Card
                      </p>

                      <ul
                        className="skill-elements"
                        aria-label="Technologies used"
                      >
                        <li>
                          <div className="skill-e">React</div>
                        </li>
                        <li>
                          <div className="skill-e">Figma</div>
                        </li>
                        <li>
                          <div className="skill-e">JavaScript</div>
                        </li>
                        <li>
                          <div className="skill-e">CSS</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </a>

              <a
                href="https://1000gal.dmitrimorozov.com"
                className="project-link"
              >
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
                          aria-label="Link to project"
                        >
                          ↗
                        </span>
                      </p>
                      <p className="project-description">
                        Explore the comprehensive journey of setting up and
                        maintaining a 1000-gallon aquarium, documented from 2018
                        to 2022. This project delves into the intricacies of
                        aquatic design, ecosystem balance, and the technical
                        challenges faced during the creation and upkeep of a
                        large-scale aquarium. Access detailed insights and
                        visual documentation by visiting the dedicated project
                        page.
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

            <a href={resume} className="project-link">
              <div className="project-container">
                <div className="overLay-project-container"></div>
                <div className="project-main-content">
                  <p className="resume" id="project-head">
                    <span className="project-header">View Full Resume</span>
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
                    <span className="project-header">
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
