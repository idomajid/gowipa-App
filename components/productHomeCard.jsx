import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import GradientText from "./gradientText";

const windowWidth = Dimensions.get("window").width;

export default function ProductHotItemCard(props) {
  return (
    <View style={[styles.container]}>
      <View>
        <Image source={props.productImage} style={styles.productImage} />
      </View>
      <View style={styles.textDescriptionContainer}>
        <Text style={styles.titleProduct}>{props.title}</Text>
        <Text style={styles.desProduct}>{props.description}</Text>
        <GradientText styleFont={styles.priceProduct}>
          {props.price}
        </GradientText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2.3,
    marginHorizontal: 10,
  },
  productImage: {
    width: "100%",

    height: 172,
    borderRadius: 2,
  },

  titleProduct: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 15,
    paddingBottom: 4,
    color: "#404040",
  },
  desProduct: {
    fontFamily: "Josefin-Sans-Light",
    fontSize: 14,
    lineHeight: 14,
    paddingTop: 4,
    paddingBottom: 4,

    color: "#404040",
  },
  priceProduct: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 14,
    lineHeight: 14,
    paddingTop: 8,
    paddingBottom: 4,
  },
  textDescriptionContainer: {
    // width: "200%",
    with: "100%",
  },
});
