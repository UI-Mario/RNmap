import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';

export default class DetailListItem extends Component {
  constructor(props) {
    super(props);
  }

  open = () => {
    let url = 'https://ui-mario.github.io/RNmap/page/AR/webview/test.html';
    Linking.openURL(url);
  };

  render() {
    const item = this.props.item;
    const navigation = this.props.navigation;
    return (
      // 列表
      <View style={styles.listitem}>
        <View style={styles.imgcontainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('DetailPage', item)}>
            <Image source={{uri: item.pic}} style={styles.disPic} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailinfo}>
          <View>
            <Text numberOfLines={2} style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={this.open}>
              <Image source={require('../../img/ar.png')} style={styles.ar} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                this.props.navigation.navigate('DetailPage', item)
              }>
              <Image
                source={require('../../img/detail.png')}
                style={styles.ar}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listitem: {
    width: '88%',
    height: 210,
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  imgcontainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#1296db',
  },
  disPic: {
    width: '100%',
    height: '100%',
  },
  detailinfo: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  ar: {
    // position: 'absolute',
    // bottom: 5,
    // right: 10,
    width: 20,
    height: 20,
    zIndex: 10,
    marginLeft: 7,
  },
  name: {
    color: '#cdcdcd',
  },
});
