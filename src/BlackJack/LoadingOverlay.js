import React from 'react'
import IMG from './images/background1.png'
import LOGO from './images/logo-blackjack.png'
const LoadingOverlay = ({isVisible}) => {
    if (!isVisible) {
        return null;
    }

    return(
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 1)', // Semi-transparent overlay
            zIndex: 100, // Adjust as needed
            }}>
        <div>
        <img src={LOGO} className="logo-img" alt="logo loading"/>
        <img src={IMG} className="casino-img" alt="Loading"/>
        </div>
        

        </div>
    )
}
export default LoadingOverlay