import React from 'react'
import Logo from './images/logo-blackjack.png'

const Header = ({playerHandValue,dealerHandValue,result,bet,playerChips,gameMessage}) => {
  return (
    <>
      <div id='blackjack-header-container'>
        <div id='chips-count'>{`$ ${playerChips}`}</div>
        <div id='games-count'></div>
        <div id='game-settings'>⚙️</div>
      </div>
      {/* <div id='blackjack-header'>BLACKJACK</div> */}
      {/* <img src={Logo} id='blackjack-logo'/> */}
    </>
    
  )
}

export default Header