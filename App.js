import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeStack from './router/HomeStack';
import SettingsScreen from './page/Setting/SettingScreen';

const navOptionHandler = navigation => ({
  header: null,
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
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
  // Camera: {
  //   screen: SettingsScreen,
  //   navigationOptions: {
  //     tabBarLabel: ' ',
  //     tabBarIcon: () => {
  //       return (
  //         <Image style={styles.tabBarIcon} source={require('./img/home.png')} />
  //       );
  //     },
  //   },
  // },
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
