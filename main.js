import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import PageStack from './router/PageStack';
import SettingsScreen from './page/Setting/SettingScreen';
import DetailStack from './router/DetailStack';
import Scanner from './page/Home/Scanner';
import PanoramaScreen from './page/Panorama/PanoramaScreen';
import SearchScreen from './page/Search/SearchScreen';
import ModelScreen from './page/3d/3d';

const navOptionHandler = navigation => ({
  header: null,
});

const navTransparent = navigation => ({
  //非自定义返回文字 style
  headerBackTitleStyle: {
    color: 'white',
  },
  title: 'back',
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  //背景透明度 不会影响文字
  headerTransparent: true,
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: PageStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}) => {
        if (focused) {
          return (
            <Image
              style={styles.tabBarIcon}
              source={require('./img/home-focus.png')}
            />
          );
        }
        return (
          <Image style={styles.tabBarIcon} source={require('./img/home.png')} />
        );
      },
    },
  },
  DetailStack: {
    screen: DetailStack,
    navigationOptions: {
      tabBarLabel: 'Detail',
      tabBarIcon: ({focused}) => {
        if (focused) {
          return (
            <Image
              style={styles.tabBarIcon}
              source={require('./img/details-focus.png')}
            />
          );
        }
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('./img/details.png')}
          />
        );
      },
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({focused}) => {
        if (focused) {
          return (
            <Image
              style={styles.tabBarIcon}
              source={require('./img/setting-focus.png')}
            />
          );
        }
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('./img/setting.png')}
          />
        );
      },
    },
  },
});

const TaskNavigator = createStackNavigator({
  Tab: {screen: TabNavigator, navigationOptions: navOptionHandler},
  Scanner: {
    screen: Scanner,
    navigationOptions: navTransparent,
  },
  PanoramaScreen: {
    screen: PanoramaScreen,
    navigationOptions: navTransparent,
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: navOptionHandler,
  },
  ModelScreen: {
    screen: ModelScreen,
    navigationOptions: {
      title: '3d Model',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 16,
      },
    },
  },
});

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21,
  },
});

export default createAppContainer(TaskNavigator);
