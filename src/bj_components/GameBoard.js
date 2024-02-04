import React, { useState } from 'react';
import Deck from './Deck';
import Card from './Card';
import Player from './Player';

const GameBoard = () => {
  const [deck, setDeck] = useState(null);
  const [playerHand, setPlayerHand] = useState([]);
  const [playerHands, setPlayerHands] = useState([[]]);
  const [currentHandIndex, setCurrentHandIndex] = useState(0);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameStatus, setGameStatus] = useState("Let's play!");
  const [isGameOver, setIsGameOver] = useState(false); // Added to track if the game is over
  
  const dealInitialHands = () => {
    // Deal initial cards as before, then check for split condition
    const canSplit = playerHands[0][0].rank === playerHands[0][1].rank;
    if (canSplit) {
      // Offer split option to the player
    }
  };
  const handleSplit = () => {
    const firstHand = [playerHands[0][0], deck.drawCard()];
    const secondHand = [playerHands[0][1], deck.drawCard()];
    setPlayerHands([firstHand, secondHand]);
    // Adjust bets if necessary
  };
  
  const startNewGame = () => {
    setIsGameOver(false); // Reset the game over flag
    const newDeck = new Deck();
    newDeck.shuffleDeck();
    setDeck(newDeck);
  
    // Draw two cards for the player and two for the dealer
    const playerFirstCard = newDeck.drawCard();
    const playerSecondCard = newDeck.drawCard();
    const dealerFirstCard = newDeck.drawCard();
    const dealerSecondCard = newDeck.drawCard();
  
    // Update hands
    const initialPlayerHand = [playerFirstCard, playerSecondCard];
    setPlayerHand(initialPlayerHand);
    setDealerHand([dealerFirstCard, { ...dealerSecondCard, isFaceDown: true }]);
  
    // Check for player Blackjack immediately after dealing cards
    const playerInitialHandValue = calculateHandValue(initialPlayerHand);
    if (playerInitialHandValue === 21) {
      setGameStatus("Blackjack! Player wins!");
      setIsGameOver(true); // End game since player hits Blackjack
    } else {
      // Check for dealer blackjack if first card is 10, J, Q, K, or Ace
      if (['10', 'jack', 'queen', 'king', 'ace'].includes(dealerFirstCard.rank)) {
        const dealerHandValue = calculateHandValue([dealerFirstCard, dealerSecondCard]);
        if (dealerHandValue === 21) {
          // Dealer has blackjack, reveal second card and end game
          setDealerHand([dealerFirstCard, dealerSecondCard]);
          setGameStatus("Dealer has Blackjack! Game over.");
          setIsGameOver(true);
        } else {
          setGameStatus("Game in progress...");
        }
      } else {
        setGameStatus("Game in progress...");
      }
    }
  };
  
  

  const playerHit = () => {
    if (deck && deck.cards.length > 0) {
      const newCard = deck.drawCard(); // Draw a card from the deck
      const updatedHand = [...playerHand, newCard]; // Add the new card to player's hand
      setPlayerHand(updatedHand); // Update player's hand
  
      const newHandValue = calculateHandValue(updatedHand);
      if (newHandValue > 21) {
        // Player busts, reveal dealer's second card
        const revealedHand = dealerHand.map(card => ({ ...card, isFaceDown: false }));
        setDealerHand(revealedHand);
        setGameStatus("Bust! Dealer wins.");
        setIsGameOver(true); // Mark the game as over
      } else if (newHandValue === 21) {
        // Player hits 21, proceed to dealer's turn
        setGameStatus("21! Player's turn ends, dealer's turn.");
        // Optionally, you can automatically trigger dealer's actions here or wait for player to press a 'Continue' or 'Dealer's Turn' button
        dealerTurn(); // You'll need to implement this function
      }
      // No need to explicitly check for less than 21 as the game continues normally
    } else {
      console.log("No more cards in the deck or deck is not properly initialized");
    }
  };
  const dealerTurn = () => {
    let dealerHandValue = calculateHandValue(dealerHand);
    while (dealerHandValue < 17 && deck.cards.length > 0) {
      const newCard = deck.drawCard();
      const updatedDealerHand = [...dealerHand, newCard];
      setDealerHand(updatedDealerHand);
      dealerHandValue = calculateHandValue(updatedDealerHand);
    }
  
    // After dealer's turn, check for winner
    checkForWinner();
  };
  const checkForWinner = () => {
    const playerTotal = calculateHandValue(playerHand);
    const dealerTotal = calculateHandValue(dealerHand);
  
    if (dealerTotal > 21 || playerTotal > dealerTotal) {
      setGameStatus("Player wins!");
    } else if (dealerTotal === playerTotal) {
      setGameStatus("Push!");
    } else {
      setGameStatus("Dealer wins!");
    }
  
    setIsGameOver(true); // Mark the game as over
  };
  
  const revealDealerHand = () => {
    const revealedHand = dealerHand.map(card => ({ ...card, isFaceDown: false }));
    setDealerHand(revealedHand);
    // Add any logic here for the dealer to draw more cards if necessary
  };

