import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import { Provider } from '../components/Context';
import PlayerList from '../components/PlayerList';
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

    let selectedPlayer = players.find(player => player.id === selectedPlayerId);

    const provider = {
      selectedPlayer,
      players,
      actions: {
        updatePlayerScore,
        selectPlayer,
        removePlayer,
        addPlayer
      }
    };

    return (
      <Provider value={{ ...provider }}>
        <div className="scoreboard">
          <Header />
          <PlayerList />
          <AddPlayerForm/>
          <PlayerDetail />
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
