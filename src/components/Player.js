import React, { PropTypes } from 'react';

import Counter from './Counter';

const Player = props => (
  <div className="player">
    <div 
      className="player-name"
      onClick={() => props.selectPlayer(props.id)}>
      <a className="remove-player"
        onClick={() => props.removePlayer(props.id)}>
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

Player.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  selectPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  updatePlayerScore: PropTypes.func.isRequired
};

export default Player;