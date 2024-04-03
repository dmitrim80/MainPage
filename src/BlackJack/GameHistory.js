import React from 'react'

const GameHistory = ({gameRoundsHistory}) => {
  return (
    <div id='gamerecap-container'>
        <div id='gamerecap-element'>
            <div id='recap-cell'>Game Results<br/>
                {gameRoundsHistory && gameRoundsHistory.slice().reverse().map((round, index) => ( 
                    <div key={index}>
                        
                        {`---------------------------`}<br/>
                        {`Round: ${round.roundNumber}`}<br/>
                        {`Dealer: ${round.dealerHand.join(', ')}`}<br/> 
                        {`Value: ${round.dealerHandValue}`}<br/>
                        {`Player: ${round.playerHand.join(', ')}`}<br/>
                        {`Value: ${round.playerHandValue}`}<br/>
                        {`Outcome: ${round.outcome}`}<br/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default GameHistory