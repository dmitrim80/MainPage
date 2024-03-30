import React, { useState, useEffect } from 'react';
import './blackjack.css';
import GameBoard from './GameBoard';
import LoadingOverlay from './LoadingOverlay'

const BlackJack = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [isFlipped, setIsFlipped] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [zIndex, setZIndex] = useState(-1);
    const [isGameActive, setIsGameActive] = useState(false);

    const handleGameRunningChange = (isRunning) => {
      setIsGameActive(isRunning); // Use the renamed state setter
  };

    const toggleFlip = () => {
        if (!isGameActive) { // Use the renamed state variable
            setIsFlipped(!isFlipped);
            setTimeout(() => {
                setOpacity(opacity === 0.45 ? 1 : 0.45);
                setZIndex(zIndex === -1 ? 1 : -1);
            }, 300);
        }
    };
    useEffect(() => {
        // Start the fade-out effect slightly before hiding the overlay
        const fadeOutTimer = setTimeout(() => {
          // Assuming you have a method to change the overlay's opacity
          // This could be directly via CSS classes or inline styles
          setOpacity(0); // This assumes your LoadingOverlay responds to opacity changes
        }, 4000); // Start fade out slightly before removing the overlay
      
        const removeOverlayTimer = setTimeout(() => {
            setIsLoading(false);
          }, 5000); // 4 seconds + 1 second of fade-out
      
        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(removeOverlayTimer); 
        };
      }, []);
    return (
        <>
            {/* <div id="container" className={isFlipped ? 'flipped' : ''} onClick={toggleFlip} style={{'--bg-opacity': opacity, '--z-index': zIndex}}> */}
            <div id="container">
                
                <LoadingOverlay isVisible={isLoading} style={{ opacity: opacity }}  />
                <GameBoard onGameRunningChange={handleGameRunningChange} />
            </div>
        </>
    );
};

export default BlackJack;
