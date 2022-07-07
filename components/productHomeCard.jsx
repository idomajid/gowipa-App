import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const windowWidth = Dimensions.get("window").width;

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

        <MaskedView
          maskElement={
            <Text
              style={[styles.priceProduct, { backgroundColor: "transparent" }]}
            >
              {props.price}
            </Text>
          }
        >
          <LinearGradient
            colors={["#E28075", "#F06483"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
          >
            <Text style={[styles.priceProduct, { opacity: 0 }]}>
              {props.price}
            </Text>
          </LinearGradient>
        </MaskedView>
      </View>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    flexDirection: "column",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  productImage: {
    width: "100%",
    height: 172,
    borderRadius: 2,
  },

  titleProduct: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 20,
    lineHeight: 20,
    paddingVertical: 4,
    color: "#404040",
  },
  desProduct: {
    fontFamily: "Josefin-Sans-Light",
    fontSize: 18,
    lineHeight: 18,
    paddingVertical: 4,
    color: "#404040",
  },
  priceProduct: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 18,
    lineHeight: 18,
    paddingVertical: 4,
  },
});
