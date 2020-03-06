import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

//TODO:
//点击图片跳转详情页
const onpressTest = () => {
  console.log('Press');
};

export default class DetailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      detailListData: [],
    };
  }

  componentDidMount() {
    this.getDetailList();
  }

  onPressNavigate = () => {
    console.log('Yes');
  };

  getDetailList = () => {
    const url =
      'http://rap2.taobao.org:38080/app/mock/246371/example/1583420999935';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        this.setState({
          isloading: false,
          detailListData: data.data,
        });
      });
  };

  renderItem = item => {
    return (
      // 视频列表
      <View style={styles.listitem}>
        <View style={styles.imgcontainer} onPress={this.onPressNavigate}>
          <TouchableOpacity onPress={onpressTest}>
            <Image source={{uri: item.pic}} style={styles.disPic} />
          </TouchableOpacity>
        </View>
        <View style={styles.detailinfo}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    );
  };

  renderVideoList = () => {
    if (this.state.isloading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <ScrollView>
        <Button title="kkkk" onPress={() => console.log('PPP')} />
        <View style={styles.container}>
          {this.state.detailListData.map(this.renderItem)}
        </View>
      </ScrollView>
    );
  };

  render() {
    return this.renderVideoList();
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  listitem: {
    width: '88%',
    height: 210,
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 10,
    overflow: 'hidden',
  },
  imgcontainer: {
    width: '100%',
    height: 150,
    backgroundColor: 'blue',
  },
  disPic: {
    width: '100%',
    height: '100%',
  },
  detailinfo: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {},
  name: {
    color: '#cdcdcd',
  },
});
