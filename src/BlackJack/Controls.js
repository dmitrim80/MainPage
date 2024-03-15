import React from 'react'


const Controls = ({onNewGame,handleStand ,handleDouble,handleHit,gameRunning,handleBet,resetBet}) => {

    const stopPropagationAndExecute = (callback, event, ...args) => {
        event.stopPropagation();
        callback(...args);
    };
    return(
        <div id='buttons-container'>
            <div id='buttons-row'>
                {gameRunning && <button id='btn-stand' onClick={(event) => stopPropagationAndExecute(handleStand, event)}></button>}
                {gameRunning && <button id='btn-double' onClick={(event) => stopPropagationAndExecute(handleDouble, event)}></button>}
                {gameRunning && <button id='btn-hit' onClick={(event) => stopPropagationAndExecute(handleHit, event)}></button>}
                {!gameRunning && <button id='btn-new-game' onClick={(event) => stopPropagationAndExecute(onNewGame, event)}></button>}
                {!gameRunning && <button id='btn-clear-bet' onClick={(event) => stopPropagationAndExecute(resetBet, event)}></button>}
            </div>
            <div id='chips-row-wrapper' style={{height: 'auto', overflow: 'hidden'}}>
            <div id='chips-row' style={{visibility: !gameRunning ? 'visible' : 'hidden', display: 'flex', gap: '8px', justifyContent: 'center'}}>
                <button id='btn-5' onClick={(event) => stopPropagationAndExecute(handleBet, event, 5)}>$5</button>
                <button id='btn-10' onClick={(event) => stopPropagationAndExecute(handleBet, event, 10)}>$10</button>
                <button id='btn-25' onClick={(event) => stopPropagationAndExecute(handleBet, event, 25)}>$25</button>
                <button id='btn-50' onClick={(event) => stopPropagationAndExecute(handleBet, event, 50)}>$50</button>
                <button id='btn-100' onClick={(event) => stopPropagationAndExecute(handleBet, event, 100)}>$100</button>
                <button id='btn-250' onClick={(event) => stopPropagationAndExecute(handleBet, event, 250)}>$250</button>

            </div>
            </div>
        </div>
    )
};
export default Controls;