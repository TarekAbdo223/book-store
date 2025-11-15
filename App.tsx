import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [books, setBooks] = useState<any[]>([]);

  const endpointURL = "https://69186e1521a96359487003a9.mockapi.io/books";

  const getListOfBooks = async () => {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null, 3));
    setBooks(response.data);
  };

  const postBookDetails = async () => {
    try {
      const response = await axios.post(endpointURL, {
        name_of_author: "tarek abdo",
        price_of_book: 100,
        cover: "https://via.placeholder.com/150",
        email_of_seller: "tarekabdo@gmail.com",
      });
      Alert.alert("Book posted successfully");
    } catch (error) {
      Alert.alert("Error posting book");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={getListOfBooks}>
        Open up App.tsx to start working on your app!
      </Text>
      <Button title="Post Book" onPress={postBookDetails} />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name_of_author}</Text>
              <Text>{item.price_of_book}</Text>
              <Image source={{ uri: item.cover }} style={styles.image} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});
