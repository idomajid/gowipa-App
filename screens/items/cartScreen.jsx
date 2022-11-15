import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text>cartScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
