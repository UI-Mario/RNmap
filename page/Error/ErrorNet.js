import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ErrorScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>请检查网络连接</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
