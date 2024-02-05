import React from "react"
import imagepath from "./images/Mail.svg"
import imagepath2 from "./images/linkedin.svg"
import imagepath3 from "./images/TwitterIcon.svg"
import imagepath4 from "./images/FacebookIcon.svg"
import imagepath5 from "./images/InstagramIcon.png"
import imagepath6 from "./images/GitHubIcon.svg"

export default function Option1(props) {
    return(
            <div className="box">
        
                <div className="toggler--slider-white" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle-black"></div>
                </div>
            
            
            <div className="child-top-box"/>

            <div className="child-mid-box">
                <div className="label-box1">
                    <div className="midbox-header-title">Dmitri Morozov</div>
                </div>

                <div className="label-box2">
                    <div className="frontend-developer">Frontend developer</div>
                </div>

                <div className="email-link-box"><a href="mailto:dmitri.m80@gmail.com" 
                target="_blank" className="email1">dmitri.m80@gmail.com</a></div>
                
                <div className="buttons-box">
                    <button className="button-email">
                        <div className="mail-icon"><img src={imagepath}></img></div>
                        <a href="mailto:dmitri.m80@gmail.com" target="_blank" className="email-button">
                        <div className="button-text">Email</div></a>
                    </button>
                    <button className="button-linkedin">
                        <div className="linkedin-icon"><img src={imagepath2}></img></div>
                        <a href="https://www.linkedin.com/in/dmitri-morozov-260b2920/">
                        <div className="button-linkedin-text">LinkedIn</div>
                        </a>
                    </button>
                </div>

                <div className="midbox-about-title">About</div>

                <div className="midbox-about-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>

                <div className="midbox-interests-title">Interests</div>

                <div className="midbox-interests-text">Marine & aquatic-life Enthusiast. Coral restoration. Intermediate level rowers. Love sports. Entrepreneur. Travel geek. Coffee fanatic.</div>
            </div>
            <div className="child-bottom-box">
                <div className="bottom-icons">
                    <a href="http://www.twitter.com/DmitriM80"><img src={imagepath3}/></a>
                    <a href="http://www.facebook.com/dmitrim80"><img src={imagepath4}/></a>
                    <a href="http://www.instagram.com/dmitrim80"><img src={imagepath5}/></a>
                    <a href="https://github.com/dmitrim80"><img src={imagepath6}/></a>
                </div>
            </div>
        </div>
    )
}