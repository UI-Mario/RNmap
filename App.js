import React, {Component} from 'react';

import {Text, View, Button, StyleSheet, Image} from 'react-native';

import Main from './main';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  render() {
    return <Main />;
  }
}
