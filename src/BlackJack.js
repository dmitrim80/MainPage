import React from 'react'
import { writeBatch,doc,collection,getDocs } from 'firebase/firestore';
import { storage, db} from './firebase-config';
import { ref, listAll } from 'firebase/storage'; // Import ref and listAll
import Card from './bj_components/Card'
import Deck from './bj_components/Deck'
import GameBoard from './bj_components/GameBoard';
import './blackjack.css'

const BlackJack = () => {

  return (
    <div className='blackjack-main-page'>
         <GameBoard/>
    </div>
  )
}

export default BlackJack