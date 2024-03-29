import React from 'react'
import IMG from './images/background1.png'
import LOGO from './images/logo-blackjack.png'
const LoadingOverlay = ({isVisible, style}) => {
    if (!isVisible) {
        return null;
    }

    return(
        <div className='loading-page'style={style}>
        <img src={LOGO} className="logo-img" alt="logo loading"/>
        <div className='loading'></div>
        </div>
    )
}
export default LoadingOverlay