    import React from 'react';
    import PropTypes from 'prop-types';
    import Card from './Card';

    const Player = ({ hand, name, isDealer }) => {
    return (
        <section className={`player ${isDealer ? 'dealer' : ''}`}>
        <h3>{name}</h3>
        {hand.length > 0 ? (
            <div className="hand">
            {hand.map((card, index) => (
  <Card key={index} suit={card.suit} rank={card.rank} isFaceDown={false} />
            ))}
            </div>
        ) : (
            <p>No cards yet</p>
        )}
        </section>
    );
    };

    Player.propTypes = {
    hand: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    isDealer: PropTypes.bool
    };

    export default Player;


    // Add some CSS to style the player component
    // .player {
    //   margin-bottom: 20px;
    // }
    // .player.dealer {
    //   background-color: #f8f8f8; // Style differently if it's a dealer
    // }
    // .hand {
    //   display: flex;
    //   gap: 10px;
    // }
