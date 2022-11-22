import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import BuildingIcon from "../../assets/icons/profiles/building.svg";

export default function UserAdress({ navigation }) {
  return (
    <View style={styles.container}>
      <BuildingIcon width={270} height={260} fill="#eaeaea" />
      <Text style={styles.labelText}>You don’t have any Address</Text>
      <Pressable onPress={() => navigation.navigate("addNewAdressScreen")}>
        <View style={[styles.editProfileButton, styles.mainButton]}>
          <Text style={[styles.buttonTextLabel, styles.buttonLabelColor]}>
            Add new Adress
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
  },
  labelText: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 18,
    lineHeight: 18,
    color: "#c7c7c7",
  },
  mainButton: {
    marginTop: 30,
    width: windowWidth - 60,
    paddingVertical: 18,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
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
});
