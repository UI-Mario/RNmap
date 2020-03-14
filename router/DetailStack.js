import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import DetailPage from '../page/Detail/DetailPage';
import Detail from '../page/Detail/Detail';
import ARScreen from '../page/AR/AR';

const navOptionHandler = navigation => ({
  header: null,
});

const PageStack = createStackNavigator({
  Detail: {
    screen: Detail,
    navigationOptions: navOptionHandler,
  },
  DetailPage: {
    screen: DetailPage,
    // navigationOptions: navOptionHandler,
  },
});

export default PageStack;
