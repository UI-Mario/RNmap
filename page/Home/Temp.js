import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Temp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Temp</Text>
        <Button
          title="go to home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});