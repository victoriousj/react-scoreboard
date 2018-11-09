import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
  players: [
    {
      id: 0,
      key: 0,
      score: 31,
      created: '11/8/2016',
      updated: '11/9/2016',
      name: 'Jim Hoskins'
    },
    {
      id: 1,
      key: 1,
      score: 20,
      created: '11/9/2016',
      updated: '11/10/2016',
      name: 'Andrew Chalkley'
    },
    {
      id: 2,
      key: 2,
      score: 50,
      created: '11/11/2016',
      updated: '11/12/2016',
      name: 'Alena Holligan'
    }
  ],
  currentKey: 3,
  selectedPlayerId: -1,
  getNextKey: function() {
    return ++this.currentKey;
  }
};

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER: {
      const addPlayerList = [
        ...state.players,
        {
          id: state.getNextKey(),
          key: state.currentKey,
          name: action.name,
          score: 0,
          created: new Date().toLocaleDateString()
        }
      ];
      return {
        ...state,
        players: addPlayerList
      };
    }

    case PlayerActionTypes.REMOVE_PLAYER: {
      const removePlayerList = state.players.filter(
        player => player.id !== action.id
      );
      return {
        ...state,
        players: removePlayerList
      };
    }

    case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
      let updatedPlayerId;
      const updatePlayerList = state.players.map(player => {
        if (player.id === action.id) {
          updatedPlayerId = player.id;
          return {
            ...player,
            score: player.score + action.score,
            updated: new Date().toLocaleDateString()
          };
        }
        return player;
      });

      return {
        ...state,
        players: updatePlayerList,
        selectedPlayerId: updatedPlayerId
      };
    }

    case PlayerActionTypes.SELECT_PLAYER:
      let id = state.selectedPlayerId === action.id ? -1 : action.id;
      return {
        ...state,
        selectedPlayerId: id
      };

    default:
      return state;
  }
}
