import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function ScrollViewanimations({ styles }) {
  const { height, width } = Dimensions.get("window");
  return (
    <View
      style={[
        {
          height: "100%",
          width: width,
          alignItems: "center",

          justifyContent: "center",
        },
        styles,
      ]}
    >
      <Text style={{ textAlign: "center" }}>This is the Scroll</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
