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

import DetailListItem from './DetailListItem';

import SwiperComponent from '../../component/swiper';

export default class DetailList extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = item => {
    return <DetailListItem item={item} navigation={this.props.navigation} />;
  };

  renderVideoList = () => {
    if (!this.props.detailListData) {
      return (
        <View style={styles.container}>
          <Text>请检查网络连接</Text>
        </View>
      );
    }
    const navigation = this.props.navigation;
    return (
      <View style={styles.listcontainer}>
        {this.props.detailListData.map(this.renderItem)}
      </View>
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
