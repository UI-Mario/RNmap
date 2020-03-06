import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      ItemData: [],
    };
  }

  render() {
    return (
      <View style={styles.listitem}>
        <Text>DetailListItem</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listitem: {
    flex: 1,
    width: ,
    height: ,
    borderRadius: 3,
    overflow: 'hidden',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
});
