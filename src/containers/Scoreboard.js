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
    const { dispatch, players, selectedPlayerIndex } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

    let selectedPlayer = selectedPlayerIndex !== -1
      ? selectedPlayer = players[selectedPlayerIndex]
      : null;
    

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        key={player.name}
        name={player.name}
        score={player.score}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
        updatePlayerScore={updatePlayerScore}
      />
    ));
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
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);

export default connect(mapStateToProps)(Scoreboard);
