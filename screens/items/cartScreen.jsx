import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import WishlistCard from "../../components/assetCards/ReausableCard";
import NumberPick from "../../components/numberPick";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={{ top: 60 }}>
        <ScrollView>
          <WishlistCard>
            <NumberPick
              numberPickLayout={styles.numberPickLayout}
              styleContainer={styles.styleContainer}
              title="Size"
              styleFont={styles.styleFont}
            />
            <NumberPick
              numberPickLayout={styles.numberPickLayout}
              styleContainer={styles.styleContainer}
              title="Quantity"
              styleFont={styles.styleFont}
            />
            <TouchableOpacity onPress={() => console.log("worked Add to cart")}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Delete Item</Text>
              </View>
            </TouchableOpacity>
          </WishlistCard>

          <View>
            <Pressable onPress={() => console.log("Disable")}>
              <View style={[styles.buyNowButton, styles.mainButton]}>
                <Text
                  style={[styles.buttonTextLabel, styles.buttonWhiteLabelColor]}
                >
                  Proceed to checkout
                </Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  styleContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 3,
  },
  styleFont: {
    color: "#000",
    fontFamily: "Josefin-Sans-Light",
    fontSize: 12,
    lineHeight: 12,
  },
  buttonContainer: {
    paddingVertical: 10,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 5,
  },
  buttonText: {
    color: "#000",
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 12,
    lineHeight: 12,
  },
  numberPickLayout: { paddingLeft: 5 },
  buyNowButton: {
    backgroundColor: "#F3F4F8",
    borderColor: "#F3F4F8",
  },
  buttonTextLabel: {
    fontFamily: "Josefin-Sans-Bold",
    fontSize: 18,
    lineHeight: 18,
  },

  mainButton: {
    paddingVertical: 18,
    marginHorizontal: 20,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  buttonWhiteLabelColor: {
    color: "#BFBFBF",
  },
});
