import React from 'react'
import { writeBatch,doc,collection,getDocs } from 'firebase/firestore';
import { storage, db} from '../firebase-config';
import { ref, listAll } from 'firebase/storage'; // Import ref and listAll
import Card from './Card'
import Deck from './Deck'
import GameBoard from './GameBoard';
import './blackjack.css'

const BlackJack = () => {

  return (
    <div className='blackjack-main-page'>
         <GameBoard/>
    </div>
  )
}

export default BlackJack