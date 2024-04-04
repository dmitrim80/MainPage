import React from 'react'
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <>
    <div className='body-container'>
        

        <div className='more-pages'>
            <div id='about'>
            Bachelor of Science in Computer Science and a strong foundation in software development, data structures, and algorithms. Eager to apply the knowledge and skills acquired during academic projects and internship experiences in a professional setting as an Entry-Level Software Engineer.
            </div>
            <div id='interests'>
            Some of my interests includes:
            Gym, Rowing, Sports Fanatic (Football, Basketball) Love Music & Theater. Marine Biology & Aquatic Life Enthusiast
            </div>
            <div id='about'>
                <p>
                    Skills
                    <br/>    
                    <b>Programming Languages</b><br/>
                    JavaScript, TypeScript, HTML, CSS,
                    Swift, Python, R<br/>
                    <b>Libraries & Frameworks</b><br/>
                    React
                    <br/>
                    Tools & Platforms
                    <br/>
                    GitHub, Firebase
                </p>
                

            </div>
            <div id='projects'>
                <b><Link to="/blackjack">BlackJack - Game</Link></b> 
                <br/>
                Project Completion Date: April, 2024
            </div>
        </div>
    </div>
    </>
  )
}

export default Body