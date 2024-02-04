class Deck {
    constructor() {
      this.cards = this.generateDeck();
    }
  
    generateDeck() {
      const suits = ["hearts", "diamonds", "spades", "clubs"];
      const ranks = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
      const deck = [];
  
      for (const suit of suits) {
        for (const rank of ranks) {
          deck.push({ suit, rank });
        }
      }
  
      return deck;
    }
  
    shuffleDeck() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    drawCard() {
      return this.cards.pop();
    }
  }
  
  export default Deck;