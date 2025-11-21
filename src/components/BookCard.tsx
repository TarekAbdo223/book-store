import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const BookCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/seed/YPxYoyu/1497/2201" }}
        style={styles.coverImage}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.bookName}>soul</Text>
        <Text style={styles.authorName}>Olivia</Text>
        <Text style={styles.bookPrice}>$24.00</Text>
      </View>

      <View style={styles.deletEditContainer}>
        <TouchableOpacity style={styles.circleButton}>
          <AntDesign name="delete" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton}>
          <FontAwesome name="edit" size={20} color="#25a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  coverImage: {
    height: 120,
    width: "25%",
    borderRadius: 8,
    resizeMode: "stretch",
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  bookName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  authorName: {
    fontSize: 14,
    color: "#888",
    marginVertical: 3,
  },
  bookPrice: {
    fontSize: 16,
    fontWeight: "black",
    color: "#25a",
  },
  deletEditContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginStart: 10,
  },
});
