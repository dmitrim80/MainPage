import React from "react"
import imagepath from "../images/Mail.svg"
import imagepath2 from "../images/linkedin.svg"
import imagepath3 from "../images/TwitterIcon.svg"
import imagepath4 from "../images/FacebookIcon.svg"
import imagepath5 from "../images/InstagramIcon.png"
import imagepath6 from "../images/GitHubIcon.svg"

export default function Option2(props) {
    return(
            <div className="box">
        
                <div className="toggler--slider-black" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle-white"></div>
                </div>
            
            
            <div className="child-top-box"/>

            <div className="child-mid-box2">
                <div className="label-box1-option2">
                    <div className="midbox-header-title2">Dmitri Morozov</div>
                </div>

                <div className="label-box2-option2">
                    <div className="frontend-developer2">Frontend developer</div>
                </div>

                <div className="email-link-box2"><a href="mailto:dmitri.m80@gmail.com" 
                target="_blank" className="email2">dmitri.m80@gmail.com</a></div>
                
                <div className="buttons-box2">
                    <button className="button-email2">
                        <div className="mail-icon"><img src={imagepath}></img></div>
                        <a href="mailto:dmitri.m80@gmail.com" target="_blank" className="email-button">
                        <div className="button-text2">Email</div></a>
                    </button>
                    <button className="button-linkedin">
                        <div className="linkedin-icon"><img src={imagepath2}></img></div>
                        <a href="https://www.linkedin.com/in/dmitri-morozov-260b2920/">
                        <div className="button-linkedin-text">LinkedIn</div>
                        </a>
                    </button>
                </div>

                <div className="midbox-about-title2">About</div>

                <div className="midbox-about-text2">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>

                <div className="midbox-interests-title2">Interests</div>

                <div className="midbox-interests-text2">Marine & aquatic-life Enthusiast. Coral restoration. Intermediate level rowers. Love sports. Entrepreneur. Travel geek. Coffee fanatic.</div>
            </div>
            <div className="child-bottom-box2">
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
