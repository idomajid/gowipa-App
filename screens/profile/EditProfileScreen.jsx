import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const windowWidth = Dimensions.get("window").width;

export default function EditProfileScreen() {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputLayout}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Username"
        />
      </View>
      <View style={styles.inputLayout}>
        <Text style={styles.inputLabel}>Full name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Full name"
        />
      </View>
      <View style={styles.inputLayout}>
        <Text style={styles.inputLabel}>Phone number</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Phone number"
        />
      </View>
      <View style={styles.inputLayout}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email"
        />
      </View>
      {/* <View style={styles.inputLayout}>
        <DateTimePicker value={new Date()} />
      </View> */}
      <Pressable onPress={() => console.log("worked Perfectly")}>
        <View style={[styles.editProfileButton, styles.mainButton]}>
          <Text style={[styles.buttonTextLabel, styles.buttonLabelColor]}>
            Edit Profile
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 14,
    lineHeight: 14,
    color: "#404040",
  },
  input: {
    height: 40,
    width: windowWidth - 60,
    borderBottomWidth: 1,
  },
  inputLayout: {
    marginHorizontal: 30,
    marginTop: 30,
  },

  mainButton: {
    marginTop: 30,
    width: windowWidth - 60,
    paddingVertical: 18,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },

  editProfileButton: {
    backgroundColor: "#fff",
    borderColor: "#404040",
  },

  buttonTextLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 18,
    lineHeight: 18,
  },

  buttonLabelColor: {
    color: "#404040",
  },
});
