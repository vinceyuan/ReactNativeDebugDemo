// @flow

import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import type Route from './Route';

type Props = {
  navigator: typeof Navigator,
  route: Route,
}

type State = {
}

export default class ExampleComplexView extends Component <void, Props, State> {
  props: Props;

  state: State = {
  };

  static leftButton(route: Route, navigator: typeof Navigator){
    return (
      <TouchableOpacity style={styles.leftButton} onPress={() => {
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftButton: {
    padding: 10,
  },
  title: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 80,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 100,
  },
  text: {
    fontSize: 40,
  }
});
