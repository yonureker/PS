import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const ToggleButton = props => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={() => props.toggleView()}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    top: 80,
    right: 20,
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
});
