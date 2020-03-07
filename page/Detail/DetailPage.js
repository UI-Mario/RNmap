import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params);
    const data = this.props.navigation.state.params;

    this.setState({
      data: data,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.data.name}</Text>
        <View style={styles.webContain}>
          <WebView
            // bounces={true}
            scalesPageToFit={false}
            source={{
              html: `<iframe 
                  src="https://player.bilibili.com/player.html?aid=56652763&cid=98974350&page=1" 
                  scrolling="no" 
                  border="0" 
                  frameborder="no" 
                  framespacing="0" 
                  allowfullscreen="true"
                  style="width:100%;"> 
                </iframe>`,
            }}
            style={{
              width: '100%',
              height: 330,
            }}></WebView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  webContain: {
    width: '100%',
    height: 300,
    // backgroundColor: 'black',
  },
});
