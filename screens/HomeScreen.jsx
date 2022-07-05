import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Carousel from "react-native-reanimated-carousel";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen({ navigation }) {
  const [images, setImages] = useState([
    require("../assets/images/jumtron/jumbotron.jpg"),
    require("../assets/images/jumtron/jumbotron.jpg"),
    require("../assets/images/jumtron/jumbotron.jpg"),
  ]);

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
});
