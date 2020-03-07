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
  TouchableOpacity,
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
            <Image
              source={require('../../img/panorama.png')}
              // source={{uri: item.pic}}
              style={styles.disPic}
            />
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
        <View style={styles.container}>
          <SwiperComponent style={styles.swiper} />
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
    padding: 8,
  },
  listcontainer:{
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
