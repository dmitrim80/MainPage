import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import pImg from "../assets/images/projects/main/profile-dm-dark-blue.jpg";
import resume from "../assets/resume71.pdf";

const Header = ({ activeLink, setActiveLink }) => {
  const handleLinkClick = (e, linkName) => {
    e.preventDefault(); // Prevent default anchor link behavior
    setActiveLink(linkName);
    window.location.hash = linkName;
  };
  const preventSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <div className="header-container">
        <div className="page1">
          <div className="header-box">
          <div className="image-container" 
          onContextMenu={preventSave} 
          onTouchStart={preventSave} 
          onMouseDown={preventSave}>
            <img src={pImg} 
            alt="Dmitri Morozov" 
            className="profile-img"
            draggable="false"
            />
            <div className="overlay" 
            onContextMenu={preventSave} 
            onTouchStart={preventSave} 
            onMouseDown={preventSave}></div>
            </div>
            <h3 className="header-h3">
              <b>Dmitri Morozov</b>
            </h3>
          </div>
          
          <div className="textbox-h5">
            <h5 className="header-h5">
              
              Software Engineer
              
            </h5>
          </div>
          <div className="textbox-p1">
          I create user-friendly digital experiences that are visually appealing, interactive, and inclusive.
          </div>

          <div className="local-links-box">
            <div className="header-links" id="header-link-about">
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "about")}
                className={activeLink === "about" ? "active-link" : ""}
              >
                ABOUT
              </a>
            </div>
            <div className="header-links" id="header-link-experience">
              <a
                href="#experience"
                onClick={(e) => handleLinkClick(e, "experience")}
                className={activeLink === "experience" ? "active-link" : ""}
              >
                EXPERIENCE
              </a>
            </div>
            <div className="header-links" id="header-link-projects">
              <a
                href="#projects"
                onClick={(e) => handleLinkClick(e, "projects")}
                className={activeLink === "projects" ? "active-link" : ""}
              >
                PROJECTS
              </a>
              
            </div>
            <div className="responsive-div">
              <div className="header-links" id="header-link-projects">
              <a href={resume} className="project-link" target="_blank" rel="noopener noreferrer">
                  RESUME
                </a>
                
              </div>
            </div>
          </div>

          <div className="social-icons-box">
            <div className="social-icons">
              <a href="https://github.com/dmitrim80">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/dmitri-morozov-260b2920/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://codepen.io/dmitrim80">
                <FontAwesomeIcon icon={faCodepen} />
              </a>
              <a href="http://www.instagram.com/dmitrim80">
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a href="http://www.twitter.com/DmitriM80">
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </a>
              <a href="http://www.facebook.com/dmitrim80">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
