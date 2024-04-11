import React from 'react'
import imagepath1 from "../assets/images/codepen.svg"
import imagepath2 from "../assets/images/linkedin.svg"
import imagepath3 from "../assets/images/TwitterIcon.svg"
import imagepath4 from "../assets/images/FacebookIcon.svg"
import imagepath5 from "../assets/images/InstagramIcon.png"
import imagepath6 from "../assets/images/GitHubIcon.svg"
const Header = ({activeLink, setActiveLink}) => {
  const handleLinkClick = (e, linkName) => {
    e.preventDefault(); // Prevent default anchor link behavior
    setActiveLink(linkName);
    window.location.hash = linkName;
  };
  return (
    <>
    <div className='header-container'>
        
        <div className='page1'>
                <div className='header-box'><h1 className='header-h1'><b>Dmitri Morozov</b></h1></div>
                <div className='textbox-h5'><h5 className='header-h5'><b>Junior Software Engineer</b></h5></div>
                <div className='textbox-p1'>I build pixel-perfect, engaging, and accessible digital experiences.</div>


                <div className='local-links-box'>
                    <div className='header-links'id='header-link-about'>
                      <a href="#about" 
                      onClick={(e) => handleLinkClick(e,'about')}
                      className={activeLink === 'about' ? 'active-link' : ''}>About</a>
                    </div>
                    <div className='header-links'id='header-link-experience'>
                      <a href="#experience" 
                      onClick={(e) => handleLinkClick(e,'experience')}
                      className={activeLink === 'experience' ? 'active-link' : ''}>Experience</a>
                    </div>
                    <div className='header-links'id='header-link-projects'>
                      <a href="#projects" 
                      onClick={(e) => handleLinkClick(e,'projects')}
                      className={activeLink === 'projects' ? 'active-link' : ''}>Projects</a>
                    </div>
                </div>
            
            <div className="social-icons-box">
            <div className="social-icons">
                <a href="https://github.com/dmitrim80"><img src={imagepath6} alt=""/></a>
                <a href="https://www.linkedin.com/in/dmitri-morozov-260b2920/"><img src={imagepath2}alt=""/></a>
                <a href="https://codepen.io/dmitrim80"><img src={imagepath1} alt=""/></a>
                <a href="http://www.twitter.com/DmitriM80"><img src={imagepath3} alt=""/></a>
                <a href="http://www.facebook.com/dmitrim80"><img src={imagepath4} alt=""/></a>
                <a href="http://www.instagram.com/dmitrim80"><img src={imagepath5} alt=""/></a>
                
            </div>
        </div>
        </div>

        

    </div>
    
    
    </>
  )
}

export default Header