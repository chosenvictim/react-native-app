'use strict';

import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import Carousel from 'react-native-looped-carousel';

import CarouselScreen from './carousel-screen';
import NextPage from './nextpage';
import Button from '../components/button';

import AppStyles from '../styles';
import AppConfig from '../config';

const width = AppConfig.windowWidth;
const height = AppConfig.windowHeight;

class Home extends Component {

    static propTypes = {
        navigator: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            size: { width, height: height * 0.85 }
        };
        this._onLayoutDidChange = this._onLayoutDidChange.bind(this);
    }

    _onLayoutDidChange(e) {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    _navigate(navbarTitle) {
        this.props.navigator.push({
            title: navbarTitle,
            component: NextPage,
            index: 1
        })
    }

    render() {
        return (
            <View>
                <View onLayout={this._onLayoutDidChange}>
                    <Carousel style={this.state.size} bullets={true}>
                        <View style={[this.state.size]}>
                            <CarouselScreen
                                title="Predict Matches"
                                subTitle="Earn points when your match predictions are right"
                                description="An option to select games from multiple teams, favourite team, premier league, championship & tournaments"
                            />
                        </View>
                        <View style={[this.state.size]}>
                            <CarouselScreen
                                title="Leaderboard"
                                subTitle="Play with the best return and ranked in the leaderboard"
                                description="Get featured with the best predictions, chat and follow leaderboard members on their predictions and returns."
                            />
                        </View>
                        <View style={[this.state.size]}>
                            <CarouselScreen
                                title="Competetions"
                                subTitle="Joining competetions will make you win various prizes."
                                description="Join any ongoing or upcoming competetion, will make you win various prizes and chances to get featured on leaderboard."
                            />
                        </View>
                        <View style={[this.state.size]}>
                            <CarouselScreen
                                title="Tickets SP Points"
                                subTitle="Earn 1,00,000 Points for Free on Sportshero."
                                description="SP Points will help you in predicting matches, Tickets will help you to participate in competetion and more."
                            />
                        </View>
                        <View style={[this.state.size]}>
                            <CarouselScreen
                                title="Multiple Games"
                                subTitle="Have a choice of selecting your favourite game "
                                description="Currently you can start your prediction section with Football & Basketball, Soon there will be Cricket, Baseball and more."
                            />
                        </View>
                    </Carousel>
                </View>
                <View style={[AppStyles.containerCentered, {flexDirection:"row",justifyContent:"space-around"}]}>
                    <Button
                        text="SignIn"
                        onPress={() => this._navigate('SignIn')}
                    />
                    <Button
                        text="SignUp"
                        onPress={() => this._navigate('SignUp')}
                    />
                </View>
            </View>
        );
    }
}

export default Home;
