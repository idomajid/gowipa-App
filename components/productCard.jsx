import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function productCard(props) {
  return (
    <View style={styles.container}>
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
    width: 129,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  productImage: {
    width: 129,
    height: 136,
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
