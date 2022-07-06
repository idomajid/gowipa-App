import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import ProductCard from "../components/productCard";

import DummyData from "../data/dummy-data-hotItem";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen({ navigation }) {
  const [images, setImages] = useState([
    require("../assets/images/jumtron/jumbotron.jpg"),
    require("../assets/images/jumtron/jumbotron.jpg"),
    require("../assets/images/jumtron/jumbotron.jpg"),
  ]);
  console.log(DummyData);
  return (
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
      <View style={{ margin: 10, flexDirection: "row" }}>
        <FlatList
          data={DummyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            console.log(item.photo);
            return (
              <ProductCard
                productImage={item.photo}
                title={item.title}
                description={item.desConclution}
                price={`$${item.price}`}
              />
            );
          }}
        />
        {/* <ProductCard
          imageProduct={require("../assets/images/sportApp/whiteDomPinkShoes.jpg")}
          title="Nike"
          description="Nike Phoenix has a kobe autograph"
          price={`$${600}`}
        />
        <ProductCard
          imageProduct={require("../assets/images/sportApp/redVans.jpg")}
          title="Nike"
          description="Nike Phoenix has a kobe autograph"
          price={`$${600}`}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    width: windowWidth,
    height: windowHeight - 60,
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
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 14,
    lineHeight: 14,
    color: "#404040",
  },
});
