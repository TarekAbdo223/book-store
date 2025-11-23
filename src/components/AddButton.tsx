import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="plus" size={50} color="#fff" onPress={onPress} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 80,
    width: 80,
    backgroundColor: "#1273DE",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
