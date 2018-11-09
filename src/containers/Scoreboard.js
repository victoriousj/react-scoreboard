import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Player from '../components/Player';
import Header from '../components/Header';
import { Provider } from '../components/Context';
import PlayerDetail from '../components/PlayerDetail';
import AddPlayerForm from '../components/AddPlayerForm';
import * as PlayerActionCreators from '../actions/player';

class Scoreboard extends Component {
  render() {
    const { dispatch, players, selectedPlayerId } = this.props;
    const addPlayer = bindActionCreators(
      PlayerActionCreators.addPlayer,
      dispatch
    );
    const removePlayer = bindActionCreators(
      PlayerActionCreators.removePlayer,
      dispatch
    );
    const selectPlayer = bindActionCreators(
      PlayerActionCreators.selectPlayer,
      dispatch
    );
    const updatePlayerScore = bindActionCreators(
      PlayerActionCreators.updatePlayerScore,
      dispatch
    );
    const playerComponents = players.map(player => (
      <Player
        id={player.key}
        key={player.key}
        name={player.name}
        score={player.score}
      />
    ));
    let selectedPlayer = players.find(player => player.id === selectedPlayerId);

    return (
      <Provider
        value={{
          players: players,
          actions: {
            selectPlayer,
            removePlayer,
            updatePlayerScore
          }
        }}
      >
        <div className="scoreboard">
          <Header players={players} />
          <div className="players">{playerComponents}</div>
          <AddPlayerForm />
          <div className="player-detail">
            <PlayerDetail selectedPlayer={selectedPlayer} />
          </div>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
  selectedPlayerId: state.selectedPlayerId
});

export default connect(mapStateToProps)(Scoreboard);
