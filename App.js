import { blue, hotpink } from "color-name";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import OpacityAnimation from "./Components/OpacityAnimation";
import ScrollViewAnimations from "./Components/ScrollViewanimations";
import FlatlistAnimation from "./Components/FlatlistAnimation";
export default function App() {
  return (
    <View style={styles.container}>
      <FlatlistAnimation />
    </View>
  );
}

//We have to pass the styles we are writing using useAnimtedstyles to Our Animated View

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
