import React from 'react'

const ScoreBoard = ({playerHandValue,dealerHandValue,result,bet,playerChips,gameMessage}) => {
  return (
    <div id='score-board'>
      <div id='result-box'>
            <p id='score-label'>Dealer: {dealerHandValue}</p>
            <p id='score-label'>Player: {playerHandValue}</p>
           
      </div>
             <div id='bet-box'>
              <div id='player-bet'>{`${bet}`}</div>
              <div id='player-money'>{`${playerChips}`}</div>
            </div>
            <div id='bet-box'>
              <div id='player-label'>Player Bet</div>
              <div id='player-label'>Player Money</div>
            </div>
            
            
    </div>
  )
}

export default ScoreBoard