import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import DetailPage from '../page/Detail/DetailPage';
import DetailList from '../page/Detail/DetailList';

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
});

export default PageStack;
