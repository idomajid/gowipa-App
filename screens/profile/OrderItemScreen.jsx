import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function OrderItemScreen() {
  return (
    <View tyle={styles.container}>
      <Text>OrderItemScreen</Text>
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
