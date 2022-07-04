import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  const dimensions = Dimensions.get("window").width;

  console.log(dimensions);
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Items" onPress={() => navigation.navigate("Items")} />
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
