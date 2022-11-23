import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function AddNewAdress({ navigation }) {
  const [preferenceName, SetPreferenceName] = useState("");
  const [name, setName] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.textInputLayout}>
        <Text style={styles.inputLabel}>Preference Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={SetPreferenceName}
          value={preferenceName}
          placeholder="Home"
        />
      </View>
      <View style={styles.textInputLayout}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Full Name"
        />
      </View>
      <View style={styles.textInputLayout}>
        <Text style={styles.inputLabel}>Address 1</Text>
        <TextInput
          style={styles.input}
          onChangeText={addressOne}
          value={setAddressOne}
          placeholder="Address 1"
        />
      </View>
      <View style={styles.textInputLayout}>
        <Text style={styles.inputLabel}>Address 2</Text>
        <TextInput
          style={styles.input}
          onChangeText={addressTwo}
          value={setAddressTwo}
          placeholder="Address 2"
        />
      </View>
      <View style={styles.textInputLayout}>
        <Text style={styles.inputLabel}>Province</Text>
        <TextInput
          style={styles.input}
          onChangeText={province}
          value={setProvince}
          placeholder="Province"
        />
      </View>
      <View style={styles.textInputLayout}>
        <Text style={styles.inputLabel}>City</Text>
        <TextInput
          style={styles.input}
          onChangeText={city}
          value={setCity}
          placeholder="City"
        />
      </View>
      <View style={styles.textInputLayout}>
        <Text style={styles.inputLabel}>District</Text>
        <TextInput
          style={styles.input}
          onChangeText={district}
          value={setDistrict}
          placeholder="District"
        />
      </View>
      <View style={styles.textInputLayout}>
        <Text style={styles.inputLabel}>Postal Code</Text>
        <TextInput
          style={styles.input}
          onChangeText={postalCode}
          value={setPostalCode}
          placeholder="Postal Code"
          keyboardType="numeric"
          maxLength={10}
        />
      </View>
      <Pressable onPress={() => navigation.navigate("addressFilledScreen")}>
        <View style={[styles.editProfileButton, styles.mainButton]}>
          <Text style={[styles.buttonTextLabel, styles.buttonLabelColor]}>
            Add new Adress
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

// navigation.navigate("addNewAdressScreen")

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 80,
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
  },
  input: {
    marginTop: 6,
    height: 20,
    width: windowWidth - 60,
    borderBottomWidth: 1,
  },
  inputLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 14,
    lineHeight: 14,
    color: "#404040",
  },
  textInputLayout: { paddingBottom: 14 },
  mainButton: {
    marginTop: 20,
    width: windowWidth - 60,
    paddingVertical: 18,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },

  editProfileButton: {
    backgroundColor: "#0D1821",
  },

  buttonTextLabel: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 18,
    lineHeight: 18,
  },

  buttonLabelColor: {
    color: "#ffff",
  },
});
