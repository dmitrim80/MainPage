    import React from 'react';
    import PropTypes from 'prop-types';
    import Card from './Card';

    const Player = ({ hand, isDealer }) => {
    return (
        <section className={`player ${isDealer ? 'dealer' : ''}`}>
        {hand.length > 0 ? (
            <div className="hand">
            {hand.map((card, index) => (
                <Card key={index} suit={card.suit} rank={card.rank} isFaceDown={card.isFaceDown} />
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

