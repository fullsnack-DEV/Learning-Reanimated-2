import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FlatlistAnimation from "../Components/FlatlistAnimation";
import Swiping from "../Components/Swiping";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Swiping  /> */}

      <FlatlistAnimation navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
  },
});

//Lets define the Structure of the Screens
//Tabs
// 1>Home  2>fav  3>Ticket  4>profile
//install expo tabs
//turn on the Auto import
