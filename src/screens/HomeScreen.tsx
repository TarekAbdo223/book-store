import {
  Alert,
  FlatList,
  Modal,
  SafeAreaView,
  SafeAreaViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { deleteBookByID, getListOfBooks } from "../api/http";
import AddButton from "../components/AddButton";
import AddBookScreen from "./AddBookScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [modalVisible, setModalVisisble] = useState(false);

  const getListOfBooksFN = () => {
    getListOfBooks({
      onSuccess: (books) => setBooks(books),
      onError: (error) => {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to load books";
        Alert.alert("Error", errorMessage);
      },
    });
  };

  useEffect(() => {
    getListOfBooksFN();
  }, []);

  function handleDelete(id) {
    console.log(id);
    deleteBookByID({
      id: id,
      onSuccess: () => getListOfBooksFN(),
      onError: (error) => {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to delete book";
        console.log("Error:", errorMessage);
        Alert.alert("Error", errorMessage);
      },
    });
  }

  return (
    <SafeAreaProvider>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard item={item} onDelete={() => handleDelete(item.id)} />
        )}
      />
      <AddButton onPress={() => setModalVisisble(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen
          onPress={() => setModalVisisble(false)}
          onRefetchData={() => getListOfBooksFN()}
        />
      </Modal>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
