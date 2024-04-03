import React, { useEffect, useState,useRef } from "react";
import Deck from './Deck';
import Player from './Player';
import Controls from "./Controls";
import Header from "./Header";
import btnStand from './images/stand-button2.png';
import btnHit from './images/hit-button2.png';
import GameRecap from "./GameRecap";
import GameHistory from "./GameHistory";

const GameBoard = ({ onGameRunningChange }) => {
    const [deck, setDeck] = useState(null);
    const [dealerHand, setDealerHand] = useState([]);
    const [dealerHandText,setDealerHandText]=useState([]);
    const [playerHand, setPlayerHand] = useState([]);
    const [playerHandText,setPlayerHandText]=useState([]);

    const [gameRunning, setGameRunning] = useState(false);
    const [buttonsHidden,setButtonsHidden] = useState(false);
    const [playerHandValue, setPlayerHandValue] = useState(0);
    const [dealerHandValue, setDealerHandValue] = useState(0);
    const [playerChips, setPlayerChips] = useState(1000);
    const [bet, setBet] = useState(0);
    const [gameMessage, setGameMessage] = useState("Place a bet...");
    const [gameOutcome, setGameOutcome] = useState("");
    const [gameOutcome1, setGameOutcome1] = useState("");
    const [gameOutcome2, setGameOutcome2] = useState("");
    const [showScores, setShowScores] = useState(false);
    const endGameTimeout = useRef();
    const [gamePause,setGamePause] = useState(false);
    
    const [betChips,setBetChips] = useState([]);
    const chipWidth = 40;
    const gap = 0.1;
    const [previousBet,setPreviousBet] = useState(0);
    const totalChipTypes = Object.keys(betChips).length;
    const totalWidth = totalChipTypes * chipWidth + (totalChipTypes - 1) * gap;
    const [dealerFirstCardValue,setDealerFirstCardValue] = useState(0);
    const isFirstRender = useRef(true);
    const [standPressed, setStandPressed] = useState(false);
    const [splitAvailable,setSplitAvailable] = useState(true);
    const [playerHand1,setPlayerHand1] = useState([]);
    const [playerHand2,setPlayerHand2] = useState([]);
    const [twoHands,setTwoHands] = useState(false);
    const [playerHand1Value,setPlayerHand1Value]= useState(0);
    const [playerHand2Value,setPlayerHand2Value]=useState(0);
    const [hitPressed,setHitPressed] = useState(false);
    const [betHand1,setBetHand1] = useState(0);
    const [betHand2,setBetHand2] = useState(0);
    const [hand1TurnFinished,setHand1TurnFinished] = useState(false);
    const [hand2TurnFinished,setHand2TurnFinished] = useState(false);
    const [splitPressed,setSplitPressed] = useState(false);
    
    //counter for progressBar
    const [gamesCount,setGamesCount] = useState(1);
    const [result,setResult] = useState("");
    const [progressBarWidth,setProgressBarWidth] = useState(10);
    const [roundNumber,setRoundNumber] = useState(1);
    const [roundOutcome,setRoundOutcome] = useState("");
    const [gameRoundsHistory, setGameRoundsHistory] = useState([]);
    const [gameResultsCount, setGameResultsCount] = useState({
        totalGamesPlayed: 0,
        gamesWon: 0,
        gamesLoss: 0,
        numberOfTie: 0,
        numberOfBlackJacksByPlayer: 0,
        numberOfBlackJacksByDealer:0,
        numberOfSplitsAvailable: 0,
        numberOfsplitsPlayed:0,
        numberOfDoubles: 0,
        numberOfBusts: 0,
        numberOfWinsWith2Cards: 0,
        totalAmountOfBets:0,
        totalAmountOfBetsWon:0,
        totalAmountOfBetsLost:0,
        });
    
    const cardToString = (card) => {
        return `${card.rank} of ${card.suit}`;
        };
    const convertHandToText = (hand) => {
        return hand.map(cardToString);
        };

    const clearBet = () => {
        // Assuming you want to clear the bet and return the bet amount to the player's chips only if the bet hasn't been played yet
        if (!gameRunning) {
            setPlayerChips((prevChips) => prevChips + bet); // Return the current bet amount to the player's chips
        }
        setBet(0); // Reset the current bet to 0
        setPreviousBet(0); // Reset the previous bet to 0
        // Additional logic as needed
    };

    // calculates number of games Won
    const playerWins = () =>{
        setGameResultsCount(prevState => {
            return{...prevState, gamesWon:prevState.gamesWon + 1};
        });
    }
    // calculates number of games Lost
    const playerLoss = () =>{
        setGameResultsCount(prevState => {
            return{...prevState, gamesLoss:prevState.gamesLoss + 1};
        });
    }
    // calculates number of Tie games.
    const playerPush = () =>{
        setGameResultsCount(prevState => {
            return{...prevState, numberOfTie:prevState.numberOfTie + 1};
        });
    }
    // calculate number of blackjack by player.
    const playerBlackJack = () =>{
        setGameResultsCount(prevState => {
            return{...prevState, numberOfBlackJacksByPlayer: prevState.numberOfBlackJacksByPlayer +1};
        });
    }
    // calculate number of blackjack by dealer.
    const dealerBlackJack = () =>{
        setGameResultsCount(prevState => {
            return{...prevState, numberOfBlackJacksByDealer: prevState.numberOfBlackJacksByDealer +1};
        });
    }
//calculate number of splits available
    const splitsAvailable = () =>{
        setGameResultsCount(prevState => {
            return{...prevState, numberOfSplitsAvailable:prevState.numberOfSplitsAvailable + 1};
        });
    }
    //calculate number of splits played
    const splitsPlayed = () =>{
        setGameResultsCount(prevState =>{
            return{...prevState, numberOfsplitsPlayed:prevState.numberOfsplitsPlayed + 1};
        });
    }
     //calculate number of doubles played
     const doublesPlayed = () =>{
        console.log("running doublesPlayed inside doublesPlayed");
        setGameResultsCount(prevState =>{
            return{...prevState, numberOfDoubles:prevState.numberOfDoubles + 1};
        });
    }
     //calculates number of Bust games.
     const playerBusts = () =>{
        setGameResultsCount(prevState => {
            return{...prevState, numberOfBusts:prevState.numberOfBusts + 1};
        });
    }
    //calculates number of games won with 2 cards, excluding blackjack
    const winWithOutHit = () =>{
        if(!hitPressed){
            setGameResultsCount(prevState => {
                return{...prevState,numberOfWinsWith2Cards: prevState.numberOfWinsWith2Cards+1 };
            });
        }
    }
    //calculates total amount of Bets
    const totalAmountOfBets = (bet) => {
        let currentBet = bet;
        setGameResultsCount(prevState => {
            return{...prevState,totalAmountOfBets:prevState.totalAmountOfBets + currentBet};
        });
    }
    //calculates total amount of bets won
    const playerBetsWon = (betWon) =>{
        let betsWon = betWon;
        setGameResultsCount(prevState =>{
            return{...prevState, totalAmountOfBetsWon:prevState.totalAmountOfBetsWon +betsWon};
        })
    }
    //calculates total amount of bets lost
    const playerBetsLost = (betLost) =>{
        let betsLost = betLost;
        setGameResultsCount(prevState =>{
            return{...prevState, totalAmountOfBetsLost:prevState.totalAmountOfBetsLost -betsLost};
        })
    }
   
    
    const updateGameRoundsHistory = (newRoundResults) => {
        setGameRoundsHistory(prevHistory => [...prevHistory, newRoundResults]);
      };

    
    

    const handleGameResult = () => {
        
        
        let splitHand1="";
        let splitHand2="";
        let preBet = previousBet;
        let chips = playerChips;
        let betOneHand = bet;
        let bet1 = betHand1;
        let bet2 = betHand2;
        let betOutcome = 0;
        let bet1Outcome=0;
        let bet2Outcome=0;
        let newOutcomeMessage ="";
        let newOutcomeMessage1="";
        let newOutcomeMessage2="";
        totalAmountOfBets(bet1);
        totalAmountOfBets(bet2);
        totalAmountOfBets(bet);
        // let finalOutcome;
    

        if(splitPressed){
            if(gameOutcome2==="" || gameOutcome1 ===""){
                return;
            }else{
                switch(gameOutcome1) {
                    case "PlayerWins BlackJack":
                        newOutcomeMessage1 = `BlackJack 1st hand, win: ${bet1*1.5}`;
                        bet1Outcome = bet1*2.5;
                        splitHand1 = "1st Hand - Player Wins";
                        playerWins();
                        playerBlackJack();
                        playerBetsWon(bet1Outcome);
                        
                        break;
                    case "DealerWins BlackJack":
                        newOutcomeMessage1 = `BlackJack, Dealer wins...1st hand -$${bet1}`;
                        splitHand1 = "1st Hand - Dealer Wins";
                        bet1Outcome = bet1 * (-1);
                        playerLoss();
                        dealerBlackJack();
                        playerBetsLost(bet1);
                        break;
                    case "DealerWins Bust":
                        newOutcomeMessage1 = `Bust! Dealer Wins! 1st hand  -$${bet1}`;
                        splitHand1 = "1st Hand - Dealer Wins";
                        bet1Outcome = bet1 * (-1);
                        playerLoss();
                        playerBusts();
                        playerBetsLost(bet1);
                        break;
                    case "DealerWins":
                        newOutcomeMessage1 = `Dealer Wins...1st hand -$${bet1}`;
                        splitHand1 = "1st Hand - Dealer Wins";
                        bet1Outcome = bet1 * (-1);
                        playerLoss();
                        playerBetsLost(bet1);
                        break;
                    case "PlayerWins Bust":
                        newOutcomeMessage1 = `Dealer Bust...1st hand Win! +$${bet1}`;
                        splitHand1 = "1st Hand - Player Wins";
                        bet1Outcome = bet1;
                        playerWins();
                        winWithOutHit();
                        playerBetsWon(bet1Outcome);
                        break;
                    case "PlayerWins":
                        newOutcomeMessage1 = `1st Hand Win! +$${bet1}!`;
                        splitHand1 = "1st Hand - Player Wins";
                        bet1Outcome = bet1;
                        playerWins();
                        winWithOutHit();
                        playerBetsWon(bet1Outcome);
                        break;
                    case "Push":
                        newOutcomeMessage1 = `Push! 1st Hand Tie... Bet returned: $${bet1}`;
                        splitHand1 = "1st Hand - Push";
                        bet1Outcome = 0;
                        playerPush();
                        break;
                    default:
                        newOutcomeMessage1 = "Unknown outcome.";
                        splitHand1 = "1st Hand - Unknown";
                        break;
                }
                switch(gameOutcome2) {
                    case "PlayerWins BlackJack":
                        newOutcomeMessage2 = `BlackJack 2nd hand, win: ${bet2*1.5}`;
                        bet2Outcome = bet2*2.5;
                        splitHand1 = "1st Hand - Player Wins";
                        playerWins();
                        playerBlackJack();
                        playerBetsWon(bet2Outcome);
                
                        break;
                    case "DealerWins BlackJack":
                        newOutcomeMessage2 = `BlackJack, Dealer wins...2nd hand -$${bet2}`;
                        splitHand1 = "2nd Hand - Dealer Wins";
                        bet2Outcome = bet2 * (-1);
                        playerLoss();
                        dealerBlackJack();
                        playerBetsLost(bet2);
                        break;
                    case "DealerWins Bust":
                        newOutcomeMessage2 = `Bust! Dealer Wins! 2nd hand  -$${bet2}`;
                        splitHand1 = "2nd Hand - Dealer Wins";
                        bet2Outcome = bet2 * (-1);
                        playerLoss();
                        playerBusts();
                        playerBetsLost(bet2);
                        break;
                    case "DealerWins":
                        newOutcomeMessage2 = `Dealer Wins...2nd hand -$${bet2}`;
                        splitHand1 = "2nd Hand - Dealer Wins";
                        bet2Outcome = bet2 * (-1);
                        playerLoss();
                        playerBetsLost(bet2);
                        break;
                    case "PlayerWins Bust":
                        newOutcomeMessage2 = `Dealer Bust...2nd hand Win! +$${bet2}`;
                        splitHand1 = "2nd Hand - Player Wins";
                        bet2Outcome = bet2;
                        playerWins();
                        playerBusts();
                        winWithOutHit();
                        playerBetsWon(bet2Outcome);
                        break;
                    case "PlayerWins":
                        newOutcomeMessage2 = `2nd Hand Win! +$${bet2}!`;
                        splitHand1 = "2nd Hand - Player Wins";
                        bet2Outcome = bet2;
                        playerWins();
                        winWithOutHit();
                        playerBetsWon(bet2Outcome);
                        break;
                    case "Push":
                        newOutcomeMessage2 = `Push! 1st Hand Tie... Bet returned: $${bet2}`;
                        splitHand1 = "2nd Hand - Push";
                        bet2Outcome = 0;
                        playerPush();
                        break;
                    default:
                        newOutcomeMessage2 = "Unknown outcome.";
                        break;
                }
                let finalMessage = newOutcomeMessage1 + "\n " +newOutcomeMessage2;
                setGameMessage(finalMessage);
                
            }
        }else{
            switch(gameOutcome) {
                case "PlayerWins BlackJack":
                    newOutcomeMessage = `BlackJack, You Won +$${betOneHand*1.5}!!!`;
                    betOutcome =  betOneHand *2.5;
                    playerWins();
                    playerBlackJack();
                    playerBetsWon(betOutcome);
                    break;
                case "DealerWins BlackJack":
                    newOutcomeMessage = `BlackJack, Dealer wins... -$${betOneHand}`;
                    betOutcome = betOneHand * (-1);
                    playerLoss();
                    dealerBlackJack();
                    playerBetsLost(betOneHand);
                    break;
                case "DealerWins Bust":
                    newOutcomeMessage = `Bust! Dealer Wins! -$${betOneHand}`;
                    betOutcome = betOneHand * (-1);
                    playerLoss();
                    playerBusts();
                    playerBetsLost(betOneHand);
                    break;
                case "DealerWins":
                    newOutcomeMessage = `Dealer Wins... -$${betOneHand}`;
                    betOutcome = betOneHand * (-1);
                    playerLoss();
                    playerBetsLost(betOneHand);
                    break;
                case "PlayerWins Bust":
                    newOutcomeMessage = `Dealer Bust... Player Wins! +$${betOneHand}`;
                    betOutcome = betOneHand;
                    playerWins();
                    playerBusts();
                    winWithOutHit();
                    playerBetsWon(betOutcome);
                    break;
                case "PlayerWins":
                    newOutcomeMessage = `You Won +$${betOneHand}!`;
                    betOutcome = betOneHand;
                    playerWins();
                    winWithOutHit();
                    playerBetsWon(betOutcome);
                    break;
                case "Push":
                    newOutcomeMessage = `Push! Tie... Bet returned: $${betOneHand}`;
                    betOutcome = 0;
                    playerPush();
                    break;
                default:
                    newOutcomeMessage = "Unknown outcome.";
                    break;
            }
            
            setGameMessage(newOutcomeMessage);
            
        }
        if (newOutcomeMessage === ""){
           
            betOutcome= bet2Outcome + bet1Outcome + bet1+bet2;
      
            chips = betOutcome + chips;
          
            setPlayerChips(chips);
            
        }else{
           
            betOutcome = betOutcome + betOneHand;
           
            chips = betOutcome +chips;
           
            setPlayerChips(chips);
            
        }       
        
        endGame();
    }    

    
    const handleSplit = ()=>{
        
        if (playerChips >= bet && !gamePause)
        {
            setButtonsHidden(true);
            setSplitPressed(true);
            splitsPlayed();
            const betHand1 = bet;
            const betHand2 = bet;
            setBetHand1(betHand1);
            setBetHand2(betHand2);
            setPlayerChips(playerChips-bet);
            
            const newDeck = deck;
            const playerHand1SecondCard = {...newDeck.drawCard(), isFaceDown: true};
            const playerHand2SecondCard = {...newDeck.drawCard(), isFaceDown: true};
            const playerHand1 = [playerHand[0],playerHand1SecondCard];
            const playerHand2 = [playerHand[1],playerHand2SecondCard];
            setPlayerHand1(playerHand1);
            setPlayerHand2(playerHand2);
            setTwoHands(true);
            setPlayerHand([]);
            setTimeout(()=>{
                setPlayerHand1(playerHand1.map(card => ({...card,isFaceDown: false})))
                setPlayerHand2(playerHand2.map(card => ({...card,isFaceDown: false})))
            },500);
            const playerHand1Value = calculateHandValue(playerHand1);
            const playerHand2Value = calculateHandValue(playerHand2);
            setPlayerHand1Value(playerHand1Value);
            setPlayerHand2Value(playerHand2Value);
            setPlayerHandValue(0);
            
            if(playerHand1Value===21 && playerHand2Value ===21){
                
                // setPlayerChips(playerChips+betHand1*2.5+betHand2*2.5);
                setGameOutcome1("PlayerWins BlackJack");
                setGameOutcome2("PlayerWins BlackJack");
                setHand2TurnFinished(true);
                setHand1TurnFinished(true);
            }else{
                //checking turn for hand2 during split
                if(playerHand2Value === 21){
                    // setBetHand2(betHand2*2.5);
                    setGameOutcome2("PlayerWins BlackJack");
                    setHand2TurnFinished(true);
                   
                }else{
                    let gameMessage = `What do you want to do? Hit or Stand`;                        
                    setGameMessage(gameMessage);
                }
                //checking turn for hand1 during split
                if(playerHand1Value === 21){
                    // let resultHand1 = `Hand1 BlackJack you won ${betHand1*2.5}`;
                    setGameOutcome1("PlayerWins");
                    // setBetHand1(betHand1*2.5);
                    setHand1TurnFinished(true);
                   
                }
                else{
                    let gameMessage = "What do you want to do? Hit or Stand"
                    setGameMessage(gameMessage);

                }
                

            }
        }else{
            setGameMessage("Not enough chips for split...");
            return;
        }
        


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

    const onBetPlaced = (newBet, sendingPreviousBet = false) => {
        if (gamePause) {
            setGameMessage("Game Paused...");
            return;
        }else if (newBet === 0) {
            setPlayerChips(prev => prev + bet);
            setGameMessage("Place A Bet...");
            setBet(0);
            setBetChips([]);
        }else if (!gameRunning && playerChips >= newBet) {
            if(sendingPreviousBet){
                setPlayerChips(prevChips => prevChips - newBet);
            
            }else{
                setBet(prevBet => prevBet + newBet);
                setPlayerChips(prevChips => prevChips - newBet);
               
            }
            
        } else {
            return;
        }
    };
    
    
    const assignGameResults = () =>{
        setGameResultsCount(prevResult =>({
            ...prevResult, 
            totalGamesPlayed: prevResult.totalGamesPlayed+1
        }));
        setGamesCount(count=>count+1);
    }
    
    
    const handleNewGame = () => {
        

       
        
        if (previousBet > playerChips){
            setGameMessage(`Not enough chips, change your bet...`);
            return;
        }else {
            if(previousBet!==0 ){
                let sendingPreviousBet = true;
                onBetPlaced(previousBet,sendingPreviousBet);
            }
            asignPreviousBet(bet);
            setSplitAvailable(true);
            setHand1TurnFinished(false);
            setHand2TurnFinished(false);
            setSplitPressed(false);
            setHitPressed(false);
            setButtonsHidden(false);
            setGameRunning(true);
            setShowScores(true);
            setGameMessage(`Your bet is $${bet}`);
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
                
                // Flip 1st dealercards
                setDealerHand(dealerHand.map((card, index) => 
                    index === 0 ? { ...card, isFaceDown: false } : card // Flip only the first card
                ));
                if(playerFirstCard.rank === playerSecondCard.rank ){
                    setSplitAvailable(true);
                    splitsAvailable();
                };
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
        }    
    };

    const asignPreviousBet = (bet) =>{
        let currentBet = bet;
        setPreviousBet(currentBet);
       
    }

    const endGame = () => {
            const roundResults = {
                roundNumber: roundNumber,
                playerHand: [...playerHandText], // You may need to adjust based on how your card objects are structured
                playerHandValue: playerHandValue,
                dealerHand: [...dealerHandText], // Adjust as necessary for your card objects
                dealerHandValue: dealerHandValue,
                outcome: gameOutcome // Or any other outcome variable you have
            };

            updateGameRoundsHistory(roundResults);

            setRoundNumber(prevRoundNumber => prevRoundNumber + 1);
            assignGameResults();
            setGamePause(true);
            endGameTimeout.current = setTimeout(() => {
                setSplitAvailable(true);
                setHand1TurnFinished(false);
                setHand2TurnFinished(false);
                setSplitPressed(false);
                setDealerHand([]);
                setPlayerHand([]);
                setGameOutcome("");
                setGameOutcome1("");
                setGameOutcome2("");
                setGameMessage("Place A Bet...");
                setShowScores(false);
                setGameRunning(false);
                setHitPressed(false);
                setTwoHands(false);
                setStandPressed(false);
                setButtonsHidden(true);
                setGamePause(false);
                setBetHand1(0);
                setBetHand2(0);
                clearTimeout(endGameTimeout.current);
                
            }, 3000);
    };
        
    const handleStand = (newHandValue = playerHandValue,hand = null) => {
            
            if(splitPressed){

                if(hand==="hand1" && standPressed === false){
                    const playerHand1Value = newHandValue;
                  
                    setHand1TurnFinished(true);
                }
                if(hand==="hand2" && standPressed === false){
                    const playerHand2Value = newHandValue;
                   
                    setHand2TurnFinished(true);
                }
                
                if(hand1TurnFinished&&hand2TurnFinished){
                    
                    setTimeout(()=>{ 
                        let updatedDealerHand = dealerHand.map((card, index) => ({
                            ...card,
                            isFaceDown: index === 1 ? false : card.isFaceDown,
                        }));
                        setDealerHand(updatedDealerHand);
                        
                    //Recalculate dealerHand value and display it by using setTmeout
                        let updatedDealerHandValue = calculateHandValue(updatedDealerHand);
                    
                        setDealerHandValue(updatedDealerHandValue);
                        
                        if(playerHand1Value>21 && playerHand2Value>21){
                            setGameMessage("Bust... Dealer Wins!");
                            let result = "Dealer Wins";
                            setResult(result);
                            playerBusts();
                            playerBusts();
                            endGame();
                            return;
                        }
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
                                        
                                }, 500);
    
                                setTimeout(()=>{
                                    if(updatedDealerHandValue < 17){
                                        setTimeout(()=>{
                                            drawCardforDealer();
                                        },1000);
                                        
                                    }else {
                                        setTimeout(()=>{
                                            finishDealerTurn(updatedDealerHand, updatedDealerHandValue,newHandValue);
                                        },2000);
                                        
                                    }
                                },1000);
                                    
                                }else{
                                    setTimeout(()=>{
                                        
                                        finishDealerTurn(updatedDealerHand, updatedDealerHandValue,newHandValue);
                                    },500);
                                    
                                }
                        }
                        
                        setTimeout(()=>{
                            drawCardforDealer();
                        },2000);
                        
                    },1000);
                }
            }else{
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
                            },1500);
                            
                        }
                }
                
                setTimeout(()=>{
                    drawCardforDealer();
                },1500);
                
            },1000);
            }
    }

    const finishDealerTurn = (finalDealerHand,finalDealerHandValue,newHandValue=playerHandValue) => {
        
        setTimeout(()=>{
            setDealerHand(finalDealerHand);
            setDealerHandValue(finalDealerHandValue);
        
            if (splitPressed){
                let outcome1="";
                let outcome2="";
                //playerHand1 outcome
                if (finalDealerHandValue > 21) {
                    outcome1 = "PlayerWins Bust";
            
                } else if (playerHand1Value > 21) {
                    outcome1 = "DealerWins Bust";
            
                } else if (playerHand1Value === 21 && finalDealerHandValue !== 21) {
                    outcome1 = "PlayerWins";

                } else if (finalDealerHandValue === 21 && playerHand1Value !== 21) {
                    outcome1 = "DealerWins";
    
                } else if (playerHand1Value > finalDealerHandValue) {
                    outcome1 = "PlayerWins";
            
                } else if (finalDealerHandValue > playerHand1Value) {
                    outcome1 = "DealerWins";

                } else {
                    outcome1 = "Push";
                }
                //playerHand2 outcome
                if (finalDealerHandValue > 21) {
                    outcome2 = "PlayerWins Bust";
            
                } else if (playerHand2Value > 21) {
                    outcome2 = "DealerWins Bust";
            
                } else if (playerHand2Value === 21 && finalDealerHandValue !== 21) {
                    outcome2 = "PlayerWins";

                } else if (finalDealerHandValue === 21 && playerHand2Value !== 21) {
                    outcome2 = "DealerWins";
    
                } else if (playerHand2Value > finalDealerHandValue) {
                    outcome2 = "PlayerWins";
            
                } else if (finalDealerHandValue > playerHand2Value) {
                    outcome2 = "DealerWins";

                } else {
                    outcome2 = "Push";
                }
                

                setGameOutcome1(outcome1);
                setGameOutcome2(outcome2);
            }else{
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
            }
        },500);
        
    };
    

    const handleDouble = () =>{
        
            
            if (playerHand.length !== 2) {
                setGameMessage("Doubling down is not allowed at this time.");
                return;
            }
            
            // Check if the player has enough chips to double the bet
            if (playerChips >= bet && !gamePause) {
                console.log("calling doublesPlayed within handleDouble");
                doublesPlayed();
                setStandPressed(true);
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
                        setGameMessage("Not enough chips to double down.");
                    }

    };

    const handleHit = (hand = null) =>{
        let outcome1;
        let outcome2;
        if(splitPressed){
            if(hand1TurnFinished && hand2TurnFinished){
                let newOutcome ="DealerWins";
            
                let updatedDealerHand = dealerHand.map((card, index) => ({
                    ...card,
                    isFaceDown: index === 1 ? false : card.isFaceDown,
                }));
                setDealerHand(updatedDealerHand);
                let updatedDealerHandValue = calculateHandValue(updatedDealerHand);
                setDealerHandValue(updatedDealerHandValue);
                setGameOutcome(newOutcome);
                setGameMessage("Bust... Dealer Wins!");
                playerBusts();
                let result = "Dealer Wins";
                setResult(result);
                
                endGame();
            }else{
                if(hand==="hand1"){
                    if(hand1TurnFinished){
                        return;
                    }else{
                        if(playerHand1Value ===21){
                            setHand1TurnFinished(true);
                            return;
                        }else
                        if(deck.cards.length > 0){
                            const newCard = { ...deck.drawCard(), isFaceDown: true };
                            const updatedPlayerHand1 = [...playerHand1, newCard];
            
                            setPlayerHand1(updatedPlayerHand1);
            
                            setTimeout(() => {
                                const newHand = [...updatedPlayerHand1];
                                newHand[newHand.length - 1].isFaceDown = false; // Flip only the new card
                                setPlayerHand1(newHand);
                            },500);
                            const playerHand1Value = calculateHandValue(updatedPlayerHand1);
                        
                            setPlayerHand1Value(playerHand1Value);
                            if(playerHand1Value > 21){
                                outcome1 = "DealerWins Bust";
                                setHand1TurnFinished(true);
                                setGameOutcome1(outcome1);
                                return;
                            }
                        }
                    }
                    
                }else if(hand==="hand2"){
                    if(hand2TurnFinished){
                        return;
                    }else{
                        if(playerHand2Value ===21){
                            setHand1TurnFinished(true);
                            return;
                        }else
                        if(deck.cards.length > 0){
                            const newCard = { ...deck.drawCard(), isFaceDown: true };
                            const updatedPlayerHand2 = [...playerHand2, newCard];
            
                            setPlayerHand2(updatedPlayerHand2);
            
                            setTimeout(() => {
                                const newHand = [...updatedPlayerHand2];
                                newHand[newHand.length - 1].isFaceDown = false; // Flip only the new card
                                setPlayerHand2(newHand);
                            },500);
                            const playerHand2Value = calculateHandValue(updatedPlayerHand2);
                        
                            setPlayerHand2Value(playerHand2Value);
                            if(playerHand2Value > 21){
                                outcome2 = "DealerWins Bust";
                                setHand2TurnFinished(true);
                                setGameOutcome1(outcome2);
                                return;
                            }
                        }
                    }
                    
                }    
            }
            
        }else{
            setHitPressed(true);
            if(deck.cards.length > 0){
            const newCard = { ...deck.drawCard(), isFaceDown: true };
            const updatedPlayerHand = [...playerHand, newCard];

            setPlayerHand(updatedPlayerHand);

            setTimeout(() => {
                const newHand = [...updatedPlayerHand];
                newHand[newHand.length - 1].isFaceDown = false; // Flip only the new card
                setPlayerHand(newHand);
            },500);

            const playerHandValue = calculateHandValue(updatedPlayerHand);
            
            setPlayerHandValue(playerHandValue);
            let newOutcome;

            if(playerHandValue>21){
                setStandPressed(true);
                newOutcome ="DealerWins Bust";
                
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
        const newPlayerHandText = convertHandToText(playerHand);
        setPlayerHandText(newPlayerHandText);
      }, [playerHand]);
      
    useEffect(() => {
    const newDealerHandText = convertHandToText(dealerHand);
    setDealerHandText(newDealerHandText);
    }, [dealerHand]);

    useEffect(()=>{
        
    },[previousBet]);

    useEffect(()=>{
        if(gameResultsCount.totalGamesPlayed){
            const newWidth = (gamesCount)/10*100;
            setProgressBarWidth(newWidth);
            
            if(newWidth===100){
                setPlayerChips(chips=>chips+200);
                setGameMessage("Next Level! You get $200 extra chips!!!");
                
                const timeoutId = setTimeout(() => {
                    setGamesCount(1);
                    setProgressBarWidth(10); // Reset to 10 assuming you want to restart progress from 10% for visual consistency
                }, 5000);

                return () => clearTimeout(timeoutId);
            }
            ;
        }
    },[gameResultsCount.totalGamesPlayed]);

    // useEffect(() => {
    //     if (playerHand.length > 0) {
    //         const newPlayerHandValue = calculateHandValue(playerHand);
    //         setPlayerHandValue(newPlayerHandValue);
    
    //         // Move the logic to determine if the game should proceed to handleStand or another function here
    //         if (newPlayerHandValue > 21) {
    //             setGameOutcome("DealerWins Bust");
    //             // Additional logic for dealer's turn can go here
    //         } else {
    //             return;
    //         }
    //     }
    // }, [playerHand]); // Only re-run the effect if playerHand changes
    
    useEffect(() => {
        if(playerHand.length>0){
            const playerHandValue = calculateHandValue(playerHand);
            setPlayerHandValue(playerHandValue);
        }
        if(dealerHand.length>0){
            const dealerHandValue = calculateHandValue(dealerHand);
            setDealerHandValue(dealerHandValue);
        }
 
    }, [playerHand,dealerHand]);

    useEffect(() => {
        if (gameOutcome || gameOutcome1 || gameOutcome2) {
            handleGameResult();
        }
        }, [gameOutcome, gameOutcome1, gameOutcome2]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (bet > 0) {
            setGameMessage(`$${bet}`);
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

    useEffect(()=>{
        if (hand1TurnFinished && hand2TurnFinished) {
            
            // Now you can safely perform actions that depend on both hands being finished.
            setStandPressed(true);
            handleStand();
            // Any additional logic that needs to run after both hands are finished can go here.
        }
    },[hand1TurnFinished,hand2TurnFinished])

    
    return (
        <>
        <GameHistory
            gameResultsCount={gameResultsCount}
            gameRoundsHistory={gameRoundsHistory}
        />
        <div id="container">
        <Header
            playerHandValue={playerHandValue}
            dealerHandValue={dealerHandValue}
            playerChips={playerChips}
            progressBarWidth={progressBarWidth}
            result={result}
            />
            

            <div className="game-area">
                <div id='score-bubble'>
                    <div id="dealer-score-bubble" 
                        style={
                        {visibility: showScores ? 'visible' : 'hidden'}}>
                        {dealerHand[1] && dealerHand[1].isFaceDown ? dealerFirstCardValue : dealerHandValue}
                    </div>
                </div>
                
                <div id="dealer-message-box">
                    <div id="dealerhand-fixedbox">
                        <Player hand={dealerHand} isDealer={true} />
                    </div>

                    <div className="message-container">
                        <div id="message-box">{gameMessage}</div>
                    </div>
                </div>
                

                {
                twoHands ? (
                    <div id="player-2hands-box">
                        
                        <div id="player-hand1">
                            
                            <Player hand={playerHand1} isDealer={false} />
                            
                            <div id='score-bubble'>
                                <div id="player1-score-bubble"style={{visibility: showScores ? 'visible' : 'hidden'}}>    
                                    {playerHand1Value}
                                </div>
                            </div>
                            <div id="split-buttons-box">
                                <img    
                                        src={btnStand} 
                                        className={`split-btn-stand ${(standPressed || hand1TurnFinished) ? 'disabled' : ''}`}
                                        alt='stand-button' 
                                        title="Stand"
                                        onClick={(!standPressed && !hand1TurnFinished)? ()=>handleStand(playerHand1Value,"hand1") : undefined}
                                        style={{cursor: (standPressed || hand1TurnFinished)?'not-allowed':'pointer'}}
                                    
                                />
                                
                                <img    
                                        src={btnHit} 
                                        className={`split-btn-hit ${(standPressed || hand1TurnFinished) ? 'disabled': ''}`}
                                        alt='hit-button' 
                                        title="Hit"
                                        onClick={(!standPressed && !hand1TurnFinished) ? ()=>handleHit("hand1") : undefined}
                                        style={{cursor:((standPressed || hand1TurnFinished)) ? 'not-allowed':'pointer'}}
                            
                                />
                            
                            </div>
                        </div>

                        <div id="player-hand2">
                            
                            <Player hand={playerHand2} isDealer={false} /> 

                            <div id='score-bubble'>
                                <div id="player2-score-bubble"style={{visibility: showScores ? 'visible' : 'hidden'}}>
                                    {playerHand2Value}
                                </div>
                            </div>
                            <div 
                                id="split-buttons-box" >

                                <img    
                                        src={btnStand} 
                                        className={`split-btn-stand ${(standPressed || hand2TurnFinished)? 'disabled' : ''}`}
                                        alt='stand-button' 
                                        title="Stand"
                                        onClick={(!standPressed && !hand2TurnFinished) ? ()=>handleStand(playerHand2Value,"hand2") : undefined}
                                        style={{cursor: (standPressed || hand2TurnFinished)?'not-allowed':'pointer'}}

                                />
                            
                                
                                <img    
                                        src={btnHit} 
                                        className={`split-btn-hit ${(standPressed || hand2TurnFinished) ? 'disabled': ''}`}
                                        alt='hit-button' 
                                        title="Hit"
                                        onClick={(!standPressed && !hand2TurnFinished)? ()=>handleHit("hand2") : undefined}
                                        style={{cursor:(standPressed || hand1TurnFinished) ? 'not-allowed':'pointer'}}
                            
                                />
                            
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id="player-hand-box">
                            
                            <Player hand={playerHand} isDealer={false} />
                            
                            <div id='score-bubble'>
                                <div id="player-score-bubble"style={{visibility: showScores ? 'visible' : 'hidden'}}>    
                                    {playerHandValue}
                                </div>
                            </div>
                        
                    </div>
                )}
            </div>
            
            <div id='bet-main-container'>
                    <div id='bet-container-box'
                        style={{
                        visibility: !gameRunning ? 'visible' : 'hidden', 
                        display: 'flex', 
                        gap: '8px', 
                        justifyContent: 'center',
                        position:'relative',
                        }}
                    
                        >
                        
                    
                        {Object.entries(betChips).map(([chipType, { imgSrc, count, position }], index) => (
                            Array.from({ length: count }).map((_, chipIndex) => (
                                <img 
                                    key={`${chipType}-${chipIndex}`}
                                    src={imgSrc}
                                    alt={`Chip of ${chipType.replace('chip', '')} value`} 
                                    className='bet-chip-img'
                                    style={{ 
                                        position: 'absolute', 
                                        // transform:'translateY(15px)',
                                        bottom: position + chipIndex * 5 -25,
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
            handleSplit={handleSplit}
            hitPressed={hitPressed}
            twoHands={twoHands}
            setPreviousBet={setPreviousBet}
            clearBet={clearBet}
            previousBet={previousBet}
            setBet={setBet}
            setBetChips={setBetChips}
            playerChips={playerChips}
            />
        </div>
        <GameRecap
            gameResultsCount={gameResultsCount}
        />
       </>
    );
};
export default GameBoard;