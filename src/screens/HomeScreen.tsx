import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { getListOfBooks } from "../api/http";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getListOfBooks({
      onSuccess: (books) => setBooks(books),
      onError: (error) => Alert.alert(error),
    });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
