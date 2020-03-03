import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {WebView} from 'react-native-webview';

export default class PanoramaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Button
          title="go to home"
          onPress={() => this.props.navigation.navigate('Home')}
        /> */}
        <WebView source={{ uri: 'https://720yun.com/t/00521mz8jlv?scene_id=548686' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});