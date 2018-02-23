// @flow

import React, { Component } from 'react';
import { UIManager } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import ExampleCalculator from './ExampleCalculator';
import ExampleTouch from './ExampleTouch';

/**
 * Enabled Android Layout Animation
 */
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    ExampleCalculator: {
      screen: ExampleCalculator,
    },
    ExampleTouch: {
      screen: ExampleTouch,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component<void, void> {
  render() {
    return <RootStack />;
  }
}
