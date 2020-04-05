import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../page/Home/HomeScreen';
import DetailPage from '../page/Detail/DetailPage';

const navOptionHandler = navigation => ({
  header: null,
});

const PageStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navOptionHandler,
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      title: '详情页',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 16,
      },
    },
  },
});

export default PageStack;
