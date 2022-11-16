import {
  ImageBackground,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import SettingBtn from "../../components/assetBtns/SettingBtn";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/jumtron/ProfileCover.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.imageText}>Jane E. Bola</Text>
      </ImageBackground>
      <View style={styles.AccountLabelLayout}>
        <Text style={styles.AccountLabel}>Account</Text>
      </View>
      <SettingBtn title="Edit Profile" onPress={() => console.log("1")} />
      <SettingBtn title="Order" onPress={() => console.log("2")} />
      <SettingBtn title="Address" onPress={() => console.log("3")} />
      <SettingBtn title="Log Out" onPress={() => console.log("4")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#fff",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 140,
  },
  imageText: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 24,
    lineHeight: 24,
    color: "#404040",
  },
  AccountLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 14,
    lineHeight: 14,
    color: "#404040",
  },
  AccountLabelLayout: {
    paddingVertical: 10,
    borderBottomColor: "#C7C7C7",
    borderBottomWidth: 1,
    width: windowWidth,
    alignItems: "center",
  },
});
