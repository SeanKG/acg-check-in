import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import AppNavigator from './router';
import SignInPage from './pages/SignInPage';
import GuardLocationPage from './pages/GuardLocationPage';

export default class App extends React.Component {
    state={
        isReady: false
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady:true})
    }  

    render() {
        if (!this.state.isReady) {
            return null;
        }
        return <AppNavigator />
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
