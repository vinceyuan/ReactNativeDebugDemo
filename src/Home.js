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

import ExampleCalculator from './ExampleCalculator';

type Props = {
  navigator: typeof Navigator,
  route: Route,
}

export default class Home extends Component <void, Props, void> {
  props:Props;

  static title(route: Route){
    return (
      <Text style={styles.title}>{route.title}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigator.push({ title: 'Calculator', component: ExampleCalculator})}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Example 1</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 80,
  },
  button: {
    backgroundColor: 'lightgray',
    borderRadius: 6,
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 40,
  }
});
