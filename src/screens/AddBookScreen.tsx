import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppTextInput from "../components/AppTextInput";

const AddBookScreen = ({ onPress }) => {
  return (
    <SafeAreaView>
      <AntDesign
        name="close-circle"
        size={24}
        color="#E81D1D"
        onPress={onPress}
      />
      <View style={styles.body}>
        <Text style={styles.title}>Book Details</Text>
        <AppTextInput placeholder="Book Name" />
        <AppTextInput placeholder="Author Name" />
        <AppTextInput placeholder="Cover Image" />
        <AppTextInput placeholder="Book Price" />
      </View>
    </SafeAreaView>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
});
