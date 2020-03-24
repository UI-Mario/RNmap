import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  Dimensions,
} from 'react-native';

import {MapView, Marker, Polyline, Polygon, MapType} from 'react-native-amap3d';

import {Overlay, SearchBar} from 'react-native-elements';

const {height, width} = Dimensions.get('window');

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentId: 0,
      isVisible: false,
      isloading: true,
      detailListData: [],
      coordinate: {
        latitude: 30.5285286208,
        longitude: 114.359381429,
      },
    };
  }

  componentDidMount() {
    this.getDetailList();
  }

  open = () => {
    let url = 'https://ui-mario.github.io/RNmap/page/AR/webview/test.html';
    Linking.openURL(url);
  };

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

  renderItem = item => {
    return (
      <MapView.Marker
        image={item.shot}
        // color="red"
        coordinate={item.location}
        title={item.title}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.setState({
              isVisible: true,
              curentId: item.id,
            });
          }}>
          <View style={styles.customInfoWindow}>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </MapView.Marker>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.panoramaContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PanoramaScreen')}>
            <Image
              style={styles.panoramaIcon}
              source={require('../../img/panorama.png')}
            />
          </TouchableOpacity>
        </View>
        <Overlay
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="#fff"
          width={(width / 4) * 2}
          height={(width / 4) * 2}
          borderRadius={width / 4}
          onBackdropPress={() => this.setState({isVisible: false})}>
          <View style={styles.overlayercontainer}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isVisible: false,
                });
                this.props.navigation.navigate(
                  'DetailPage',
                  this.state.detailListData[this.state.curentId],
                );
              }}>
              <View
                style={{
                  width: '100%',
                  height: '50%',
                  backgroundColor: '#1296db',
                }}>
                <Text style={{color: '#fff'}}>详情</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.open}>
              <View>
                <Text>AR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Overlay>
        <MapView
          locationEnabled={true}
          showsCompass={true}
          showsScale={true}
          showsLocationButton={true}
          draggable
          coordinate={this.state.coordinate}
          zoomLevel={20}
          zoomEnabled={true}
          scrollEnabled={true}
          rotateEnabled={true}
          style={styles.mapStyles}
          showsZoomControls={true}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          zoomLevel={15}>
          {this.state.detailListData.map(this.renderItem)}
        </MapView>
        <View style={styles.iconBottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Scanner')}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.scannerIcon}
                source={require('../../img/scanner.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = {
  panoramaContainer: {
    width: 43,
    height: 43,
    position: 'absolute',
    // backgroundColor: 'blue',
    right: 5,
    top: 50,
  },
  test: {
    width: '100%',
    height: '100%',
  },
  overlayercontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  panoramaIcon: {
    width: '100%',
    height: '100%',
  },
  mapStyles: {
    position: 'absolute',
    top: 0,
    zIndex: -100,
    width: '100%',
    height: '100%',
  },
  customInfoWindow: {
    backgroundColor: '#8bc34a',
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#689F38',
    marginBottom: 5,
  },
  customMarker: {
    backgroundColor: '#009688',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  markerText: {
    color: '#fff',
  },
  iconBottom: {
    width: '100%',
    height: 90,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerIcon: {
    width: '70%',
    height: '70%',
  },
};
