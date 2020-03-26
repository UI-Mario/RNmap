import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import DetailPage from '../page/Detail/DetailPage';
import Detail from '../page/Detail/Detail';
import ARScreen from '../page/AR/AR';
import SearchScreen from '../page/Search/SearchScreen';
import ModelScreen from '../page/3d/3d';

const navOptionHandler = navigation => ({
  header: null,
});

const DetailStack = createStackNavigator({
  Detail: {
    screen: Detail,
    navigationOptions: navOptionHandler,
  },
  DetailPage: {
    screen: DetailPage,
    // navigationOptions: navOptionHandler,
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: navOptionHandler,
  },
  ModelScreen: {
    screen: ModelScreen,
  },
});

export default DetailStack;
