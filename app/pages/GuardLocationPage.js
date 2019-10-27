import React, { Component } from "react";
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import {
    Container
} from "native-base";

import Header2 from './GuardLocationPageComponents/Header';
import ImHereButton from './GuardLocationPageComponents/ImHereButton';
import Greeting from './GuardLocationPageComponents/Greeting';

class GuardLocationPage extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            usertoken: ''
        };
        this._bootstrap();
    }

    _bootstrap = async () => {
        const username = await AsyncStorage.getItem('username');
        const usertoken = await AsyncStorage.getItem('usertoken');
        this.setState({
            username: username,
            usertoken: usertoken
        });
    }

    render() {

        const { username, usertoken } = this.state

        return (
            <Container>
                <Greeting />
                <ImHereButton
                    username={username}
                    usertoken={usertoken}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GuardLocationPage;
