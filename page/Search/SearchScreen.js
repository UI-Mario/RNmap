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
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

import SwiperComponent from '../../component/swiper';

const {height, width} = Dimensions.get('window');

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      detailListData: [],
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
        this.setState({
          isloading: false,
          detailListData: data.data,
        });
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
              width: '80%',
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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('Detail')}>
            <View>
              <Text style={{color: '#515151'}}>取消</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
