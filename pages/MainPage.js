import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

import {
    Container
} from "native-base";

import Header2 from './MainPageComponents/Header';
import ImHereButton from './MainPageComponents/ImHereButton';


class MainPage extends Component {
    render() {
        return (
            <Container>
                <Header2 />
                <ImHereButton />
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

export default MainPage;
