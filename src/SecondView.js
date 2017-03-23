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

type Props = {
  navigator: typeof Navigator,
  route: Route,
}

export default class SecondView extends Component <void, Props, void> {
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

  static title(){
    return (
      <Text>Second View</Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
