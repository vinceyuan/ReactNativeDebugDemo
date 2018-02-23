// @flow

import React, { Component } from 'react';
import { UIManager } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Hack to support horizontal navigation animation on Android.
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

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
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        return CardStackStyleInterpolator.forHorizontal(sceneProps);
      },
    }),
  }
);

export default class App extends Component<void, void> {
  render() {
    return <RootStack />;
  }
}
