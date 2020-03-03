// import React, {Component} from 'react';
// import {StyleSheet, View, Text, Button} from 'react-native';

// import {MapView} from 'react-native-amap3d';

// import {PermissionsAndroid} from 'react-native';
// import {Geolocation} from 'react-native-amap-geolocation';

// import {WebView} from 'react-native-webview';

// d7934e791c4dcd1a5d2a2ab65d734ed2
// const geolocationInit = async () => {
//   const permissions = [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION];
//   const granteds = await PermissionsAndroid.requestMultiple(permissions);
//   if (granteds['android.permission.ACCESS_FINE_LOCATION'] === 'granted') {
//     await Geolocation.init({
//       android: '43a7a2261e45d9ab9e615e9fcde1beb3',
//     });

//     Geolocation.setOptions({
//       interval: 3000,
//       distanceFilter: 20,
//     });

//     Geolocation.addLocationListener(location => {
//       console.log('aaaaaaaaaaaaaaaaaaaaaaaa>' + location);
//     });
//     Geolocation.start();
//   }
// };

// const geolocationInit = async () => {
//   const granted = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//   );
//   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     await Geolocation.init({
//       ios: '',
//       android: '43a7a2261e45d9ab9e615e9fcde1beb3',
//     });

//     Geolocation.setOptions({
//       interval: 3000,
//       distanceFilter: 20,
//     });

//     Geolocation.addLocationListener(location => {
//       console.log(location);
//     });
//     // Geolocation.addLocationListener(location => {
//     //   console.log(location, numTime++);
//     //   let gpsData = {...location};
//     //   gpsData.userName = `大师兄`;
//     //   insertGps(gpsData);
//     // });
//     Geolocation.start();
//   }
// };

// geolocationInit();
// d7934e791c4dcd1a5d2a2ab65d734ed2

// export default class HomeScreen extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ready: false,
//       where: {
//         latitude: null,
//         longitude: null,
//       },
//       error: null,
//     };
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <WebView
//           source={{uri: 'https://ui-mario.github.io/Pages/RNmap.html'}}
//           style={{marginTop: 0}}
//         />
//         <Text>Map\|/</Text>
//         <MapView
//           coordinate={{
//             latitude: 39.91095,
//             longitude: 116.37296,
//           }}
//         />
//         <Text>HHHHHHH</Text>
//         <Text>HomeScreen</Text>
//         <Button
//           title="go to Temp"
//           onPress={() => this.props.navigation.navigate('Temp')}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
// import React, { Component } from 'react';
// import { WebView } from 'react-native-webview';
// import { ScrollView } from 'react-native-gesture-handler';

// class HomeScreen extends Component {
//   render() {
//     return (
//       <View>

//         <WebView
//           source={{ uri: 'https://www.baidu.com/' }}
//           style={{ marginTop: 20 }}
//         />
//       </View>
//     );
//   }
// }

// AIzaSyCVLeoaXntTbLoe8AOoyw-d-sPsw6fMMHA

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import {MapView, Marker, Polyline, Polygon, MapType} from 'react-native-amap3d';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      coordinate: {
        latitude: 30.5285286208,
        longitude: 114.359381429,
      },
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>JJJJJJ</Text>
        <Text>TTTT</Text>
        <MapView
          draggable
          coordinate={this.state.coordinate}
          // mapType={'navi'}
          zoomLevel={20}
          zoomEnabled={true}
          scrollEnabled={true}
          rotateEnabled={true}
          style={styles.mapStyles}
          showsZoomControls={true}
          zoomLevel={15}></MapView>
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
};
