import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import CartCard from "../../components/assetCards/ReausableCard";
import NumberPick from "../../components/numberPick";
import { supabase } from "../../supabase";

const windowWidth = Dimensions.get("window").width;

export default function CartScreen() {
  const [cartItem, setCartItem] = useState(null);
  useEffect(() => {
    async function cartFetch() {
      let { data, error } = await supabase
        .from("product_cart")
        .select("id,title_product,price_product,size_product,imageUrl_product");
      setCartItem(data);
      console.log(error);
    }
    cartFetch();
  }, []);

  console.log({ cartItem });
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 60 }}>
        <FlatList
          data={cartItem}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <CartCard
                title={item.title_product}
                price={item.price_product}
                imageUrl={item.imageUrl_product}
              >
                <NumberPick
                  numberPickLayout={styles.numberPickLayout}
                  styleContainer={styles.styleContainer}
                  title="Size"
                  styleFont={styles.styleFont}
                  inputValue={item.size_product}
                />
                <NumberPick
                  numberPickLayout={styles.numberPickLayout}
                  styleContainer={styles.styleContainer}
                  title="Quantity"
                  styleFont={styles.styleFont}
                  inputValue={1}
                />
                <TouchableOpacity
                  onPress={() => console.log("worked Add to cart")}
                >
                  <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Delete Item</Text>
                  </View>
                </TouchableOpacity>
              </CartCard>
            );
          }}
        />

        <View style={{ marginBottom: 30, marginTop: 10 }}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,

    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
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
