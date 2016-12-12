'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

// App Globals
import AppStyles from '../styles';
import AppConfig from '../config';

export default class CarouselScreen extends Component {

    render() {
        return (
            <View style={[AppStyles.flex1, AppStyles.container, AppStyles.containerCentered, AppStyles.paddingHorizontal]}>
                <Text style={[AppStyles.h1]}>{this.props.title}</Text>
                <Text style={[AppStyles.h3]}>{this.props.subTitle}</Text>
                <Text style={[AppStyles.p]}>{this.props.description}</Text>
                <Text style={[AppStyles.p, {marginTop:30}]}>View & Login</Text>
            </View>
        );
    }
}
