import { View, Text, Image, StyleSheet } from "react-native";
import GradientText from "./gradientText";

export default function ProductHotItemCard(props) {
  const { containerStyle } = props;
  return (
    <View style={[styles.container, { containerStyle }]}>
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
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 129,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 8,
  },
  productImage: {
    width: 129,
    height: 136,
    borderRadius: 2,
  },

  titleProduct: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 16,
    lineHeight: 16,
    paddingVertical: 4,
    color: "#404040",
  },
  desProduct: {
    fontFamily: "Josefin-Sans-Light",
    fontSize: 14,
    lineHeight: 14,
    paddingVertical: 4,
    color: "#404040",
  },
  priceProduct: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 16,
    lineHeight: 16,
    paddingVertical: 4,
  },
});
