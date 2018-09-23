import React, { PropTypes } from 'react';

const Counter = props => (
  <div className="counter" >
    <button
      className="counter-action decrement"
      onClick={() => props.updatePlayerScore(props.playerId, -1)}>
      -
    </button>
    <div className="counter-score"> {props.score} </div>
    <button
      className="counter-action increment"
      onClick={() => props.updatePlayerScore(props.playerId, 1)}>
      +
    </button>
  </div>);

  Counter.propTypes = {
    score: PropTypes.number.isRequired,
    playerId: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired
  };

export default Counter;