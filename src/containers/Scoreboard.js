import React, { Component } from 'react';

import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';

class Scoreboard extends Component{
  state = {
    currentKey: 0,
    players: [
      {
        key: 0,
        name: 'Jim Hoskins',
        score: 31,
      },
      {
        key: 1,
        name: 'Andrew Chalkley',
        score: 20,
      },
      {
        key: 2,
        name: 'Alena Holligan',
        score: 50,
      },
    ],
  };

  getNextKey = () => {
    let highestKey = this.state.currentKey;
    this.state.players.forEach(player => {
      if ((player.key > highestKey) 
      && (player.key > this.state.currentKey)) { 
        highestKey = player.key;
      }
    });
    this.setState({currentKey: ++highestKey});
    return highestKey;
  }

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onAddPlayer = name => {
    this.state.players.push({ name: name, score: 0, key: this.getNextKey() });
    this.setState(this.state);
  };

  onRemovePlayer = index => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
            return (
              <Player
                key={player.key}
                name={player.name}
                score={player.score}
                onRemove={() => this.onRemovePlayer(index)}
                onScoreChange={(delta) => this.onScoreChange(index, delta)}
              />
            );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
};

export default Scoreboard;