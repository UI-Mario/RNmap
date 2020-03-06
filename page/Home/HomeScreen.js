import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {MapView, Marker, Polyline, Polygon, MapType} from 'react-native-amap3d';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      detailListData: [],
      coordinate: {
        latitude: 30.5285286208,
        longitude: 114.359381429,
      },
    };
  }

  onPressNavi = () => {
    this.props.navigation.navigate('DetailPage');
  };

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

  renderItem = item => {
    return (
      <MapView.Marker color="red" coordinate={item.location} title="hhhh">
        <TouchableOpacity activeOpacity={0.9} onLongPress={this.onPressNavi}>
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
        <Button
          title="全景图"
          onPress={() => this.props.navigation.navigate('PanoramaScreen')}
        />
        <MapView
          locationEnabled={true}
          showsCompass={true}
          showsScale={true}
          showsLocationButton={true}
          draggable
          coordinate={this.state.coordinate}
          // mapType={MapType.Night}
          zoomLevel={20}
          zoomEnabled={true}
          scrollEnabled={true}
          rotateEnabled={true}
          style={styles.mapStyles}
          showsZoomControls={true}
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
