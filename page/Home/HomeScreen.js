import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StatusBar,
  TouchableHighlight,
  Linking,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';

import {MapView, Marker, Polyline, Polygon, MapType} from 'react-native-amap3d';

import {Overlay, SearchBar} from 'react-native-elements';
import {getAllLocationInfo} from '../../network/request';

const {height, width} = Dimensions.get('window');

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentId: 0,
      num: 'none',
      viewSize: new Animated.Value(0),
      isloading: true,
      detailListData: [],
      coordinate: {
        latitude: 30.5305286208,
        longitude: 114.364381429,
      },
      backColor: 0,
    };
  }

  componentDidMount() {
    this.getDetailList();
  }

  open = () => {
    let url = 'https://ui-mario.github.io/RNmap/page/AR/webview/geoar.html';
    Linking.openURL(url);
  };

  getDetailList = () => {
    getAllLocationInfo()
      .then(res => res.json())
      .then(data => {
        this.setState({
          isloading: false,
          detailListData: data,
        });
      });
  };

  startViewAnimation = id => {
    let targetValue = 1;
    if (this.state.viewSize._value === 1) {
      this.state.viewSize.setValue(0);
      this.setState({
        num: 'none',
      });
      targetValue = 0;
    } else {
      this.setState({
        num: 'flex',
      });
    }

    // Animated.parallel([
    //   Animated.timing(...),
    //   Animated.spring(...)
    // ]).start()
    Animated.spring(this.state.viewSize, {
      toValue: targetValue,
      duration: 300,
    }).start();
  };

  renderItem = item => {
    const thisLatitude = item.location.split(',')[1];
    const thisLongitude = item.location.split(',')[0];
    const thisCoordinate = {
      latitude: parseFloat(thisLatitude),
      longitude: parseFloat(thisLongitude),
    };
    return (
      <MapView.Marker
        onPress={() => {
          this.setState({
            isVisible: true,
            curentId: item.id,
          });
          this.startViewAnimation();
        }}
        icon={() => (
          <View style={{backgroundColor: 'transparent', alignItems: 'center'}}>
            <Text style={{color: '#515151', fontWeight: 'bold'}}>
              {item.name}
            </Text>
            <Image source={{uri: item.icon}} style={{width: 40, height: 40}} />
          </View>
        )}
        coordinate={thisCoordinate}>
        <TouchableOpacity activeOpacity={0.8}>
          <View />
        </TouchableOpacity>
      </MapView.Marker>
    );
  };

  render() {
    const viewSize = this.state.viewSize.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, (width / 7) * 5, (width / 4) * 2],
    });
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, .5)',
            display: this.state.num,
            zIndex: 2,
          }}
        />
        <View style={styles.panoramaContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PanoramaScreen')}>
            <Image
              style={styles.panoramaIcon}
              source={require('../../img/panorama.png')}
            />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            width: viewSize,
            height: viewSize,
            backgroundColor: '#fff',
            borderRadius: 200,
            position: 'absolute',
            right: '25%',
            top: '30%',
            zIndex: 3,
            overflow: 'hidden',
          }}>
          <View style={styles.overlayercontainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(
                  'DetailPage',
                  this.state.detailListData[this.state.curentId],
                );
              }}>
              <View>
                <Text style={{color: '#515151'}}>详情</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.open}>
              <View>
                <Text style={{color: '#515151'}}>AR</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.startViewAnimation}>
              <View>
                <Text style={{color: '#515151'}}>关闭</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <MapView
          locationEnabled={true}
          showsCompass={true}
          showsScale={true}
          showsLocationButton={true}
          draggable
          coordinate={this.state.coordinate}
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
  trst: {
    width: '100%',
    backgroundColor: 'blue',
  },
  panoramaContainer: {
    width: 43,
    height: 43,
    position: 'absolute',
    // backgroundColor: 'blue',
    right: 5,
    top: 50,
  },
  test: {
    width: '50%',
    height: 30,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayercontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    // backgroundColor: '#1296db',
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
