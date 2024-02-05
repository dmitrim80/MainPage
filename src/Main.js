import React from 'react'
import profile from './images/profile-2-4-24.png'
const Main = () => {
  return (
    <div className='main'>
      <div className='profile-img'>
        <img src={profile}/>
      </div>
      <div className='about-info'>
        <div className="midbox-about-title2">About</div>
        <div className="midbox-about-text2">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
        <div className="midbox-interests-title2">Interests</div>
        <div className="midbox-interests-text2">Marine & aquatic-life Enthusiast. Coral restoration. Intermediate level rowers. Love sports. Entrepreneur. Travel geek. Coffee fanatic.</div>
      </div>
    </div>
  )
}

export default Main