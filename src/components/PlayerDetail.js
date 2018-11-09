import React from 'react';

import { Consumer } from './Context';

const PlayerDetail = () => (
  <Consumer>
    {({ selectedPlayer }) => {
      if (selectedPlayer) {
        return (
          <div className="player-detail">
            <h3>{selectedPlayer.name}</h3>
            <ul>
              <li>
                <span>Score: </span>
                {selectedPlayer.score}
              </li>
              <li>
                <span>Created: </span>
                {selectedPlayer.created}
              </li>
              <li>
                <span>Updated: </span>
                {selectedPlayer.updated}
              </li>
            </ul>
          </div>
        );
      } else {
        return (
          <p style={{ padding: '10px' }}>
            Click on a player to see more details
          </p>
        );
      }
    }}
  </Consumer>
);

export default PlayerDetail;
