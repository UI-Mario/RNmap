import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import {ScrollView} from 'react-native-gesture-handler';

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
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{this.state.data.name}</Text>
        <Text style={styles.subTitle}>{this.state.data.title}</Text>
        <View style={styles.webContainer}>
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
                  style="width:100%; height: 100%;"> 
                </iframe>`,
            }}
          />
        </View>
        <View>
          <View>
            <Text>简介</Text>
          </View>
          <Text>{this.state.data.content}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    marginLeft: 8,
    marginTop: 4,
  },
  subTitle: {
    fontSize: 12,
    color: '#cdcdcd',
    marginLeft: 8,
  },
  webContainer: {
    width: '100%',
    height: 200,
    // backgroundColor: 'black',
  },
});
