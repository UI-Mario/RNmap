import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import DetailPage from '../page/Detail/DetailPage';
import DetailList from '../page/Detail/DetailList';
import ARScreen from '../page/AR/AR';

const navOptionHandler = navigation => ({
  header: null,
});

const PageStack = createStackNavigator({
  DetailList: {
    screen: DetailList,
    navigationOptions: navOptionHandler,
  },
  DetailPage: {
    screen: DetailPage,
    // navigationOptions: navOptionHandler,
  },
  ARScreen: {
    screen: ARScreen,
    navigationOptions: navOptionHandler,
  },
});

export default PageStack;
