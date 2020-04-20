import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Linking,
  Alert,
} from 'react-native';
import * as WeChat from 'react-native-wechat';

const wxAppId = 'wx953eb9608772961a'; // 微信开放平台注册的app id
WeChat.registerApp(wxAppId);

export default class DetailListItem extends Component {
  constructor(props) {
    super(props);
  }

  open = () => {
    let url = 'https://ui-mario.github.io/RNmap/page/AR/webview/test.html';
    Linking.openURL(url);
  };

  shareToFriend() {
    WeChat.shareToSession({
      type: 'news',
      webpageUrl: 'https://www.baidu.com',
      title: 'Test sharing',
      description: 'This is a test',
    })
      .then(response => {
        console.log(response);
        Alert.alert('分享成功');
      })
      .catch(error => {
        let errorCode = Number(error.code);
        if (errorCode === -2) {
          Alert.alert('分享已取消');
        } else {
          Alert.alert('分享失败');
        }
      });
  }
  shareToTimeline() {
    WeChat.shareToTimeline({
      type: 'news',
      webpageUrl: 'https://www.baidu.com',
      title: 'Test sharing',
      description: 'This is a test',
    })
      .then(response => {
        console.log(response);
        Alert.alert('分享成功');
      })
      .catch(error => {
        let errorCode = Number(error.code);
        if (errorCode === -2) {
          Alert.alert('分享已取消');
        } else {
          Alert.alert('分享失败');
        }
      });
  }

  render() {
    const item = this.props.item;
    const navigation = this.props.navigation;
    return (
      // 列表
      <View style={styles.listitem}>
        <View style={styles.imgcontainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('DetailPage', item)}>
            <Image source={{uri: item.pic}} style={styles.disPic} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailinfo}>
          <View>
            <Text numberOfLines={2} ref="test" style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={this.open}>
              <Image source={require('../img/ar.png')} style={styles.ar} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                this.props.navigation.navigate('DetailPage', item)
              }>
              <Image source={require('../img/detail.png')} style={styles.ar} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.shareToTimeline}>
              <Image source={require('../img/share.png')} style={styles.ar} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listitem: {
    width: '88%',
    height: 210,
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  imgcontainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#1296db',
  },
  disPic: {
    width: '100%',
    height: '100%',
  },
  detailinfo: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  ar: {
    // position: 'absolute',
    // bottom: 5,
    // right: 10,
    width: 20,
    height: 20,
    zIndex: 10,
    marginLeft: 7,
  },
  title: {
    color: '#515151',
  },
  name: {
    color: '#cdcdcd',
  },
});
