import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class LogScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>jjjj</Text>
        </View>
        <View style={styles.bottom}>
          <Text>UUU</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    width: '100%',
    height: '50%',
    backgroundColor: '#1296db',
  },
});
