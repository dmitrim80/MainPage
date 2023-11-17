import React from "react"
import imagepath from "./images/Mail.svg"
import imagepath2 from "./images/linkedin.svg"
import imagepath3 from "./images/TwitterIcon.svg"
import imagepath4 from "./images/FacebookIcon.svg"
import imagepath5 from "./images/InstagramIcon.png"
import imagepath6 from "./images/GitHubIcon.svg"

export default function Option2() {
    return(
        <div className="box">
            <div className="child-top-box2"/>

            <div className="child-mid-box2">
                <div className="label-box1-option2">
                    <div className="midbox-header-title2">Dmitri Morozov</div>
                </div>

                <div className="label-box1-option2">
                    <div className="frontend-developer2">Frontend Developer</div>
                </div>

                <div className="email-link-box2"><a href="mailto:dmitri.m80@gmail.com" 
                target="_blank" className="email2">mailto:dmitri.m80@gmail.com</a></div>
                
                <div className="buttons-box2">
                    <button className="button-email2">
                        <div className="mail-icon2"><img src={imagepath}></img></div>
                        <div className="button-text2">Email</div>
                    </button>
                    <button className="button-linkedin2">
                        <div className="linkedin-icon2"><img src={imagepath2}></img></div>
                        <div className="button-linkedin-text2">LinkedIn</div>
                    </button>
                </div>

                <div className="midbox-about-title2">About</div>

                <div className="midbox-about-text2">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>

                <div className="midbox-interests-title2">Interests</div>

                <div className="midbox-interests-text2">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
            </div>
            <div className="child-bottom-box2">
                <div className="bottom-icons2">
                    <img src={imagepath3}/>
                    <img src={imagepath4}/>
                    <img src={imagepath5}/>
                    <img src={imagepath6}/>
                </div>
            </div>
        </div>
    )
}