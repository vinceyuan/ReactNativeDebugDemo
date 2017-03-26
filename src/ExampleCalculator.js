// @flow

import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import type Route from './Route';

type Props = {
  navigator: typeof Navigator,
  route: Route,
}

export default class ExampleCalculator extends Component <void, Props, void> {
  props:Props;

  static leftButton(route: Route, navigator: typeof Navigator){
    return (
      <TouchableOpacity style={styles.menu} onPress={() => {
        navigator.pop();
      }}>
        <Text>Back</Text>
      </TouchableOpacity>
    )
  }

  static title(route: Route){
    return (
      <Text style={styles.title}>{route.title}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.props.route.title}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
