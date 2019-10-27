import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Heading extends Component {
  render() {
    return (
      <View style={{ alignItems: 'flex-start' }}>
        <Text>Good {this.props.shift}, {this.props.name}!</Text>
      </View>
    );
  }
}

class GuardDetails extends Component {
  render() {
    return (
      <View style={{ alignItems: 'flex-start' }}>
        <Text>Your corner: {this.props.location}</Text>
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