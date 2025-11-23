import {
  Alert,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { deleteBookByID, getListOfBooks } from "../api/http";
import AddButton from "../components/AddButton";
import AddBookScreen from "./AddBookScreen";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [modalVisible, setModalVisisble] = useState(false);

  const getListOfBooksFN = () => {
    getListOfBooks({
      onSuccess: (books) => setBooks(books),
      onError: (error) => Alert.alert(error),
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
      onError: (error) => console.log(error),
    });
  }

  return (
    <SafeAreaView>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard item={item} onDelete={() => handleDelete(item.id)} />
        )}
      />
      <AddButton onPress={() => setModalVisisble(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen onPress={() => setModalVisisble(false)} />
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
