import React from "react"
import imagepath from "./images/Mail.svg"
import imagepath3 from "./images/TwitterIcon.svg"
import imagepath4 from "./images/FacebookIcon.svg"
import imagepath5 from "./images/InstagramIcon.png"
import imagepath6 from "./images/GitHubIcon.svg"
import imagepath7 from "./images/LinkedinIcon.svg"


export default function Option3() {
    return(
        <div className="box">
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
                
                <div className="buttons-box3">
                    <button className="button-email3">
                        <div className="mail-icon3"><img src={imagepath}></img></div>
                        <div className="button-text3">Email</div>
                    </button>
                </div>

                <div className="midbox-about-title">About</div>

                <div className="midbox-about-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>

                <div className="midbox-interests-title">Interests</div>

                <div className="midbox-interests-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
            </div>
            <div className="child-bottom-box">
                <div className="bottom-icons">
                    <img src={imagepath3}/>
                    <img src={imagepath4}/>
                    <img src={imagepath5}/>
                    <img src={imagepath7}/>
                    <img src={imagepath6}/>
                </div>
            </div>
        </div>
    )
}