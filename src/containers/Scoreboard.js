import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PlayerActionCreators from '../actions/players';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';

class Scoreboard extends Component{

  static propTypes = {
    players: PropTypes.array.isRequired,
  };

  render() {

    const {dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);;
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);;

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        key={player.name}
        name={player.name}
        score={player.score}
        removePlayer={removePlayer}
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
      </div>
    );
  }
};

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard);