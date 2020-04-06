import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Dimensions,
  Alert,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import DetailList from './DetailList';
import ErrorScreen from '../Error/ErrorNet';

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
      isRefreshing: false,
      isloading: true,
      detailListData: [],
      data_xb: [],
      data_wlxb: [],
      data_gxb: [],
      search: '',
      fetchError: false,
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
          fetchError: false,
        });
      })
      .catch(e => {
        console.log('错误:', e);
        this.setState({
          fetchError: true,
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

  renderList = (data, name) => {
    if (this.state.isloading && !this.state.fetchError) {
      return <ActivityIndicator size="large" />;
    } else if (this.state.fetchError) {
      return <ErrorScreen />;
    } else {
      return (
        <DetailList
          // tabLabel={name}
          detailListData={data}
          navigation={this.props.navigation}
        />
      );
    }
  };

  _onRefresh = () => {
    if (this.state.isRefreshing) {
      return;
    }
    this.setState({
      isRefreshing: true,
    });
    this.getDetailList();
    setTimeout(() => {
      this.getDetailList();
      this.setState({
        isRefreshing: false,
      });
    }, 3000);
  };

  renderDetail = () => {
    const search = this.state.search;

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarIcon}
              source={require('../../img/user.png')}
            />
          </View>
          <View style={styles.searchButton}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('SearchScreen')}>
              <Icon name="search1" size={24} color="#cdcdcd" />
            </TouchableOpacity>
          </View>
          <View style={styles.socialIcons}>
            <Icon name="tool" size={24} color="#cdcdcd" />
            <Icon name="download" size={24} color="#cdcdcd" />
            <Icon name="twitter" size={24} color="#cdcdcd" />
          </View>
        </View>
        <ScrollableTabView initialPage={0} renderTabBar={this._renderTabBar}>
          <ScrollView
            tabLabel="推荐  "
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
                colors={['#1296db', '#0061b0']}
              />
            }
            showsVerticalScrollIndicator={false}
            style={styles.recommand}>
            <View style={styles.swiperContainer}>
              <SwiperComponent />
            </View>
            {this.renderList(this.state.detailListData)}
          </ScrollView>
          <View tabLabel="信息学部">
            {this.renderList(this.state.data_xb, '信息学部')}
          </View>
          <View tabLabel="文理学部">
            {this.renderList(this.state.data_wlxb, '文理学部')}
          </View>
          <View tabLabel="工学部 ">
            {this.renderList(this.state.data_gxb, '工学部 ')}
          </View>
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
  topBar: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarIcon: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  searchButton: {
    width: '50%',
    height: 35,
    backgroundColor: '#e6e6e6',
    borderRadius: 100,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  socialIcons: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
