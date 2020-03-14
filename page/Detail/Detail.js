import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import DetailList from './DetailList';

import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

import SwiperComponent from '../../component/swiper';

const {height, width} = Dimensions.get('window');

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      detailListData: [],
      data_xb: [],
      data_wlxb: [],
      data_gxb: [],
    };
  }

  componentDidMount() {
    this.getDetailList();
    this._category();
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

  _renderTabBar = () => {
    return (
      <DefaultTabBar
        backgroundColor={'#1296db'}
        activeTextColor={'#fff'}
        inactiveTextColor={'#fff'}
        textStyle={styles.tabBarText}
        underlineStyle={styles.tabBarUnderline}
        style={{height: 35}}
      />
    );
  };

  _category = () => {};

  renderDetail = () => {
    if (this.state.isloading) {
      return (
        <View style={styles.container}>
          <View style={styles.totalTitle}>
            <Text style={{color: '#fff', fontSize: 16}}>推荐景点</Text>
          </View>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.totalTitle}>
          <Text style={{color: '#fff', fontSize: 16}}>推荐景点</Text>
        </View>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={this._renderTabBar}
          stickyHeaderIndices={[1]}>
          <ScrollView tabLabel="推荐  " style={styles.recommand}>
            <View style={styles.swiperContainer}>
              <SwiperComponent />
            </View>
            <DetailList
              detailListData={this.state.detailListData}
              navigation={this.props.navigation}
            />
          </ScrollView>
          <DetailList
            tabLabel="信息学部"
            detailListData={this.state.detailListData}
            navigation={this.props.navigation}
          />
          <DetailList
            tabLabel="文理学部"
            detailListData={this.state.detailListData}
            navigation={this.props.navigation}
          />
          <DetailList
            tabLabel="工学部 "
            detailListData={this.state.detailListData}
            navigation={this.props.navigation}
          />
        </ScrollableTabView>
      </View>
    );
  };

  render() {
    return this.renderDetail();
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
    backgroundColor: '#1296db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommand: {
    width: '100%',
  },
  swiperContainer: {
    width: '100%',
    height: 168,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  tabBarText: {
    fontSize: 13,
    textAlign: 'center',
  },
  tabBarUnderline: {
    width: 30,
    marginHorizontal: (width - 24 * 4) / 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 2,
  },
});
