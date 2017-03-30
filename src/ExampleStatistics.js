// @flow

import React, { Component } from 'react';
import {
  Navigator,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import type Route from './Route';

type Props = {
  onPressExit: Function,
}

type State = {
}

export default class ExampleStatistics extends Component <void, Props, State> {
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
        <View style={[styles.titleBar, styles.horizontal]}>
          <View style={styles.leftButtonView} />
          <View style={[styles.titleView, styles.center]}><Text style={styles.title}>STATISTICS</Text></View>
          <TouchableOpacity style={[styles.rightButton, styles.center]} onPress={() => this.props.onPressExit()}>
            <Text style={styles.rightButtonText}>×</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={[styles.cellView, styles.center]}>
            <View style={[styles.dateView, styles.center]}>
              <Text style={styles.dateText}>03.27-03.31</Text>
            </View>
          </View>

          { this._audienceOverview() }
        </ScrollView>
      </View>
    );
  }

  _audienceOverview() {
    return (
      <View style={[styles.cellView]}>
        <View style={styles.audienceOverviewTitleView}>
          <Text style={styles.audienceOverviewTitle}>AUDIENCE OVERVIEW</Text>
        </View>
        <View style={styles.audienceOverviewContent}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A263A',
  },
  horizontal: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleBar: {
    ...Platform.select({
      ios: {
        paddingTop: 20,
        height: 64,
      },
      android: {
        height: 50,
      },
    }),
  },
  leftButtonView: {
    flex: 2,
  },
  titleView: {
    flex: 8,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  rightButton: {
    flex: 2,
  },
  rightButtonText: {
    fontSize: 22,
    color: 'white',
  },

  scrollView: {
    flex: 1,
  },

  cellView: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  dateView: {
    height: 30,
    width: 120,
    borderRadius: 15,
    backgroundColor: '#10314B',
  },
  dateText: {
    fontSize: 14,
    color: '#7CD7DE',
  },

  audienceOverviewTitleView: {
    backgroundColor: '#27868F',
    padding: 8,
  },
  audienceOverviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7CD7DE',
  },
  audienceOverviewContent: {
    height: 180,
    backgroundColor: '#0F3047',
  },
});
