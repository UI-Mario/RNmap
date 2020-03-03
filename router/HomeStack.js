import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../page/Home/HomeScreen';
import Temp from '../page/Home/Temp';
import PanoramaScreen from '../page/Panorama/PanoramaScreen';

const navOptionHandler = navigation => ({
  header: null,
});
const PaOptions = {
  title: '全景图',
};
// 
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navOptionHandler,
  },
  Temp: {
    screen: Temp,
    navigationOptions: navOptionHandler,
  },
  PanoramaScreen: {
    screen: PanoramaScreen,
    navigationOptions: PaOptions,
  }
});

export default HomeStack;