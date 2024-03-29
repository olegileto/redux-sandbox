import React from 'react';
import ReacDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';

import {reducer} from "./reducer";

import App from "./components/App";

const store = createStore(reducer);

ReacDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
