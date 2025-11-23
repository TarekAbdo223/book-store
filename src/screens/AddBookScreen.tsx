import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { use, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppTextInput from "../components/AppTextInput";

const AddBookScreen = ({ onPress }) => {
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();

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
        <AppTextInput
          placeholder="Book Name"
          onChangeText={setName}
          value={name}
        />
        <AppTextInput
          placeholder="Author Name"
          value={author}
          onChange={setAuthor}
        />
        <AppTextInput
          placeholder="Cover Image"
          value={image}
          onChange={setImage}
        />
        <AppTextInput
          placeholder="Book Price"
          value={price}
          onChange={setPrice}
          keyboardType={"numeric"}
        />
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
