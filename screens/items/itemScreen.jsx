import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SearchScreen({ navigation, route }) {
  console.log({ route });
  return (
    <View style={styles.container}>
      <Text>ItemScreen</Text>
      <Text>{route.params?.title}</Text>
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
