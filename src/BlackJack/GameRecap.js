import React from 'react'

const GameRecap = ({gameResultsCount}) => {
    const results = gameResultsCount;
  return (
    <div id='gamerecap-container'>
        
        <div id='gamerecap-element'>
        <div id='gamerecap-cell' style={{ fontSize:'8.9px'}}>winnig chance:<br/><br/></div>
            <div id='gamerecap-cell' style={{ fontSize:'8.9px'}}>Game Playeds:<br/><br/>{results.totalGamesPlayed}</div>
            <div id='gamerecap-cell'>Games Won:<br/><br/>{results.gamesWon}</div>
            
        </div>
        <div id='gamerecap-element'>
        <div id='gamerecap-cell' style={{ fontSize:'8.9px'}}>Game Playeds:<br/><br/>{results.totalGamesPlayed}</div>
            <div id='gamerecap-cell'>Games Lost:<br/><br/>{results.gamesLoss}</div>
            <div id='gamerecap-cell'># of Tied Games:<br/><br/>{results.numberOfTie}</div>
            
        </div>
        <div id='gamerecap-element'>
        <div id='gamerecap-cell' style={{ fontSize:'8.9px'}}>Game Playeds:<br/><br/>{results.totalGamesPlayed}</div>
            <div id='gamerecap-cell'># of Busts:<br/><br/>{results.numberOfBusts}</div>
            <div id='gamerecap-cell'># of BlackJacks by Player:<br/><br/>{results.numberOfBlackJacksByPlayer}</div>
            
        </div>
        <div id='gamerecap-element'>
        <div id='gamerecap-cell' style={{ fontSize:'8.9px'}}>Game Playeds:<br/><br/>{results.totalGamesPlayed}</div>
        <div id='gamerecap-cell'># of BlackJacks by Dealer:<br/><br/>{results.numberOfBlackJacksByDealer}</div>
            <div id='gamerecap-cell'># of Splits Available:<br/><br/>{results.numberOfSplitsAvailable}</div>
            
            
        </div>
        <div id='gamerecap-element'>
        <div id='gamerecap-cell' style={{ fontSize:'8.9px'}}>Game Playeds:<br/><br/>{results.totalGamesPlayed}</div>
        <div id='gamerecap-cell'># of Splits Played:<br/><br/>{results.numberOfsplitsPlayed}</div>
            <div id='gamerecap-cell'>Amount of Bets Lost:<br/><br/>${results.totalAmountOfBetsLost}</div>
           
            
        </div>
        <div id='gamerecap-element'>
        <div id='gamerecap-cell' style={{ fontSize:'8.9px'}}>Game Playeds:<br/><br/>{results.totalGamesPlayed}</div>
             <div id='gamerecap-cell'># of Wins With Two Cards:<br/><br/>{results.numberOfWinsWith2Cards}</div>
            <div id='gamerecap-cell'>Bets total:<br/><br/>${results.totalAmountOfBets}</div>
            
        </div>
        <div id='gamerecap-element'>
        <div id='gamerecap-cell' style={{ fontSize:'8.9px'}}>Game Playeds:<br/><br/>{results.totalGamesPlayed}</div>
            <div id='gamerecap-cell'>Bets total won:<br/><br/>${results.totalAmountOfBetsWon}</div>
            <div id='gamerecap-cell'>Number of Doubles Played:<br/><br/>{results.numberOfBusts}</div>
           
        </div>
        
        
    </div>
  )
}

export default GameRecap