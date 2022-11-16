import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import SignRightIcon from "../../assets/icons/arrowRight.svg";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SettingBtn({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{title}</Text>

          <SignRightIcon width={25} height={25} fill="black" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#C7C7C7",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    width: windowWidth,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 16,
    lineHeight: 16,
    color: "#404040",
  },
});
