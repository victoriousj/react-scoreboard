import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Player from '../components/Player';
import Header from '../components/Header';
import PlayerDetail from '../components/PlayerDetail';
import AddPlayerForm from '../components/AddPlayerForm';
import * as PlayerActionCreators from '../actions/player';

class Scoreboard extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, players, selectedPlayerId } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const playerComponents = players.map((player) => (
      <Player
        id={player.key}
        key={player.key}
        name={player.name}
        score={player.score}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
        updatePlayerScore={updatePlayerScore}
      />
    ));
    let selectedPlayer = players.find(player =>
      player.id === selectedPlayerId);

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        <div className="player-detail">
          <PlayerDetail selectedPlayer={selectedPlayer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayerId: state.selectedPlayerId
  }
);

export default connect(mapStateToProps)(Scoreboard);
