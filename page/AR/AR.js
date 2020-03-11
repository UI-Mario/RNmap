import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {WebView} from 'react-native-webview';

export default class ARScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{
            uri:
              'https://nicolo-carpignoli.herokuapp.com/examples/places-name/',
          }}
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
