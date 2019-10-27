import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

import {
    Container
} from "native-base";

import Header2 from './GuardLocationPageComponents/Header';
import ImHereButton from './GuardLocationPageComponents/ImHereButton';
import Greeting from './GuardLocationPageComponents/Greeting';

class GuardLocationPage extends Component {

    render() {
        return (
            <Container>
                <Greeting />
                <ImHereButton
                    username={this.props.navigation.getParam('username', '')}
                    password={this.props.navigation.getParam('password', '')}
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
