import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import ArrowLeftIcon from "../assets/icons/arrowLeft.svg";
import ArrowRightIcon from "../assets/icons/arrowRight.svg";

export default function ChoosingSize(props) {
  const [input, setInput] = useState(props.inputValue);

  return (
    <View>
      <View style={props.styleContainer}>
        <Text style={props.styleFont}>{props.title}</Text>
        <View style={[styles.numberPickLayout, props.numberPickLayout]}>
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
  numberPickLayout: {
    flexDirection: "row",
  },
});
