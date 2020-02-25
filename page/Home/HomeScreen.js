import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {WebView} from 'react-native-webview';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: 'https://ui-mario.github.io/Pages/RNmap.html'}}
          style={{marginTop: 0}}
        />
        <Text>HomeScreen</Text>
        <Button
          title="go to Temp"
          onPress={() => this.props.navigation.navigate('Temp')}
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
// import React, { Component } from 'react';
// import { WebView } from 'react-native-webview';
// import { ScrollView } from 'react-native-gesture-handler';

// class HomeScreen extends Component {
//   render() {
//     return (
//       <View>

//         <WebView
//           source={{ uri: 'https://www.baidu.com/' }}
//           style={{ marginTop: 20 }}
//         />
//       </View>
//     );
//   }
// }
