import React, {useState,useEffect}from 'react'
import './main.css'
import Header from './Header'
import Body from './Body'


const Main = () => {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updateSpotlightPosition = (e) => {
      setSpotlightPosition({ x: e.clientX, y: e.clientY });
    };

    // Listen for mouse movement across the entire window
    window.addEventListener('mousemove', updateSpotlightPosition);

    return () => {
      window.removeEventListener('mousemove', updateSpotlightPosition);
    };
  }, []);
  return (
    <>
    <div className='main-box'>
    <div className="overlay" style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `radial-gradient(circle 100px at 
                ${spotlightPosition.x}px 
                ${spotlightPosition.y}px, rgba(255,255,255,0.045) 0%, rgba(0,0,0,0.2) 500%)`,
              pointerEvents: 'none', // Allow clicks to pass through
              zIndex: 9999, // Ensure it's above all other content but does not block interaction
          }}></div>
        <Header/>
        <div className="spacer"></div> 
        <div className="body-wrapper">
            <Body/>
        </div>
        
    </div>
    
    </>
  )
}

export default Main