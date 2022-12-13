import React, { useState, useCallback, useEffect } from "react";
import Apploading from "expo-app-loading";
import { supabase } from "../../supabase";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

// import HeartIcon from "../../assets/tabIcons/heart.svg";
import DummyData from "../../data/dummy-data";
import GradientText from "../../components/gradientText";
import AlertCartCard from "../../components/assetCards/CostumAlertCard";

import ProductHotItemCard from "../../components/productHotItemCard";
import NumberPick from "../../components/numberPick";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ItemScreen({ route, navigation }) {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const [getProduct, setGetProduct] = useState(null);
  const [getRecommendedProduct, setGetRecommendedProduct] = useState(null);
  const [addCart, setAddCart] = useState(false);
  // Add to Cart
  const [idProduct, setIdProduct] = useState(null);
  const [titleProduct, setTitleProduct] = useState(null);
  const [priceProduct, setPriceProduct] = useState(null);
  const [imageUrlProduct, setImageUrlProduct] = useState(null);
  const [size] = useState(35);
  const [isLoading, setIsLoading] = useState(false);

  const [wishList, setWishList] = useState(false);

  // const [images, setImages] = useState();
  // const [images, setImages] = useState([
  //   require("../../assets/images/jumtron/jumbotron.jpg"),
  //   require("../../assets/images/jumtron/jumbotron_2.jpg"),
  //   require("../../assets/images/jumtron/jumbotron.jpg"),
  // ]);

  const id = route.params?.id;

  useEffect(() => {
    //https://stackoverflow.com/questions/70568712/why-my-data-get-undefined-when-i-successfully-get-the-response
    const fetchProduct = async () => {
      const { data: products, error } = await supabase
        .from("products")
        .select(
          "id ,title, price, desConclusion, description, category, imageUrl"
        )
        .eq("id", id);

      let productId = await products[0].id;
      let productTitle = await products[0].title;
      let productPrice = await products[0].price;
      let productImageUrl = await products[0].imageUrl;

      if (products) {
        setGetProduct(products);
        setIdProduct(productId);
        setTitleProduct(productTitle);
        setPriceProduct(productPrice);
        setImageUrlProduct(productImageUrl);
        // setWishList(products.isWishlist);
      }

      if (error) {
        console.log(`fetchwishlist ${error}`);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    async function productFetch() {
      let { data: products, error } = await supabase.from("products").select();
      setGetRecommendedProduct(products);
    }
    productFetch();
  }, []);

  const addToCart = async () => {
    const { error } = await supabase.from("product_cart").insert({
      title_product: titleProduct,
      id_product: idProduct,
      price_product: priceProduct,
      imageUrl_product: imageUrlProduct,
      size_product: size,
    });
    console.log({ error });
  };

  // useEffect(() => {
  //   const FavoriteItems = async () => {
  //     let { data: products, error } = await supabase
  //       .from("products")
  //       .update({ isWishlist: wishList })
  //       .eq("id", id)
  //       .select();

  //     if (error) {
  //       console.log({ error });
  //     }

  //     if (products) {
  //       console.log({ products });
  //     }
  //   };

  //   FavoriteItems();
  // }, [wishList]);

  // const hoverHearth = () => {
  //   setWishList(!wishList);
  // };

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4);
  }, []);

  if (!getProduct) {
    return <Apploading />;
  }

  const buyNowHandler = () => {
    setIsLoading(true);
    addToCart();
    navigation.navigate("cartScreen");
    setIsLoading(false);
  };

  const addtoCartHandler = () => {
    setIsLoading(true);
    setAddCart(true);
    addToCart();
    setIsLoading(false);
  };

  const onProcessHandler = () => {
    setIsLoading(true);
    setAddCart(!addCart);
    navigation.navigate("cartScreen");
    setIsLoading(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {getProduct.map((product) => {
          return (
            <View key={product?.id}>
              <View>
                <View>
                  <Carousel
                    autoPlay={false}
                    width={windowWidth}
                    height={windowHeight / 3.2}
                    data={getProduct}
                    renderItem={({ item, index }) => (
                      <Image
                        style={styles.imageJumbotron}
                        source={[{ uri: item.imageUrl }]}
                        key={item?.id}
                      />
                    )}
                  />
                </View>
                <View style={styles.titleAndPrizeLayer}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <View style={styles.titleAndFav}>
                        <View>
                          <Text style={styles.titleProduct}>
                            {product?.title}
                          </Text>
                        </View>
                        {/* <View style={{ paddingHorizontal: 10 }}>
      <Pressable onPress={hoverHearth}>
        <HeartIcon
          width={22}
          height={22}
          fill={wishList ? "#E71D36" : "#A9A9A9"}
        />
      </Pressable>
    </View> */}
                      </View>
                      <View style={styles.labelLayout}>
                        <Text style={styles.labelProduct}>New</Text>
                        <Text style={styles.labelProduct}> | </Text>
                        <Text style={styles.labelProduct}>Unisex</Text>
                        <Text style={styles.labelProduct}> | </Text>
                        <Text style={styles.labelProduct}>Available</Text>
                      </View>
                      <View style={styles.priceLayout}>
                        <GradientText styleFont={styles.priceProduct}>
                          {`$ ${product?.price}`}
                        </GradientText>
                      </View>
                    </View>

                    <NumberPick
                      styleContainer={{ alignItems: "center" }}
                      title="Size"
                      inputValue={size}
                      styleFont={styles.titleNumberPick}
                    />
                  </View>
                </View>

                <View style={styles.descriptionLayout}>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.descriptionLabel}>Description</Text>
                  </View>
                  <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                    <Text
                      onTextLayout={onTextLayout}
                      numberOfLines={textShown ? undefined : 4}
                      style={[{ lineHeight: 21 }]}
                    >
                      <Text style={styles.descriptionText}>
                        {product?.description}
                      </Text>
                    </Text>

                    {lengthMore ? (
                      <Text
                        onPress={toggleNumberOfLines}
                        style={{
                          lineHeight: 21,
                          marginTop: 10,

                          fontFamily: "Josefin-Sans-Regular",
                          color: "#404040",
                        }}
                      >
                        {textShown ? "Read less..." : "Read more..."}
                      </Text>
                    ) : null}
                  </View>
                </View>
              </View>
              <View style={{ marginVertical: 30 }}>
                {/* https://stackoverflow.com/questions/40483034/close-react-native-modal-by-clicking-on-overlay*/}

                <AlertCartCard
                  animationType="fade"
                  transparent={true}
                  onRequestClose={() => setAddCart(!addCart)}
                  visible={addCart}
                  key={product?.id}
                >
                  <TouchableOpacity
                    style={styles.centeredView}
                    activeOpacity={1}
                    onPressOut={() => setAddCart(!addCart)}
                  >
                    <Pressable>
                      <View style={styles.modalView}>
                        <Image
                          source={[{ uri: product?.imageUrl }]}
                          style={{ width: 320, height: 160 }}
                        />
                        <View
                          style={{
                            flexDirection: "row",
                            marginHorizontal: 20,
                            marginVertical: 10,
                            paddingVertical: 2,
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "column",
                            }}
                          >
                            <View style={{ paddingBottom: 8 }}>
                              <Text
                                style={{
                                  fontFamily: "Josefin-Sans-Regular",
                                  fontSize: 16,
                                  lineHeight: 16,
                                  color: "#000000",
                                }}
                              >
                                {product?.title}
                              </Text>
                            </View>
                            <View>
                              <GradientText styleFont={styles.priceProduct}>
                                {`$ ${product?.price}`}
                              </GradientText>
                            </View>
                          </View>
                          {/* <View>
                          <NumberPick
                            title="Quantity"
                            styleFont={{ color: "#000" }}
                          />
                        </View> */}
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <Pressable
                            style={[
                              styles.modalButton,
                              styles.modalBackgroundColorBlack,
                            ]}
                            onPress={onProcessHandler}
                          >
                            <Text
                              style={[
                                styles.textStyleModal,
                                styles.buttonWhiteLabelColor,
                              ]}
                            >
                              Process to checkout
                            </Text>
                          </Pressable>
                          <Pressable
                            style={[
                              styles.modalButton,
                              styles.modalBackgroundColorWhite,
                            ]}
                            onPress={() => setAddCart(!addCart)}
                          >
                            <Text
                              style={[
                                styles.textStyleModal,
                                styles.buttonBlackLabelColor,
                              ]}
                            >
                              Continue shopping
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                    </Pressable>
                  </TouchableOpacity>
                </AlertCartCard>

                <Pressable onPress={buyNowHandler}>
                  <View style={[styles.buyNowButton, styles.mainButton]}>
                    <Text
                      style={[
                        styles.buttonTextLabel,
                        styles.buttonWhiteLabelColor,
                      ]}
                    >
                      Buy now
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={addtoCartHandler}>
                  <View style={[styles.mainButton, styles.addCartButton]}>
                    <Text
                      style={[
                        styles.buttonTextLabel,
                        styles.buttonBlackLabelColor,
                      ]}
                    >
                      Add to cart
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          );
        })}

        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.RecommendationTitle}>Our Recomendation</Text>
        </View>
        <View style={styles.RecommendationLayout}>
          <FlatList
            horizontal
            data={getRecommendedProduct}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={
                    () => console.log("Pressthisss")
                    // navigation.navigate("Items", {
                    //   id: item.id,
                    // })
                  }
                >
                  <ProductHotItemCard
                    productImage={{ uri: item.imageUrl }}
                    title={item.title}
                    description={item.desConclusion}
                    price={`$${item.price}`}
                  />
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    width: windowWidth,
  },
  imageJumbotron: {
    width: windowWidth,
    height: windowHeight / 3.2,
    marginTop: 20,
  },
  titleAndFav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleAndPrizeLayer: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  titleProduct: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 22,
    lineHeight: 22,
    color: "#000000",
  },
  labelLayout: {
    flexDirection: "row",
    marginVertical: 5,
  },
  labelProduct: {
    fontFamily: "Josefin-Sans-Light",
    fontSize: 14,
    lineHeight: 14,
    color: "#404040",
  },
  priceLayout: {
    marginVertical: 5,
    flexDirection: "row",
  },
  priceProduct: {
    fontFamily: "Josefin-Sans-Bold",
    fontSize: 24,
    lineHeight: 24,
    color: "#404040",
  },
  descriptionLayout: {
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderColor: "#F3F4F8",
    borderTopWidth: 2,
  },
  descriptionLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 14,
    lineHeight: 14,
    color: "#404040",
    marginHorizontal: 10,
  },
  descriptionText: {
    fontFamily: "Josefin-Sans-Light",
    fontSize: 14,
    lineHeight: 21,
    color: "#404040",
  },
  mainButton: {
    paddingVertical: 18,
    marginHorizontal: 20,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  addCartButton: {
    backgroundColor: "#fff",
    borderColor: "#000",
    marginTop: 20,
  },
  buyNowButton: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  buttonTextLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 18,
    lineHeight: 18,
  },
  buttonWhiteLabelColor: {
    color: "#ffff",
  },
  buttonBlackLabelColor: {
    color: "#000",
  },
  RecommendationLayout: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  RecommendationTitle: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 14,
    lineHeight: 14,
    marginTop: 10,

    color: "#404040",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modalView: {
    width: 320,
    height: 295,
    backgroundColor: "white",
    borderRadius: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyleModal: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 12,
    lineHeight: 12,
    textAlign: "center",
  },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  modalBackgroundColorBlack: {
    backgroundColor: "#000",
  },
  modalBackgroundColorWhite: {
    backgroundColor: "#ffff",
  },
  titleNumberPick: {
    color: "#000",
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 16,
    lineHeight: 21,
  },
});
