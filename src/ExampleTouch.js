// @flow

import React, { Component } from 'react';
import {
  Navigator,
  ScrollView,
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

export default class ExampleTouch extends Component <void, Props, State> {
  props: Props;

  state: State = {
  };
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
        <ScrollView horizontal={true}>
          <View style={[styles.square, styles.color1]} />
          <View style={[styles.square, styles.color2]} />
          <View style={[styles.square, styles.color3]} />
          <View style={[styles.square, styles.color4]} />
        </ScrollView>
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
  square: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  color1: {
    backgroundColor: 'lightgray',
  },
  color2: {
    backgroundColor: 'gray',
  },
  color3: {
    backgroundColor: 'blue',
  },
  color4: {
    backgroundColor: 'pink',
  },

});
