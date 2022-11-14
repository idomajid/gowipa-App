import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import FacebookIcon from "../assets/icons/social-media/facebook.svg";
import GoogleIcon from "../assets/icons/social-media/google.svg";
import React from "react";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.LoginTextLabel}>Login Into your account</Text>
      <View View style={styles.circle}>
        <Pressable onPress={() => console.log("worked Login Facebook")}>
          <View style={[styles.mainButton, styles.addCartButton]}>
            <View style={{ paddingRight: 10 }}>
              <FacebookIcon width={25} height={25} fill="#404040" />
            </View>

            <Text
              style={[styles.buttonTextLabel, styles.buttonBlackLabelColor]}
            >
              Login with Facebook
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => console.log("worked Login Facebook")}>
          <View style={[styles.mainButton, styles.addCartButton]}>
            <View style={{ paddingRight: 10 }}>
              <GoogleIcon width={25} height={25} fill="#404040" />
            </View>
            <Text
              style={[styles.buttonTextLabel, styles.buttonBlackLabelColor]}
            >
              Login with Google
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  circle: {
    // circle : https://stackoverflow.com/questions/30404067/creating-css-circles-in-react-native
    top: "30%",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 1.2,
    height: Dimensions.get("window").width * 1.2,
    backgroundColor: "#EAEAEA",
    alignItems: "center",
  },
  mainButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: Dimensions.get("window").width / 1.5,
    height: 44,
  },
  addCartButton: {
    backgroundColor: "#fff",
    borderColor: "#000",
    marginTop: 10,
  },

  buttonTextLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 16,
    lineHeight: 16,
  },

  LoginTextLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 22,
    lineHeight: 22,
  },
});
