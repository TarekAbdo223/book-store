import { Alert, FlatList, Modal, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { deleteBookByID, getListOfBooks } from "../api/http";
import AddButton from "../components/AddButton";
import AddBookScreen from "./AddBookScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [modalVisible, setModalVisisble] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  function handleEditItem(item) {
    console.log(item);
    setModalVisisble(true);
    setSelectedItem(item);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard
            item={item}
            onDelete={() => handleDelete(item.id)}
            onEdit={() => handleEditItem(item)}
          />
        )}
      />
      <AddButton
        onPress={() => {
          setModalVisisble(true);
          setSelectedItem(null);
        }}
      />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen
          onPress={() => setModalVisisble(false)}
          onRefetchData={() => getListOfBooksFN()}
          selectedItem={selectedItem}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
