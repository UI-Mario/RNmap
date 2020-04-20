import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

import * as WeChat from 'react-native-wechat';
const wxAppId = 'wx953eb9608772961a'; // 微信开放平台注册的app id
WeChat.registerApp(wxAppId);

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

let url = 'http://q6z705tdq.bkt.clouddn.com/audio.mp3';
let whoosh = new Sound(url, '', err => {
  if (err) {
    return console.log(err);
  }
});

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isplay: false,
    };
  }

  componentDidMount() {
    // console.log(this.props.navigation.state.params);
    const data = this.props.navigation.state.params;
    this.setState({
      data: data,
    });
    console.log(data);
  }

  playAudio = () => {
    whoosh.setNumberOfLoops(-1);
    if (!this.state.isplay) {
      // console.log('Play');
      whoosh.play();
      this.setState({
        isplay: true,
      });
    } else {
      // console.log('pause');
      whoosh.pause();
      this.setState({
        isplay: false,
      });
    }
  };

  shareToFriend(imgUrl) {
    WeChat.shareToSession({
      type: 'imageUrl',
      title: 'web image',
      description: 'share web image to time line',
      mediaTagName: 'email signature',
      messageAction: undefined,
      messageExt: undefined,
      imageUrl: imgUrl,
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

  shareToTimeline(imgUrl) {
    WeChat.shareToTimeline({
      type: 'imageUrl',
      title: 'web image',
      description: 'share web image to time line',
      mediaTagName: 'email signature',
      messageAction: undefined,
      messageExt: undefined,
      imageUrl: imgUrl,
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

  showPlayIcon = () => {
    if (!this.state.isplay) {
      return <Icon name="play" size={20} color="#1296db" />;
    } else {
      return (
        <Icon
          name="pause"
          size={20}
          color="#1296db"
          backgroundColor="#cdcdcd"
        />
      );
    }
  };

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
        <View style={styles.contentContain}>
          <View style={styles.top}>
            <View style={styles.left}>
              <Text style={{color: '#1296db'}}>简介</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.playAudio()}>
                {this.showPlayIcon()}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('ModelScreen')}>
              <Image
                source={require('../../img/model.png')}
                style={styles.ar}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.content}>{this.state.data.content}</Text>
        </View>
        <View style={styles.shareLine}>
          <Text style={styles.shareText}>分享至</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.shareToFriend(this.state.data.pic)}>
            <Image source={require('../../img/wechat.png')} style={styles.ar} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.shareToTimeline(this.state.data.pic)}>
            <Image
              source={require('../../img/wechat-friend.png')}
              style={styles.ar}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.hr} />
        <View>
          <Text>评论</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    color: '#515151',
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
  contentContain: {
    padding: 8,
    backgroundColor: '#f2f2f2',
  },
  top: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 6,
  },
  left: {
    width: '20%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ar: {
    // position: 'absolute',
    // bottom: 5,
    // right: 10,
    width: 20,
    height: 20,
    zIndex: 10,
    marginRight: 10,
  },
  content: {
    fontStyle: 'italic',
  },
  shareLine: {
    width: '100%',
    height: 30,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  shareText: {
    color: '#515151',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 20,
  },
  hr: {
    width: '100%',
    height: 20,
    backgroundColor: '#f2f2f2',
  },
});
