import React, { useState, useEffect } from 'react';
import './blackjack.css';
import GameBoard from './GameBoard';
import LoadingOverlay from './LoadingOverlay'

const BlackJack = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [isFlipped, setIsFlipped] = useState(false);
    const [opacity, setOpacity] = useState(0.45); // Initial opacity
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
    useEffect(()=>{
        const timer = setTimeout(()=>{
          setIsLoading(false);
        },6000);
      
        return () => clearTimeout(timer);
      },[]);
    return (
        <>
            {/* <div id="container" className={isFlipped ? 'flipped' : ''} onClick={toggleFlip} style={{'--bg-opacity': opacity, '--z-index': zIndex}}> */}
            <div id="container">
                <LoadingOverlay isVisible={isLoading} />
                <GameBoard onGameRunningChange={handleGameRunningChange} />
            </div>
        </>
    );
};

export default BlackJack;
