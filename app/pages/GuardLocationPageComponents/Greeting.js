import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Heading extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', marginTop: '25%', marginBottom: '5%' }}>
        <Text style={{ fontSize: 20 }} >Good {this.props.shift} {this.props.name}!</Text>
      </View>
    );
  }
}

class GuardDetails extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', marginBottom: '10%' }}>
        <Text>Your corner is {this.props.location}</Text>
      </View>
    );
  }
}

class CallCoordinator extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', marginBottom: '1%' }}>
        <Text>HEY!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFF"
  },
  mb15: {
    marginBottom: 20
  },
});

export default class Greeting extends Component {
  render() {
    return (
      <View>
        <Heading name='John' shift='Morning' />
        <GuardDetails location='Young & Preston' />

      </View>
    );
  }
}