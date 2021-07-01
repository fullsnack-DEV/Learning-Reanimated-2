//Wrapping the Flatlist in the Animated Flatlist

import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from "react-native";
import Movies from "../Components/Data/data";

const { height, width } = Dimensions.get("screen");

export default function FlatlistAnimation() {
  const Xsscroll = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        style={styles.flatlist}
        keyExtractor={(_, index) => index.toString()}
        data={Movies}
        snapToInterval={width}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: Xsscroll } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const outputRange = ["-90deg", "0deg", "90deg"];
          const translateX = Xsscroll.interpolate({
            inputRange,
            outputRange,
          });
          return (
            <View style={styles.imagecontainer}>
              <Animated.Image
                style={[styles.image, { transform: [{ rotateZ: translateX }] }]}
                source={{ uri: item.image }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlist: {
    flexGrow: 0,
  },
  imagecontainer: {
    width,
    height: 400,

    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: width - 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
});
