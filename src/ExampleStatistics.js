// @flow

import React, { Component } from 'react';
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

type Props = {
  onPressExit: Function,
}

type State = {
  aoPeople: number,
  aoLikes: number,
  aoShares: number,
  aoComments: number,
}

export default class ExampleStatistics extends Component <void, Props, State> {
  props: Props;

  state: State = {
    aoPeople: 0.5,
    aoLikes: 0.5,
    aoShares: 0.5,
    aoComments: 0.5,
  };

  componentDidMount() {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        aoPeople: 3,
        aoLikes: 9,
        aoShares: 5,
        aoComments: 7,
      });
    }, 500);
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
          <View style={[styles.aoItemRow, styles.horizontal]}>
            <View style={styles.aoItemLeftCol}>
              <Text style={styles.aoItemText}>People</Text>
            </View>
            <View style={[styles.aoItemRightCol, styles.horizontal]}>
              <View style={[styles.aoItemValue, {flex: this.state.aoPeople}]}></View><View style={{flex: 10-this.state.aoPeople}}></View>
            </View>
          </View>
          <View style={[styles.aoItemRow, styles.horizontal]}>
            <View style={styles.aoItemLeftCol}>
              <Text style={styles.aoItemText}>Likes</Text>
            </View>
            <View style={[styles.aoItemRightCol, styles.horizontal]}>
              <View style={[styles.aoItemValue, {flex: this.state.aoLikes}]}></View><View style={{flex: 10-this.state.aoLikes}}></View>
            </View>
          </View>
          <View style={[styles.aoItemRow, styles.horizontal]}>
            <View style={styles.aoItemLeftCol}>
              <Text style={styles.aoItemText}>Shares</Text>
            </View>
            <View style={[styles.aoItemRightCol, styles.horizontal]}>
              <View style={[styles.aoItemValue, {flex: this.state.aoShares}]}></View><View style={{flex: 10-this.state.aoShares}}></View>
            </View>
          </View>
          <View style={[styles.aoItemRow, styles.horizontal]}>
            <View style={styles.aoItemLeftCol}>
              <Text style={styles.aoItemText}>Comments</Text>
            </View>
            <View style={[styles.aoItemRightCol, styles.horizontal]}>
              <View style={[styles.aoItemValue, {flex: this.state.aoComments}]}></View><View style={{flex: 10-this.state.aoComments}}></View>
            </View>
          </View>

          <View style={[styles.aoItemMarkerRow, styles.horizontal]}>
            <View style={styles.aoItemMarkerLeftCol}>
            </View>
            <View style={[styles.aoItemMarkerRightCol, styles.horizontal]}>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>0</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>100</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>200</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>300</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>400</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>500</Text>
            </View>
          </View>
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
    backgroundColor: '#0F3047',
    paddingTop: 12,
    paddingBottom: 10,
  },
  aoItemRow: {
    height: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
  aoItemLeftCol: {
    width: 100,
    justifyContent: 'center',
  },
  aoItemText: {
    color: '#6A8DA4',
  },
  aoItemRightCol: {
    flex: 1,
    backgroundColor: '#143D56',
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 6,
  },
  aoItemValue: {
    backgroundColor: '#5EBEC6',
    borderRadius: 6,
  },
  aoItemMarkerRow: {

  },
  aoItemMarkerLeftCol: {
    width: 90,
  },
  aoItemMarkerRightCol: {
    flex: 1,
  },
  aoItemMarkerCell: {
    flex: 1,
    color: '#6A8DA4',
  },
  aoItemMarkerCenter: {
    textAlign: 'center',
  },
});
