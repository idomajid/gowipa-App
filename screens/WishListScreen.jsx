import { StyleSheet, Text, Dimensions, View, ScrollView } from "react-native";
import React from "react";
import WishlistCard from "../components/assetCards/reausableCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function WishListScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginVertical: 10 }}>
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
  },
});
