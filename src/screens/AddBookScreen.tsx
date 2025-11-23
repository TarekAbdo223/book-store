import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddBookScreen = ({ onPress }) => {
  return (
    <SafeAreaView>
      <AntDesign
        name="close-circle"
        size={24}
        color="#E81D1D"
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({});
