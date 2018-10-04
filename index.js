import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PlayerReducer from './src/reducers/players'
import Scoreboard from './src/containers/Scoreboard';

const store = createStore(
    PlayerReducer
);

render (
    <Provider store={store} >
        <Scoreboard />
    </Provider>,
    
    document.getElementById('root')
)