import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import GradientText from "../../components/gradientText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function SearchScreen({ navigation, route }) {
  const [images, setImages] = useState([
    require("../../assets/images/jumtron/jumbotron.jpg"),
    require("../../assets/images/jumtron/jumbotron_2.jpg"),
    require("../../assets/images/jumtron/jumbotron.jpg"),
  ]);
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"

  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
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
                {route.params?.price}
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
          <View style={{ margin: 10 }}>
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
                style={{ lineHeight: 21, marginTop: 10 }}
              >
                {textShown ? "Read less..." : "Read more..."}
              </Text>
            ) : null}

            <View></View>
          </View>
        </View>
        {/* <View>random stuff </View> */}
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
    marginHorizontal: 100,
  },
  descriptionText: {
    fontFamily: "Josefin-Sans-Light",
    fontSize: 14,
    lineHeight: 21,
    color: "#404040",
  },
});
