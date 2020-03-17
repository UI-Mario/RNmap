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
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
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
      search: '',
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
        this._category(data.data);
        this.setState({
          isloading: false,
          detailListData: data.data,
        });
      });
  };

  _renderTabBar = () => {
    return (
      <DefaultTabBar
        backgroundColor={'#fff'}
        activeTextColor={'#1296db'}
        inactiveTextColor={'#8a8a8a'}
        textStyle={styles.tabBarText}
        underlineStyle={styles.tabBarUnderline}
        style={{height: 35}}
      />
    );
  };

  _category = data => {
    var _data_xb = data.filter(i => i.where === '信息学部');
    var _data_wlxb = data.filter(i => i.where === '文理学部');
    var _data_gxb = data.filter(i => i.where === '工学部');
    this.setState({
      data_xb: _data_xb,
      data_gxb: _data_gxb,
      data_wlxb: _data_wlxb,
    });
  };

  updateSearch = search => {
    this.setState({search: search});
    console.log(search);
  };

  renderDetail = () => {
    const search = this.state.search;

    if (this.state.isloading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            ref={'searchBar'}
            placeholder="Type Here..."
            platform="android"
            searchIcon={<Icon name="search1" size={24} color="#cdcdcd" />}
            containerStyle={{
              width: '94%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            inputContainerStyle={{
              borderRadius: 100,
              width: '100%',
              height: '100%',
              backgroundColor: '#e6e6e6',
              alignItems: 'center',
            }}
            inputStyle={{
              color: '#515151',
              fontSize: 14,
            }}
            onChangeText={this.updateSearch}
            value={search}
            // showLoading={true}
          />
        </View>
        <ScrollableTabView initialPage={0} renderTabBar={this._renderTabBar}>
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
            detailListData={this.state.data_xb}
            navigation={this.props.navigation}
          />
          <DetailList
            tabLabel="文理学部"
            detailListData={this.state.data_wlxb}
            navigation={this.props.navigation}
          />
          <DetailList
            tabLabel="工学部  "
            detailListData={this.state.data_gxb}
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
  searchBarContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    backgroundColor: '#1296db',
    borderRadius: 4,
    marginBottom: 2,
  },
});
