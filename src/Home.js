//

import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import type Route from './Route';

import SecondView from './SecondView';

type Props = {
  navigator: typeof Navigator,
  route: Route,
}

export default class Home extends Component <void, Props, void> {
  props:Props;

  static title(){
    return (
      <Text>Hello</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.props.route.title}!</Text>
        <TouchableOpacity
          onPress={() => this.props.navigator.push({ title: 'Second Scene', component: SecondView})}
        >
          <Text>Show second scene</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
