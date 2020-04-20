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
import DetailListItem from '../../component/DetailListItem';
import {getAllLocationInfo} from '../../network/request';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      detailListData: [],
      searchListData: [],
      notFound: false,
      search: '',
    };
  }

  componentDidMount() {
    this.getDetailList();
  }

  getDetailList = () => {
    getAllLocationInfo()
      .then(res => res.json())
      .then(data => {
        this.setState({
          isloading: false,
          detailListData: data.data,
        });
      });
  };

  renderItem = item => {
    return <DetailListItem item={item} navigation={this.props.navigation} />;
  };

  updateSearch = search => {
    const temp = [];
    this.setState({search: search, searchListData: temp, notFound: false});
    if (search !== '') {
      this.startSearch();
      let result = [];
      const data = this.state.detailListData;
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].name.indexOf(search) !== -1 ||
          search.indexOf(data[i].name) !== -1
        ) {
          result.push(data[i]);
        }
      }
      this.setState({
        notFound: result.length === 0,
        searchListData: result,
      });
    }
    this.cancelSearch();
  };

  showSearchOutput = () => {
    if (this.state.notFound === true) {
      return <Text>Not Found~~</Text>;
    } else {
      return this.state.searchListData.map(this.renderItem);
    }
  };

  showLoading = () => {
    if (this.state.isloading) {
      return <ActivityIndicator size="large" />;
    }
  };

  startSearch = () => {
    this.setState({
      isloading: true,
    });
  };

  cancelSearch = () => {
    this.setState({
      isloading: false,
    });
  };

  renderSearch = () => {
    const search = this.state.search;
    return (
      <ScrollView style={styles.container}>
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
            onClear={this.cancelSearch}
            onCancel={this.cancelSearch}
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
        <View style={styles.listContainer}>
          {this.showLoading()}
          {this.showSearchOutput()}
        </View>
      </ScrollView>
    );
  };

  render() {
    return this.renderSearch();
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
  listContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
