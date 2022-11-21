import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function UserAdress() {
  return (
    <View style={styles.container}>
      <Text>UserAdress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
