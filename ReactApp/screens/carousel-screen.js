'use strict';

import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

const styles = StyleSheet.create({
    containerCover: {
        marginTop: -AppConfig.navbarHeight,
        backgroundColor: "#FFF",
        justifyContent: 'center',
    },
});

export default class CarouselScreen extends Component {

    render() {
        return (
            <View style={[AppStyles.container, styles.containerCover]}>
                <View style={[AppStyles.paddingHorizontal]}>
                    <Text>{this.props.title}</Text>
                    <Text>{this.props.subTitle}</Text>
                    <Text>{this.props.description}</Text>
                </View>
            </View>
        );
    }
}
