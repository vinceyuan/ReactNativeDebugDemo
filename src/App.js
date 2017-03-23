// @flow

import React, { Component } from 'react';
import {
  Navigator,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import NavigationBarStyles from './NavigationBarStyles';

import type {
  NavigationState,
} from 'NavigationTypeDefinition';

import Home from './Home';
import type Route from './Route';

const TITLE_BAR_HEIGHT = Platform.OS === 'ios' ? 80 : 56; // On iOS, it includes status bar. On Android, it doesn't.

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', component: Home}}
        renderScene={this._renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            navigationStyles={NavigationBarStyles}
            style={[styles.navigatorBar]}
            routeMapper={this._routeMapper()}
          />
        }
      />
    );
  }

  _navigatorItem(functionName, route, navigator, index, navState) {
    let classDefinition = route.component;

    if(classDefinition && classDefinition[functionName]) {
        return classDefinition[functionName](route, navigator, index, navState);
    } else {
        return null;
    }
  }

  _renderScene(route, navigator) {
    var Component = route.component;

    navigator.parent = this;

    return (
      <Component navigator={navigator} route={route} {...route.props}/>
    );
  }

  _routeMapper() {
    return {
      LeftButton: (route: Route, navigator: typeof Navigator, index: number, navState: NavigationState) => {
        return (
          <View style={[styles.itemLayout, styles.leftButton]}>
            {this._navigatorItem('leftButton', route, navigator, index, navState)}
          </View>
        );
      },
      RightButton: (route: Route, navigator: typeof Navigator, index: number, navState: NavigationState) => {
        return (
          <View style={[styles.itemLayout, styles.rightButton]}>
            {this._navigatorItem('rightButton', route, navigator, index, navState)}
          </View>
        );
      },
      Title: (route: Route, navigator: typeof Navigator, index: number, navState: NavigationState) => {
        return (
          <View style={[styles.itemLayout]}>
            {this._navigatorItem('title', route, navigator, index, navState)}
          </View>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  navigatorBar:{
    height: TITLE_BAR_HEIGHT,
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowColor: 'gray',
  },
  itemLayout: {
    justifyContent: 'center',
    flex: 1,
  },
  leftButton: {
    marginLeft: 16,
  },
  rightButton: {
    marginRight: 16,
  },
});
