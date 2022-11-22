import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function AddNewAdress() {
  return (
    <View style={styles.container}>
      <Text>AddNewAdress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
  },
});
