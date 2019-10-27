import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from "expo-font";
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';
import GetLocation from 'react-native-get-location'



export default class App extends React.Component {
  state={
    isReady: false
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isReady:true})
  }  

  render(){
    if (!this.state.isReady) {
      return <Text>Loading...</Text>;
    }
    return (
    
      <MainPage />
      
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
