import React from 'react'

const GameRecap = ({gameResultsCount}) => {
    const results = gameResultsCount;
  return (
    <div id='gamerecap-container'>
        
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>{`Game Playeds:${results.totalGamesPlayed}`}</div>
            <div id='gamerecap-cell'>{`gamesWon:${results.gamesWon}`}</div>
            <div id='gamerecap-cell'>{`gamesLost:${results.gamesLoss}`}</div>
            <div id='gamerecap-cell'>{`numberOfTie:${results.numberOfTie}`}</div>
        </div>
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>{`numberOfBusts:${results.numberOfBusts}`}</div>
            <div id='gamerecap-cell'>{`numberOfBlackJacksByPlayer:${results.numberOfBlackJacksByPlayer}`}</div>
            <div id='gamerecap-cell'>{`numberOfBlackJacksByDealer:${results.numberOfBlackJacksByDealer}`}</div>
            <div id='gamerecap-cell'>{`numberOfSplitsAvailable:${results.numberOfSplitsAvailable}`}</div>
            
        </div>
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>{`numberOfsplitsPlayed:${results.numberOfsplitsPlayed}`}</div>
            <div id='gamerecap-cell'>{`totalAmountOfBetsLost:${results.totalAmountOfBetsLost}`}</div>
            <div id='gamerecap-cell'>{`numberOfWinsWith2Cards:${results.numberOfWinsWith2Cards}`}</div>
            <div id='gamerecap-cell'>{`totalAmountOfBets:${results.totalAmountOfBets}`}</div>
            
        </div>
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>{`totalAmountOfBetsWon:${results.totalAmountOfBetsWon}`}</div>
            <div id='gamerecap-cell'>{`numberOfDoubles:${results.numberOfBusts}`}</div>
            <div id='gamerecap-cell'>{`Previous Game Results`}</div>
            <div id='gamerecap-cell'>{`previousGameResults`}</div>
        </div>
        
    </div>
  )
}

export default GameRecap