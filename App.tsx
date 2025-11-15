import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const endpointURL = "https://69186e1521a96359487003a9.mockapi.io/books";

  const getListOfBooks = async () => {
    const response = await axios.get(endpointURL);
    console.log(response.data);
  };

  return (
    <View style={styles.container}>
      <Text onPress={getListOfBooks}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
