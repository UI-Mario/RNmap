import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
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
    // console.log('IIIIIII');
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
        // console.log(data.data);
        this.setState({
          isloading: false,
          detailListData: data.data,
        });
      });
  };

  renderItem = item => {
    return (
      <MapView.Marker
        color="red"
        coordinate={item.location}
        title="hhhh">
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
        <Button title="go to Temp" onPress={this.onPressNavi} />
        <Button
          title="全景图"
          onPress={() => this.props.navigation.navigate('PanoramaScreen')}
        />
        <Button
          title="二维码"
          onPress={() => this.props.navigation.navigate('Scanner')}
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
};

// import React, { Component } from "react";
// import { PermissionsAndroid, StyleSheet, Switch, Text, View } from "react-native";
// import { MapView } from "react-native-amap3d";
// import styles from "../styles";

// export default class HomeScreen extends Component {
//   static navigationOptions = {
//     title: "地图控件"
//   };

//   state = {
//     showsCompass: false,
//     showsScale: true,
//     showsZoomControls: true,
//     showsLocationButton: false
//   };

//   componentDidMount() {
//     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
//   }

//   render() {
//     return (
//       <View style={StyleSheet.absoluteFill}>
//         <MapView
//           locationEnabled={this.state.showsLocationButton}
//           showsCompass={this.state.showsCompass}
//           showsScale={this.state.showsScale}
//           showsLocationButton={this.state.showsLocationButton}
//           showsZoomControls={this.state.showsZoomControls}
//           style={styles.map}
//         />
//         <View style={styles.controls}>
//           <View style={styles.control}>
//             <Switch
//               style={styles.switch}
//               onValueChange={showsCompass => this.setState({ showsCompass })}
//               value={this.state.showsCompass}
//             />
//             <Text>指南针</Text>
//           </View>
//           <View style={styles.control}>
//             <Switch
//               style={styles.switch}
//               onValueChange={showsScale => this.setState({ showsScale })}
//               value={this.state.showsScale}
//             />
//             <Text>比例尺</Text>
//           </View>
//           <View style={styles.control}>
//             <Switch
//               style={styles.switch}
//               onValueChange={showsLocationButton => this.setState({ showsLocationButton })}
//               value={this.state.showsLocationButton}
//             />
//             <Text>定位</Text>
//           </View>
//           <View style={styles.control}>
//             <Switch
//               style={styles.switch}
//               onValueChange={showsZoomControls => this.setState({ showsZoomControls })}
//               value={this.state.showsZoomControls}
//             />
//             <Text>缩放</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
