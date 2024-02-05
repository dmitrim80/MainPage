import React from 'react';

const Control = ({ onHit, onStand, onReset, isGameOver }) => {
  return (
    <div className="game-controls">
      <button onClick={onHit} disabled={isGameOver}>Hit</button>
      <button onClick={onStand} disabled={isGameOver}>Stand</button>
      <button onClick={onReset}>Reset Game</button>
    </div>
  );
};

export default Control;

// Add some CSS for styling
// .game-controls {
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-top: 20px;
// }
// .game-controls button {
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   border: none;
//   border-radius: 5px;
//   background-color: #007bff;
//   color: white;
// }
// .game-controls button:disabled {
//   background-color: #ccc;
//   cursor: not-allowed;
// }
