'use strict';

import React, { Component, PropTypes } from 'react';
import {
    Text,
    View
} from 'react-native';

import AppStyles from '../styles';

export default class NextPage extends Component {

    render() {
        return(
            <View style={[AppStyles.appContainer, AppStyles.containerCentered]}>
                <Text>{this.props.route.title}</Text>
            </View>
        );
    }
}