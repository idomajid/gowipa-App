import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;

export default function AddressCard() {
  return (
    <View style={styles.container}>
      <View style={{ margin: 30 }}>
        <Text style={styles.addressTitle}>Home</Text>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.addressText}>Angelina Wulandari</Text>
          <Text style={styles.addressText}>JI. Gema Husana No.2</Text>
          <Text style={styles.addressText}>RT.01/01 Kelurahan Air Hangat</Text>
          <Text style={styles.addressText}>Jambi</Text>
          <Text style={styles.addressText}>Kabupaten Kerinci</Text>
          <Text style={styles.addressText}>Air Hangat</Text>
          <Text style={styles.addressText}>37161</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable onPress={() => console.log("worked Add to cart")}>
            <View style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Address</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => console.log("worked Add to cart")}>
            <View style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete Address</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 60,
    borderWidth: 0.5,
    borderRadius: 2,
  },
  addressText: {
    marginVertical: 3,
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 12,
    lineHeight: 12,
    color: "#404040",
  },
  addressTitle: {
    marginVertical: 3,
    fontFamily: "Josefin-Sans-Bold",
    fontSize: 14,
    lineHeight: 14,
    color: "#000",
  },
  editButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 10,
  },
  editButtonText: {
    color: "#000",
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 12,
    lineHeight: 12,
  },
  deleteButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E71D36",
    marginTop: 10,
  },
  deleteButtonText: {
    color: "#E71D36",
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 12,
    lineHeight: 12,
  },
});
