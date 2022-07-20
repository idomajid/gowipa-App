import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import ArrowLeftIcon from "../assets/icons/arrowLeft.svg";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";

export default function ChoosingSize(props) {
  const [input, setInput] = useState(1);

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={[props.styleFont, styles.title]}>{props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            disabled={input == 1 ? true : false}
            style={styles.arrow}
            onPress={() => setInput(input - 1)}
          >
            <ArrowLeftIcon width={25} height={25} fill={"#404040"} />
          </Pressable>

          <TextInput
            style={styles.input}
            value={input.toString()}
            onChangeText={() => setInput(input)}
            keyboardType="numeric"
            textAlign="center"
          />
          <Pressable
            disabled={input == 100 ? true : false}
            i
            style={styles.arrow}
            onPress={() => setInput(input + 1)}
          >
            <ArrowRightIcon width={25} height={25} fill={"#404040"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    borderWidth: 0.5,
    borderRadius: 2,
    width: 25,
    height: 30,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    borderRadius: 2,
    width: 28,
    height: 30,
    padding: 4,
  },
  title: {
    fontFamily: "Josefin-Sans-Regular",
    fontSize: 16,
    lineHeight: 21,
  },
});
