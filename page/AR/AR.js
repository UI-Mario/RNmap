import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Animated,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';

import {RNCamera} from 'react-native-camera';

export default class ARScreen extends Component {
  open = () => {
    let url = 'https://nicolocarpignoli.github.io/ar-playground/index.html';
    Linking.openURL(url);
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.open}>
          <View style={styles.viewForText}>
            <Text>点击我打开百度</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

