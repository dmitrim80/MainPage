import React from 'react'
import cardBack from './images/vegas-back2.png';
import heartsAce from './images/ace_of_hearts.png';
import heartsTwo from './images/2_of_hearts.png';
import heartsThree from './images/3_of_hearts.png';
import heartsFour from './images/4_of_hearts.png';
import heartsFive from './images/5_of_hearts.png';
import heartsSix from './images/6_of_hearts.png';
import heartsSeven from './images/7_of_hearts.png';
import heartsEight from './images/8_of_hearts.png';
import heartsNine from './images/9_of_hearts.png';
import heartsTen from './images/10_of_hearts.png';
import heartsJack from './images/jack_of_hearts.png';
import heartsQueen from './images/queen_of_hearts.png';
import heartsKing from './images/king_of_hearts.png';

import diamondsAce from './images/ace_of_diamonds.png';
import diamondsTwo from './images/2_of_diamonds.png';
import diamondsThree from './images/3_of_diamonds.png';
import diamondsFour from './images/4_of_diamonds.png';
import diamondsFive from './images/5_of_diamonds.png';
import diamondsSix from './images/6_of_diamonds.png';
import diamondsSeven from './images/7_of_diamonds.png';
import diamondsEight from './images/8_of_diamonds.png';
import diamondsNine from './images/9_of_diamonds.png';
import diamondsTen from './images/10_of_diamonds.png';
import diamondsJack from './images/jack_of_diamonds.png';
import diamondsQueen from './images/queen_of_diamonds.png';
import diamondsKing from './images/king_of_diamonds.png';

import spadesAce from './images/ace_of_spades.png';
import spadesTwo from './images/2_of_spades.png';
import spadesThree from './images/3_of_spades.png';
import spadesFour from './images/4_of_spades.png';
import spadesFive from './images/5_of_spades.png';
import spadesSix from './images/6_of_spades.png';
import spadesSeven from './images/7_of_spades.png';
import spadesEight from './images/8_of_spades.png';
import spadesNine from './images/9_of_spades.png';
import spadesTen from './images/10_of_spades.png';
import spadesJack from './images/jack_of_spades.png';
import spadesQueen from './images/queen_of_spades.png';
import spadesKing from './images/king_of_spades.png';

import clubsAce from './images/ace_of_clubs.png';
import clubsTwo from './images/2_of_clubs.png';
import clubsThree from './images/3_of_clubs.png';
import clubsFour from './images/4_of_clubs.png';
import clubsFive from './images/5_of_clubs.png';
import clubsSix from './images/6_of_clubs.png';
import clubsSeven from './images/7_of_clubs.png';
import clubsEight from './images/8_of_clubs.png';
import clubsNine from './images/9_of_clubs.png';
import clubsTen from './images/10_of_clubs.png';
import clubsJack from './images/jack_of_clubs.png';
import clubsQueen from './images/queen_of_clubs.png';
import clubsKing from './images/king_of_clubs.png';

const cardImages = {
    "hearts-ace": heartsAce,
     "hearts-two": heartsTwo,
     "hearts-three":heartsThree,
     "hearts-four":heartsFour ,
     "hearts-five":heartsFive ,
     "hearts-six":heartsSix ,
     "hearts-seven":heartsSeven ,
     "hearts-eight":heartsEight, 
     "hearts-nine":heartsNine ,
     "hearts-ten":heartsTen ,
     "hearts-jack":heartsJack ,
     "hearts-queen":heartsQueen ,
     "hearts-king":heartsKing ,
     
     "diamonds-ace": diamondsAce,
     "diamonds-two": diamondsTwo,
     "diamonds-three":diamondsThree,
     "diamonds-four":diamondsFour ,
     "diamonds-five":diamondsFive ,
     "diamonds-six":diamondsSix ,
     "diamonds-seven":diamondsSeven ,
     "diamonds-eight":diamondsEight, 
     "diamonds-nine":diamondsNine ,
     "diamonds-ten":diamondsTen ,
     "diamonds-jack":diamondsJack ,
     "diamonds-queen":diamondsQueen ,
     "diamonds-king":diamondsKing ,
    
     "spades-ace": spadesAce,
     "spades-two": spadesTwo,
     "spades-three":spadesThree,
     "spades-four":spadesFour ,
     "spades-five":spadesFive ,
     "spades-six":spadesSix ,
     "spades-seven":spadesSeven ,
     "spades-eight":spadesEight, 
     "spades-nine":spadesNine ,
     "spades-ten":spadesTen ,
     "spades-jack":spadesJack ,
     "spades-queen":spadesQueen ,
     "spades-king":spadesKing ,
    
     "clubs-ace": clubsAce,
     "clubs-two": clubsTwo,
     "clubs-three":clubsThree,
     "clubs-four":clubsFour ,
     "clubs-five":clubsFive ,
     "clubs-six":clubsSix ,
     "clubs-seven":clubsSeven ,
     "clubs-eight":clubsEight, 
     "clubs-nine":clubsNine ,
     "clubs-ten":clubsTen ,
     "clubs-jack":clubsJack ,
     "clubs-queen":clubsQueen ,
     "clubs-king":clubsKing ,
     "back": cardBack,
  };


const Card = ({suit,rank, isFaceDown}) => {
  const cardImage = isFaceDown ? cardBack: cardImages[`${suit}-${rank}`];
    return (
        <div id="card-box">
            <img src={cardImage} alt={isFaceDown ? 'Card Back' : `${rank} of ${suit}`} />
        </div>
    )
}

export default Card;