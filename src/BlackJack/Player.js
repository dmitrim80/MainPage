import React from 'react'
import Card from './Card';
import PropTypes from 'prop-types';

const Player = ({hand,isDealer}) => {



  return (
    <>
        <div id={`${isDealer ? 'dealer-hand' : 'player-hand'}`}>
            {hand.length > 0 ? (
            <div id="hand">
            {hand.map((card, index) => (
                <Card key={index} suit={card.suit} rank={card.rank} isFaceDown={card.isFaceDown} />
            ))}
            </div>
             ) : (
            <p>No cards yet</p>
        )}
        </div>

    </>
  );
}

Player.propTypes = {
    hand: PropTypes.array,
    isDealer: PropTypes.bool,
}

export default Player