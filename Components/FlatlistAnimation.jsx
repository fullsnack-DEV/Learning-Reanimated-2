//Wrapping the Flatlist in the Animated Flatlist

import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Text,
  Animated,
} from "react-native";
import Movies from "../Components/Data/data";
import Svg, { Text as BoldText } from "react-native-svg";
import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const { height, width } = Dimensions.get("screen");

const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function FlatlistAnimation() {
  const [movies] = useState([{ key: "left-s" }, ...Movies, { key: "right-s" }]);
  let [fontsloaded, error] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  // if (!fontsloaded) {
  //   return <AppLoading />;
  // }

  const Xsscroll = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        style={styles.flatlist}
        keyExtractor={(_, index) => index.toString()}
        data={movies}
        snapToInterval={ITEM_SIZE}
        scrollEventThrottle={16}
        snapToAlignment="start"
        centerContent={true}
        decelerationRate={"fast"}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: Xsscroll } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          if (!item.image) {
            return <View style={{ width: SPACER_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];
          const outputRange = ["5deg", "0deg", "-5deg"];
          const translateX = Xsscroll.interpolate({
            inputRange,
            outputRange,
          });
          return (
            <View style={{ width: ITEM_SIZE }}>
              <View style={styles.imagecontainer}>
                <Animated.Image
                  style={[
                    styles.image,
                    {
                      transform: [{ rotateZ: translateX }],
                      position: "relative",
                    },
                  ]}
                  source={{ uri: item.image }}
                />
                <Svg
                  style={{
                    position: "absolute",
                    top: 50,

                    transform: [{ translateX: -18 }],

                    right: 25,
                  }}
                  height="250%"
                  width="100%"
                  viewBox="0 0 80 80"
                >
                  <BoldText
                    stroke="#fff"
                    strokeWidth="1"
                    fill="#000"
                    color="#fff"
                    fontSize="80"
                    fontWeight="bold"
                    fontStyle="oblique"
                  >
                    {index}
                  </BoldText>
                </Svg>
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "yellow",
                    top: 325,
                    borderRadius: 10,
                    padding: 5,
                    width: 90,
                    height: 30,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "orangered",
                      textAlign: "center",
                      textAlignVertical: "center",
                    }}
                  >
                    IMDB
                  </Text>
                </View>
              </View>
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
    flexGrow: 0.6,
  },
  imagecontainer: {
    padding: 10,

    alignItems: "center",
  },
  image: {
    height: ITEM_SIZE * 1.2,
    width: "85%",

    resizeMode: "cover",
    borderRadius: 20,
  },
});
