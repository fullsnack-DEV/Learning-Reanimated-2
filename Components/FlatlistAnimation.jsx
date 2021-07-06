//Wrapping the Flatlist in the Animated Flatlist

import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import Movies from "../Components/Data/data";
import Svg, { Text as BoldText } from "react-native-svg";
import { Categories } from "./Data/Category";
const { height, width } = Dimensions.get("screen");
import { LinearGradient } from "expo-linear-gradient";

const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function FlatlistAnimation({ navigation }) {
  const flatList = useRef();

  const flatref = () => {
    flatList.current.scrollToIndex({ index: 0 });
  };

  //state for the Cateogries Flatlist
  const [trigger, Settrigger] = useState(false);
  const [newdata, Setnewdata] = useState([
    { key: "left-s" },
    ...Movies,
    { key: "right-s" },
  ]);

  const getcat = (cateogry) => {
    console.log(cateogry.name);
    const newcat = Movies.filter((c) => c.cat.includes(cateogry.name));

    Setnewdata([{ key: "left-s" }, ...newcat, { key: "right-s" }]);
    Settrigger(true);
  };

  //animations for the Flatlist

  const Xsscroll = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View style={styles.cateogries}>
        <FlatList
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ marginLeft: 25 }}
          snapToAlignment="start"
          ListFooterComponent={<View style={{ width: 30 }} />}
          renderItem={({ item }) => {
            return (
              <TouchableWithoutFeedback onPress={() => getcat(item)}>
                <View style={styles.catwrapper}>
                  <View style={{ padding: 10, alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>{item.icon}</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "#fff",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
      <View style={styles.movielist}>
        <Animated.FlatList
          ref={flatList}
          style={styles.flatlist}
          keyExtractor={(_, index) => index.toString()}
          extraData={trigger}
          data={newdata}
          snapToInterval={ITEM_SIZE}
          scrollEventThrottle={16}
          onContentSizeChange={() => flatref()}
          decelerationRate={"fast"}
          removeClippedSubviews={false}
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
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("Detail")}
                >
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
                </TouchableWithoutFeedback>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: "center",
    backgroundColor: "#000",
    alignItems: "center",
  },
  flatlist: {
    flexGrow: 0,
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
  movielist: {
    flex: 0.62,
    backgroundColor: "red",
  },
  cateogries: {
    flex: 0.12,
    backgroundColor: "yellow",
  },
  catwrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    height: ITEM_SIZE * 0.2,
    borderRadius: 10,
    textAlignVertical: "center",
    marginRight: 15,
    backgroundColor: "#20211E",
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
});
