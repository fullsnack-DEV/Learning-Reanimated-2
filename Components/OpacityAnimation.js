import React from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

export default function OpacityAnimation() {
  //opacity Animation with React Reanimated 2
  //use Shared Value is a Hook which let handle the value from the UI thread /Workets
  //with use Animated Style we can create a style which is similar to StySheet

  const progress = useSharedValue(1);
  //For Each Animation We have to Define the Shared Valur
  const Scale = useSharedValue(2);

  const reanimatdStyle = useAnimatedStyle(() => {
    //here we will write a styles which we need to animate
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [{ scale: Scale.value }],
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(0.5);
    Scale.value = withRepeat(withSpring(1), -1);
  }, []);

  return (
    <View>
      <Animated.View
        style={[
          { height: 100, width: 100, backgroundColor: "hotpink" },
          reanimatdStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
