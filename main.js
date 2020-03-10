import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import PageStack from './router/PageStack';
import SettingsScreen from './page/Setting/SettingScreen';
import DetailStack from './router/DetailStack';

const navOptionHandler = navigation => ({
  header: null,
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

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21,
  },
});

export default createAppContainer(TabNavigator);
