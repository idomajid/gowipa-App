import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import SettingBtn from "../../components/assetBtns/SettingBtn";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
export default function OrderItemScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.AccountLabelLayout}></View>
      <SettingBtn
        title="On Process"
        onPress={() => navigation.navigate("onProcessScreen")}
      />
      <SettingBtn
        title="Delivered"
        onPress={() => navigation.navigate("deliveredScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  TabContainer: {
    width: windowWidth - 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TabButton: {
    width: windowWidth / 3,
    height: 40,
    borderBottomWidth: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },

  TabText: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 18,
    lineHeight: 18,
  },
  AccountLabelLayout: {
    paddingVertical: 5,
    borderBottomColor: "#C7C7C7",
    borderBottomWidth: 1,
    width: windowWidth,
    alignItems: "center",
  },
});
