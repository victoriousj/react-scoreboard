import React, { PropTypes } from 'react';
import Counter from './Counter';

const Player = props => (
  <div className="player" onClick={() => props.selectPlayer(props.index)}>
    <div className="player-name">
      <a className="remove-player"
        onClick={() => props.removePlayer(props.index)}>
        ✖
      </a>
      {props.name}
    </div>
    <div className="player-score">
      <Counter
        index={props.index}
        score={props.score}
        updatePlayerScore={props.updatePlayerScore}
      />
    </div>
  </div>
);

Player.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  selectPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  updatePlayerScore: PropTypes.func.isRequired
};

export default Player;
