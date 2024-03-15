import React from 'react'

const Header = ({playerHandValue,dealerHandValue,result,bet,playerChips,gameMessage}) => {
  return (
    <>
      <div id='blackjack-header-container'>
        <div id='chips-count'>{`$ ${playerChips}`}</div>
        <div id='games-count'></div>
        <div id='game-settings'>⚙️</div>
      </div>
      <div id='blackjack-header'>BLACKJACK</div>
    </>
    
  )
}

export default Header