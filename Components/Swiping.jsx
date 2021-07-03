import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Swiping() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absolutefillObject,
    width: 60,
    height: 10,

    backgroundColor: "red",
  },
});
