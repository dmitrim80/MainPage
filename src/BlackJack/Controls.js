import React,{useState} from 'react'
import chip5 from './images/5-chip.png'
import chip10 from './images/10-chip.png'
import chip25 from './images/25-chip.png'
import chip50 from './images/50-chip.png'
import chip100 from './images/100-chip.png'
import chip250 from './images/250-chip.png'

const Controls = ({onNewGame,handleStand ,handleDouble,handleHit,gameRunning,handleBet,resetBet}) => {

    const [betChips,setBetChips] = useState([]);
    const chipWidth = 40;
    const gap = 0.1;
    const totalChipTypes = Object.keys(betChips).length;
    // Total width all chip stacks will occupy
    const totalWidth = totalChipTypes * chipWidth + (totalChipTypes - 1) * gap;


    const handleChipClick = (amount, imgSrc, event) => {
        event.stopPropagation();
        handleBet(amount);
    
        setBetChips(currentChips => {
            // Create a new object to avoid direct state mutation
            const newChips = { ...currentChips };
            const chipType = `chip${amount}`;
    
            if (newChips[chipType]) {
                newChips[chipType].count += 1;
                // Adjust position logic as necessary
                newChips[chipType].position += 10; // Example increment
            } else {
                newChips[chipType] = { imgSrc, count: 1, position: 0 };
            }
    
            return newChips;
        });
    };

    return(
    <>
        <div id='bet-main-container'>
            <div id='bet-container-box'style={{
                                        visibility: !gameRunning ? 'visible' : 'hidden', 
                                        display: 'flex', 
                                        gap: '8px', 
                                        justifyContent: 'center',
                                        position:'relative',
                                        height:'50px',
                                        }}>
                
            {Object.entries(betChips).map(([chipType, { imgSrc, count, position }], index) => (
                Array.from({ length: count }).map((_, chipIndex) => (
                    <img 
                        key={`${chipType}-${chipIndex}`}
                        src={imgSrc}
                        className='bet-chip-img'
                        style={{ 
                            position: 'absolute', 
                            bottom: position + chipIndex * 5,
                            left: `calc(50% + ${index * (chipWidth + gap) - totalWidth / 2}px)`
                         }} // Adjust as needed
                    />
                ))
            ))}
                
            </div>
        </div>
        <div id='buttons-container'>
            <div id='buttons-row'>
                {gameRunning && <button id='btn-stand' 
                    onClick={(event) => { event.stopPropagation(); handleStand(); }}></button>}
                {gameRunning && <button id='btn-double' 
                    onClick={(event) => { event.stopPropagation(); handleDouble(); }}></button>}
                {gameRunning && <button id='btn-hit' 
                    onClick={(event) => { event.stopPropagation(); handleHit(); }}></button>}
                {!gameRunning && <button id='btn-new-game' 
                    onClick={(event) => { event.stopPropagation(); onNewGame(); }}></button>}
                {!gameRunning && <button id='btn-clear-bet' 
                    onClick={(event) => { event.stopPropagation(); resetBet(); setBetChips([]);}}></button>}
            </div>

            <div id='chips-row-wrapper' style={{
                                        height: 'auto', 
                                        overflow: 'hidden'}}>

            <div id='pointer-row-animation' style={{
                                            visibility: !gameRunning ? 'visible' : 'hidden', display: 'flex', 
                                            gap: '43px', 
                                            justifyContent: 'center', 
                                            transform: 'translateY(3px)'}}>

                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
                <div id='pointer-animation'>▼</div>
            </div>

            <div id='bet-container-box'style={{
                                        visibility: !gameRunning ? 'visible' : 'hidden', display: 'flex', 
                                        gap: '8px', 
                                        justifyContent: 'center',
                                        marginBottom:'10px'}}>

                <img src={chip5} 
                    className='chip-img' 
                    onClick={(event) => handleChipClick(5,chip5,event)}/>
                <img src={chip10} 
                    className='chip-img' 
                    onClick={(event) => handleChipClick(10,chip10,event)}/>
                <img src={chip25} 
                    className='chip-img'
                    onClick={(event) => handleChipClick(25,chip25,event)}/>
                <img src={chip50} 
                    className='chip-img' 
                    onClick={(event) => handleChipClick(50,chip50,event)}/>
                <img src={chip100} 
                    className='chip-img' 
                    onClick={(event) => handleChipClick(100,chip100,event)}/>
                <img src={chip250} 
                    className='chip-img' 
                    onClick={(event) => handleChipClick(250,chip250,event)}/>
            </div>
            </div>
        </div>
    </>
        
    )
};
export default Controls;