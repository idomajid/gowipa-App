import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import DummyData from "../../data/dummy-data";
import GradientText from "../../components/gradientText";
import ProductHotItemCard from "../../components/productHotItemCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ItemScreen({ navigation, route }) {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const [images, setImages] = useState([
    require("../../assets/images/jumtron/jumbotron.jpg"),
    require("../../assets/images/jumtron/jumbotron_2.jpg"),
    require("../../assets/images/jumtron/jumbotron.jpg"),
  ]);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4);
  }, []);

  //console.log({ route });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Carousel
            autoPlay={false}
            width={windowWidth}
            height={windowHeight / 3.2}
            data={images}
            renderItem={({ item, index }) => (
              <Image style={styles.imageJumbotron} source={item} key={index} />
            )}
            // renderItem={({ item, index }) => (
            //   <Image style={styles.imageJumbotron} source={item} key={index} />
            // )}
          />
        </View>
        <View style={styles.titleAndPrizeLayer}>
          <View>
            <Text style={styles.titleProduct}>{route.params?.title}</Text>
            <View style={styles.labelLayout}>
              <Text style={styles.labelProduct}>New</Text>
              <Text style={styles.labelProduct}> | </Text>
              <Text style={styles.labelProduct}>Unisex</Text>
              <Text style={styles.labelProduct}> | </Text>
              <Text style={styles.labelProduct}>Available</Text>
            </View>
            <View style={styles.priceLayout}>
              <GradientText styleFont={styles.priceProduct}>
                {`$ ${route.params?.price}`}
              </GradientText>
            </View>
            {/* <View>for a quantity component</View> */}
          </View>
        </View>
        <View></View>
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
                {route.params?.description}
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
        <View style={{ marginVertical: 30 }}>
          <Pressable onPress={() => console.log("worked buy Now")}>
            <View
              style={{
                paddingVertical: 20,
                marginHorizontal: 20,
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
              }}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontFamily: "Josefin-Sans-Regular",
                  fontSize: 18,
                  lineHeight: 18,
                }}
              >
                Buy now
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => console.log("worked Add to cart")}>
            <View
              style={{
                paddingVertical: 18,
                marginHorizontal: 20,
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#000",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontFamily: "Josefin-Sans-Regular",
                  fontSize: 18,
                  lineHeight: 18,
                }}
              >
                Add to cart
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.RecommendationTitle}>Our Recomendation</Text>
        </View>
        <View style={styles.RecommendationLayout}>
          <FlatList
            horizontal
            data={DummyData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate("Items", {
                      title: item.title,
                      id: item.id,
                      price: item.price,
                      description: item.description,
                      photo: item.photo,
                    })
                  }
                >
                  <ProductHotItemCard
                    productImage={item.photo}
                    title={item.title}
                    description={item.desConclution}
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
});
