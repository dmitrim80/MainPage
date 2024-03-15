import React from 'react'
import chip5 from './images/5-chip.png'
import chip10 from './images/10-chip.png'
import chip25 from './images/25-chip.png'
import chip50 from './images/50-chip.png'
import chip100 from './images/100-chip.png'
import chip250 from './images/250-chip.png'

const Controls = ({onNewGame,handleStand ,handleDouble,handleHit,gameRunning,handleBet,resetBet}) => {

    const stopPropagationAndExecute = (callback, event, ...args) => {
        event.stopPropagation();
        callback(...args);
    };
    return(
    <>
        <div id='bet-main-container'>
            <div id='bet-container-box'style={{visibility: !gameRunning ? 'visible' : 'hidden', display: 'flex', gap: '8px', justifyContent: 'center'}}>
                <img src={chip5} id='chip-img' onClick={(event) => stopPropagationAndExecute(handleBet, event, 5)}/>
            
            </div>
        </div>
        <div id='buttons-container'>
            <div id='buttons-row'>
                {gameRunning && <button id='btn-stand' onClick={(event) => stopPropagationAndExecute(handleStand, event)}></button>}
                {gameRunning && <button id='btn-double' onClick={(event) => stopPropagationAndExecute(handleDouble, event)}></button>}
                {gameRunning && <button id='btn-hit' onClick={(event) => stopPropagationAndExecute(handleHit, event)}></button>}
                {!gameRunning && <button id='btn-new-game' onClick={(event) => stopPropagationAndExecute(onNewGame, event)}></button>}
                {!gameRunning && <button id='btn-clear-bet' onClick={(event) => stopPropagationAndExecute(resetBet, event)}></button>}
            </div>
            <div id='chips-row-wrapper' style={{height: 'auto', overflow: 'hidden'}}>

            <div id='pointer-row-animation' style={{visibility: !gameRunning ? 'visible' : 'hidden', display: 'flex', gap: '43px', justifyContent: 'center', transform: 'translateY(3px)'}}>
                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
            </div>

            <div id='bet-container-box'style={{visibility: !gameRunning ? 'visible' : 'hidden', display: 'flex', gap: '8px', justifyContent: 'center',marginBottom:'10px'}}>
                <img src={chip5} id='chip-img' onClick={(event) => stopPropagationAndExecute(handleBet, event, 5)}/>
                <img src={chip10} id='chip-img' onClick={(event) => stopPropagationAndExecute(handleBet, event, 5)}/>
                <img src={chip25} id='chip-img' onClick={(event) => stopPropagationAndExecute(handleBet, event, 5)}/>
                <img src={chip50} id='chip-img' onClick={(event) => stopPropagationAndExecute(handleBet, event, 5)}/>
                <img src={chip100} id='chip-img' onClick={(event) => stopPropagationAndExecute(handleBet, event, 5)}/>
                <img src={chip250} id='chip-img' onClick={(event) => stopPropagationAndExecute(handleBet, event, 5)}/>
            </div>
            {/* <div id='chips-row' style={{visibility: !gameRunning ? 'visible' : 'hidden', display: 'flex', gap: '8px', justifyContent: 'center'}}>
                <button id='btn-5' onClick={(event) => stopPropagationAndExecute(handleBet, event, 5)}>$5</button>
                <button id='btn-10' onClick={(event) => stopPropagationAndExecute(handleBet, event, 10)}>$10</button>
                <button id='btn-25' onClick={(event) => stopPropagationAndExecute(handleBet, event, 25)}>$25</button>
                <button id='btn-50' onClick={(event) => stopPropagationAndExecute(handleBet, event, 50)}>$50</button>
                <button id='btn-100' onClick={(event) => stopPropagationAndExecute(handleBet, event, 100)}>$100</button>
                <button id='btn-250' onClick={(event) => stopPropagationAndExecute(handleBet, event, 250)}>$250</button>
               
            </div> */}
            </div>
        </div>
    </>
        
    )
};
export default Controls;