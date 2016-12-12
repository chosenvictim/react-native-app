/**
 * Index - this is where everything
 *  starts - but offloads to app.js
 */

import React, { Component } from 'react';
import App from './app';

export default class AppContainer extends Component {
    render() {
        return (
            <App />
        );
    }
}
