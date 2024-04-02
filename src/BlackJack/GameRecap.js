import React from 'react'

const GameRecap = ({gameResultsCount}) => {
    const results = gameResultsCount;
  return (
    <div id='gamerecap-container'>
        
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>{`Game Playeds:${results.totalGamesPlayed}`}</div>
            <div id='gamerecap-cell'>{`gamesWon:${results.gamesWon}`}</div>
            <div id='gamerecap-cell'>{`gamesLost`}</div>
            <div id='gamerecap-cell'>{`numberOfTie`}</div>
        </div>
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>{`numberOfBusts`}</div>
            <div id='gamerecap-cell'>{`numberOfBlackJacks`}</div>
            <div id='gamerecap-cell'>{`numberOfSplits`}</div>
            <div id='gamerecap-cell'>{`numberOfDoubles`}</div>
        </div>
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>{`totalAmountOfBetsLost`}</div>
            <div id='gamerecap-cell'>{`numberOfWinsWith2Cards`}</div>
            <div id='gamerecap-cell'>{`totalAmountOfBets`}</div>
            <div id='gamerecap-cell'>{`totalAmountOfBetsWon`}</div>
        </div>
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>{`Previous Game Results`}</div>
            <div id='gamerecap-cell'>{`previousGameResults`}</div>
        </div>
        
    </div>
  )
}

export default GameRecap