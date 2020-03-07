import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../page/Home/HomeScreen';
import Temp from '../page/Home/Temp';
import PanoramaScreen from '../page/Panorama/PanoramaScreen';
import Scanner from '../page/Home/Scanner';
import DetailPage from '../page/Detail/DetailPage';

const navOptionHandler = navigation => ({
  header: null,
});
const PaOptions = {
  title: '全景图',
};

const PageStack = createStackNavigator({
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
  },
  Scanner: {
    screen: Scanner,
    navigationOptions: {
      title: 'Scanner',
    },
  },
  DetailPage: {
    screen: DetailPage,
    // navigationOptions: navOptionHandler,
  },
});

export default PageStack;
