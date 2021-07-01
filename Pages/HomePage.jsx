import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FlatlistAnimation from "../Components/FlatlistAnimation";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <FlatlistAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
