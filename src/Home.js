// @flow

import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ExampleStatistics from './ExampleStatistics';

type Props = {
  navigation: typeof StackNavigator,
};

type State = {
  modalVisible: boolean,
};

export default class Home extends Component<Props, State> {
  props: Props;

  state: State = {
    modalVisible: false,
  };
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ExampleCalculator')} style={styles.button}>
          <Text style={styles.buttonText}>Example 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ExampleTouch')} style={styles.button}>
          <Text style={styles.buttonText}>Example 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ modalVisible: true })} style={styles.button}>
          <Text style={styles.buttonText}>Example 3</Text>
        </TouchableOpacity>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <ExampleStatistics onPressExit={() => this.setState({ modalVisible: false })} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
});
