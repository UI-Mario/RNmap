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
