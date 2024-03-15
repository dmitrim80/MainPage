class Deck{
    constructor(){
        this.cards = this.createDeck();
    }

    createDeck(){
        const suits = ["hearts", "diamonds","spades","clubs"];
        const ranks = ["ace", "two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"];
        const deck = [];
        
        for (const suit of suits){
            for(const rank of ranks){
                deck.push({suit,rank});
            }
        }
        return deck;
    }
    
    shuffleDeck(){
        for(let i = this.cards.length - 1; i>0;i-- ){
            const random = Math.floor(Math.random()*(i+1));
            [this.cards[i],this.cards[random]] = [this.cards[random],this.cards[i]];
        }
    }

    drawCard(){
        return this.cards.pop();
    }
}
export default Deck;