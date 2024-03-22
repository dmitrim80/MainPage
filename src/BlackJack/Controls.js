import React from 'react';
import chip5 from './images/5-chip.png';
import chip10 from './images/10-chip.png';
import chip25 from './images/25-chip.png';
import chip50 from './images/50-chip.png';
import chip100 from './images/100-chip.png';
import chip250 from './images/250-chip.png';

const Controls = ({ onNewGame, 
                    handleStand, 
                    handleDouble, 
                    handleHit, 
                    gameRunning, 
                    onBetPlaced,
                    bet,
                    buttonsHidden,
                    handleChipClick }) => 
    {
    const chips = [
        { value: 5, img: chip5 },
        { value: 10, img: chip10 },
        { value: 25, img: chip25 },
        { value: 50, img: chip50 },
        { value: 100, img: chip100 },
        { value: 250, img: chip250 },
    ];

    return (
        <>
        
            <div id='buttons-container'>
                {gameRunning ? (
                    <>
                        {!buttonsHidden && (
                            <>
                            <button id='btn-stand' onClick={handleStand}>Stand</button>
                            <button id='btn-double' onClick={handleDouble}>Double</button>
                            <button id='btn-hit' onClick={handleHit}>Hit</button>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <button id='btn-new-game' onClick={() => bet === 0 ? onBetPlaced(0):onNewGame()}></button>
                        <button id='btn-clear-bet' onClick={() => onBetPlaced(0)}></button> 
                    </>
                )}
            </div>
            
            <div id='chips-row-wrapper-arrows' style={{
                                        height: 'auto', 
                                        overflow: 'hidden'}}>
                <div id='pointer-row-animation' style={{
                                                visibility: !gameRunning ? 'visible' : 'hidden', display: 'flex', 
                                                gap: '44px', 
                                                justifyContent: 'center', 
                                                transform: 'translateY(3px)'}}>

                    <div id='pointer-animation'>▼</div>
                    <div id='pointer-animation'>▼</div>
                    <div id='pointer-animation'>▼</div>
                    <div id='pointer-animation'>▼</div>
                    <div id='pointer-animation'>▼</div>
                    <div id='pointer-animation'>▼</div>
                </div>
            </div>
            <div id='chips-row-wrapper' style={{ visibility: gameRunning ? 'hidden' : 'visible' }}>

                {chips.map((chip, index) => (
                <img key={index}
                    src={chip.img}
                    alt={`Chip ${chip.value}`}
                    className='chip-img'
                    onClick={(event) => {
                        onBetPlaced(chip.value); 
                        handleChipClick(chip.value, chip.img, event);
                    }}
                    style={{ cursor: 'pointer' }} />
                ))}
                
            </div>  
        </>
    );
};

export default Controls;