const dealerDraw = () => {
    while (calculateHandValue(dealerHand) < 17 && deck.cards.length > 0) {
        const newCard = deck.drawCard();
        setDealerHand(dealerHand => [...dealerHand, newCard]);
    }
};

const getCardValue = (rank) => {
    const rankToValue = {
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
      'ace': 11, // Initially treating ace as 11
    };
  
    return rankToValue[rank] || 0; // Default to 0 if rank not found
  };

  const calculateHandValue = (hand) => {
    let total = 0;
    let aceCount = 0;
  
    hand.forEach(card => {
      let value = getCardValue(card.rank);
      if (card.rank === 'ace') {
        aceCount += 1;
      }
      total += value;
    });
  
    // Adjust for aces
    while (total > 21 && aceCount > 0) {
      total -= 10;
      aceCount -= 1;
    }
  
    return total;
  };
  

  const playerStand = () => {
    // Reveal dealer's second card
    let updatedDealerHand = dealerHand.map((card, index) => ({
      ...card,
      isFaceDown: index === 1 ? false : card.isFaceDown,
    }));
  
    // Dealer draws cards until hand value is at least 17
    let dealerHandValue = calculateHandValue(updatedDealerHand.filter(card => !card.isFaceDown));
    while (dealerHandValue < 17) {
      const newCard = deck.drawCard();
      updatedDealerHand.push(newCard); // Add new card to dealer's hand
      dealerHandValue = calculateHandValue(updatedDealerHand);
    }
  
    setDealerHand(updatedDealerHand); // Update dealer hand
  
    // Determine winner
    const playerHandValue = calculateHandValue(playerHand);
    if (playerHandValue > 21) {
      setGameStatus("Bust! Dealer wins.");
    } else if (dealerHandValue > 21 || playerHandValue > dealerHandValue) {
      setGameStatus("Player wins!");
    } else if (playerHandValue < dealerHandValue) {
      setGameStatus("Dealer wins.");
    } else {
      setGameStatus("It's a tie!");
    }
  
    setIsGameOver(true); // End the game
  };


  return (

    <div className="game-board">
        <h1>Blackjack Game</h1>
        {/* Render Dealer's Hand using Player Component */}
        {/* Assuming the dealer's second card visibility is controlled by the isFaceDown property */}
        <div className="dealer-hand">
          <div className='h3-container'>
          <h3 className='dealer'>Dealer:</h3>
          </div>
          <Player 
            hand={dealerHand}  
            isDealer={true}
          />
        </div>
        {/* Player's Hand */}
        {/* Assuming you want to keep rendering player's hand directly or using Player component similarly */}
        <div className="player-hand">
        <div className="h3-container">
        <h3 className='player'>Player:</h3>
        </div>
          <Player 
            hand={playerHand}
            isDealer={false}
          />
        </div>

        {/* Actions */}
        <div className="action-buttons">
            <button onClick={startNewGame}>Start Game</button>
            <button onClick={playerHit} disabled={isGameOver}>Hit</button>
            <button onClick={playerStand} disabled={isGameOver}>Stand</button>
        </div>

        <p className='progress-text'>{gameStatus}</p>
  </div>
  );
};

export default GameBoard;
