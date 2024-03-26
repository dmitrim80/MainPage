import React, { useEffect, useState,useRef } from "react";
    import Deck from './Deck';
    import Player from './Player';
    import Controls from "./Controls";
    import Header from "./Header";



    const GameBoard = ({ onGameRunningChange }) => {

    const [deck, setDeck] = useState(null);
    const [dealerHand, setDealerHand] = useState([]);
    const [playerHand, setPlayerHand] = useState([]);
    const [gameRunning, setGameRunning] = useState(false);
    const [playerHandValue, setPlayerHandValue] = useState(0);
    const [dealerHandValue, setDealerHandValue] = useState(0);
    const [playerChips, setPlayerChips] = useState(1000);
    const [bet, setBet] = useState(0);
    const [gameMessage, setGameMessage] = useState("");
    const [gameOutcome, setGameOutcome] = useState("");
    const [showScores, setShowScores] = useState(false);
    const [newRound, setNewRound] = useState(false);
    const endGameTimeout = useRef();
    const [gamePause,setGamePause] = useState(false);
    const [buttonsHidden,setButtonsHidden] = useState(false);
    const [betChips,setBetChips] = useState([]);
    const chipWidth = 40;
    const gap = 0.1;
    const totalChipTypes = Object.keys(betChips).length;
    const totalWidth = totalChipTypes * chipWidth + (totalChipTypes - 1) * gap;
    const [dealerFirstCardValue,setDealerFirstCardValue] = useState(0);
    const isFirstRender = useRef(true);
    const [standPressed, setStandPressed] = useState(false);
    const [splitAvailable,setSplitAvailable] = useState(false);

    const handleSplit = ()=>{

        console.log("Split");
    }
    const handleChipClick = (amount, imgSrc, event) => {
        event.stopPropagation();
        
   
        setBetChips(currentChips => {
            // Create a new object to avoid direct state mutation
            const newChips = { ...currentChips };
            const chipType = `chip${amount}`;
   
            if (newChips[chipType]) {
                newChips[chipType].count += 1;
                // Adjust position logic as necessary
                // newChips[chipType].position += 10; 
            } else {
                newChips[chipType] = { imgSrc, count: 1, position: 0 };
            }
   
            return newChips;
        });
    };

    const onBetPlaced = (amount) => {
        if (gamePause) {
            setGameMessage("Game Paused...");
            return;
        }else if (amount === 0) {
            setPlayerChips(prev => prev + bet);
            setGameMessage("Place A Bet...");
            setBet(0);
            setBetChips([]);
        }else if (!gameRunning && playerChips >= amount) {
            setBet(prevBet => prevBet + amount);
            setPlayerChips(prevChips => prevChips - amount);
            // Don't set the gameMessage here, we'll do it in useEffect
        } else {
            return;
        }
    };
    
        function resetBet(){
            if(bet!==0){
                
                setPlayerChips(playerChips + bet);
                
                setBet(0);
                setBetChips([]);
            }
        };
        
        function handleGameResult() {
            const finalBet = bet; // Capture the bet amount before it gets reset
        
            let outcomeMessage;
            let winAmount = 0;
        
            switch(gameOutcome) {
                case "PlayerWins BlackJack":
                    outcomeMessage = `BlacJack, You Won +$${finalBet*1.5}!!!`;
                    winAmount = finalBet + finalBet * 1.5; 
                    break;
                case "DealerWins BlackJack":
                    outcomeMessage = `BlacJack, Dealer wins... -$${finalBet}`;
                    break;
                case "DealerWins Bust":
                    outcomeMessage = `Bust! Dealer Wins! -$${finalBet}`;
                    break;
                case "DealerWins":
                    outcomeMessage = `Dealer Wins... -$${finalBet}`;
                    break;
                case "PlayerWins Bust":
                    outcomeMessage = `Dealer Bust... Player Wins! +$${finalBet}`;
                    winAmount = finalBet * 2; 
                    break;
                case "PlayerWins":
                    outcomeMessage = `You Won +$${finalBet}!`;
                    winAmount = finalBet * 2; 
                    break;
                case "Push":
                    outcomeMessage = `Push! Tie... Bet returned: $${finalBet}`;
                    winAmount = finalBet; // The bet is returned to the player
                    break;
                default:
                    outcomeMessage = "Unknown outcome.";
                    break;
            }
        
            // Update game message with the outcome
            setGameMessage(outcomeMessage);
        
            // Update player chips based on the outcome
            if (winAmount > 0) {
                setPlayerChips(prevChips => prevChips + winAmount);
            }
        
               
            endGame();
        }
        
        const handleNewGame = () => {

            setButtonsHidden(false);
            setNewRound(true);
            setGameRunning(true);
            setShowScores(true);
            setGameMessage("");
            const newDeck = new Deck();
            newDeck.shuffleDeck();
            setDeck(newDeck);
            
            
            
            
            const playerFirstCard = {...newDeck.drawCard(), isFaceDown: true};
            const playerSecondCard = {...newDeck.drawCard(), isFaceDown: true};
            const dealerFirstCard = {...newDeck.drawCard(), isFaceDown: true};
            const dealerSecondCard = {...newDeck.drawCard(), isFaceDown: true};

            setPlayerHand([playerFirstCard, playerSecondCard]);
            setDealerHand([dealerFirstCard, dealerSecondCard]);
            
            setTimeout(() => {
                // Flip all player's cards
                setPlayerHand(playerHand.map(card => ({ ...card, isFaceDown: false })));
            
                // Flip all dealer's cards
                setDealerHand(dealerHand.map((card, index) => 
                    index === 0 ? { ...card, isFaceDown: false } : card // Flip only the first card
                ));
            }, 500); // Adjust this delay as needed

            const playerHand = [playerFirstCard,playerSecondCard];
            setPlayerHand(playerHand);
            const dealerHand = [dealerFirstCard,{...dealerSecondCard,isFaceDown: true }];
            setDealerHand(dealerHand);
            
            const playerHandValue = calculateHandValue(playerHand);
            setPlayerHandValue(playerHandValue);
            const dealerHandValue = calculateHandValue(dealerHand);
            
            const dealerHandValueOneCard = calculateHandValue([dealerFirstCard]);
            setDealerFirstCardValue(dealerHandValueOneCard);

            //checking for blackjack or 2 blackjacks
            let newOutcome; 

            if(playerHandValue===21 && dealerHandValue === 21){
                
               
            setTimeout(()=>{
                newOutcome = "Push";
                
                setGameOutcome(newOutcome);
                const updatedDealerHand = dealerHand.map(card => ({
                    ...card,
                    isFaceDown: false,
                }));
                setDealerHand(updatedDealerHand);
                setDealerHandValue(dealerHandValueOneCard);
            },500);   
                

            }else if(playerHandValue ===21){
                setTimeout(()=>{
                    newOutcome="PlayerWins BlackJack";
                    setGameOutcome(newOutcome);
                    const updatedDealerHand = dealerHand.map(card => ({
                        ...card,
                        isFaceDown: false,
                    }));
                    setDealerHand(updatedDealerHand);
                    setDealerHandValue(dealerHandValueOneCard);
                },500);

                

            }else if(dealerHandValue ===21){

                

                setTimeout(()=>{
                    newOutcome="DealerWins BlackJack";
                    setGameOutcome(newOutcome);;
                    const updatedDealerHand = dealerHand.map(card => ({
                        ...card,
                        isFaceDown:false,
                    }));
                    setDealerHand(updatedDealerHand);
                    setDealerHandValue(dealerHandValueOneCard);
                },500);
               
                

            }else{
                setDealerHandValue(dealerHandValueOneCard);
            }         
            
        };

        const endGame = () => {
            setStandPressed(false);
            setButtonsHidden(true);
            setBet(0);
            setBetChips([]);
            setGamePause(true);
            clearTimeout(endGameTimeout.current);
            endGameTimeout.current = setTimeout(() => {
                setDealerHand([]);
                setPlayerHand([]);
                setGameOutcome("");
                setGameMessage("Place A Bet...");
                setShowScores(false);
                setGamePause(false);
                setGameRunning(false);
            }, 5000);
        };
        
        const handleStand = (newHandValue = playerHandValue) => {
            setStandPressed(true);
            
           
            // Make 2nd dealer card visible, after 1 second delay
            setTimeout(()=>{ 
                let updatedDealerHand = dealerHand.map((card, index) => ({
                    ...card,
                    isFaceDown: index === 1 ? false : card.isFaceDown,
                }));
                setDealerHand(updatedDealerHand);
                
            //Recalculate dealerHand value and display it by using setTmeout
                let updatedDealerHandValue = calculateHandValue(updatedDealerHand);
               
                setDealerHandValue(updatedDealerHandValue);
            
                const drawCardforDealer = () => {
            //check handValue, drawCard until handValue is 17 or higher
                    if (updatedDealerHandValue < 17 && deck){
                        //delay to draw card by 1.5 seconds, card with facedown
                        setTimeout(() => {
                            const newCard = { ...deck.drawCard(), isFaceDown: true };
                            updatedDealerHand = [...updatedDealerHand, newCard];
                            setDealerHand(updatedDealerHand);
                            //delay displaying last card with face up by 1 seconds
                            setTimeout(()=>{
                                const newHand = [...updatedDealerHand];
                                newHand[newHand.length - 1].isFaceDown = false; 
                                setDealerHand(newHand);
                                
                                updatedDealerHandValue = calculateHandValue(updatedDealerHand);
                                setDealerHandValue(updatedDealerHandValue);
                            },500);
                                
                        }, 1000);

                        setTimeout(()=>{
                            if(updatedDealerHandValue < 17){
                                setTimeout(()=>{
                                    drawCardforDealer();
                                },1500);
                                
                            }else {
                                setTimeout(()=>{
                                    finishDealerTurn(updatedDealerHand, updatedDealerHandValue,newHandValue);
                                },1500);
                                
                            }
                        },1500);
                            
                        }else{
                            setTimeout(()=>{
                                
                                finishDealerTurn(updatedDealerHand, updatedDealerHandValue,newHandValue);
                            },500);
                            
                        }
                }
                
                setTimeout(()=>{
                    drawCardforDealer();
                },1500);
                
            },1000);
            
        }

        const finishDealerTurn = (finalDealerHand,finalDealerHandValue,newHandValue=playerHandValue) => {
            
            setTimeout(()=>{
                setDealerHand(finalDealerHand);
                setDealerHandValue(finalDealerHandValue);
             
                let outcome="";
                if (finalDealerHandValue > 21) {
                    outcome = "PlayerWins Bust";
            
                } else if (newHandValue > 21) {
                    outcome = "DealerWins Bust";
            
                } else if (newHandValue === 21 && finalDealerHandValue !== 21) {
                    outcome = "PlayerWins";

                } else if (finalDealerHandValue === 21 && newHandValue !== 21) {
                    outcome = "DealerWins";
    
                } else if (newHandValue > finalDealerHandValue) {
                    outcome = "PlayerWins";
            
                } else if (finalDealerHandValue > newHandValue) {
                    outcome = "DealerWins";

                } else {
                    outcome = "Push";
        
                }
               

                setGameOutcome(outcome);
            },1000);
            
        };
        

        const handleDouble = () =>{
            setStandPressed(true);
                // Check if doubling down is allowed (typically, you can only double down on your first two cards)
                if (playerHand.length !== 2) {
                    setGameMessage("Doubling down is not allowed at this time.");
                    return;
                }
            
                // Check if the player has enough chips to double the bet
                if (playerChips >= bet && !gamePause) {
                    setPlayerChips((prevChips) => prevChips - bet); // Deduct the additional bet amount from player's chips
                    setBet((prevBet) => prevBet * 2); // Double the bet
                    
                    // Draw one additional card for the player and add it to their hand
                        setTimeout(() => {
                            const newCard = { ...deck.drawCard(), isFaceDown: true };
                            const updatedPlayerHand = [...playerHand, newCard];
                            setPlayerHand(updatedPlayerHand);
                            //delay displaying last card with face up by 0.5 seconds
                            setTimeout(()=>{
                                const newHand = [...updatedPlayerHand];
                                newHand[newHand.length - 1].isFaceDown = false; 
                                setPlayerHand(newHand);

                                const newPlayerHandValue = calculateHandValue(newHand);
                                
                                setPlayerHandValue(newPlayerHandValue);
                                // Check if the player is bust after doubling down
                                setTimeout(()=>{
                                    if (newPlayerHandValue > 21) {
                                    const updatedDealerHand = dealerHand.map((card, index) => ({
                                        ...card,
                                        isFaceDown: index === 1 ? false : card.isFaceDown,
                                    }));
                                    setDealerHand(updatedDealerHand);
                                    setGameOutcome("DealerWins Bust");
                                } else {
                                    handleStand(newPlayerHandValue);
                                } 
                                },500);
                            },500);
                        }, 500);}
                        else {
                            // Not enough chips or game is paused
                            setGameMessage("Not enough chips to double down or game is paused.");
                        }

        };

        const handleHit = () =>{
            
            if(deck.cards.length > 0){
                const newCard = { ...deck.drawCard(), isFaceDown: true };
                const updatedPlayerHand = [...playerHand, newCard];

                setPlayerHand(updatedPlayerHand);

                setTimeout(() => {
                    const newHand = [...updatedPlayerHand];
                    newHand[newHand.length - 1].isFaceDown = false; // Flip only the new card
                    setPlayerHand(newHand);
                },100);

                const playerHandValue = calculateHandValue(updatedPlayerHand);
                
                setPlayerHandValue(playerHandValue);
                let newOutcome;

                if(playerHandValue>21){
                    newOutcome ="DealerWins";
                    
                    setGameOutcome(newOutcome);
                  
                    let updatedDealerHand = dealerHand.map((card, index) => ({
                        ...card,
                        isFaceDown: index === 1 ? false : card.isFaceDown,
                    }));
                    setDealerHand(updatedDealerHand);
                    let updatedDealerHandValue = calculateHandValue(updatedDealerHand);
                    setDealerHandValue(updatedDealerHandValue);
                }else if(playerHandValue ===21){
              
                    let updatedDealerHand = dealerHand.map((card, index) => ({
                        ...card,
                        isFaceDown: index === 1 ? false : card.isFaceDown,
                    }));
                    setDealerHand(updatedDealerHand);
                    //Recalculate dealerHand value and display it by using setTmeout
                    let updatedDealerHandValue = calculateHandValue(updatedDealerHand);
                    setDealerHandValue(updatedDealerHandValue);
        
                    const drawCardforDealer = () => {
                        if (updatedDealerHandValue < 17 && deck){
                                const newCard = deck.drawCard();
                                updatedDealerHand = [...updatedDealerHand,newCard];
                                updatedDealerHandValue = calculateHandValue(updatedDealerHand);
        
                                if(updatedDealerHandValue < 17){
                                    drawCardforDealer();
                                }
                            }
                    }
        
                    drawCardforDealer();
                    setDealerHand(updatedDealerHand);
                    setDealerHandValue(updatedDealerHandValue);
        
                    if(updatedDealerHandValue>playerHandValue && updatedDealerHandValue<=21){
                        newOutcome="DealerWins";
                        
                        setGameOutcome(newOutcome);
                      
                    }else if(updatedDealerHandValue===playerHandValue){

                        newOutcome="Push";
                        
                        setGameOutcome(newOutcome);


               
                    }else if(updatedDealerHandValue >21){
                        newOutcome="PlayerWins";
                        
                        setGameOutcome(newOutcome);

                    }
                    else{
                        newOutcome="PlayerWins";
                        
                        setGameOutcome(newOutcome);
                    }
                    setGameRunning(false);
                }
            }
        }

        const getCardValue = (rank) =>{
            const cardsValue = {
                'two': 2,
                'three': 3,
                'four': 4,
                'five': 5,
                'six': 6,
                'seven': 7,
                'eight': 8,
                'nine': 9,
                'ten': 10,
                'jack': 10,
                'queen': 10,
                'king': 10,
                'ace': 11,
            }
            return cardsValue[rank] || 0;
        }

        const calculateHandValue = (hand) => {
            let total = 0;
            let aceCount = 0;

            hand.forEach(card => {
                let value = getCardValue(card.rank);
                if (card.rank === 'ace') {
                    aceCount++;
                }
                total += value;
            })
            // Adjust score based on how many ace, initial ace value is 11, 
            //    subtract 10 from total score until score is less than 21 
            //    AND number of aces more than 0
            while (total > 21 && aceCount > 0) {
                total -= 10;
                aceCount -= 1;
            }

            return total;
        }
        useEffect(() => {
            if (playerHand.length > 0) {
                const newPlayerHandValue = calculateHandValue(playerHand);
                setPlayerHandValue(newPlayerHandValue);
        
                // Move the logic to determine if the game should proceed to handleStand or another function here
                if (newPlayerHandValue > 21) {
                    setGameOutcome("DealerWins Bust");
                    // Additional logic for dealer's turn can go here
                } else {
                    // Since handleStand might rely on updated hand value, ensure it's called here or in response to updated state
                    // handleStand();
                }
            }
        }, [playerHand]); // Only re-run the effect if playerHand changes
        useEffect(() => {
            
            const playerHandValue = calculateHandValue(playerHand);
          
            const dealerHandValue = calculateHandValue(dealerHand);
           
            setPlayerHandValue(playerHandValue);
            setDealerHandValue(dealerHandValue);
        }, [playerHand,dealerHand]);
      
        useEffect(() => {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
    
            if (gameOutcome) {
                handleGameResult();
            }
        }, [gameOutcome]);
    

        useEffect(() => {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            if (bet > 0) {
                setGameMessage(`Bet of $${bet}`);
            }
          }, [bet]);
      

          useEffect(() => {
            return () => {
                clearTimeout(endGameTimeout.current);
            };
        }, []);

        useEffect(() => {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            
          }, [bet, playerChips]);

        return (
            <>
                <Header
                playerHandValue={playerHandValue}
                dealerHandValue={dealerHandValue}
                playerChips={playerChips}
                gameMessage={gameMessage}
                />



                <div className="game-area">
                    <div id='score-bubble'>
                        <div id="dealer-score-bubble" 
                        style={
                        {visibility: showScores ? 'visible' : 'hidden'}}>
            {dealerHand[1] && dealerHand[1].isFaceDown ? dealerFirstCardValue : dealerHandValue}
                            </div>
                    </div>
                    
                    <Player hand={dealerHand} isDealer={true} />
                    
                    <div className="message-container">
                        <div className="message-box" style={{visibility:gameMessage.trim()=="" ? 'hidden':'visible'}}>{gameMessage}</div>
                    </div>
                    
                    <Player hand={playerHand} isDealer={false} />
                    
                    <div id='score-bubble'>
                        <div id="player-score-bubble"style={{visibility: showScores ? 'visible' : 'hidden'}}>{playerHandValue}</div>
                    </div>
                </div>


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
                                }} 
                            />
                        ))
                    ))}
                        
                    </div>
                </div>

                <Controls
                handleHit={handleHit}
                handleStand={handleStand}
                handleDouble={handleDouble}
                onNewGame={handleNewGame}
                gameRunning={gameRunning}
                onBetPlaced={onBetPlaced}
                bet={bet}
                buttonsHidden={buttonsHidden}
                handleChipClick={handleChipClick}
                standPressed={standPressed}
                splitAvailable={splitAvailable}
                />
            </>
        );
    };
    export default GameBoard;