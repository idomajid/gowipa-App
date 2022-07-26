import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Apploading from "expo-app-loading";
import AppLoading from "expo-app-loading";
import Carousel from "react-native-reanimated-carousel";
import ProductHotItemCard from "../components/productHotItemCard";
import ProductHomeCard from "../components/productHomeCard";

import DummyData from "../data/dummy-data";
import { supabase } from "../supabase";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen({ navigation }) {
  const [quote, setQuote] = useState("");
  const [dataSupabase, setDataSupabase] = useState();
  const [images, setImages] = useState([
    require("../assets/images/jumtron/jumbotron.jpg"),
    require("../assets/images/jumtron/jumbotron_2.jpg"),
    require("../assets/images/jumtron/jumbotron.jpg"),
  ]);

  const quoteFetch = async () => {
    let response = await axios.get("https://api.quotable.io/random");
    if (!response.data) {
      <Apploading />;
    }
    setQuote(response.data);
  };

  useEffect(() => {
    quoteFetch();
  }, []);

  if (!quote) {
    <AppLoading />;
  }

  async function productFetch() {
    let { data, error } = await supabase.from("products").select();
    setDataSupabase(data);
    return dataSupabase;
  }

  useEffect(() => {
    productFetch();
  }, []);

  //console.log({ dataSupabase });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View>
            <Text>Gowipa</Text>
          </View>
          <TouchableOpacity>
            <Text>Click me</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Carousel
            autoPlay={true}
            autoPlayInterval={2000}
            scrollAnimationDuration={3000}
            width={windowWidth}
            height={windowHeight / 3.2}
            data={images}
            renderItem={({ item, index }) => (
              <Image style={styles.imageJumbotron} source={item} key={index} />
            )}
          />
        </View>
        <View style={{ marginTop: 10, marginHorizontal: 10 }}>
          <Text style={styles.HotItemTitle}>Hot Items</Text>
        </View>
        <View style={styles.HotItemLayout}>
          <FlatList
            horizontal
            data={dataSupabase}
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
                      photo: item.imageUrl,
                    })
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
        <View>
          <View style={styles.TitleQuoteLayer}>
            <Text style={styles.TitleQuote}>Some Quote</Text>
          </View>
          <View style={styles.QuoteLayer}>
            <View style={styles.QuoteLayout}>
              <Text style={styles.QuoteText}>{quote.content}</Text>
              <Text style={styles.PersonQuote}> - {quote.author}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.AllItemsTitle}>All Items</Text>
          </View>

          <View style={styles.ProductListLayer}>
            {dataSupabase == undefined ? (
              <AppLoading />
            ) : (
              dataSupabase.map((item) => {
                return (
                  <Pressable
                    key={item.id}
                    onPress={() =>
                      navigation.navigate("Items", {
                        title: item.title,
                        id: item.id,
                        price: item.price,
                        description: item.description,
                      })
                    }
                  >
                    <ProductHomeCard
                      productImage={{ uri: item.imageUrl }}
                      title={item.title}
                      description={item.desConclusion}
                      price={`$${item.price}`}
                    />
                  </Pressable>
                );
              })
            )}
          </View>
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
  navbar: {
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  imageJumbotron: {
    width: windowWidth,
    height: windowHeight / 3.2,
  },
  HotItemTitle: {
    fontFamily: "Josefin-Sans-Bold",
    marginTop: 10,
    fontSize: 18,
    lineHeight: 18,
    color: "#404040",
  },
  HotItemLayout: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  TitleQuoteLayer: {
    alignItems: "center",
    justifyContent: "center",
  },
  TitleQuote: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 16,
    lineHeight: 16,
    marginVertical: 10,
  },
  QuoteLayer: {
    width: windowWidth,
    height: windowHeight / 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D1821",
  },
  QuoteLayout: {
    margin: 40,
  },
  QuoteText: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 14,
    lineHeight: 14,

    color: "#F3F4F8",
  },
  PersonQuote: {
    fontFamily: "Josefin-Sans-Light",
    fontSize: 14,
    lineHeight: 14,
    marginTop: 10,
    color: "#F3F4F8",
  },
  ProductListLayer: {
    marginTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 100,
  },
  AllItemsTitle: {
    fontFamily: "Josefin-Sans-Bold",
    marginTop: 20,
    fontSize: 18,
    lineHeight: 18,
    color: "#404040",
  },
});
