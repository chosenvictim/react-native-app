/**
 * Index - this is where everything
 *  starts - but offloads to app.js
 */

import React, { Component } from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import App from './app'

import rootReducer from '../reducers/index'

let middleware = [
    thunk, // Allows action creators to return functions (not just plain objects)
];

if (__DEV__) {
  // Dev-only middleware
    middleware = [
        ...middleware,
        logger(), // Logs state changes to the dev console
    ];
}

const store = compose(
    applyMiddleware(...middleware)
)(createStore)(rootReducer);

// Wrap App in Redux provider (makes Redux available to all sub-components)
export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
