import React from 'react'

const GameRecap = ({gameResultsCount}) => {
    const results = gameResultsCount;
  return (
    <div id='gamerecap-container'>
        
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>Game Playeds:<br/>{results.totalGamesPlayed}</div>
            <div id='gamerecap-cell'>Games Won:<br/>{results.gamesWon}</div>
            <div id='gamerecap-cell'>Games Lost:<br/>{results.gamesLoss}</div>
            <div id='gamerecap-cell'>Number of Tied Games:<br/>{results.numberOfTie}</div>
        </div>
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>Number of Busts:<br/>{results.numberOfBusts}</div>
            <div id='gamerecap-cell'>Number of BlackJacks by Player:<br/>{results.numberOfBlackJacksByPlayer}</div>
            <div id='gamerecap-cell'>Number of BlackJacks by Dealer:<br/>{results.numberOfBlackJacksByDealer}</div>
            <div id='gamerecap-cell'>Number of Splits Available:<br/>{results.numberOfSplitsAvailable}</div>
            
        </div>
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>Number of Splits Played:<br/>{results.numberOfsplitsPlayed}</div>
            <div id='gamerecap-cell'>Total Amount of Bets Lost:<br/>${results.totalAmountOfBetsLost}</div>
            <div id='gamerecap-cell'>Number of Wins With Two Cards:<br/>{results.numberOfWinsWith2Cards}</div>
            <div id='gamerecap-cell'>Bets total:<br/>${results.totalAmountOfBets}</div>
            
        </div>
        <div id='gamerecap-element'>
            <div id='gamerecap-cell'>Bets total won:<br/>${results.totalAmountOfBetsWon}</div>
            <div id='gamerecap-cell'>Number of Doubles Played:<br/>{results.numberOfBusts}</div>
            <div id='gamerecap-cell'>Game Results<br/></div>
            <div id='gamerecap-cell'>Game Results<br/></div>
        </div>
        
    </div>
  )
}

export default GameRecap