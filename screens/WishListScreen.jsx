import {
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import WishlistCard from "../components/assetCards/ReausableCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function WishListScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginVertical: 10 }}>
        <WishlistCard>
          <Pressable onPress={() => console.log("worked Add to cart")}>
            <View
              style={{
                paddingVertical: 10,
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Josefin-Sans-Regular",
                  fontSize: 12,
                  lineHeight: 12,
                }}
              >
                Add to cart
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => console.log("worked Add to cart")}>
            <View
              style={{
                paddingVertical: 10,
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#000",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontFamily: "Josefin-Sans-Regular",
                  fontSize: 12,
                  lineHeight: 12,
                }}
              >
                Delete Item
              </Text>
            </View>
          </Pressable>
        </WishlistCard>
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
