import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../page/Home/HomeScreen';
import Temp from '../page/Home/Temp';

const navOptionHandler = navigation => ({
  header: null,
});
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
});

export default HomeStack;