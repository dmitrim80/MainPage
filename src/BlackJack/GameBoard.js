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
       


    const handleChipClick = (amount, imgSrc, event) => {
        event.stopPropagation();
        
   
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

    const onBetPlaced = (amount) => {
        if (gamePause) {
            setGameMessage("Game Paused...");
            return;
        }else if (amount === 0) {
            setPlayerChips(prev => prev + bet);
            setGameMessage("Place A Bet...");
            setBet(0);
        }else if (!gameRunning && playerChips >= amount) {
            console.log(`Attempting to place bet: ${amount}`);
            console.log(`Current chips: ${playerChips}, Current bet: ${bet}, Game running: ${gameRunning}`);
            setBet(prevBet => prevBet + amount);
            setPlayerChips(prevChips => prevChips - amount);
            // Don't set the gameMessage here, we'll do it in useEffect
        } else {
            console.log("Cannot place bet at this time.");
            // You might want to handle this case differently, perhaps resetting the message
        }
    };
    
      
        

   
        

        function resetBet(){
            if(bet!==0){
                console.log(`PlayerChips ${playerChips} + ${bet}`)
                setPlayerChips(playerChips + bet);
                console.log(`bet set to 0`);
                setBet(0);
            }
        };
        
        function handleGameResult() {
            const finalBet = bet; // Capture the bet amount before it gets reset
        
            let outcomeMessage;
            let winAmount = 0;
        
            switch(gameOutcome) {
                case "DealerWins":
                    outcomeMessage = `Dealer Wins, you lost bet of: ${finalBet}`;
                    break;
                case "PlayerWins":
                    outcomeMessage = `You Won! Your bet: ${finalBet}`;
                    winAmount = finalBet * 2; // Assuming the player wins double their bet
                    break;
                case "Push":
                    outcomeMessage = `Push... It's a Tie. Bet returned: ${finalBet}`;
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
            console.log(`Handling game result with bet: ${bet}`);
               
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
            
            
            
            
            const playerFirstCard = newDeck.drawCard();
            const playerSecondCard = newDeck.drawCard();
            const dealerFirstCard = newDeck.drawCard();
            const dealerSecondCard = newDeck.drawCard();

            const playerHand = [playerFirstCard,playerSecondCard];
            setPlayerHand(playerHand);
            const dealerHand = [dealerFirstCard,{...dealerSecondCard,isFaceDown: true }];
            setDealerHand(dealerHand);
            
            const playerHandValue = calculateHandValue(playerHand);
            setPlayerHandValue(playerHandValue);
            const dealerHandValue = calculateHandValue(dealerHand);

            const dealerHandValueOneCard = calculateHandValue([dealerFirstCard]);

            //checking for blackjack or 2 blackjacks
            let newOutcome; 

            if(playerHandValue===21 && dealerHandValue === 21){
                newOutcome = "Push";
                
                setGameOutcome(newOutcome);
               
               
                let updatedDealerHand = dealerHand.map((card, index) => ({
                    ...card,
                    isFaceDown: index === 1 ? false : card.isFaceDown,
                }));
                setDealerHand(updatedDealerHand);
            }else if(playerHandValue ===21){
                newOutcome="PlayerWins";
                
                setGameOutcome(newOutcome);
               
                let updatedDealerHand = dealerHand.map((card, index) => ({
                    ...card,
                    isFaceDown: index === 1 ? false : card.isFaceDown,
                }));
                setDealerHand(updatedDealerHand);
            }else if(dealerHandValue ===21){
                newOutcome="DealerWins";
                
                setGameOutcome(newOutcome);;
               
                let updatedDealerHand = dealerHand.map((card, index) => ({
                    ...card,
                    isFaceDown: index === 1 ? false : card.isFaceDown,
                }));
                setDealerHand(updatedDealerHand);

            }else{
                setDealerHandValue(dealerHandValueOneCard);
            }         
            
        };



        const endGame = () => {
            setButtonsHidden(true);
            setBet(0);
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

        const handleStand = () => {

            // Make 2nd dealer card visible
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
                        }else {
                            finishDealerTurn(updatedDealerHand, updatedDealerHandValue);
                        }
                    }else{
                        finishDealerTurn(updatedDealerHand, updatedDealerHandValue);
                    }
            }
            drawCardforDealer();
        }

        const finishDealerTurn = (finalDealerHand,finalDealerHandValue) => {
            

            setDealerHand(finalDealerHand);
            setDealerHandValue(finalDealerHandValue);

            let outcome="";
            let resultMessage="";
            console.log(`Dealer Hand: ${dealerHandValue}`);
            console.log(`Dealer Hand: ${playerHandValue}`);
            if (finalDealerHandValue > 21) {
                outcome = "PlayerWins";
                resultMessage = "Dealer Bust... You Win!";
            } else if (playerHandValue > 21) {
                outcome = "DealerWins";
                resultMessage = "Bust... Dealer Wins.";
            } else if (playerHandValue === 21 && finalDealerHandValue !== 21) {
                outcome = "PlayerWins";
                resultMessage = "Blackjack! You Win!";
            } else if (finalDealerHandValue === 21 && playerHandValue !== 21) {
                outcome = "DealerWins";
                resultMessage = "Blackjack... Dealer Wins.";
            } else if (playerHandValue > finalDealerHandValue) {
                outcome = "PlayerWins";
                resultMessage = "You Win!";
            } else if (finalDealerHandValue > playerHandValue) {
                outcome = "DealerWins";
                resultMessage = "Dealer Wins...";
            } else {
                outcome = "Push";
                resultMessage = "Push... It's a Tie!";
            }
            console.log(`From finishDealerTurn Game Outcome: ${outcome}`);
            console.log(resultMessage);
            setGameOutcome(outcome);
            
        };


        const handleDouble = () =>{
            console.log("double");
        };

        const handleHit = () =>{
            
            if(deck.cards.length > 0){
                const newCard = deck.drawCard();
                const updatedPlayerHand = [...playerHand, newCard];
                
                const playerHandValue = calculateHandValue(updatedPlayerHand);
                setPlayerHand(updatedPlayerHand);
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
            if (gameOutcome) {
              handleGameResult();
            }
        }, [gameOutcome]);

        useEffect(() => {
            // This useEffect will now handle updating the gameMessage whenever bet changes
            if (bet > 0) {
                setGameMessage(`Bet of $${bet}!`);
            }
          }, [bet]);
      

          useEffect(() => {
            return () => {
                clearTimeout(endGameTimeout.current);
            };
        }, []);

        useEffect(() => {
            console.log(`Bet updated: ${bet}, Player chips: ${playerChips}`);
          }, [bet, playerChips]);

        return (
            <>
                <Header
                playerHandValue={playerHandValue}
                dealerHandValue={dealerHandValue}
                playerChips={playerChips}
                gameMessage={gameMessage}
                />



                <div id="game-area">
                    <div id='score-bubble'>
                    <div id="dealer-score-bubble" style={{visibility: showScores ? 'visible' : 'hidden'}}>{dealerHandValue}</div>
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
                />
            </>
        );
    };
    export default GameBoard;