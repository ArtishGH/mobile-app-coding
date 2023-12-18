import React from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';

interface CustomSliderProps {
  value: number;
  onValueChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ value, onValueChange }) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newValue = gestureState.moveX / 300;
      onValueChange(newValue);
    },
  });

  return (
    <View style={styles.sliderContainer} {...panResponder.panHandlers}>
      <View
        style={[
          styles.track,
          { width: value * 300 },
        ]}
      />
      <View style={[styles.thumb, { left: value * 300 - 10 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 3,
    width: 350,
    backgroundColor: '#EFEFF4',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 50,
  },
  track: {
    height: 3,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    position: 'absolute',
  },
  thumb: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    position: 'absolute',
  },
});

export default CustomSlider;
