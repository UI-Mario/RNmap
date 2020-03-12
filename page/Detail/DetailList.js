import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import SwiperComponent from '../../component/swiper';

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

  getDetailList = () => {
    const url =
      'http://rap2.taobao.org:38080/app/mock/246371/example/1583420999935';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data.data);
        this.setState({
          isloading: false,
          detailListData: data.data,
        });
      });
  };

  renderItem = item => {
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
            <Text numberOfLines={2} style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('DetailPage', item)}>
            <Image
              source={require('../../img/detail.png')}
              style={styles.love}
            />
          </TouchableOpacity>
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
        <View style={styles.container}>
          <View style={styles.totalTitle}>
            <Text>推荐景点</Text>
          </View>
          <SwiperComponent style={styles.swiper} />
          <Button
            title="hhhhh"
            onPress={() => this.props.navigation.navigate('ARScreen')}
          />
          <View style={styles.listcontainer}>
            {this.state.detailListData.map(this.renderItem)}
          </View>
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
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  totalTitle: {
    width: '100%',
    height: 45,
    marginBottom: 10,

    backgroundColor: '#fff',
    // 边框样式 (solid-固体/立方体、dotted-布满的/打点的、dashed-虚线)
    borderStyle: 'solid',
    // 边框颜色
    borderColor: '#cdcdcd',
    // 边框宽度
    // borderWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listcontainer: {
    alignItems: 'center',
    // justifyContent: 'center'
  },
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
  love: {
    // position: 'absolute',
    // bottom: 5,
    // right: 10,
    width: 20,
    height: 20,
    zIndex: 10,
  },
  name: {
    color: '#cdcdcd',
  },
});
