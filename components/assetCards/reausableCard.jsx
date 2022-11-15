import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import GradientText from "../gradientText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ReausableCard(props) {
  return (
    <View style={{ marginVertical: 10 }}>
      <View style={styles.container}>
        <View
          style={{
            padding: 10,
          }}
        >
          <Image
            style={styles.imageShapes}
            source={require("../../assets/images/jumtron/jumbotron.jpg")}
          />
        </View>
        <View style={styles.labelLayout}>
          <Text style={styles.fontTitle}>This is a title for a card</Text>
          <Text style={styles.fontStock}>Stock avaible</Text>
          <GradientText styleFont={styles.priceProduct}>$200</GradientText>
          {props.children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 20,
    height: windowHeight / 3.2,
    backgroundColor: "#ffff",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderBottomColor: "#c7c7c7",
    borderBottomWidth: 1,
  },
  imageShapes: {
    width: 180,
    height: 130,
    borderRadius: 5,
  },
  fontTitle: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 14,
    lineHeight: 14,
    color: "#404040",
  },
  labelLayout: {
    padding: 10,
    width: 140,
    height: 130,
  },
  fontStock: {
    fontFamily: "Josefin-Sans-Light",
    fontSize: 12,
    lineHeight: 12,
    color: "#404040",
    paddingVertical: 5,
  },
  priceProduct: {
    fontFamily: "Josefin-Sans-Bold",
    fontSize: 18,
    lineHeight: 18,
    color: "#404040",
    paddingVertical: 2,
  },
});

// { width: 100, height: 100, backgroundColor: "#c7c7c7" }
