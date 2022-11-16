import { ImageBackground, View, Text, StyleSheet } from "react-native";
import SettingBtn from "../../components/assetBtns/SettingBtn";
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/jumtron/ProfileCover.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.imageText}>Jane Miss Doe</Text>
      </ImageBackground>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.AccountLabel}>Account</Text>
      </View>
      <SettingBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
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
});
