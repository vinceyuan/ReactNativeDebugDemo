// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import type Route from './Route';

type Props = {
  navigator: typeof Navigator,
  route: Route,
};

type State = {
  value1: number,
  value2: number,
};

export default class ExampleCalculator extends Component<Props, State> {
  props: Props;

  state: State = {
    value1: 0,
    value2: 0,
  };

  static leftButton(route: Route, navigator: typeof Navigator) {
    return (
      <TouchableOpacity
        style={styles.leftButton}
        onPress={() => {
          navigator.pop();
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    );
  }

  static title(route: Route) {
    return <Text style={styles.title}>{route.title}</Text>;
  }

  _calculate(value1: number, value2: number): number {
    return value1 + value2;
  }

  _onChangeTextValue1(text: string) {
    let value = parseFloat(text);
    if (isNaN(value)) {
      value = 0;
    }
    this.setState({ value1: value });
  }

  _onChangeTextValue2(text: string) {
    let value = parseFloat(text);
    if (isNaN(value)) {
      value = 0;
    }
    this.setState({ value2: value });
  }

  render() {
    let value1 = this.state.value1;
    let value2 = this.state.value1;
    let result = this._calculate(value1, value2);
    // console.log('value1', value1);
    // console.log('value2', value2);
    // console.log('result', result);
    return (
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.textInput, styles.text]}
            multiline={false}
            keyboardType={'numeric'}
            value={this.state.value1.toString()}
            onChangeText={this._onChangeTextValue1.bind(this)}
          />
          <Text style={styles.text}>+</Text>
          <TextInput
            style={[styles.textInput, styles.text]}
            multiline={false}
            keyboardType={'numeric'}
            value={this.state.value2.toString()}
            onChangeText={this._onChangeTextValue2.bind(this)}
          />
        </View>
        <View>
          <Text style={styles.text}>= {result}</Text>
        </View>
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
  },
});
