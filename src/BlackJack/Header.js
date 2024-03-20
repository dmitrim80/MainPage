import React from 'react'
import Logo from './images/logo-blackjack.png'
import BackCard from './images/gray_back.png'

const Header = ({playerHandValue,dealerHandValue,result,bet,playerChips,gameMessage}) => {
  return (
    <>
      <div id='blackjack-header-container'>
        <div id='chips-count'>{`$ ${playerChips}`}</div>
        <div id='games-count'></div>
        <div id='game-settings'>⚙️</div>
      </div>
      <div id='deck-dealer-row'>
        <div id='discard-tray'>{<img id='card-image-left-corner' alt='back-image' src={BackCard} />}</div>
        <div id='new-deck'>{<img id='card-image-right-corner' alt='back-image' src={BackCard} />}</div>
      </div>
    </>
    
  )
}

export default Header