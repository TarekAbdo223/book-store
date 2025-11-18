import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BookCard from "../components/BookCard";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <BookCard />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
