import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WishlistCard from "../components/assetCards/reausableCard";

export default function WishListScreen() {
  return (
    <View style={styles.container}>
      <WishlistCard />
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
