import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default function CostumAlertCard(props) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onRequestClose}
      >
        {props.children}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
});
