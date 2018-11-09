import React from 'react';

import { Consumer } from './Context';

const Counter = props => (
  <Consumer>
    {({ actions }) => (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={() => actions.updatePlayerScore(props.playerId, -1)}
        >
          -
        </button>
        <div className="counter-score"> {props.score} </div>
        <button
          className="counter-action increment"
          onClick={() => actions.updatePlayerScore(props.playerId, 1)}
        >
          +
        </button>
      </div>
    )}
  </Consumer>
);

export default Counter;
