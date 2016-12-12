/**
 * App - set all the things up
 */
'use strict';

import React, { Component } from 'react';
import {
    Navigator,
    Text,
    View
} from 'react-native';
import NavigationBar from 'react-native-navbar';

// App Globals
import AppStyles from '../styles';
import AppConfig from '../config';

// Screens
import NavbarElements from '../components/navbar-elements';
import Home from '../screens/home';

export default class AppContainer extends Component {

    constructor(props) {
        super(props);
        this._renderScene = this._renderScene.bind(this);
        this._goBack = this._goBack.bind(this);
    }

    _goBack() {
        this.refs.rootNavigator.pop;
    }

    _renderScene(route, navigator) {
        let leftButton = {
            onPress: (route.index > 0)
                ? this.refs.rootNavigator.pop
                : () => {},
            icon: (route.index > 0)
                ? 'ios-arrow-back-outline'
                : 'ios-menu-outline'
        }

        return (
            <View style={[AppStyles.appContainer, AppStyles.container]}>
                {
                    route.index > 0 &&
                    <NavigationBar
                        title={<NavbarElements.Title title={route.title} />}
                        statusBar={{style: 'light-content', hidden: false}}
                        style={[AppStyles.navbar]}
                        tintColor={AppConfig.primaryColor}
                        leftButton={<NavbarElements.LeftButton onPress={leftButton.onPress} icon={leftButton.icon} />}
                    />
                }
                <route.component navigator={navigator} route={route} {...route.passProps} />
            </View>
        );
    }

    render() {
        return (
            <Navigator
                ref="rootNavigator"
                style={[AppStyles.container, AppStyles.appContainer]}
                renderScene={this._renderScene}
                initialRoute={{
                    component: Home,
                    index: 0,
                    navigator: this.refs.rootNavigator,
                    passProps: {
                        showSplashScreen: true
                    }
                }}
            />
        );
    }
}
