import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';

import ModelView from 'react-native-gl-model-view';
const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

export default class GestureControl extends Component {
  constructor() {
    super();
    this.state = {
      rotateX: new Animated.Value(0),
      rotateZ: new Animated.Value(0),

      fromXY: undefined,
      valueXY: undefined,

      zoom: -3,
      translateZ: new Animated.Value(-2),
    };
  }

  zoom = action => {
    let zoom = this.state.zoom;
    let translateZ = this.state.translateZ;
    this.state.zoom += action;

    Animated.timing(translateZ, {
      toValue: zoom,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  onMoveEnd = () => {
    this.setState({
      fromXY: undefined,
    });
  };

  onMove = e => {
    let {pageX, pageY} = e.nativeEvent,
      {rotateX, rotateZ, fromXY, valueXY} = this.state;
    if (!this.state.fromXY) {
      this.setState({
        fromXY: [pageX, pageY],
        valueXY: [rotateZ.__getValue(), rotateX.__getValue()],
      });
    } else {
      rotateZ.setValue(
        valueXY[0] +
          ((Platform.OS === 'ios' ? 1 : -1) * (pageX - fromXY[0])) / 2,
      );
      rotateX.setValue(
        valueXY[1] +
          ((Platform.OS === 'ios' ? 1 : -1) * (pageY - fromXY[1])) / 2,
      );
    }
  };

  renderButton(label, method) {
    return (
      <TouchableOpacity onPress={method}>
        <Text style={styles.button}>{label}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    let {rotateZ, rotateX, translateZ} = this.state;

    return (
      <View style={styles.container}>
        <AnimatedModelView
          model={{
            uri: 'model.obj',
          }}
          texture={{
            uri: 'model.png',
          }}
          onStartShouldSetResponder={() => true}
          onResponderRelease={this.onMoveEnd}
          onResponderMove={this.onMove}
          animate
          tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
          scale={1}
          translateZ={translateZ}
          translateY={-1}
          rotateX={rotateX}
          rotateZ={rotateZ}
          style={styles.container}
        />
        <Animated.View style={styles.buttons}>
          {this.renderButton('zoom in', this.zoom.bind(this, 0.8))}
          {this.renderButton('zoom out', this.zoom.bind(this, -0.8))}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
