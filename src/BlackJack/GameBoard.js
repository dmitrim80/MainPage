    import React, { useEffect, useState } from "react";
    import Deck from './Deck';
    import Player from './Player';
    import ScoreBoard from "./ScoreBoard";
    import Controls from "./Controls";
    import Header from "./Header";



    const GameBoard = ({ onGameRunningChange }) => {

        const [deck,setDeck] = useState(null);
        const [dealerHand, setDealerHand] = useState([]);
        const [playerHand, setPlayerHand] = useState([]);     
        const [gameRunning, setGameRunning] = useState(false);
        const [playerHandValue,setPlayerHandValue] = useState(0);
        const [dealerHandValue,setDealerHandValue] = useState(0);
        const [result,setResult] = useState("");
        const [playerChips,setPlayerChips] = useState(1000);
        const [bet,setBet]=useState(0);
        const [gameMessage,setGameMessage] = useState("");
        const [gameOutcome,setGameOutcome] = useState("");

        function handleBet(amount){
            if (playerChips-amount >=0){
                setGameMessage("");
                setBet(prevBet => prevBet + amount);
                setPlayerChips(prevChips => prevChips - amount);
            }
            else{
                setGameMessage("Not Enough Chips!");
            }
            
        };
        function resetBet(){
            if(bet!==0){
                setPlayerChips(playerChips + bet);
                setBet(0);
            }
        };
        
        function handleGameResult(){
            let message = "";
            let newChipsTotal = playerChips;
            switch(gameOutcome) {
                case "DealerWins":
                    message= `You lost your bet of: ${bet}`;
                    break;
                case "PlayerWins":
                    message=`You Won! your bet:${bet}`;
                    newChipsTotal += bet*2;
                    break;
                case "Push":
                    message=`Push... It's a Tie.  Bet returned: ${bet}`;
                    newChipsTotal += bet;
                    break;

                default:
                setGameMessage("UNKNOWN ACTION");
            }
            setGameMessage(message);
            setPlayerChips(newChipsTotal);
            setBet(0);
            setGameRunning(false);        
        };
        

            
        
        const handleNewGame = () => {
            
            setGameRunning(true);
            //create a Deck and shuffle
            const deck = new Deck();
            deck.shuffleDeck();
            setDeck(deck);
            let result = "";
            setResult(result);
            
            
            const playerFirstCard = deck.drawCard();
            const playerSecondCard = deck.drawCard();
            const dealerFirstCard = deck.drawCard();
            const dealerSecondCard = deck.drawCard();

            const playerHand = [playerFirstCard,playerSecondCard];
            setPlayerHand(playerHand);
            const dealerHand = [dealerFirstCard,{...dealerSecondCard,isFaceDown: true }];
            setDealerHand(dealerHand);
            
            const playerHandValue = calculateHandValue(playerHand);
            setPlayerHandValue(playerHandValue);
            const dealerHandValue = calculateHandValue(dealerHand);

            const dealerHandValueOneCard = calculateHandValue([dealerFirstCard]);

            //checking for blackjack or 2 blackjacks
            if(playerHandValue===21 && dealerHandValue === 21){
                
                setGameOutcome("Push");
                result = "Push... It's a Tie!";
                setResult(result);
                let updatedDealerHand = dealerHand.map((card, index) => ({
                    ...card,
                    isFaceDown: index === 1 ? false : card.isFaceDown,
                }));
                setDealerHand(updatedDealerHand);
            }else if(playerHandValue ===21){
                setGameOutcome("PlayerWins");
                result = "BlackJack! You Win!";
                setResult(result);
                let updatedDealerHand = dealerHand.map((card, index) => ({
                    ...card,
                    isFaceDown: index === 1 ? false : card.isFaceDown,
                }));
                setDealerHand(updatedDealerHand);
            }else if(dealerHandValue ===21){
                setGameOutcome("DealerWins");
                result = "BlackJack... Dealer Wins.";
                setResult(result);
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
            setGameRunning(false);
            // Additional logic for ending the game...
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

            if(finalDealerHandValue>21){
                setGameOutcome("PlayerWins");
                setResult("Dealer Bust... You Win!");
            }else if(finalDealerHandValue > playerHandValue){
                setGameOutcome("DealerWins");
                setResult("Dealer Wins...");
            }else if(finalDealerHandValue === playerHandValue){
                setGameOutcome("Push");
                setResult("Push...It's a Tie!");
            }
            else{
                setGameOutcome("PlayerWins");
                setResult("You win!");
            }

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

                if(playerHandValue>21){
                    setGameOutcome("DealerWins");
                    setResult("Bust...Dealer Wins.");
                    setTimeout(() => { setGameRunning(false); }, 0);
                }else if(playerHandValue ===21){
                    setResult("21... waiting for Dealer's turn.");
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
                        setGameOutcome("DealerWins");
                        setResult("Dealer Wins...");
                    }else if(updatedDealerHandValue===playerHandValue){
                        setGameOutcome("Push");
                        setResult("Push...It's a Tie!");
                    }else if(updatedDealerHandValue >21){
                        setGameOutcome("PlayerWins");
                        setResult("Dealer Bust... You Win!");
                    }
                    else{
                        setGameOutcome("PlayerWins");
                        setResult("You win!");
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
      
        useEffect(()=>{
            handleGameResult();
        },[gameOutcome]);
        
        useEffect(() => {
            if (typeof onGameRunningChange === 'function') {
                onGameRunningChange(gameRunning);
            }
        }, [gameRunning, onGameRunningChange]);

        return (
            <>
                <Header/>
                <div id='blackjack-header'>BLACKJACK</div>
                <ScoreBoard 
                playerHandValue={playerHandValue}
                dealerHandValue={dealerHandValue}
                result={result}
                bet={bet}
                playerChips={playerChips}
                gameMessage={gameMessage}
                />
                <Player hand={dealerHand} isDealer={true} />
                <Player hand={playerHand} isDealer={false} />
                <Controls 
                handleHit={handleHit}  
                handleStand={handleStand}
                handleDouble={handleDouble}
                onNewGame={handleNewGame}
                gameRunning={gameRunning}
                handleBet={handleBet}
                resetBet={resetBet}
                />
            </>
        );
    };
    export default GameBoard;
