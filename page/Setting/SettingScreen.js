import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      videolistData: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  // TODO
  getData = () => {
    const url = 'http://api.bilibili.cn/recommend';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          isloading: false,
          videolistData: data,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
