import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import AddressCard from "../../../components/assetCards/AddressCard";
import React from "react";

const windowWidth = Dimensions.get("window").width;

export default function AddressFilled() {
  return (
    <View style={styles.container}>
      <AddressCard />
      <View>
        <Pressable disable>
          <View style={[styles.mainButton, styles.editProfileButtonDisable]}>
            <Text
              style={[styles.buttonTextLabel, styles.buttonLabelColorDisable]}
            >
              Set default Address
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => console.log("addressFilledScreen")}>
          <View style={[styles.editProfileButton, styles.mainButton]}>
            <Text style={[styles.buttonTextLabel, styles.buttonLabelColor]}>
              Add new Address
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  mainButton: {
    marginTop: 20,
    width: windowWidth - 60,
    paddingVertical: 18,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  editProfileButton: {
    backgroundColor: "#0D1821",
  },

  buttonTextLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 18,
    lineHeight: 18,
  },

  buttonLabelColor: {
    color: "#ffff",
  },
  editProfileButtonDisable: {
    backgroundColor: "#F3F4F8",
  },
  buttonLabelColorDisable: {
    color: "#c7c7c7",
  },
});
