import React from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function DetailPage() {
  const seats = [...Array(100).keys()];
  const ocuupied = [5, 7, 25, 11, 9];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2B5480",
      }}
    >
      <View>
        <View style={styles.setswrapper}>
          {seats.slice(0, 4).map((seat, index) => {
            return (
              <View style={{}}>
                <View
                  key={index}
                  style={[
                    {
                      alignSelf: "center",
                      height: 30,
                      width: 30,
                      marginHorizontal: 8,
                      borderRadius: 8,
                      marginVertical: 13,

                      backgroundColor: "red",
                    },
                  ]}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(4, 12).map((seat, index) => {
            const isincluded = seats.includes(seat);
            const isocupied = ocuupied.includes(seat);
            return (
              <>
                <View
                  key={index}
                  style={
                    (styles.seats, [isocupied ? styles.occupied : styles.bgB])
                  }
                />
              </>
            );
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(12, 20).map((seat, index) => {
            return <View key={index} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(20, 28).map((seat, index) => {
            return <View key={index} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(28, 36).map((seat, index) => {
            return <View key={index} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(36, 44).map((seat, index) => {
            return <View key={index} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(44, 52).map((seat, index) => {
            return <View key={index} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(52, 57).map((seat, index) => {
            return (
              <View>
                <View key={index} style={styles.seats} />
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  seats: {
    backgroundColor: "red",
    marginHorizontal: 8,
    marginVertical: 13,
    borderRadius: 8,
    height: 30,
    width: 30,
  },
  setswrapper: {
    width,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bgB: {
    backgroundColor: "#000",

    marginHorizontal: 8,
    marginVertical: 13,
    borderRadius: 8,
    height: 30,
    width: 30,
  },
  occupied: {
    backgroundColor: "hotpink",

    marginHorizontal: 8,
    marginVertical: 13,
    borderRadius: 8,
    height: 30,
    width: 30,
  },
});
