import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import React, { use, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { postBookDetails } from "../api/http";

const AddBookScreen = ({ onPress, onRefetchData }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const createBook = () => {
    postBookDetails({
      body: {
        name_of_author: author,
        price_of_book: price,
        book_title: name,
        cover: image,
      },
      onSuccess: () => {
        onPress(), onRefetchData();
      },
      onError: (err) => console.log(err),
    });
  };

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
          onChangeText={setAuthor}
        />
        <AppTextInput
          placeholder="Cover Image"
          value={image}
          onChangeText={setImage}
        />
        <AppTextInput
          placeholder="Book Price"
          value={price}
          onChangeText={setPrice}
          keyboardType={"numeric"}
        />
        <AppButton onPress={createBook} />
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
