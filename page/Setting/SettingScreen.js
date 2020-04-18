import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import {ListItem, Avatar} from 'react-native-elements';
const list = [
  {
    title: '详情',
    icon: 'archive',
  },
  {
    title: '关于我们',
    icon: 'album',
  },
];

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      videolistData: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
          hidden={false} //是否隐藏状态栏。
          backgroundColor={'#1296db'}
          translucent={false} //指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
          barStyle="light-content"
        />
        <View style={styles.top}>
          <Avatar
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            rounded
            size={110}
          />
          <Text>jjjj</Text>
        </View>
        <View style={styles.bottom}>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              bottomDivider
              chevron
            />
          ))}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
