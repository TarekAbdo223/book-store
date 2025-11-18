import axios from "axios";
import { Alert } from "react-native";

const endpointURL = "https://69186e1521a96359487003a9.mockapi.io/books";

const getListOfBooks = async () => {
  const response = await axios.get(endpointURL);
  console.log(JSON.stringify(response.data, null, 3));
};

const getBookByID = async (id: string) => {
  try {
    const response = await axios.get(`${endpointURL}/${id}`);
    console.log(JSON.stringify(response.data, null, 3));
  } catch (error) {
    console.log(error);
  }
};

const deleteBookByID = async (id: string) => {
  try {
    const response = await axios.delete(`${endpointURL}/${id}`);
    console.log(JSON.stringify(response.data, null, 3));
    Alert.alert("Book deleted successfully");
  } catch (error) {
    console.log(error);
  }
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

const updateBookByID = async (id: string, book: any) => {
  try {
    const response = await axios.put(`${endpointURL}/${id}`, book);
    Alert.alert("Book updated successfully");
    getListOfBooks();
  } catch (error) {
    console.log(error);
  }
};
