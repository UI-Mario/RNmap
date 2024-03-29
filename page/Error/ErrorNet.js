import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class ErrorScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: '100%', height: height}}
          source={{uri: 'http://q8xox3se4.bkt.clouddn.com/error.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
