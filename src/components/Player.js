import React from 'react';

import { Consumer } from './Context';
import Counter from './Counter';

const Player = props => (
  <Consumer>
    {context => {
      console.log(context);
      return (
        <div className="player">
          <div
            className="player-name"
            onClick={() => props.selectPlayer(props.id)}
          >
            <a
              className="remove-player"
              onClick={() => props.removePlayer(props.id)}
            >
              ✖
            </a>
            {props.name}
          </div>
          <div className="player-score">
            <Counter
              score={props.score}
              playerId={props.id}
              updatePlayerScore={props.updatePlayerScore}
            />
          </div>
        </div>
      );
    }}
  </Consumer>
);

export default Player;
