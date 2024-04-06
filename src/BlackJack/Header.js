import React from 'react'


const Header = ({playerHandValue,dealerHandValue,result,bet,playerChips,progressBarWidth,callSettings}) => {
  return (
    <>
      <div id='blackjack-header-container'>
        <div className='chips-count'>{`$${playerChips}`}</div>
        <div id='games-count'>
          <div id='games-count-filler' style={{width:`${progressBarWidth}%`}}></div>
        </div>
        {/* <div id='game-result'>{result}</div>  */}
        <span id='game-settings' role='img' aria-label="Settings" onClick={()=>callSettings()}>⚙️</span>
      </div>
      <div id='deck-dealer-row'>
        {/* <div id='discard-tray'>{<img id='card-image-left-corner' alt='back-image' src={BackCard} />}</div>
        <div id='new-deck'>{<img id='card-image-right-corner' alt='back-image' src={BackCard} />}</div> */}
      </div>
    </>
  )
}

export default Header