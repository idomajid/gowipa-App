import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

export default function HomeScreen() {
  const dimensions = Dimensions.get("window").width;

  console.log(dimensions);
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
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
